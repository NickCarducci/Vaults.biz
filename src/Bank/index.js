import React from "react";
import firebase from ".././init-firebase";
import {
  Elements,
  ElementsConsumer,
  PaymentElement
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import {
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  //
  PhoneAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  sendEmailVerification,
  RecaptchaVerifier
} from "firebase/auth";
import STRIPE_ADDRESS from "./STRIPE_ADDRESS";
import { countries, states } from "./countries";
import { specialFormatting, standardCatch } from "../Sudo";

const firestore = getFirestore(firebase);
const stripePromise = loadStripe("pk_live_QbdOMSMchlB2Bw8JeKVFAlWp"); //pk
class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payoutType: "setup",
      mcc: "category",
      billing_details: {
        city: "",
        line1: "",
        line2: "",
        state: "",
        postal_code: "",
        country: "US"
      },
      number: "4242424242424242",
      expiry: "12/34",
      cvc: "000",
      account_holder_type: "individual",
      account_number: "000123456789",
      routing_number: "110000000",
      savings: "checking",
      first: "",
      middle: "",
      last: "",
      list: []
    };
    this.phoneAuthProvider = new PhoneAuthProvider(getAuth());
  }
  componentDidUpdate = async (prevProps) => {
    if (
      this.props.pathname !== prevProps.pathname ||
      this.state.stripe !== this.state.lastStripe
    ) {
      this.setState({ lastStripe: this.state.stripe });
      this.findURL();
    }
  };
  componentDidMount = () => {
    this.findURL();
  };
  findURL = async () => {
    if (this.props.auth === undefined) return null;
    const url = new URL(window.location.href);
    const stripeId = url.searchParams.get("stripe");
    const mcc = url.searchParams.get("mcc");
    const redo = url.searchParams.get("redo");
    //console.log(url);
    if (stripeId && mcc) {
      if (!redo) {
        //return null;
        //customer = `customer${digits}Id`,
        //cardholder = `cardholder${digits}Id`;
        //kv[customer] = store.customerId;
        //kv[cardholder] = store.cardholderId;
        //kv.invoice_prefix = store.invoice_prefix;
        //return kv;

        //RESSEND(res, { statusCode, statusText, error: "before getDoc" });
        getDoc(
          doc(firestore, "userDatas", this.props.auth.uid)
        ) /*.then((d) => {return { keyvalue, exists: d.exists() }; })*/
          .then(
            //{ keyvalue, exists }
            (d) => {
              (d.exists() ? updateDoc : setDoc)(
                doc(firestore, "userDatas", this.props.auth.uid),
                {
                  [`stripeLink`]: deleteField()
                }
              ) //RESSEND(res, { statusText: "successful accountLink"});
                .then(() => {
                  updateDoc(doc(firestore, "users", this.props.auth.uid), {
                    [`stripeId`]: stripeId
                  });
                  this.props.navigate("/");
                });
            }
          );
      } else {
        getDoc(
          doc(firestore, "userDatas", this.props.auth.uid)
        ) /*.then((d) => {return { keyvalue, exists: d.exists() }; })*/
          .then(
            //{ keyvalue, exists }
            (d) => {
              (d.exists() ? updateDoc : setDoc)(
                doc(firestore, "userDatas", this.props.auth.uid),
                {
                  [`stripeLink`]: deleteField()
                }
              ) //RESSEND(res, { statusText: "successful accountLink"});
                .then(async () => {
                  updateDoc(doc(firestore, "users", this.props.auth.uid), {
                    [`stripeId`]: deleteField()
                  });
                  this.deleteThese([stripeId]);
                  this.props.navigate("/");
                });
            }
          );
      }
    }
    const clientSec = new URLSearchParams(window.location.search).get(
      "setup_intent_client_secret"
    );
    if (clientSec) {
      console.log("clientSec", clientSec);
      this.setState({
        payoutType: "Bank"
      });
      this.setState({ clientSec });
      await fetch("https://king-prawn-app-j2f2s.ondigitalocean.app/confirm", {
        method: "POST",
        headers: {
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": ["Origin", "Content-Type"], //allow referer
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify({
          seti: clientSec
        })
      }) //stripe account, not plaid access token payout yet
        .then(async (res) => await res.json())
        .then(async (result) => {
          if (result.status) return console.log(result);
          if (result.error) return console.log(result);
          if (!result.setupIntent)
            return console.log("dev error (Cash)", result);
          console.log(result);
        })
        .catch(standardCatch);
    }
    // Retrieve the SetupIntent
    clientSec &&
      this.state.stripe &&
      this.state.stripe
        .retrieveSetupIntent(clientSec)
        .then(async ({ setupIntent }) => {
          // Inspect the SetupIntent `status` to indicate the status of the payment
          // to your customer.
          //
          // Some payment methods will [immediately succeed or fail][0] upon
          // confirmation, while others will first enter a `processing` state.
          //
          // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
          switch (setupIntent.status) {
            default:
              break;
            case "succeeded":
              console.log(
                "Success! Your payment method has been saved.",
                setupIntent
              );

              this.props.navigate("/");

              this.setState({
                payoutType: "setup"
                //confirmBank: "bank"
              });
              await fetch(
                "https://king-prawn-app-j2f2s.ondigitalocean.app/attach",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "Application/JSON",
                    "Access-Control-Request-Method": "POST",
                    "Access-Control-Request-Headers": ["Origin", "Content-Type"] //allow referer
                  },
                  body: JSON.stringify({
                    payment_method: setupIntent.payment_method,
                    customerId: this.props.user.customerId
                  })
                }
              )
                .then(async (res) => await res.json())
                .then(async (result) => {
                  if (result.status) return console.log(result);
                  if (result.error) return console.log(result);
                  if (!result.paymentMethod)
                    return console.log("dev error (Cash)", result);

                  updateDoc(doc(firestore, "userDatas", this.props.auth.uid), {
                    paymentMethods: arrayUnion(setupIntent.payment_method)
                  });
                  window.location.reload();
                })
                .catch(standardCatch);
              break;

            case "processing":
              console.log(
                "Processing payment details. We'll update you when processing is complete."
              );
              break;

            case "requires_payment_method":
              // Redirect your user back to your payment page to attempt collecting
              // payment again
              console.log(
                "Failed to process payment details. Please try another payment method."
              );
              break;
          }
          this.props.navigate("/");
        });
  };
  addEmail = async (User) =>
    await updateEmail(User, this.props.openEmail)
      .then(async () => {
        const callbackUser = async (email) => {
          window.alert(
            "email updated to " +
              email +
              ". Click the link (and login again) to confirm it works."
          );
          //if (!this.state.humanCodeCredential) {
          console.log(
            "added email " + email + ". Able to verify by link in email."
          ); //upsert (update, assert/set)
          //return this.FIREBASE_email.current.click(); //this.handleUpdateEmail(email);
          //await emailMulti(email); //confirm
          this.props.logoutofapp();
          //var gotAuth = getAuth().currentUser;
          //Cannot destructure property 'auth' of 'user' as it is null.
        };
        return await sendEmailVerification(User)
          .then(callbackUser(this.props.openEmail))
          .catch((err) => console.log("sendEmailVerification ", err.message));
      }) //({ user } = (re) => re) =>
      .catch((err) => console.log(err.message));

  promptCode = async () =>
    await this.phoneAuthProvider
      .verifyPhoneNumber(this.props.auth.phoneNumber, window.recaptchaVerifier) //recaptchaWidgetId
      .then(async (verificationId) => {
        const credential = PhoneAuthProvider.credential(
          verificationId,
          window.prompt("Enter your code")
        );
        console.log("id, credential: ", verificationId, credential);
        //return emailMulti(email); //confirm getAuth().currentUser
        //getAuth().currentUser.getIdToken is not a function
        var User = this.props.auth;
        if (
          getAuth().currentUser &&
          getAuth().currentUser.getIdToken &&
          getAuth().currentUser.getIdToken instanceof Function
        ) {
          User = getAuth().currentUser;
        } //else User.getIdToken = () => { return; };
        console.log("User ", User);

        return await reauthenticateWithCredential(
          User,
          credential //this.emailAuthProvider.credentialFromResult(res)
        ).then(async () => await this.addEmail(User));
      })
      .catch(standardCatch);
  responseCallback = () => {
    console.log("multi");
    this.promptCode();
    //window.recaptchaId=""
  };
  mountRecaptcha = () => {
    const loggedIn = this.props.auth !== undefined;
    window.recaptchaVerifier = new RecaptchaVerifier(
      this.FIREBASE_PHONE_recaptcha.current,
      {
        size: "normal", //callback:()=>true,getResponse : await render()
        callback: (res) => {
          const title = loggedIn ? "multi-" : "main ";
          console.log(`${title}authentication recaptcha response: `, res);
          const recaptchaResponse = window.grecaptcha.getResponse(
            window.recaptchaId
          );
          console.log("verified RecaptchaVerifier: ", recaptchaResponse);
          this.responseCallback();
          return res;
        },
        "expired-callback": (err) => {
          //window.recaptchaVerifier.clear();
          window.recaptchaId = "";
          loggedIn &&
            this.setState({
              sentCode: false
            });
          console.log(err.message);
          return err;
        }
      },
      getAuth()
    );
    let script = require("scriptjs");

    !this.isMountCanceled &&
      script("https://www.google.com/recaptcha/api.js", "explicit", () =>
        this.setState({ loadedRecaptcha: true }, async () => {
          if (!this.isMountCanceled)
            await window.recaptchaVerifier
              .render()
              .then((id) => {
                this.setState({ recaptchaId: id });
              }) //onload=onloadCallback&render=explicit
              .catch(standardCatch);
        })
      );
  };
  mountRecaptcha = () => {
    console.log("mount recaptcha multi");
    !this.isMountCanceled &&
      window.recaptchaVerifier
        .render()
        .then((id) => (window.recaptchaId = id)) //onload=onloadCallback&render=explicit
        .catch(standardCatch);
  };
  componentWillUnmount = () => {
    this.isMountCanceled = true;
  };
  deleteThese = async (deleteThese = [], sinkThese = []) => {
    await fetch("https://king-prawn-app-j2f2s.ondigitalocean.app/delete", {
      method: "POST",
      headers: {
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": ["Origin", "Content-Type"], //allow referer
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({
        sinkThese,
        deleteThese
      })
    }) //stripe account, not plaid access token payout yet
      .then(async (res) => await res.json())
      .then(async (result) => {
        if (result.status) return console.log(result);
        if (result.error) return console.log(result);
        if (!result.data) return console.log("dev error (Cash)", result);
        console.log(result.data);
      })
      .catch(standardCatch);
  };
  render() {
    const paymentItems = this.state;
    const { user } = this.props;
    const textu = (e, name, exp) => {
      const value = e.target.value;
      this.setState({
        [name]:
          value +
          (exp ? value.substring(0, 2) + "/" + value.substring(2, 4) : "")
      });
    };
    const trust = {
      mcc: "7399",
      account: "Business",
      description: "Payday loans."
    };
    const purchase = async (x, custom) => {
      console.log("purchase");
      //customerResult,
      /*var stripeAccount = "stripe" + trust.account;
        const { first, last, auth } = this.props,
          custom = null; //standard, or express
        if (this.props.user[stripeAccount]) {
          const done = JSON.stringify({
            [trust.account]: this.props.user[stripeAccount]
          }); //Why do synchronous intrinsic JSON functions need a scope declaration?
          return r(done);
        }*/
      const payouts = {
          schedule: {
            interval: "manual" //400 invalid_request_error
            //Cannot provide a delay_days when interval is manual. delay_days is always the minimum for manual payouts.
            //delay_days: "minimum" //"doesn't apply", "2 day rolling basis (US)"
          },
          statement_descriptor: "Thumbprint Events"
        },
        pad = (x) => (String(x).length === 1 ? "0" + String(x) : x),
        today = new Date(),
        now =
          today.getUTCFullYear() +
          "-" +
          pad(today.getUTCMonth()) +
          "-" +
          pad(today.getUTCDate()),
        ip = "100.35.136.125", // IPv4,
        user_agent = this.state.user_agent,
        date = String(Math.floor(new Date(now).getTime() / 1000)); //new Date(now).getTime() / 1000, // - 14400, //
      // return console.log("name", name);
      const first =
          paymentItems.first !== ""
            ? paymentItems.first
            : user.first
            ? user.first
            : this.state.first,
        last =
          paymentItems.last !== ""
            ? paymentItems.last
            : user.last
            ? user.last
            : this.state.last,
        name = first + " " + last,
        companyName = `${x.account} ` + name,
        ownership_declaration = {
          date,
          ip, //IPv4
          user_agent
        };
      var newAccount = {
        //tos_shown_and_accepted: true,
        //Are express, standard or custom Stripe Connect account addresses tokenizable?
        //How are React developers supposed to create tokenized Stripe Standard accounts if the tos_shown_and_accepted field is required?

        //delete this in firestore + stripe dashboard,
        //to retry business_profile.{} (test mode; any "company" account type)

        business_profile: {
          mcc: trust.mcc, //"7276", //"8931", value === "POI Funding Transactions"
          name: companyName,
          //Stripe "custom and express" only
          product_description: trust.description,
          support_email: this.props.auth.email,
          support_phone: this.props.auth.phoneNumber,
          support_url: `https://wavv.art/${this.props.user.username}`,
          url: `https://wavv.art/${this.props.user.username}`
        }, //support, mcc, url
        settings: {
          /*payouts_enabled: true,
            controller: {
              type: "application",
              is_controller: true
            },*/ //https://stripe.com/docs/connect/platform-controls-for-standard-accounts
          //why are the above on the doc-spec account object but not "create" iteration
          /*card_issuing: {
            tos_acceptance: {
              user_agent,
              date,
              ip
            }
          },*/ //"custom"
          payouts,
          //https://stripe.com/docs/connect/statement-descriptors
          payments: {
            statement_descriptor: x.mcc + " " + name.substring(0, 17) //"Vau.money Decanter" //PRE-TAX TRUSTEE DECANTER
          }
        },
        /*capabilities: {
          card_payments: {
            requested: true
          },
          transfers: {
            requested: true
          },
          card_issuing: {
            requested: true
          },
          us_bank_account_ach_payments: {
            requested: true
          }
        },*/
        business_type: "company", //email required?
        default_currency: "usd"
        /*tos_acceptance: {
          ...ownership_declaration,
          service_agreement: "full"
        }*/
      };
      //var custom = true;
      if (!custom) {
        delete newAccount.tos_acceptance;
        delete newAccount.capabilities; //.card_issuing;
        //delete newAccount.capabilities.us_bank_account_ach_payments;
        delete newAccount.settings.card_issuing;
      }
      //accountResult = await stripe.createToken("account", newAccount);
      //https://stripe.com/docs/api/persons/create
      //return console.log(first, last);

      await fetch("https://king-prawn-app-j2f2s.ondigitalocean.app/purchase", {
        method: "POST",
        headers: {
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": ["Origin", "Content-Type"], //allow referer
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify({
          type: custom ? "custom" : "standard", //standard
          country: "US",
          uid: this.props.auth.uid,
          newAccount: newAccount,
          first,
          last
        })
      }) //stripe account, not plaid access token payout yet
        .then(async (res) => await res.json())
        .then(async (result) => {
          if (result.status) return console.log(result);
          if (result.error) return console.log(result);
          if (!result.account) return console.log("dev error (Cash)", result);
          //If there is not (accountLink), the new stripe (account.id) stripeId is caught here

          const { address: addr } = this.state,
            address = Object.keys(paymentItems.billing_details).every(
              (key) =>
                paymentItems.billing_details[key] !== "" ||
                ["line2"].includes(key)
            )
              ? paymentItems.billing_details
              : addr;
          //if (!this.props.user.stripeId) {
          const personResult = await this.state.stripe.createToken("person", {
              relationship: { owner: true },
              first_name: first,

              last_name: last,
              email: this.props.auth.email,
              phone: this.props.auth.phoneNumber,
              address
            }),
            companyResult = await this.state.stripe.createToken("account", {
              company: {
                address,
                name: companyName, //this.state.billing_details.name,
                structure: "unincorporated_association", //trust // "sole_proprietorship",
                phone: this.props.auth.phoneNumber, //owners are provided after the account.person
                ownership_declaration,
                owners_provided: true
              }
            });

          await fetch(
            "https://king-prawn-app-j2f2s.ondigitalocean.app/beneficiary",
            {
              method: "POST",
              headers: {
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": ["Origin", "Content-Type"], //allow referer
                "Content-Type": "Application/JSON"
              },
              body: JSON.stringify({
                type: custom ? "custom" : "standard", //standard
                mcc: trust.mcc,
                accountId: result.account.id,
                person: {
                  account_token: personResult.token.id
                },
                companyAccount: {
                  account_token: companyResult.token.id
                }
              })
            }
          ) //stripe account, not plaid access token payout yet
            .then(async (res) => await res.json())
            .then((result) => {
              if (result.status) return console.log(result);
              if (result.error) return console.log(result);
              if (!result.account)
                return console.log("dev error (Cash)", result);
              var keyvalue = {};

              getDoc(
                doc(firestore, "userDatas", this.props.auth.uid)
              ) /*.then((d) => {return { keyvalue, exists: d.exists() }; })*/
                .then(
                  //{ keyvalue, exists }
                  (d) => {
                    (d.exists() ? updateDoc : setDoc)(
                      doc(firestore, "userDatas", this.props.auth.uid),
                      {
                        address,
                        first,
                        last,
                        /*
                          don't add id by return_url because it might notbe finished
                          [`stripe${shorter(
                            trust.mcc
                          )}Id`]: result.account.id,
                          delete link upon refresh account id search query get("stripeId")
                          */
                        stripeLink: result.account.accountLink.url,
                        personId: result.account.person.id
                      }
                    ) //RESSEND(res, { statusText: "successful accountLink"});
                      .then(() => {
                        //8398
                        //6540
                        const answer = window.confirm(
                          "Want to go along to submit details instead of passing " +
                            "them by for later and just hang out instead?"
                        );
                        if (answer)
                          window.location.href = result.account.accountLink.url;
                      });
                  }
                );
            })
            .catch((x) => standardCatch(x, "/beneficiary"));
        })
        .catch((x) => standardCatch(x, "/purchase"));
    };
    const makeAccount = async () => {
      /**
       * delete accounts and customers, if any
       */
      const deleteThese = [],
        sinkThese = [];
      if (deleteThese.length !== 0 || sinkThese.length !== 0)
        return this.deleteThese(deleteThese, sinkThese);
      if (this.state.selectThisOne !== trust.mcc)
        return this.setState({ selectThisOne: trust.mcc, balance: false });

      const { address: addr } = user; //this address was
      //console.log("o address", this.state.address);
      /**
       * load userDatas private collection from firebase
       */
      if (!addr && !this.state.address) return this.props.getUserInfo();

      /**
       * a stripe account exists
       */
      if (user.stripeId && !user.stripeLink) {
        if (user.customerId) this.deleteThese([], [user.customerId]);
        /*if (user[`customer${shorter(trust.mcc)}Id`]) {
          if (!user[`cardholder${shorter(trust.mcc)}Id`])
          return console.log("dev error (no card)");

          return window.alert(
            "This is your " +
              trust.account +
              " settlement-checking account with us."
          );
          //submitBankCard();
        }*/
        /**
         * prompt cardholder, already custom-cardholder
         */
        /**
         * no issuing? proceed without stripe custom account
         */
        var issuing = false;
        if (issuing) {
          if (!this.state.stripe)
            return this.stripeemailaddress.current.click();
          const payments = true;
          purchase(trust, payments);
        }
        /*if (!addr)
          //no need emailCallback? while user[`stripeId`]&&!user[`stripeLink`]
          return this.setState({ openFormSecure: true });*/
        /**
         * make customer with private userDatas + firebase auth User info
         */
        const { address: addr, first, last } = user,
          address = Object.keys(addr)
            .map((x) => {
              //console.log(remaining, event.value.address[next]);
              return addr[x]
                ? {
                    [x]: addr[x]
                  }
                : "";
            })
            .filter((x) => x !== "")
            .reduce(function (result, current) {
              return Object.assign(result, current);
            }, {}),
          merchantSurnamePrefix =
            user.address.country +
            String(this.state.selectThisOne).substring(0, 2) +
            last.substring(0, 3).toLocaleUpperCase(),
          totalMerchantSurnames = await getDoc(
            doc(
              collection(firestore, "merchantSurnames"),
              merchantSurnamePrefix
            )
          )
            .then((dx) => {
              (dx.exists() ? updateDoc : setDoc)(
                doc(
                  collection(firestore, "merchantSurnames"),
                  merchantSurnamePrefix
                ),
                { count: increment(1) }
              );
              console.log(merchantSurnamePrefix + " set");
              return dx.exists() ? { ...dx.data(), id: dx.id }.count + 1 : 1;
            })
            .catch((err) => {
              console.log("surname update,set, or get failure: ", err.message);
              return err;
            });
        if (
          !totalMerchantSurnames ||
          totalMerchantSurnames.constructor !== Number
        )
          return window.alert(
            "dev error (no document can be made): ",
            totalMerchantSurnames
          );

        //delete edit.authorId;
        //delete edit.mcc;
        return await fetch(
          "https://king-prawn-app-j2f2s.ondigitalocean.app/customer",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON",
              "Access-Control-Request-Method": "POST",
              "Access-Control-Request-Headers": ["Origin", "Content-Type"] //allow referer
            },
            body: JSON.stringify({
              customer: {
                //authorId: this.props.auth.uid,
                //mcc: trust.mcc,
                //last,
                email: this.props.auth.email,
                //address: auth.address,
                name: first + " " + last,
                phone: this.props.auth.phoneNumber,
                shipping: {
                  address,
                  name: first + " " + last,
                  phone: this.props.auth.phoneNumber
                },
                address,
                description: trust.description,
                invoice_prefix: merchantSurnamePrefix + totalMerchantSurnames
                //type: "physical"
              }
            })
          }
        )
          .then(async (res) => await res.json())
          .then(async (result) => {
            getDoc(doc(collection(firestore, "userDatas"), this.props.auth.uid))
              .then((d) => {
                //kv.invoice_prefix = store.invoice_prefix;
                (d.exists() ? updateDoc : setDoc)(
                  doc(collection(firestore, "userDatas"), this.props.auth.uid),
                  {
                    [`customerId`]: result.customer.id
                  }
                )
                  .then(() => {})
                  .catch((e) => standardCatch(e)); //plaidLink payouts account.details_submitted;
              })
              .catch((e) => standardCatch(e)); //plaidLink payouts account.details_submitted;
          });
      }
      if (!this.state.address)
        return window.alert(
          `Add your name and address first to make the ${trust.account} account.`
        );
      if (!this.state.address) return null;
      const answer = window.confirm(
        "Have you read stripe.com/legal/connect-account? Do you consent to everything you can?"
      );
      if (answer) purchase(trust); //this should be first
    };
    const codify = (e, entry) => {
      const output = (e.target.id === "country" ? countries : states).find(
        (x) => x.name.toUpperCase() === entry.toUpperCase()
      );
      return output
        ? output[e.target.id === "country" ? "alpha_2" : "abbreviation"]
        : entry;
    };
    const changePayoutInput = (e) => {
      const entry = e.target.value;
      this.setState({
        submitStripe: false,
        billing_details: {
          ...this.state.billing_details,
          [e.target.id]: !["country", "state"].includes(e.target.id)
            ? specialFormatting(
                entry,
                ["line1", "line2", "postal_code"].includes(e.target.id)
              )
            : codify(e, entry).toUpperCase()
        }
      });
    };
    const inputStyle = {
      border: "0px dotted grey",
      borderRadius: "0px",
      width: "100%"
    };
    const space = " ";
    const isEmail = (email) =>
      email !== "" && email.split("@")[1] && email.split("@")[1].split(".")[1];
    const emailnew = () => {
      if (this.props.auth.email && this.props.auth.emailVerified === false)
        return this.props.getUserInfo();
      if (
        !this.props.auth.email ||
        (!this.props.auth.emailVerified && window.confirm("resend email?"))
      ) {
        if (this.props.auth.email && !this.props.auth.emailVerified)
          return window.alert("check your email: " + this.props.auth.email);
        const email = window.prompt(
          "your decanter email" +
            (this.props.auth.emailVerified
              ? this.props.auth.email
              : ` (you will enter this again while visiting the confirmation path)`)
        );
        if (!email) return null;
        if (isEmail(email)) {
          this.setState({ openEmail: email });
          console.log("email", email);
          if (!this.props.auth.email || this.props.auth.email !== email) {
            console.log("mount recaptcha");
            return this.mountRecaptcha();
          }
          return null;
        } else return window.alert(`${email} is not an email format`);
      }
    };
    return this.props.auth === undefined ? (
      "Vaults.biz industry assessment"
    ) : (
      <div>
        <div
          style={{
            display: "inline-block"
          }}
        >
          <div
            onClick={async () => {
              /*if (!this.state.account)
          return this.setState({ openLinkToStripe: true },()=>{
            
          });*/
              const { email } = this.props.auth;
              console.log(this.props.auth);
              if (
                !email ||
                !this.props.auth.emailVerified ||
                email !== this.state.openEmail
              )
                return emailnew();

              if (this.props.auth.emailAuth) return null; //emailCallback();

              fetchSignInMethodsForEmail(getAuth(), email)
                .then((signInMethods) => {
                  if (
                    signInMethods.indexOf(
                      EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
                    ) > -1
                  )
                    return null; //emailCallback();

                  const canSignLinkEmail = isSignInWithEmailLink(
                    getAuth(),
                    window.location.href
                  ); //console.log("getAuth() a.k.a. auth ", getAuth());
                  console.log(
                    `can${canSignLinkEmail ? "" : "'t"} sign in with ` + email
                  );
                  if (canSignLinkEmail)
                    return signInWithEmailLink(
                      getAuth(),
                      email,
                      window.location.href
                    )
                      .then(() => {
                        window.alert(email + " added!");
                        this.props.navigate("/");
                      })
                      .catch((e) => {
                        console.log(e.message);
                        if (e.message === "INVALID_OOB_CODE") {
                          window.alert(
                            `The ${email}-confirmation link was already either used or is just expired.`
                          );
                          this.props.navigate("/login");
                        }
                      });
                  const cb = (success) =>
                    this.setState({
                      humanCodeCredential: !success
                    }); //reauth then //if (this.state.humanCodeCredential === 2)
                  sendSignInLinkToEmail(getAuth(), this.props.auth.email, {
                    handleCodeInApp: true,
                    url: window.location.href
                  })
                    .then(() => {
                      window.alert("visit your email");
                      cb(true);
                    })
                    .catch(() => cb()); //this would invalidate phone auth?
                  //https://firebase.google.com/docs/auth/flutter/email-link-auth
                })
                .catch(standardCatch);
            }}
            //src={""}
            style={{
              display: "flex",
              position: "absolute",
              right: "0px",
              margin: "10px",
              width: "36px",
              top: "0px",
              border: "1px solid" + (this.props.stripe ? " pink" : " black"),
              height: "36px",
              backgroundColor:
                !this.state.submitStripe && this.state.openFormSecure
                  ? "rgb(255,217,102)" //"rgb(146,184,218)"
                  : "rgb(25,35,25)",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "1",
              color:
                !this.state.submitStripe && this.state.openFormSecure
                  ? "navy" //"rgb(207,226,243)" // "rgb(207,226,243)" //"rgb(146,184,218)"
                  : "white"
            }}
            //alt="err"
          >
            +
          </div>
          <span
            style={{
              border: "1px solid",
              padding: !this.props.hide && "0px 6px"
            }}
            onClick={async () => {
              const answer = window.confirm(
                "Do you want to delete this email?"
              );

              if (answer)
                await fetch(
                  `https://king-prawn-app-j2f2s.ondigitalocean.app/deleteemail`,
                  {
                    method: "POST",
                    //credentials: "include",
                    headers: {
                      "Content-Type": "Application/JSON",
                      "Access-Control-Request-Method": "POST",
                      "Access-Control-Request-Headers": [
                        "Origin",
                        "Content-Type"
                      ] //allow referer
                    },
                    body: JSON.stringify(this.props.auth), //getAuth().currentUser
                    maxAge: 3600
                    //"mode": "cors",
                  }
                )
                  .then(async (response) => await response.json())
                  .then((body) => {
                    window.alert(body);
                  })
                  .catch((err) => console.log(err));
            }}
          >
            &times;
          </span>
          &nbsp;
          <span
            style={{
              fontFamily: "'Plaster', cursive",
              fontWeight: "normal"
            }}
          >
            <span
              onClick={() => {
                const answer = window.prompt("update decanter email");
                if (answer && this.props.isEmail(answer)) {
                  this.props.handleUpdateEmail(answer);
                }
              }}
              style={{ border: "1px dotted", fontWeight: "bolder" }}
            >
              {this.props.auth.emailVerified
                ? "recovery email"
                : "verification required"}
            </span>
            {space}
            <span
              style={{
                transition: ".3s ease-in",
                color: this.props.auth.emailVerified ? "white" : "",
                backgroundColor: this.props.auth.emailVerified
                  ? "cornflowerblue"
                  : ""
              }}
              //onClick={() => window.alert("Vau.money personal trustee")}
            >
              {this.props.auth.email}
            </span>
          </span>
        </div>
        <br />
        {this.props.user !== undefined &&
          this.props.auth.email &&
          this.props.auth.emailVerified &&
          !this.props.user.stripeLink && (
            <div
              onClick={() => {
                if (false && user.customerId) {
                  updateDoc(doc(firestore, "userDatas", this.props.auth.uid), {
                    customerId: deleteField()
                  });
                  return this.deleteThese([], [user.customerId]);
                }
                this.setState({ openFormSecure: !this.state.openFormSecure });
              }}
            >
              {
                user.customerId
                  ? "Edit"
                  : this.props.user.stripeId
                  ? "Add"
                  : "Enroll"
                //Custom
              }
            </div>
          )}
        {this.state.openFormSecure && (
          <div>
            <form
              onSubmit={
                (e) => {
                  e.preventDefault();
                  /*fetch("https://geolocation-db.com/json/")
            .then(async (res) => await res.json())
            .then((r) => {
              const IPv4 = r.IPv4;
              //console.log(IPv4);
              this.setState({ IPv4 }, () => {*/
                  this.setState({ submitStripe: true });
                }
                //submitBank()
                //});}).catch((err) => console.log(err.message))
              }
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: this.state.openFormSecure ? "" : "0px"
              }}
            >
              <button type="submit">submit</button>
              <div
                style={{
                  fontSize: "0px",
                  overflow: "hidden",
                  height: "0px",
                  position: "relative"
                }}
              >
                <div style={{ position: "absolute" }}>
                  {this.state.submitStripe && (
                    <Elements stripe={stripePromise} options={null}>
                      <ElementsConsumer>
                        {(props) => {
                          const { stripe, elements } = props;
                          //console.log("striping");
                          return (
                            <STRIPE_ADDRESS
                              saveaddress={(e) => {
                                console.log(e);
                                this.setState({
                                  ...e,
                                  last: this.state.last,
                                  first: this.state.first
                                });
                              }}
                              noAccountYetArray={this.props.noAccountYetArray}
                              stripe={stripe}
                              auth={this.props.auth}
                              user={user}
                              first={this.state.first}
                              last={this.state.last}
                              options={{
                                mode: "shipping",
                                fields: {
                                  //name: "never",
                                  //firstName: "always",
                                  //lastName: "always"
                                },
                                display: {
                                  name: "split"
                                },
                                defaultValues: {
                                  firstName: this.state.first,
                                  lastName: this.state.last,
                                  /*name: this.state.first +
                          " " +
                          this.state.last,*/
                                  address: {
                                    line1: this.state.billing_details.line1,
                                    line2: this.state.billing_details.line2,
                                    city: this.state.billing_details.city,
                                    state: this.state.billing_details.state,
                                    postal_code: this.state.billing_details
                                      .postal_code,
                                    country: this.state.billing_details.country
                                  }
                                }
                                //If you want to use Payment Element, it is required to pass in the clientSecret.
                                // passing the client secret obtained from the server
                                //clientSecret: "{{CLIENT_SECRET}}"
                                //https://stripe.com/docs/stripe-js/react
                                //https://stripe.com/docs/elements/address-element/collect-addresses?platform=web&client=react
                              }}
                            />
                          );
                        }}
                      </ElementsConsumer>
                    </Elements>
                  )}
                </div>
              </div>
              <table>
                <thead></thead>
                <tbody>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td
                      style={{
                        width: "calc(50% - 4px)",
                        paddingRight: "6px"
                      }}
                      //<div style={{ width: "100%", display: "flex" }}>
                    >
                      <input
                        style={inputStyle}
                        required={true}
                        value={this.state.first}
                        onChange={(e) =>
                          this.setState({
                            first: specialFormatting(e.target.value)
                          })
                        }
                        id="first"
                        placeholder="first"
                      />
                    </td>
                    <td style={{ width: "calc(50% - 4px)" }}>
                      {space}
                      <input
                        style={inputStyle}
                        required={true}
                        value={this.state.last}
                        onChange={(e) =>
                          this.setState({
                            last: specialFormatting(e.target.value)
                          })
                        }
                        id="last"
                        placeholder="last"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        required={true}
                        value={this.state.billing_details["line1"]}
                        onChange={changePayoutInput}
                        id="line1"
                        placeholder="address"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        value={this.state.billing_details["line2"]}
                        onChange={changePayoutInput}
                        id="line2"
                        placeholder="p.o. box or unit number"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        required={true}
                        value={this.state.billing_details["city"]}
                        onChange={changePayoutInput}
                        id="city"
                        placeholder="city"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        //maxLength={2}
                        //https://stripe.com/docs/tax/customer-locations#us-postal-codes
                        required={true}
                        value={this.state.billing_details["state"]}
                        onChange={changePayoutInput}
                        id="state"
                        placeholder="state"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        maxLength={5}
                        required={true}
                        value={this.state.billing_details["postal_code"]}
                        onChange={changePayoutInput}
                        id="postal_code"
                        placeholder="ZIP"
                      />
                    </td>
                  </tr>
                  <tr
                    style={{
                      width: "calc(100% - 4px)",
                      display: "flex"
                    }}
                  >
                    <td style={{ width: "100%" }}>
                      <input
                        style={inputStyle}
                        //maxLength={2}
                        required={true}
                        value={this.state.billing_details["country"]}
                        onChange={changePayoutInput}
                        id="country"
                        placeholder="Country"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        )}
        {this.props.user !== undefined && this.state.address && (
          <div onClick={() => makeAccount()}>Apply</div>
        )}
        {user && user.stripeLink && (
          <a href={user && user.stripeLink}>Reset link</a>
        )}
        For the company that might need extra time.
        <br />
        Payday loans without compound interest late fees nor discharges.
        {user !== undefined && user.customerId && (
          <div>
            <h2
              style={{
                display: "block"
              }}
            >
              <div
                onClick={() => {
                  onSnapshot(
                    query(
                      collection(firestore, "offers"),
                      where("contractorId", "==", this.props.auth.uid)
                    ),
                    (querySnapshot) => {
                      this.setState({
                        offers: querySnapshot.docs.map((dc) => {
                          return { ...dc.data(), id: dc.id };
                        })
                      });
                    }
                  );
                }}
              >
                Offers
              </div>
              <div
                style={{
                  overflowY: "hidden",
                  overflowX: "auto"
                }}
              >
                {this.state.offers &&
                  this.state.offers.map(async (x) => {
                    const usered = await getDoc(
                      doc(firestore, "users", x.authorId)
                    );
                    return (
                      <form
                        key={x.id}
                        onSubmit={async (e) => {
                          e.preventDefault();

                          updateDoc(doc(firestore, "offers", x.id), {
                            accepted: true
                          }).then(() => {});
                        }}
                      >
                        {usered.username}
                        <br />${x.offer}
                        <br />
                        {x.interest}% APR
                        <br />
                        <button type="submit">accept</button>
                      </form>
                    );
                  })}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  placeholder="users"
                  value={this.state.userQuery}
                  onChange={(e) => {
                    this.setState({ userQuery: e.target.value }, () => {
                      clearTimeout(this.queryUsers);
                      console.log(this.state.userQuery);
                      this.queryUsers = setTimeout(() => {
                        getDocs(
                          query(
                            collection(firestore, "users"),
                            where(
                              "usernameAsArray",
                              "array-contains",
                              this.state.userQuery.toLocaleLowerCase()
                            )
                          )
                        ).then((querySnapshot) => {
                          this.setState({
                            users: querySnapshot.docs.map((doc) => {
                              return { ...doc.data(), id: doc.id };
                            })
                          });
                        });
                      }, 3000);
                    });
                  }}
                />
              </form>
              {this.state.users &&
                this.state.users.map((x) => {
                  return (
                    <div
                      onClick={() => {
                        this.setState({ selectedUser: x });
                      }}
                    >
                      {x.username}
                    </div>
                  );
                })}
              {this.state.selectedUser && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    !isNaN(this.state.offer) &&
                      !isNaN(this.state.interest) &&
                      this.state.mcc !== "category" &&
                      addDoc(collection(firestore, "offers"), {
                        offer: this.state.offer,
                        interest: this.state.interest,
                        duration: this.state.duration,
                        authorId: this.props.auth.uid,
                        contractorId: this.state.selectedUser.id,
                        mcc: this.state.mcc
                      });
                  }}
                >
                  $
                  <input
                    style={{ width: "100px" }}
                    min={0.5}
                    required={true}
                    type="number"
                    placeholder="invest"
                    value={this.state.offer}
                    onChange={(e) => {
                      this.setState({ offer: e.target.value });
                    }}
                  />
                  <input
                    style={{ width: "40px" }}
                    min={0}
                    required={true}
                    type="number"
                    placeholder="interest"
                    value={this.state.interest}
                    onChange={(e) => {
                      this.setState({ interest: e.target.value });
                    }}
                  />
                  %
                  <select
                    required={true}
                    value={this.state.mcc}
                    style={{
                      width: "100px"
                    }}
                    onChange={(e) => {
                      this.setState({ mcc: e.target.id });
                    }}
                  >
                    {[
                      ["category", "category", "_"],
                      [
                        7623,
                        "AC Refrigeration Repair",
                        "ac_refrigeration_repair"
                      ],
                      [
                        8931,
                        "Accounting, Bookkeeping Services",
                        "accounting_bookkeeping_services"
                      ],
                      [7311, "Advertising Services", "advertising_services"],
                      [
                        763,
                        "Agricultural Cooperative",
                        "agricultural_cooperative"
                      ],
                      [4511, "Airlines, Air Carriers", "airlines_air_carriers"],
                      [
                        4582,
                        "Airports, Flying Fields",
                        "airports_flying_fields"
                      ],
                      [4119, "Ambulance Services", "ambulance_services"],
                      [
                        7996,
                        "Amusement Parks/Carnivals",
                        "amusement_parks_carnivals"
                      ],
                      [5937, "Antique Reproductions", "antique_reproductions"],
                      [5932, "Antique Shops", "antique_shops"],
                      [7998, "Aquariums", "aquariums"],
                      [
                        8911,
                        "Architectural/Surveying Services",
                        "architectural_surveying_services"
                      ],
                      [
                        5971,
                        "Art Dealers and Galleries",
                        "art_dealers_and_galleries"
                      ],
                      [
                        5970,
                        "Artists Supply and Craft Shops",
                        "artists_supply_and_craft_shops"
                      ],
                      [
                        7531,
                        "Auto Body Repair Shops",
                        "auto_body_repair_shops"
                      ],
                      [7535, "Auto Paint Shops", "auto_paint_shops"],
                      [7538, "Auto Service Shops", "auto_service_shops"],
                      [
                        5531,
                        "Auto and Home Supply Stores",
                        "auto_and_home_supply_stores"
                      ],
                      [
                        6011,
                        "Automated Cash Disburse",
                        "automated_cash_disburse"
                      ],
                      [
                        5542,
                        "Automated Fuel Dispensers",
                        "automated_fuel_dispensers"
                      ],
                      [
                        8675,
                        "Automobile Associations",
                        "automobile_associations"
                      ],
                      [
                        5533,
                        "Automotive Parts and Accessories Stores",
                        "automotive_parts_and_accessories_stores"
                      ],
                      [
                        5532,
                        "Automotive Tire Stores",
                        "automotive_tire_stores"
                      ],
                      [
                        9223,
                        "Bail and Bond Payments (payment to the surety for the bond, not the actual bond paid to the government agency)",
                        "bail_and_bond_payments"
                      ],
                      [5462, "Bakeries", "bakeries"],
                      [7929, "Bands, Orchestras", "bands_orchestras"],
                      [
                        7230,
                        "Barber and Beauty Shops",
                        "barber_and_beauty_shops"
                      ],
                      [
                        7995,
                        "Betting/Casino Gambling",
                        "betting_casino_gambling"
                      ],
                      [5940, "Bicycle Shops", "bicycle_shops"],
                      [
                        7932,
                        "Billiard/Pool Establishments",
                        "billiard_pool_establishments"
                      ],
                      [5551, "Boat Dealers", "boat_dealers"],
                      [
                        4457,
                        "Boat Rentals and Leases",
                        "boat_rentals_and_leases"
                      ],
                      [5942, "Book Stores", "book_stores"],
                      [
                        5192,
                        "Books, Periodicals, and Newspapers",
                        "books_periodicals_and_newspapers"
                      ],
                      [7933, "Bowling Alleys", "bowling_alleys"],
                      [4131, "Bus Lines", "bus_lines"],
                      [
                        8244,
                        "Business/Secretarial Schools",
                        "business_secretarial_schools"
                      ],
                      [
                        7278,
                        "Buying/Shopping Services",
                        "buying_shopping_services"
                      ],
                      [
                        4899,
                        "Cable, Satellite, and Other Pay Television and Radio",
                        "cable_satellite_and_other_pay_television_and_radio"
                      ],
                      [
                        5946,
                        "Camera and Photographic Supply Stores",
                        "camera_and_photographic_supply_stores"
                      ],
                      [
                        5441,
                        "Candy, Nut, and Confectionery Stores",
                        "candy_nut_and_confectionery_stores"
                      ],
                      [7512, "Car Rental Agencies", "car_rental_agencies"],
                      [7542, "Car Washes", "car_washes"],
                      [
                        5511,
                        "Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing",
                        "car_and_truck_dealers_new_used"
                      ],
                      [
                        5521,
                        "Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing",
                        "car_and_truck_dealers_used_only"
                      ],
                      [1750, "Carpentry Services", "carpentry_services"],
                      [
                        7217,
                        "Carpet/Upholstery Cleaning",
                        "carpet_upholstery_cleaning"
                      ],
                      [5811, "Caterers", "caterers"],
                      [
                        8398,
                        "Charitable and Social Service Organizations - Fundraising",
                        "charitable_and_social_service_organizations_fundraising"
                      ],
                      [
                        5169,
                        "Chemicals and Allied Products (Not Elsewhere Classified)",
                        "chemicals_and_allied_products"
                      ],
                      [8351, "Child Care Services", "child_care_services"],
                      [
                        5641,
                        "Childrens and Infants Wear Stores",
                        "childrens_and_infants_wear_stores"
                      ],
                      [
                        8049,
                        "Chiropodists, Podiatrists",
                        "chiropodists_podiatrists"
                      ],
                      [8041, "Chiropractors", "chiropractors"],
                      [
                        5993,
                        "Cigar Stores and Stands",
                        "cigar_stores_and_stands"
                      ],
                      [
                        8641,
                        "Civic, Social, Fraternal Associations",
                        "civic_social_fraternal_associations"
                      ],
                      [
                        7349,
                        "Cleaning and Maintenance",
                        "cleaning_and_maintenance"
                      ],
                      [7296, "Clothing Rental", "clothing_rental"],
                      [8220, "Colleges, Universities", "colleges_universities"],
                      [
                        5046,
                        "Commercial Equipment (Not Elsewhere Classified)",
                        "commercial_equipment"
                      ],
                      [5139, "Commercial Footwear", "commercial_footwear"],
                      [
                        7333,
                        "Commercial Photography, Art and Graphics",
                        "commercial_photography_art_and_graphics"
                      ],
                      [
                        4111,
                        "Commuter Transport, Ferries",
                        "commuter_transport_and_ferries"
                      ],
                      [
                        4816,
                        "Computer Network Services",
                        "computer_network_services"
                      ],
                      [7372, "Computer Programming", "computer_programming"],
                      [7379, "Computer Repair", "computer_repair"],
                      [
                        5734,
                        "Computer Software Stores",
                        "computer_software_stores"
                      ],
                      [
                        5045,
                        "Computers, Peripherals, and Software",
                        "computers_peripherals_and_software"
                      ],
                      [
                        1771,
                        "Concrete Work Services",
                        "concrete_work_services"
                      ],
                      [
                        5039,
                        "Construction Materials (Not Elsewhere Classified)",
                        "construction_materials"
                      ],
                      [
                        7392,
                        "Consulting, Public Relations",
                        "consulting_public_relations"
                      ],
                      [
                        8241,
                        "Correspondence Schools",
                        "correspondence_schools"
                      ],
                      [5977, "Cosmetic Stores", "cosmetic_stores"],
                      [7277, "Counseling Services", "counseling_services"],
                      [7997, "Country Clubs", "country_clubs"],
                      [4215, "Courier Services", "courier_services"],
                      [
                        9211,
                        "Court Costs, Including Alimony and Child Support - Courts of Law",
                        "court_costs"
                      ],
                      [
                        7321,
                        "Credit Reporting Agencies",
                        "credit_reporting_agencies"
                      ],
                      [4411, "Cruise Lines", "cruise_lines"],
                      [5451, "Dairy Products Stores", "dairy_products_stores"],
                      [
                        7911,
                        "Dance Hall, Studios, Schools",
                        "dance_hall_studios_schools"
                      ],
                      [
                        7273,
                        "Dating/Escort Services",
                        "dating_escort_services"
                      ],
                      [
                        8021,
                        "Dentists, Orthodontists",
                        "dentists_orthodontists"
                      ],
                      [5311, "Department Stores", "department_stores"],
                      [7393, "Detective Agencies", "detective_agencies"],
                      [
                        5815,
                        "Digital Goods Media – Books, Movies, Music",
                        "digital_goods_media"
                      ],
                      [
                        5817,
                        "Digital Goods – Applications (Excludes Games)",
                        "digital_goods_applications"
                      ],
                      [5816, "Digital Goods – Games", "digital_goods_games"],
                      [
                        5818,
                        "Digital Goods – Large Digital Goods Merchant",
                        "digital_goods_large_volume"
                      ],
                      [
                        5964,
                        "Direct Marketing - Catalog Merchant",
                        "direct_marketing_catalog_merchant"
                      ],
                      [
                        5965,
                        "Direct Marketing - Combination Catalog and Retail Merchant",
                        "direct_marketing_combination_catalog_and_retail_merchant"
                      ],
                      [
                        5967,
                        "Direct Marketing - Inbound Telemarketing",
                        "direct_marketing_inbound_telemarketing"
                      ],
                      [
                        5960,
                        "Direct Marketing - Insurance Services",
                        "direct_marketing_insurance_services"
                      ],
                      [
                        5969,
                        "Direct Marketing - Other",
                        "direct_marketing_other"
                      ],
                      [
                        5966,
                        "Direct Marketing - Outbound Telemarketing",
                        "direct_marketing_outbound_telemarketing"
                      ],
                      [
                        5968,
                        "Direct Marketing - Subscription",
                        "direct_marketing_subscription"
                      ],
                      [
                        5962,
                        "Direct Marketing - Travel",
                        "direct_marketing_travel"
                      ],
                      [5310, "Discount Stores", "discount_stores"],
                      [8011, "Doctors", "doctors"],
                      [5963, "Door-To-Door Sales", "door_to_door_sales"],
                      [
                        5714,
                        "Drapery, Window Covering, and Upholstery Stores",
                        "drapery_window_covering_and_upholstery_stores"
                      ],
                      [5813, "Drinking Places", "drinking_places"],
                      [
                        5912,
                        "Drug Stores and Pharmacies",
                        "drug_stores_and_pharmacies"
                      ],
                      [
                        5122,
                        "Drugs, Drug Proprietaries, and Druggist Sundries",
                        "drugs_drug_proprietaries_and_druggist_sundries"
                      ],
                      [7216, "Dry Cleaners", "dry_cleaners"],
                      [
                        5099,
                        "Durable Goods (Not Elsewhere Classified)",
                        "durable_goods"
                      ],
                      [5309, "Duty Free Stores", "duty_free_stores"],
                      [
                        5812,
                        "Eating Places, Restaurants",
                        "eating_places_restaurants"
                      ],
                      [8299, "Educational Services", "educational_services"],
                      [5997, "Electric Razor Stores", "electric_razor_stores"],
                      [
                        5552,
                        "Electric Vehicle Charging",
                        "electric_vehicle_charging"
                      ],
                      [
                        5065,
                        "Electrical Parts and Equipment",
                        "electrical_parts_and_equipment"
                      ],
                      [1731, "Electrical Services", "electrical_services"],
                      [
                        7622,
                        "Electronics Repair Shops",
                        "electronics_repair_shops"
                      ],
                      [5732, "Electronics Stores", "electronics_stores"],
                      [
                        8211,
                        "Elementary, Secondary Schools",
                        "elementary_secondary_schools"
                      ],
                      [
                        9702,
                        "Emergency Services (GCAS) (Visa use only)",
                        "emergency_services_gcas_visa_use_only"
                      ],
                      [
                        7361,
                        "Employment/Temp Agencies",
                        "employment_temp_agencies"
                      ],
                      [7394, "Equipment Rental", "equipment_rental"],
                      [
                        7342,
                        "Exterminating Services",
                        "exterminating_services"
                      ],
                      [
                        5651,
                        "Family Clothing Stores",
                        "family_clothing_stores"
                      ],
                      [5814, "Fast Food Restaurants", "fast_food_restaurants"],
                      [
                        6012,
                        "Financial Institutions",
                        "financial_institutions"
                      ],
                      [
                        9222,
                        "Fines - Government Administrative Entities",
                        "fines_government_administrative_entities"
                      ],
                      [
                        5718,
                        "Fireplace, Fireplace Screens, and Accessories Stores",
                        "fireplace_fireplace_screens_and_accessories_stores"
                      ],
                      [5713, "Floor Covering Stores", "floor_covering_stores"],
                      [5992, "Florists", "florists"],
                      [
                        5193,
                        "Florists Supplies, Nursery Stock, and Flowers",
                        "florists_supplies_nursery_stock_and_flowers"
                      ],
                      [
                        5422,
                        "Freezer and Locker Meat Provisioners",
                        "freezer_and_locker_meat_provisioners"
                      ],
                      [
                        5983,
                        "Fuel Dealers (Non Automotive)",
                        "fuel_dealers_non_automotive"
                      ],
                      [
                        7261,
                        "Funeral Services, Crematories",
                        "funeral_services_crematories"
                      ],
                      [
                        7641,
                        "Furniture Repair, Refinishing",
                        "furniture_repair_refinishing"
                      ],
                      [
                        5712,
                        "Furniture, Home Furnishings, and Equipment Stores, Except Appliances",
                        "furniture_home_furnishings_and_equipment_stores_except_appliances"
                      ],
                      [
                        5681,
                        "Furriers and Fur Shops",
                        "furriers_and_fur_shops"
                      ],
                      [1520, "General Services", "general_services"],
                      [
                        5947,
                        "Gift, Card, Novelty, and Souvenir Shops",
                        "gift_card_novelty_and_souvenir_shops"
                      ],
                      [
                        5231,
                        "Glass, Paint, and Wallpaper Stores",
                        "glass_paint_and_wallpaper_stores"
                      ],
                      [
                        5950,
                        "Glassware, Crystal Stores",
                        "glassware_crystal_stores"
                      ],
                      [7992, "Golf Courses - Public", "golf_courses_public"],
                      [
                        7801,
                        "Government Licensed On-line Casinos (On-Line Gambling)(US Region only)",
                        "government_licensed_online_casions_online_gambling_us_region_only"
                      ],
                      [
                        9399,
                        "Government Services (Not Elsewhere Classified)",
                        "government_services"
                      ],
                      [
                        7802,
                        "Government-Licensed Horse/Dog Racing (US Region only)",
                        "government_licensed_horse_dog_racing_us_region_only"
                      ],
                      [
                        9406,
                        "Government-Owned Lotteries (Non-US region)",
                        "government_owned_lotteries_non_us_region"
                      ],
                      [
                        7800,
                        "Government-Owned Lotteries (US Region only)",
                        "government_owned_lotteries_us_region_only"
                      ],
                      [
                        5411,
                        "Grocery Stores, Supermarkets",
                        "grocery_stores_supermarkets"
                      ],
                      [5251, "Hardware Stores", "hardware_stores"],
                      [
                        5072,
                        "Hardware, Equipment, and Supplies",
                        "hardware_equipment_and_supplies"
                      ],
                      [
                        7298,
                        "Health and Beauty Spas",
                        "health_and_beauty_spas"
                      ],
                      [
                        5975,
                        "Hearing Aids Sales and Supplies",
                        "hearing_aids_sales_and_supplies"
                      ],
                      [1711, "Heating, Plumbing, A/C", "heating_plumbing_a_c"],
                      [
                        5945,
                        "Hobby, Toy, and Game Shops",
                        "hobby_toy_and_game_shops"
                      ],
                      [
                        5200,
                        "Home Supply Warehouse Stores",
                        "home_supply_warehouse_stores"
                      ],
                      [8062, "Hospitals", "hospitals"],
                      [
                        7011,
                        "Hotels, Motels, and Resorts",
                        "hotels_motels_and_resorts"
                      ],
                      [
                        5722,
                        "Household Appliance Stores",
                        "household_appliance_stores"
                      ],
                      [
                        5085,
                        "Industrial Supplies (Not Elsewhere Classified)",
                        "industrial_supplies"
                      ],
                      [
                        7375,
                        "Information Retrieval Services",
                        "information_retrieval_services"
                      ],
                      [6399, "Insurance - Default", "insurance_default"],
                      [
                        6300,
                        "Insurance Underwriting, Premiums",
                        "insurance_underwriting_premiums"
                      ],
                      [
                        9950,
                        "Intra-Company Purchases",
                        "intra_company_purchases"
                      ],
                      [
                        5944,
                        "Jewelry Stores, Watches, Clocks, and Silverware Stores",
                        "jewelry_stores_watches_clocks_and_silverware_stores"
                      ],
                      [780, "Landscaping Services", "landscaping_services"],
                      [7211, "Laundries", "laundries"],
                      [
                        7210,
                        "Laundry, Cleaning Services",
                        "laundry_cleaning_services"
                      ],
                      [
                        8111,
                        "Legal Services, Attorneys",
                        "legal_services_attorneys"
                      ],
                      [
                        5948,
                        "Luggage and Leather Goods Stores",
                        "luggage_and_leather_goods_stores"
                      ],
                      [
                        5211,
                        "Lumber, Building Materials Stores",
                        "lumber_building_materials_stores"
                      ],
                      [6010, "Manual Cash Disburse", "manual_cash_disburse"],
                      [
                        4468,
                        "Marinas, Service and Supplies",
                        "marinas_service_and_supplies"
                      ],
                      [5262, "Marketplaces", "marketplaces"],
                      [
                        1740,
                        "Masonry, Stonework, and Plaster",
                        "masonry_stonework_and_plaster"
                      ],
                      [7297, "Massage Parlors", "massage_parlors"],
                      [8099, "Medical Services", "medical_services"],
                      [
                        8071,
                        "Medical and Dental Labs",
                        "medical_and_dental_labs"
                      ],
                      [
                        5047,
                        "Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies",
                        "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
                      ],
                      [
                        8699,
                        "Membership Organizations",
                        "membership_organizations"
                      ],
                      [
                        5611,
                        "Mens and Boys Clothing and Accessories Stores",
                        "mens_and_boys_clothing_and_accessories_stores"
                      ],
                      [
                        5691,
                        "Mens, Womens Clothing Stores",
                        "mens_womens_clothing_stores"
                      ],
                      [5051, "Metal Service Centers", "metal_service_centers"],
                      [
                        5699,
                        "Miscellaneous Apparel and Accessory Shops",
                        "miscellaneous_apparel_and_accessory_shops"
                      ],
                      [
                        5599,
                        "Miscellaneous Auto Dealers",
                        "miscellaneous_auto_dealers"
                      ],
                      [
                        7399,
                        "Miscellaneous Business Services",
                        "miscellaneous_business_services"
                      ],
                      [
                        5499,
                        "Miscellaneous Food Stores - Convenience Stores and Specialty Markets",
                        "miscellaneous_food_stores"
                      ],
                      [
                        5399,
                        "Miscellaneous General Merchandise",
                        "miscellaneous_general_merchandise"
                      ],
                      [
                        7299,
                        "Miscellaneous General Services",
                        "miscellaneous_general_services"
                      ],
                      [
                        5719,
                        "Miscellaneous Home Furnishing Specialty Stores",
                        "miscellaneous_home_furnishing_specialty_stores"
                      ],
                      [
                        2741,
                        "Miscellaneous Publishing and Printing",
                        "miscellaneous_publishing_and_printing"
                      ],
                      [
                        7999,
                        "Miscellaneous Recreation Services",
                        "miscellaneous_recreation_services"
                      ],
                      [
                        7699,
                        "Miscellaneous Repair Shops",
                        "miscellaneous_repair_shops"
                      ],
                      [
                        5999,
                        "Miscellaneous Specialty Retail",
                        "miscellaneous_specialty_retail"
                      ],
                      [5271, "Mobile Home Dealers", "mobile_home_dealers"],
                      [
                        7832,
                        "Motion Picture Theaters",
                        "motion_picture_theaters"
                      ],
                      [
                        4214,
                        "Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services",
                        "motor_freight_carriers_and_trucking"
                      ],
                      [5592, "Motor Homes Dealers", "motor_homes_dealers"],
                      [
                        5013,
                        "Motor Vehicle Supplies and New Parts",
                        "motor_vehicle_supplies_and_new_parts"
                      ],
                      [
                        5571,
                        "Motorcycle Shops and Dealers",
                        "motorcycle_shops_and_dealers"
                      ],
                      [
                        5561,
                        "Motorcycle Shops, Dealers",
                        "motorcycle_shops_dealers"
                      ],
                      [
                        5733,
                        "Music Stores-Musical Instruments, Pianos, and Sheet Music",
                        "music_stores_musical_instruments_pianos_and_sheet_music"
                      ],
                      [
                        5994,
                        "News Dealers and Newsstands",
                        "news_dealers_and_newsstands"
                      ],
                      [6051, "Non-FI, Money Orders", "non_fi_money_orders"],
                      [
                        6540,
                        "Non-FI, Stored Value Card Purchase/Load",
                        "non_fi_stored_value_card_purchase_load"
                      ],
                      [
                        5199,
                        "Nondurable Goods (Not Elsewhere Classified)",
                        "nondurable_goods"
                      ],
                      [
                        5261,
                        "Nurseries, Lawn and Garden Supply Stores",
                        "nurseries_lawn_and_garden_supply_stores"
                      ],
                      [8050, "Nursing/Personal Care", "nursing_personal_care"],
                      [
                        5021,
                        "Office and Commercial Furniture",
                        "office_and_commercial_furniture"
                      ],
                      [8043, "Opticians, Eyeglasses", "opticians_eyeglasses"],
                      [
                        8042,
                        "Optometrists, Ophthalmologist",
                        "optometrists_ophthalmologist"
                      ],
                      [
                        5976,
                        "Orthopedic Goods - Prosthetic Devices",
                        "orthopedic_goods_prosthetic_devices"
                      ],
                      [8031, "Osteopaths", "osteopaths"],
                      [
                        5921,
                        "Package Stores-Beer, Wine, and Liquor",
                        "package_stores_beer_wine_and_liquor"
                      ],
                      [
                        5198,
                        "Paints, Varnishes, and Supplies",
                        "paints_varnishes_and_supplies"
                      ],
                      [7523, "Parking Lots, Garages", "parking_lots_garages"],
                      [4112, "Passenger Railways", "passenger_railways"],
                      [5933, "Pawn Shops", "pawn_shops"],
                      [
                        5995,
                        "Pet Shops, Pet Food, and Supplies",
                        "pet_shops_pet_food_and_supplies"
                      ],
                      [
                        5172,
                        "Petroleum and Petroleum Products",
                        "petroleum_and_petroleum_products"
                      ],
                      [7395, "Photo Developing", "photo_developing"],
                      [7221, "Photographic Studios", "photographic_studios"],
                      [
                        5044,
                        "Photographic, Photocopy, Microfilm Equipment, and Supplies",
                        "photographic_photocopy_microfilm_equipment_and_supplies"
                      ],
                      [
                        7829,
                        "Picture/Video Production",
                        "picture_video_production"
                      ],
                      [
                        5131,
                        "Piece Goods, Notions, and Other Dry Goods",
                        "piece_goods_notions_and_other_dry_goods"
                      ],
                      [
                        5074,
                        "Plumbing, Heating Equipment, and Supplies",
                        "plumbing_heating_equipment_and_supplies"
                      ],
                      [
                        8651,
                        "Political Organizations",
                        "political_organizations"
                      ],
                      [
                        9402,
                        "Postal Services - Government Only",
                        "postal_services_government_only"
                      ],
                      [
                        5094,
                        "Precious Stones and Metals, Watches and Jewelry",
                        "precious_stones_and_metals_watches_and_jewelry"
                      ],
                      [8999, "Professional Services", "professional_services"],
                      [
                        4225,
                        "Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage",
                        "public_warehousing_and_storage"
                      ],
                      [
                        7338,
                        "Quick Copy, Repro, and Blueprint",
                        "quick_copy_repro_and_blueprint"
                      ],
                      [4011, "Railroads", "railroads"],
                      [
                        6513,
                        "Real Estate Agents and Managers - Rentals",
                        "real_estate_agents_and_managers_rentals"
                      ],
                      [5735, "Record Stores", "record_stores"],
                      [
                        7519,
                        "Recreational Vehicle Rentals",
                        "recreational_vehicle_rentals"
                      ],
                      [
                        5973,
                        "Religious Goods Stores",
                        "religious_goods_stores"
                      ],
                      [
                        8661,
                        "Religious Organizations",
                        "religious_organizations"
                      ],
                      [
                        1761,
                        "Roofing/Siding, Sheet Metal",
                        "roofing_siding_sheet_metal"
                      ],
                      [
                        7339,
                        "Secretarial Support Services",
                        "secretarial_support_services"
                      ],
                      [
                        6211,
                        "Security Brokers/Dealers",
                        "security_brokers_dealers"
                      ],
                      [5541, "Service Stations", "service_stations"],
                      [
                        5949,
                        "Sewing, Needlework, Fabric, and Piece Goods Stores",
                        "sewing_needlework_fabric_and_piece_goods_stores"
                      ],
                      [
                        7251,
                        "Shoe Repair/Hat Cleaning",
                        "shoe_repair_hat_cleaning"
                      ],
                      [5661, "Shoe Stores", "shoe_stores"],
                      [
                        7629,
                        "Small Appliance Repair",
                        "small_appliance_repair"
                      ],
                      [5598, "Snowmobile Dealers", "snowmobile_dealers"],
                      [
                        1799,
                        "Special Trade Services",
                        "special_trade_services"
                      ],
                      [2842, "Specialty Cleaning", "specialty_cleaning"],
                      [5941, "Sporting Goods Stores", "sporting_goods_stores"],
                      [
                        7032,
                        "Sporting/Recreation Camps",
                        "sporting_recreation_camps"
                      ],
                      [7941, "Sports Clubs/Fields", "sports_clubs_fields"],
                      [
                        5655,
                        "Sports and Riding Apparel Stores",
                        "sports_and_riding_apparel_stores"
                      ],
                      [5972, "Stamp and Coin Stores", "stamp_and_coin_stores"],
                      [
                        5111,
                        "Stationary, Office Supplies, Printing and Writing Paper",
                        "stationary_office_supplies_printing_and_writing_paper"
                      ],
                      [
                        5943,
                        "Stationery Stores, Office, and School Supply Stores",
                        "stationery_stores_office_and_school_supply_stores"
                      ],
                      [5996, "Swimming Pools Sales", "swimming_pools_sales"],
                      [4723, "TUI Travel - Germany", "t_ui_travel_germany"],
                      [5697, "Tailors, Alterations", "tailors_alterations"],
                      [
                        9311,
                        "Tax Payments - Government Agencies",
                        "tax_payments_government_agencies"
                      ],
                      [
                        7276,
                        "Tax Preparation Services",
                        "tax_preparation_services"
                      ],
                      [4121, "Taxicabs/Limousines", "taxicabs_limousines"],
                      [
                        4812,
                        "Telecommunication Equipment and Telephone Sales",
                        "telecommunication_equipment_and_telephone_sales"
                      ],
                      [
                        4814,
                        "Telecommunication Services",
                        "telecommunication_services"
                      ],
                      [4821, "Telegraph Services", "telegraph_services"],
                      [5998, "Tent and Awning Shops", "tent_and_awning_shops"],
                      [8734, "Testing Laboratories", "testing_laboratories"],
                      [
                        7922,
                        "Theatrical Ticket Agencies",
                        "theatrical_ticket_agencies"
                      ],
                      [7012, "Timeshares", "timeshares"],
                      [
                        7534,
                        "Tire Retreading and Repair",
                        "tire_retreading_and_repair"
                      ],
                      [4784, "Tolls/Bridge Fees", "tolls_bridge_fees"],
                      [
                        7991,
                        "Tourist Attractions and Exhibits",
                        "tourist_attractions_and_exhibits"
                      ],
                      [7549, "Towing Services", "towing_services"],
                      [
                        7033,
                        "Trailer Parks, Campgrounds",
                        "trailer_parks_campgrounds"
                      ],
                      [
                        4789,
                        "Transportation Services (Not Elsewhere Classified)",
                        "transportation_services"
                      ],
                      [
                        4722,
                        "Travel Agencies, Tour Operators",
                        "travel_agencies_tour_operators"
                      ],
                      [7511, "Truck StopIteration", "truck_stop_iteration"],
                      [
                        7513,
                        "Truck/Utility Trailer Rentals",
                        "truck_utility_trailer_rentals"
                      ],
                      [
                        2791,
                        "Typesetting, Plate Making, and Related Services",
                        "typesetting_plate_making_and_related_services"
                      ],
                      [5978, "Typewriter Stores", "typewriter_stores"],
                      [
                        9405,
                        "U.S. Federal Government Agencies or Departments",
                        "u_s_federal_government_agencies_or_departments"
                      ],
                      [
                        5137,
                        "Uniforms, Commercial Clothing",
                        "uniforms_commercial_clothing"
                      ],
                      [
                        5931,
                        "Used Merchandise and Secondhand Stores",
                        "used_merchandise_and_secondhand_stores"
                      ],
                      [4900, "Utilities", "utilities"],
                      [5331, "Variety Stores", "variety_stores"],
                      [742, "Veterinary Services", "veterinary_services"],
                      [
                        7993,
                        "Video Amusement Game Supplies",
                        "video_amusement_game_supplies"
                      ],
                      [7994, "Video Game Arcades", "video_game_arcades"],
                      [
                        7841,
                        "Video Tape Rental Stores",
                        "video_tape_rental_stores"
                      ],
                      [
                        8249,
                        "Vocational/Trade Schools",
                        "vocational_trade_schools"
                      ],
                      [7631, "Watch/Jewelry Repair", "watch_jewelry_repair"],
                      [7692, "Welding Repair", "welding_repair"],
                      [5300, "Wholesale Clubs", "wholesale_clubs"],
                      [5698, "Wig and Toupee Stores", "wig_and_toupee_stores"],
                      [4829, "Wires, Money Orders", "wires_money_orders"],
                      [
                        5631,
                        "Womens Accessory and Specialty Shops",
                        "womens_accessory_and_specialty_shops"
                      ],
                      [
                        5621,
                        "Womens Ready-To-Wear Stores",
                        "womens_ready_to_wear_stores"
                      ],
                      [
                        5935,
                        "Wrecking and Salvage Yards",
                        "wrecking_and_salvage_yards"
                      ]
                    ]
                      .sort((a, b) =>
                        a[1].includes("Shop") ||
                        a[1].includes("Store") ||
                        a[1].includes("Service")
                          ? a[0] - b[0]
                          : true
                      )
                      //.sort((a, b) => a[0] - b[0])
                      .map((x) => {
                        return <option id={x[0]}>{x[1]}</option>;
                      })}
                  </select>
                  <input
                    step=".1"
                    style={{ width: "60px" }}
                    min={0}
                    required={true}
                    type="number"
                    placeholder="time"
                    value={this.state.duration}
                    onChange={(e) => {
                      this.setState({ duration: e.target.value });
                    }}
                  />
                  years
                </form>
              )}
              {false && (
                <div
                  onClick={async () => {
                    return null;
                    await fetch(
                      "https://king-prawn-app-j2f2s.ondigitalocean.app/list",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "Application/JSON",
                          "Access-Control-Request-Method": "POST",
                          "Access-Control-Request-Headers": [
                            "Origin",
                            "Content-Type"
                          ] //allow referer
                        },
                        body: JSON.stringify({
                          customerId: user.customerId
                        })
                      }
                    )
                      .then(async (res) => await res.json())
                      .then(async (result) => {
                        if (result.status) return console.log(result);
                        if (result.error) return console.log(result);
                        if (!result.list)
                          return console.log("dev error (Cash)", result);
                        console.log(result);
                        this.setState({ list: result.list });
                      })
                      .catch(standardCatch);
                  }}
                >
                  List all
                </div>
              )}
              {user.paymentMethods && (
                <div>
                  payment methods:{space}
                  {user.paymentMethods.map((x) => {
                    const obj = this.state["paymentMethod" + x];
                    return (
                      <div key={x}>
                        {obj ? (
                          obj.card ? (
                            <div
                              style={{
                                border:
                                  this.state.chosenMethod === x
                                    ? "1px solid"
                                    : "none"
                              }}
                              onClick={() => {
                                this.setState({ chosenMethod: x });
                              }}
                            >
                              {obj.card.brand}
                              {space}(&bull;&bull;&bull;{obj.card.last4}):
                              {obj.card.exp_month}/{obj.card.exp_year}
                            </div>
                          ) : (
                            <div
                              style={{
                                border:
                                  this.state.chosenMethod === x
                                    ? "1px solid"
                                    : "none"
                              }}
                              onClick={() => {
                                this.setState({ chosenMethod: x });
                              }}
                            >
                              {obj.us_bank_account.bank_name}
                              {space}(&bull;&bull;&bull;
                              {obj.us_bank_account.last4}
                              ):{obj.us_bank_account.account_type}
                            </div>
                          )
                        ) : (
                          <div
                            onClick={async () => {
                              await fetch(
                                "https://king-prawn-app-j2f2s.ondigitalocean.app/info",
                                {
                                  method: "POST",
                                  headers: {
                                    "Access-Control-Request-Method": "POST",
                                    "Access-Control-Request-Headers": [
                                      "Origin",
                                      "Content-Type"
                                    ], //allow referer
                                    "Content-Type": "Application/JSON"
                                  },
                                  body: JSON.stringify({ payment_method: x })
                                }
                              ) //stripe account, not plaid access token payout yet
                                .then(async (res) => await res.json())
                                .then(async (result) => {
                                  if (result.status) return console.log(result);
                                  if (result.error) return console.log(result);
                                  if (!result.paymentMethod)
                                    return console.log(
                                      "dev error (Cash)",
                                      result
                                    );
                                  console.log(result.paymentMethod);
                                  this.setState({
                                    ["paymentMethod" + x]: result.paymentMethod
                                  });
                                })
                                .catch(standardCatch);
                            }}
                          >
                            {x}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              <select
                value={this.state.payoutType}
                onChange={async (e) => {
                  this.setState(
                    {
                      clientSecret: null,
                      payoutType: e.target.value
                    },
                    async () => {
                      if (e.target.value !== "setup") {
                        const bankcard =
                          e.target.value === "Bank"
                            ? "us_bank_account"
                            : "card";
                        console.log(bankcard);
                        await fetch(
                          "https://king-prawn-app-j2f2s.ondigitalocean.app/add",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "Application/JSON",
                              "Access-Control-Request-Method": "POST",
                              "Access-Control-Request-Headers": [
                                "Origin",
                                "Content-Type"
                              ] //allow referer
                            },
                            body: JSON.stringify({
                              bankcard
                            })
                          }
                        )
                          .then(async (res) => await res.json())
                          .then(async (result) => {
                            if (result.status) return console.log(result);
                            if (result.error) return console.log(result);
                            if (!result.setupIntent)
                              return console.log("dev error (Cash)", result);
                            const clientSecret =
                              result.setupIntent.client_secret;
                            if (clientSecret) this.setState({ clientSecret });
                          })
                          .catch(standardCatch);
                      }
                    }
                  );
                }}
              >
                {["setup", "Card", "Bank"].map((x) => {
                  return <option key={x + "payout"}>{x}</option>;
                })}
              </select>
            </h2>
            {false && this.state.confirmBank && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  if (this.state.confirmBank === "bank")
                    return this.state.stripe
                      .confirmUsBankAccountSetup(this.state.clientSec, {
                        payment_method: {
                          us_bank_account: {
                            routing_number: this.state.routing_number,
                            account_number: this.state.account_number,
                            account_holder_type: "individual"
                          },
                          billing_details: {
                            name: user.first + " " + user.last,
                            email: this.props.auth.email
                          }
                        }
                      })
                      .then(function (result) {
                        if (result.error) {
                          // Inform the customer that there was an error.
                          console.log(result);
                        } else {
                          // Handle next step based on SetupIntent's status.
                          console.log(
                            "SetupIntent ID: " + result.setupIntent.id
                          );
                          console.log(
                            "SetupIntent status: " + result.setupIntent.status
                          );
                        }
                      });
                  this.state.stripe
                    .confirmCardSetup(this.state.clientSec, {
                      payment_method: {
                        card: this.state.elements,
                        billing_details: {
                          name: user.first + " " + user.last
                        }
                      }
                    })
                    .then(function (result) {
                      // Handle result.error or result.setupIntent
                    });
                }}
              >
                {this.state.confirmBank === "bank" && (
                  <div>
                    <input
                      required={true}
                      placeholder="account"
                      value={this.state.account_number}
                      onChange={(e) => textu(e, "account_number")}
                    />
                    <input
                      required={true}
                      placeholder="routing"
                      value={this.state.routing_number}
                      onChange={(e) => textu(e, "routing_number")}
                    />
                  </div>
                )}
                <button type="submit">confirm account</button>
              </form>
            )}
            {user && user[`microLink`] && (
              <a href={user[`microLink`]}>Verify</a>
            )}
            {this.state.clientSecret && this.state.payoutType !== "setup" && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret: this.state.clientSecret
                }}
              >
                <ElementsConsumer>
                  {(props) => {
                    const { stripe, elements } = props;
                    this.state.stripe !== stripe &&
                      this.setState({
                        stripe,
                        elements
                      });
                    return (
                      stripe &&
                      (() => {
                        return (
                          <form
                            onSubmit={async (event) => {
                              event.preventDefault();
                              if (!stripe || !elements) return null;
                              elements.submit();
                              const { error } = await stripe.confirmSetup({
                                clientSecret: this.state.clientSecret,
                                //`Elements` instance that was used to create the Payment Element
                                elements,
                                confirmParams: {
                                  return_url: `https://${window.location.hostname}`
                                }
                              });
                              if (error) return console.log(error);
                              return console.log("ok confirmed setup");
                            }}
                          >
                            <PaymentElement />

                            <div>
                              {this.state.payoutType !== "Bank" ? (
                                <div
                                  style={{
                                    display: "flex",
                                    width: "100%"
                                  }}
                                >
                                  <input
                                    placeholder="First"
                                    value={user.first}
                                    style={{ width: "33%" }}
                                  />
                                  <input
                                    placeholder="Middle"
                                    value={this.state.middle}
                                    onChange={(e) => {
                                      this.setState({
                                        middle: e.target.value
                                      });
                                    }}
                                    style={{ width: "33%" }}
                                  />
                                  <input
                                    placeholder="Last"
                                    value={user.last}
                                    style={{ width: "33%" }}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <button disabled={!stripe}>Submit</button>
                          </form>
                        );
                      })()
                    );
                  }}
                </ElementsConsumer>
              </Elements>
            )}
          </div>
        )}
        {user && user[`microLink`] && (
          <a style={{ color: "white" }} href={user[`microLink`]}>
            Verify
          </a>
        )}
        <div
          onClick={() => {
            onSnapshot(
              query(
                collection(firestore, "offers"),
                where("authorId", "==", this.props.auth.uid)
              ),
              (querySnapshot) => {
                this.setState({
                  requests: querySnapshot.docs.map((dc) => {
                    return { ...dc.data(), id: dc.id };
                  })
                });
              }
            );
          }}
        >
          Requests
        </div>
        <div
          style={{
            overflowY: "hidden",
            overflowX: "auto"
          }}
        >
          {this.state.requests &&
            this.state.requests.map(async (x) => {
              const usered = await getDoc(doc(firestore, "users", x.authorId));
              return (
                <form
                  style={{ border: "1px solid", borderRadius: "10px" }}
                  key={x.id}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    var answer = window.confirm(
                      "You will be charged " +
                        x.offer * (x.interest / 100) +
                        "?"
                    );
                    if (this.state.chosenMethod !== "")
                      return window.alert("You must select a payment method.");
                    answer &&
                      x.accepted &&
                      !x.paid &&
                      updateDoc(doc(firestore, "offers", x.id), {
                        paid: true
                      }).then(async () => {
                        await fetch(
                          "https://king-prawn-app-j2f2s.ondigitalocean.app/transfer",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "Application/JSON",
                              "Access-Control-Request-Method": "POST",
                              "Access-Control-Request-Headers": [
                                "Origin",
                                "Content-Type"
                              ] //allow referer
                            },
                            body: JSON.stringify({
                              payment_method: this.state.chosenMethod,
                              customerId: this.props.user.customerId,
                              total: x.offer * 100,
                              stripeId: usered.stripeId
                            })
                          }
                        )
                          .then(async (res) => await res.json())
                          .then(async (result) => {
                            if (result.status) return console.log(result);
                            if (result.error) return console.log(result);
                            if (!result.setupIntent)
                              return console.log("dev error (Cash)", result);

                            window.location.reload();
                          })
                          .catch(standardCatch);
                      });
                  }}
                >
                  {x.mcc}
                  <br />
                  {usered.username}
                  <br />${x.offer}
                  <br />
                  {x.interest}% APR
                  <br />
                  <button type="submit">
                    {x.accepted
                      ? "awaiting approval"
                      : `fulfill $${x.offer} for $${
                          x.offer * (x.interest / 100) * x.duration
                        }`}
                  </button>
                </form>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Bank;
