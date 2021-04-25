import React from "react";
import Fraud from "./Fraud";
import Fraud2 from "./Fraud2";
import FraudMoney from "./FraudMoney";
import { TwitterTweetEmbed } from "react-twitter-embed";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fraudChoice: 0 };
    this.iframe = React.createRef();
  }

  /*componentDidMount = () => {
    const t1262209560812683266 = document.createElement("t1262209560812683266");
    t1262209560812683266.type = "text/html";
    t1262209560812683266.async = true;
    t1262209560812683266.innerHTML = `<div><blockquote class="twitter-tweet"><p lang="en" dir="ltr">What makes me want to dump the rest of my fiat currency?<a href="https://t.co/6hTaUnm2D7">pic.twitter.com/6hTaUnm2D7</a> <a href="https://t.co/zb9QQa0DrU">https://t.co/zb9QQa0DrU</a></p>&mdash; Marrrk J. Valek (@MarkValek) <a href="https://twitter.com/MarkValek/status/1262209560812683266?ref_src=twsrc%5Etfw">May 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

    document
      .getElementById("t1262209560812683266")
      .append(t1262209560812683266);
    document.getElementById("t1262209560812683266").style.position = "relative";
    document.getElementById("t1262209560812683266").style.width = "100%";

    let iframe = ReactDOM.findDOMNode(this.iframe.current);
    iframe.addEventListener("load", this.props.onLoad);
  };

  componentDidMount() {
    if (canUseDOM) {
      let script = require("scriptjs");
      const twitterWidgetJs = "https://platform.twitter.com/widgets.js";
      script(twitterWidgetJs, "twitter-embed", () => {
        if (!window.twttr) {
          return console.error(
            "Failure to load window.twttr in TwitterTweetEmbed, aborting load."
          );
        } else console.log("embedding..." + JSON.stringify(window.twttr));
        if (!this.isMountCanceled) {
          window.twttr.widgets
            .createTweet(
              "2F1381992128549560321",
              this.iframe.current,
              this.buildOptions()
            )
            .then((element) => {
              console.log("embedded");

              element.style.width = "100%";
              //this.iframe.current.innerHTML = element;
              this.iframe.current.contentWindow.document.write(element);
              window.twttr.widgets.load(this.iframe.current);
            })
            .catch((err) => console.log(err.message));
        }
      });
    }
  }
  buildOptions() {
    let options = Object.assign({}, this.props.options);
    if (this.props.autoHeight) {
      options.height = this.refs.embedContainer.parentNode.offsetHeight;
    }
    options = Object.assign({}, options, {
      theme: this.props.theme,
      linkColor: this.props.linkColor,
      borderColor: this.props.borderColor,
      lang: this.props.lang
    });
    options.chrome = "";
    if (this.props.noHeader) {
      options.chrome = options.chrome + " noheader";
    }
    if (this.props.noFooter) {
      options.chrome = options.chrome + " nofooter";
    }
    if (this.props.noBorders) {
      options.chrome = options.chrome + " noborders";
    }
    if (this.props.noScrollbar) {
      options.chrome = options.chrome + " noscrollbar";
    }
    if (this.props.transparent) {
      options.chrome = options.chrome + " transparent";
    }
    return options;
  }
  componentWillUnmount() {
    this.isMountCanceled = true;
  }
  componentDidMount = () => {
    if (canUseDOM && window.twttr && !this.isMountCanceled) {
      window.twttr.widgets
        .createTweet(
          "2F1381992128549560321",
          this.iframe.current,
          this.buildOptions()
        )
        .then((element) => {
          console.log("sio");
          this.iframe.current.contentWindow.document
            .write(element)
            .appendChild("https://platform.twitter.com/widgets.js");
        })
        .catch((err) => console.log(err.message));
    }
  };*/
  render() {
    /*const Frame = React.forwardRef((props, ref) => (
      <iframe title="tweet" ref={ref} style={{ height: "min-content" }} />
    ));*/
    const tweetId = "1381992128549560321";
    return (
      <div>
        <br />
        {/*<TwitterTweetEmbed
          tweetId="1381992128549560321"
          //onLoad={(e) => console.log(e)}
          options={{ height: "400px" }}
        />
        <Frame ref={this.iframe} />*/}
        <h2>
          <a href="https://vianickcarducci.medium.com/raising-money-without-dilution-or-debt-a4cb20164356">
            from this idea
          </a>
        </h2>
        <TwitterTweetEmbed
          key="id"
          tweetId={tweetId}
          /*onLoad={(tweetWidgetEl) => {
                  console.log(parent.twitterString);
                  const tweetEl = tweetWidgetEl.shadowRoot.querySelector(
                    ".EmbeddedTweet"
                  );
                  tweetEl.style.width = "100%";
                }}*/
        />
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            width: "100%",
            maxWidth: "600px"
          }}
        >
          Can’t run debt without either:
          <br />
          1) customers being on time to meet borrower/investor expectations
          <br />
          2) money disenfranchisement
          <br />
          3) making amount outstanding literally impossible
          <br />
          <b>#money</b>
          <br />
          <b>#preciousmetals</b>
          <br />
          <b>#ppploans</b>
          <br />
          all gov spend is unequal treatment, price-fixing and monopolization
          <br />
          duress to be price-inelastic
        </div>
        <div
          style={{
            color: "black",
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 0 })}
          >
            $70k printed, $300k promised
          </div>

          <div
            style={{ backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 1 })}
          >
            trueGDPperPerson
          </div>

          <div
            style={{ backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 2 })}
          >
            perDollar
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: this.state.fraudChoice !== 0 ? "900px" : "800px",
            width: "100%"
          }}
        >
          <div
            style={{
              position: "absolute",
              transform: `translateX(${
                this.state.fraudChoice !== 0 ? "-100%" : "0%"
              })`,
              width: "100%"
            }}
          >
            <FraudMoney />
          </div>
          <div
            style={{
              position: "absolute",
              transform: `translateX(${
                this.state.fraudChoice !== 1 ? "-100%" : "0%"
              })`,
              width: "100%"
            }}
          >
            ((v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM
            - ND)/P
            <Fraud />
          </div>
          <div
            style={{
              position: "absolute",
              transform: `translateX(${
                this.state.fraudChoice !== 2 ? "-100%" : "0%"
              })`,
              width: "100%"
            }}
          >
            (( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 -
            NM - ND) / P) / currencyComponentOfM1
            <Fraud2 />
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            border: ".5px dashed silver",
            width: "100%",
            maxWidth: "300px"
          }}
        >
          Is finance anywhere in there? Well it is 5% of the 60% employed (U.S.)
          but have price-fixed “assets” at at 11x (Cash is market share,
          tangibly)
          <br />
          <br />
          If those are collateralized, but that is not different than being able
          to cash out at these price-fixes & cornering of assets from the market
          participants
          <br />
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            border: ".5px dashed silver",
            width: "100%",
            maxWidth: "600px"
          }}
        >
          <div>
            Banks need to explain to people how we will segway to a sales tax,
            customer-appropriating economy. New fintechs like mine
          </div>
          <br />
          <div>
            We can retain interests of people but remove those of
            government/money-renters by exclusively funding it by the sales tax
            of the location of the purchaser. Fintech should label customer
            location for merchants, and allow location spoofing at checkout to
            protest
          </div>
          <br />
          <div>
            Third victim is Unfair for those entrepreneurs/competitors who don’t
            borrow they have to deal with these “brought forward” prices
          </div>
          <br />
          <div>
            This is what consumer purchase investment gets you. This isn’t
            anyone’s right to manipulate the market by bringing demand forward.
            If they do they better not use compounding interest to compel you to
            pay it back, since that requires the unrequited consent of a saver
            or Fed splits
            <br />
            <br />
            mediates partners among many variables. It’s a way to function in
            the no debt-economy I imagine. Will have a currency if it gets at
            scale to redeem any non perishable on camera in vault.
            <br />
            <br />
            <b>Not taking investors just critics</b>
            <div>
              "It’s [not] a good way to find owners" but they should amortize it
              into a payday loan & reverse to prices without debt (current
              cash/current debt) * collateral
            </div>
          </div>
        </div>
        <div id="t1255155430264799233" />
        <br />
        <div>
          <a href="https://saverparty.xyz">saverparty.xyz</a> - Consumer
          Advocacy
        </div>
        <div>
          <a href="https://micro-theory.com">micro-theory.com</a> - Game theory
        </div>
        <div>
          <a href="https://vau.money">vau.money</a> - Fiscal Solution / Tax 3%
          under first 2k on protestable locations for geohash in transaction
          line for accounting software
        </div>
        <div>
          <a href="https://scopes.cc">scopes.cc</a> - Fiscal Solution /
          Pay-To-Sprint unlock employee debit + timeclock
        </div>
        <div>
          <a href="https://thumbprint.us">thumbprint.us</a> - Republic Solution
        </div>
        WAIT A SECOND: IF {"<"}$10k gifts aren't taxable, but {"<"}$2k sales
        are. I have no problem with allowing non-tax trade for business without
        a brand name but instead a person
        <br />
        <div id="t1269812890653134848" />
        <br />
        <br />
        <div
          style={{ backgroundColor: "rgb(250,250,250)", color: "rgb(5,5,20)" }}
        >
          CNN gaslighting every viewer that 62% (of 330,000,000) want this
          (sample of under 3,000 people, without shuffling to boot). Add more
          results like isidewith or thumbprint.us
          <br />
          when buy Greenland IRS
          <br />
          <br />
          <a
            href="https://saverparty.xyz"
            style={{ color: "black", display: "flex", width: "max-content" }}
          >
            <h1>Saver Party</h1>
            <span style={{ color: "grey" }}>xyz</span>
          </a>
          <span>
            demand-side conservatism (consent, no supply intervention by
            non-producing, scalping, serfdoms, leases and allow prices to be met
            and exactly settled by producers and consumers)
            <br />
            Trade is good for comparative advantage in teamwork akin to absolute
            trading of mutual benefits. All other actors are interference.
          </span>
          <br />
          <div
            ref={this.invite}
            style={{
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            No government-monopsony when given free-rider-immutable authority
            <br />
            2% of the population owns 4400% of the assets
            <br />
            <br />
            Efficiency (labor-equity) Act & Accord
            <br />
            1. Taxes are slavery except free-rider-immutable services, below
            <br />
            2. Sales tax is efficient, under $2k buys:
            <br />
            first grand is $60, second is $30 (6%, 3%)
            <br />
            a. Local police/plow/sanitation
            <br />
            b. tollless roads
            <br />
            c. supreme courts. (new: if justice wouldn't lessen their pay)
            <br />
            <br />
            <b>
              Trash, water & electricity is free-rider-mutable; equity-,
              societal-security and toilets are not
            </b>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            Nick Carducci
            <h2>Regulations</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            I. forbid investment bank "savings" label
            <br />
            II. forbid insurance pyramid schemes, unless gift certificate
            broker...
            <br />
            III. forbid prosecution for non-payment after service
            <br />
            IV. forbid time-based royalty & consumer purchase investment
            <br />
            V. forbid renting more than 5 abodes & storefronts for income
            <br />
            VI. producers refund previously paid debts to cash:debt original
            principal ratio! Where we would be if we had intervened in the
            market intervention of promises raising market price and skipping
            the marginal cost to earn that money based on a combination of
            producer greed & consumer prisoner's dilemma duress or promise
            <br />
            VII. only can disburse business-acc-money upon withdrawal or sale
            and protect per industry not just name
            <br />
            VIII. We can retain interests of people but remove those of
            government/money-renters by exclusively funding it by the sales tax
            of the location of the purchaser. Fintech should label customer
            location for merchants, and allow location spoofing at checkout to
            protest
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div id="t1311661410565398528" />
            <br />
            <h2>Mantra</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            price elasticity is our ally
            <br />
            invoices our enemy
            <br />
            credit is youth-abuse
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2>Candidates</h2>
            <br />
            <div
              style={{
                position: "relative",
                border: "3px solid"
              }}
            >
              <img
                onClick={() => (window.location.href = "https://carducci.sh")}
                style={{ width: "60px", height: "auto" }}
                src="https://www.dl.dropboxusercontent.com/s/eauftjactpq8rnz/me.png?dl=0"
                alt="https://carducci.sh"
              />
            </div>
            Nick Carducci
            <br />
            <div>
              nickcarducci2022.com
              <a
                style={{ textDecoration: "none" }}
                href="https://nickcarducci2022.com"
              >
                &#9998;
              </a>
            </div>
            US Senate 2022
            <br />
            <i>invoices are theft!</i>
            <i>writing "Banking is not a Business"</i>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              alignItems: "flex-start"
            }}
          >
            you gotta earn that money back from the person you buy from, or you
            forced your customers to invest in those. You couldn’t promise
            Amazon shares you don’t own to buy a house. It is cornering assets,
            duress of the borrower and involuntary servitude of the people with
            money, which isn’t even enough. Royalty w/max-profit on business
            lines without market-colonialism, renting out more than you can use
            or bills
          </div>
          <a href="https://micro-theory.com">Micro-Theory.com</a>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            maxWidth: "90%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          Plainly, the federal reserve has abetted contracts compelling them to
          disenfranchise savers, while enforcing them to use the legal tender to
          trade tangible goods <em>by threat of arrest & garnishment</em>
        </div>
        <h2>to these missions</h2>
        <div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h2>
                Steward Mission-Critical Contracts for Entrepreneurs & Investors
              </h2>
            </div>
            <br />
            <div id="t1268992816551792641" />
            <br />
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                border: ".5px dashed silver",
                maxWidth: "100%",
                width: "250px"
              }}
            >
              • Guide return schedule to deliver upon (1) executive withdrawal
              for personal expenses, or (2) revenue. If you choose (2), you can
              rely on our cash flow reports (soon) - account spending, payroll
              or payouts must be unanimous or we will lock future paying on
              behalf of the whole. If you choose (1), the investee or executive
              withdraws are omnipotent on payout execution, but spending and
              payroll can still be halted by any shareholder. However, if we are
              facilitating a sweat equity contract & you choose (1), the
              executive can claim autonomy over payroll and spending. Before
              profit, your initial investment must be approved for each payment.
              If you choose (1) and the account has 50% more that your payout
              you can gain your own payout autonomy, given your position in
              schedule.
            </div>
          </div>
        </div>
        Capital gains or loss is not a tangible loss. It is your fault for not
        trading when an offer was available at the price you prefer. It is a
        valuation of last trade and not all shares outstanding can afford that
        price or are even included in the outstanding lot sometimes
        <br />
        <br />
        inheritance, gift, large item sales and capital gains tax is an&nbsp;
        <a href="https://billbiden.org">issue for antitrust</a>
      </div>
    );
  }
}

export default Intro;
