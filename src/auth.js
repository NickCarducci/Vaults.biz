import React from "react";
import PouchDB from "pouchdb";
import upsert from "pouchdb-upsert";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
  endBefore,
  getDoc,
  deleteDoc
} from "firebase/firestore";
import firebase from "./init-firebase.js";
import PromptAuth from "./PromptAuth.js"; //default export would require no '{}' braces
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signOut
} from "firebase/auth";
import Sudo, { specialFormatting } from "./Sudo.js";
import Bank from "./Bank";
import GDP from "./GDP.js";
import GDP2 from "./GDP2.js";
import Wages from "./WageAge.js";
const forbiddenUsernames = [
  "event",
  "events",
  "club",
  "clubs",
  "shop",
  "shops",
  "restaurant",
  "restaurants",
  "service",
  "services",
  "dept",
  "department",
  "departments",
  "classes",
  "class",
  "oldclass",
  "oldclasses",
  "job",
  "jobs",
  "housing",
  "oldhome",
  "page",
  "pages",
  "venue",
  "venues",
  "forum",
  "posts",
  "post",
  "oldelection",
  "elections",
  "election",
  "case",
  "cases",
  "oldcase",
  "oldcases",
  "budget",
  "budgets",
  "oldbudget",
  "oldbudgets",
  "ordinance",
  "ordinances",
  "new",
  "news",
  "login",
  "logins",
  "doc",
  "docs",
  "private",
  "privacy",
  "legal",
  "terms",
  "law",
  "laws",
  "bill",
  "bills"
];
export const standardCatch = (e) => console.log(e);
const firestore = getFirestore(firebase);
class ClassFinder extends React.Component {
  state = {
    searching: ""
  };
  componentWillUnmount = () => {
    clearTimeout(this.closer);
  };
  componentDidUpdate = () => {
    if (this.state.classOrClub !== this.state.lastselectedCommunity) {
      this.setState({ lastselectedCommunity: this.state.classOrClub }, () => {
        this.state.selectedCommunity &&
          this.state.selectedCommunity !== "" &&
          this.state.classOrClub &&
          this.state.classOrClub !== "" &&
          getDocs(
            query(
              collection(
                firestore,
                this.state.classOrClub === "class" ? "forum" : "entity"
              ),
              where("communityId", "==", this.state.selectedCommunity),
              where("commtype", "==", this.state.classOrClub),
              orderBy("eventDate", "desc"),
              limit(10)
            )
          ).then((querySnapshot) => {
            this.setState({
              first: querySnapshot.docs[0],
              last: querySnapshot.docs[querySnapshot.docs.length - 1],
              class: querySnapshot.docs
                .map((doc) => {
                  return doc.exists() && { ...doc.data(), id: doc.id };
                })
                .filter((x) => x)
            });
          });
      });
    }
  };
  paginate = (key) => {
    getDocs(
      query(
        collection(
          firestore,
          this.state.classOrClub === "class" ? "forum" : "entity"
        ),
        where("communityId", "==", this.state.selectedCommunity),
        where("commtype", "==", this.state.classOrClub),
        orderBy("eventDate", "desc"),
        key === "first"
          ? endBefore(this.state.first)
          : startAfter(this.state.last),
        limit(10)
      ),
      (querySnapshot) => {
        this.setState({
          first: querySnapshot.docs[0],
          last: querySnapshot.docs[querySnapshot.docs.length - 1],
          class: querySnapshot.docs
            .map((doc) => {
              return doc.exists() && { ...doc.data(), id: doc.id };
            })
            .filter((x) => x)
        });
      }
    );
  };
  render() {
    //console.log(this.props.auth);
    return (
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <form
            style={{ display: "flex" }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div
              onClick={() => {
                this.props.navigate("/");
                this.props.setApp({
                  chatsopen: !this.props.chatsopen
                });
              }}
            >
              Chats
            </div>
            <input
              placeholder="Communities"
              style={{
                paddingLeft: "10px",
                margin: "10px",
                height: "36px",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "1px solid black"
              }}
              value={this.state.searching}
              onChange={(e) => {
                var va = e.target.value;
                this.setState(
                  {
                    searching: specialFormatting(va)
                  },
                  () => {
                    clearTimeout(this.closer);
                    this.closer = setTimeout(() => {
                      getDocs(
                        query(
                          collection(firestore, "communities"),
                          where(
                            "messageAsArray",
                            "array-contains",
                            this.state.searching
                          )
                        )
                      ).then((querySnapshot) => {
                        this.setState({
                          communities: querySnapshot.docs
                            .map((doc) => {
                              return (
                                doc.exists() && { ...doc.data(), id: doc.id }
                              );
                            })
                            .filter((x) => x)
                        });
                      });
                    }, 2000);
                  }
                );
              }}
            />
            {this.state.searching !== "" && (
              <div
                onClick={() => this.setState({ searching: "" })}
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "0px 4px",
                  height: "min-content"
                }}
              >
                &times;
              </div>
            )}
          </form>
          <div
            style={{
              padding: "10px",
              border: "2px solid",
              borderRadius: "6px"
            }}
            onClick={() => this.setState({ openNew: !this.state.openNew })}
          >
            +
          </div>
        </div>
        {this.state.communities && (
          <select
            onChange={(e) =>
              this.setState({ selectedCommunity: e.target.value })
            }
          >
            {["", ...this.state.communities].map((x, i) => (
              <option key={i} value={x.id}>
                {x.message}
              </option>
            ))}
          </select>
        )}
        {this.state.selectedCommunity && (
          <select
            onChange={(e) =>
              this.setState({
                classOrClub: e.target.value,
                first: null,
                last: null
              })
            }
          >
            {["", "class", "club"].map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        )}
        {this.state.class && (
          <div>
            {this.state.class.map((x, i) => {
              return (
                <div key={i} style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      if (this.props.pathname.includes("/sd/")) {
                        this.props.setApp({
                          entityType: "user",
                          entityId: null
                        });
                        return this.props.navigate("/");
                      }
                      this.props.setApp({
                        entityType: "class",
                        entityId: x.id,
                        chatsopen: true
                      });
                    }}
                  >
                    {x.message}:
                    {new Date(x.eventDate.seconds * 1000).toLocaleDateString()}
                  </div>
                  <div
                    style={{
                      border: "1px solid",
                      borderRadius: "5px",
                      padding: "4px",
                      margin: "0px 4px"
                    }}
                    onClick={() => {
                      this.props.setApp({
                        entityType: "user",
                        entityId: null
                      });
                      this.props.navigate(`/sd/${x.commtype}/${x.id}`);
                    }}
                  >
                    calendar
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%"
              }}
            >
              <div onClick={() => this.state.first && this.paginate("first")}>
                {"<"}
              </div>
              <div onClick={() => this.state.last && this.paginate("last")}>
                {">"}
              </div>
            </div>
          </div>
        )}
        {(this.state.openNew || this.props.pathname.startsWith("/new")) && (
          <Make
            initial={"plan"}
            auth={this.props.auth}
            navigate={this.props.navigate}
            entityType={this.props.entityType}
            entityId={this.props.entityId}
            recipients={[]}
            location={this.props.location}
            hydrateUser={this.props.hydrateUser}
            getNotes={this.props.getNotes}
            pathname={this.props.pathname}
          />
        )}
      </div>
    );
  }
}
export class PDB {
  //Random Scope for API security
  constructor(name) {
    PouchDB.plugin(upsert);

    this.deletion = (d, db) => db.remove(d).catch(standardCatch);
    this.destroy = (db) => db.destroy();
    this.set = (db, c) =>
      !c._id
        ? window.alert(
            "pouchdb needs ._id key:value: JSON.parse= " + JSON.parse(c)
          )
        : db
            .upsert(c._id, (copy) => {
              copy = { ...c };
              return copy;
            })
            .catch(standardCatch);
    this.read = async (db, notes) =>
      await db
        .allDocs({ include_docs: true })
        .then((allNotes) =>
          Promise.all(
            allNotes.rows.map(async (n) => await (notes[n.doc.key] = n.doc))
          )
        )
        .catch(standardCatch);
    this.db = new PouchDB("thumbprint", {
      revs_limit: 1,
      auto_compaction: true
    });
  }
  deleteNote = (note) => this.deletion(note, this.db);
  deleteKeys = () => this.destroy(this.db);
  getAllNotes = async () =>
    //let notes = {};
    await this.read(this.db, {});
  createNote = async (note) => {
    return await this.set(this.db, note);
  };
}
class Auth extends React.Component {
  constructor(props) {
    super(props);
    var storedAuth = undefined;
    window.meAuth = undefined;
    this.state = {
      notes: [],
      db: new PDB(),
      auth: undefined,
      user: undefined,
      meAuth: {},
      storedAuth,
      recordedUsers: [],
      users: [],
      recordedEntities: [],
      entities: [],
      entityId: null,
      entityType: "user",
      selectedOption: "340"
    };
    this.ra = React.createRef();
    this.pa = React.createRef();
    this.gui = React.createRef();
    this.Vintages = React.createRef();
    this.hydrateUser.closer = this.hydrateUser.bind(this);
    this.hydrateUser.user = this.hydrateUser.bind(this);
  }
  componentWillUnmount = () => {
    clearTimeout(this.closer);
    this.hydrateUser.closer();
  };
  async handleDelete(id) {
    let { notes } = this.state;
    var note = notes.find((x) => x._id === id);

    if (note) {
      deleteDoc(doc(firestore, "chats", note._id))
        .then((ref) => {
          console.log("deleted plan from messages " + note._id);
        })
        .catch(standardCatch);
      deleteDoc(doc(firestore, "calendar", note._id))
        .then((ref) => {
          console.log("deleted plan from calendar " + note._id);
        })
        .catch(standardCatch);
      await this.state.db
        .deleteNote(note)
        .then(() => {
          console.log("deleted plan from local " + note._id);
          this.getNotes();
        })
        .catch(standardCatch);
    } else {
      console.log("no plan to delete");
    }
  }
  handleSave = async (note, method) => {
    delete note.term;
    delete note.saving;
    delete note.planDateOpen;
    delete note.planSettingsOpen;
    delete note.predictions;
    delete note.enteredValue;
    var foo = await this.state.db[method](note);
    return foo && this.getNotes();
  };
  componentDidUpdate = (prevProps) => {
    if (window.meAuth !== this.state.lastAuth) {
      //console.log("window.meAuth", window.meAuth);
      this.setState({ lastAuth: window.meAuth }, () => {
        //console.log("this.state.lastAuth", this.state.lastAuth);
        if (window.meAuth !== undefined && this.props.rediret) {
          this.props.navigate(this.props.rediret);
        }
      });
    }
  };
  hydrateUser = (userId) => {
    let fine = true;
    const { recordedUsers } = this.state;

    return {
      user: async () => {
        if (!userId) return null;
        if (!recordedUsers.includes(userId)) {
          this.setState({
            recordedUsers: [...recordedUsers, userId]
          });
          var close = onSnapshot(
            doc(firestore, "users", userId),
            async (doc) => {
              if (!userId) close();
              if (doc.exists()) {
                var user = doc.data();
                user.id = doc.id;

                var skills = [
                  ...(user.experiences ? user.experiences : []),
                  ...(user.education ? user.education : []),
                  ...(user.hobbies ? user.hobbies : [])
                ];
                user.skills = skills.map(
                  (x) => x.charAt(0).toUpperCase() + x.slice(1)
                );

                var rest = this.state.users.filter((x) => x.id !== user.id);

                this.setState({ users: [...rest, user] });
              }
            },
            standardCatch
          );
          return await new Promise(async (resolve, reject) => {
            !fine && reject(!fine);
            getDoc(doc(firestore, "users", userId))
              .then(async (doc) => {
                if (doc.exists()) {
                  var user = doc.data();
                  user.id = doc.id;

                  var skills = [
                    ...(user.experiences ? user.experiences : []),
                    ...(user.education ? user.education : []),
                    ...(user.hobbies ? user.hobbies : [])
                  ];
                  user.skills = skills.map(
                    (x) => x.charAt(0).toUpperCase() + x.slice(1)
                  );

                  var rest = this.state.users.filter((x) => x.id !== user.id);
                  this.setState({ users: [...rest, user] });
                  return user && resolve(JSON.stringify(user));
                } else return resolve("{}");
              })
              .catch(standardCatch);
            if (!userId) {
              close();
            }
          });
        } else {
          return await new Promise(async (resolve, reject) => {
            !fine && reject(!fine);

            //const tmt = setInterval(() => {
            var user = this.state.users.find((x) => x.id === userId);

            if (user) {
              //clearInterval(tmt);
              resolve(JSON.stringify(user));
            } else resolve("{}");
            //}, 2000);
            //this.recheck.push(tmt);
          });
        }
      },
      closer: () => (fine = false)
    };
  };
  getEntities = (meAuth) => {
    const runRoles = () => {
      let iAmRepresentative = [];
      let iAmJudge = [];
      let iAmCandidate = [];
      onSnapshot(
        query(
          collection(firestore, "communities"),
          where("representatives", "array-contains", meAuth.uid)
        ),
        (querySnapshot) =>
          querySnapshot.docs.forEach((doc, i) => {
            var foo = doc.data();
            foo.id = doc.id;
            if (querySnapshot.docs.length === i) iAmRepresentative.push(foo);
          }),
        standardCatch
      );
      onSnapshot(
        query(
          collection(firestore, "communities"),
          where("judges", "array-contains", meAuth.uid)
        ),
        (querySnapshot) =>
          querySnapshot.docs.forEach((doc, i) => {
            var foo = doc.data();
            foo.id = doc.id;
            if (querySnapshot.docs.length === i) iAmJudge.push(foo);
          }),
        standardCatch
      );
      onSnapshot(
        query(
          collection(firestore, "elections"),
          where("candidates", "array-contains", meAuth.uid)
        ),
        (querySnapshot) =>
          querySnapshot.docs.forEach((doc, i) => {
            var foo = doc.data();
            foo.id = doc.id;
            if (querySnapshot.docs.length === i) iAmCandidate.push(foo);
          }),
        standardCatch
      );
      //snapshots cannot return without 'state', which uses DOM, or props:{}
    };
    onSnapshot(
      query(
        collection(firestore, "communities"),
        where("authorId", "==", meAuth.uid)
      ),
      (querySnapshot) => {
        let p = 0;
        let myCommunities = [];
        querySnapshot.docs.forEach((doc) => {
          p++;
          if (doc.exists) {
            var foo = doc.data();
            foo.id = doc.id;
            if (foo.authorId === meAuth.uid) myCommunities.push(foo);
          }
        });
        if (p === querySnapshot.docs.length)
          onSnapshot(
            query(
              collection(firestore, "communities"),
              where("admin", "array-contains", meAuth.uid)
            ),
            (querySnapshot) => {
              let pp = 0;
              querySnapshot.docs.forEach((doc) => {
                pp++;
                if (doc.exists) {
                  var foo = doc.data();
                  foo.id = doc.id;
                  if (foo.authorId === meAuth.uid) {
                    myCommunities.push(foo);
                  }
                }
              });
              if (pp === querySnapshot.docs.length)
                this.setState({
                  myCommunities
                });
            },
            standardCatch
          );
      },
      standardCatch
    );

    onSnapshot(
      query(
        collection(firestore, "tickets"),
        where("admittees", "array-contains", meAuth.uid)
      ),
      (querySnapshot) => {
        let tickets = [];
        let p = 0;
        querySnapshot.docs.forEach((doc) => {
          p++;
          if (doc.exists) {
            var foo = doc.data();
            foo.id = doc.id;
            tickets.push(foo);
          }
        });
        if (querySnapshot.docs.length === p) this.setState({ tickets });
      },
      standardCatch
    );

    runRoles();
  };
  getFolders = async (folderReference) =>
    await this.props.storageRef
      .child(folderReference)
      .listAll()
      .then((res) => {
        console.log("folders in: ");
        console.log(folderReference);
        //console.log(res); //{prefixes: Array(0), items: Array(1)}
        let folders = [];
        let p = 0;
        res._delegate.prefixes.forEach((reference) => {
          p++;
          // All the items under listRef.
          var food = reference._location.path_;
          //console.log(food);
          var foo = food.split(`personalCaptures/${window.meAuth.uid}/`)[1];
          folders.push(foo);
        });
        if (res.prefixes.length === p) {
          //console.log(folders);
          this.setState({ folders });
        }
      })
      .catch(standardCatch);
  //How many Italian Americans were fishmongers in the 18th century?
  addUserDatas = (meAuth, b) => {
    onSnapshot(
      doc(firestore, "userDatas", meAuth.uid),
      (doc) => {
        var userDatas = undefined;
        if (doc.exists) {
          userDatas = doc.data();
          if (userDatas.email && userDatas.email === meAuth.email) {
            userDatas.doc(meAuth.uid).update({
              email: null,
              confirmedEmails: firebase.firestore.FieldValue.arrayUnion(
                meAuth.email
              ),
              defaultEmail: userDatas.defaultEmail
                ? userDatas.defaultEmail
                : meAuth.email
            });
            b.email = null;
          }
          if (userDatas.banked)
            onSnapshot(
              query(
                collection(firestore, "banks"),
                where("owner", "==", meAuth.uid)
              ),
              (querySnapshot) => {
                let q = 0;
                let banks = [];
                querySnapshot.docs.forEach((doc) => {
                  q++;
                  if (doc.exists) {
                    var bank = doc.data();
                    bank.id = doc.id;
                    banks.push(bank);
                  }
                });
                if (querySnapshot.docs.length === q) {
                  userDatas.banks = banks;
                }
              },
              standardCatch
            );

          if (this.state.userDatas !== userDatas) {
            delete b.defaultEmail;
            this.setState(
              {
                user: { ...b, ...userDatas },
                userDatas
              },
              () => this.getEntities(meAuth)
            );
          }
        }
      },
      standardCatch
    );
  };
  render() {
    //console.log(this.state.entityId);
    const hiddenUserData = (ath) => {
        //console.log("hiddenuserdata");
        onSnapshot(
          doc(firestore, "userDatas", ath.uid),
          (doc) => {
            var userDatas = undefined;
            if (doc.exists()) {
              var u = this.state.user;
              userDatas = doc.data(); //{...,doc.id}

              //delete u.defaultEmail;
              const user = {
                ...u,
                ...userDatas,
                userDatas: true
              };
              this.setState(
                {
                  user,
                  userDatas
                }
                //() => this.getEntities(meAuth)
              );
            } else
              console.log(
                `user: ${
                  this.state.user.username //+ " " + ath.uid
                }, has no hidden data`
              );
          },
          standardCatch
        );
      },
      logoutofapp = (yes) => {
        var answer = yes || window.confirm("Are you sure you want to log out?");
        if (!answer) {
          //this.ra.current.click();
          return this.gui.current.click();
        } //ra;//null;
        signOut(getAuth())
          .then(async () => {
            console.log("logged out");
            await setPersistence(getAuth(), browserSessionPersistence);
            this.setState({
              user: undefined,
              auth: undefined
            });
            this.ra.current.click();
          })
          .catch((err) => {
            console.log(err);
          });
      };
    const meAuth =
      window.meAuth &&
      window.meAuth.constructor === Object &&
      Object.keys(window.meAuth).length > 0
        ? window.meAuth
        : undefined;
    return this.props.pathname === "/party" ? (
      <div>
        <div
          style={{
            display: "flex"
          }}
        >
          <label>
            <input
              type="radio"
              value={300}
              checked={this.state.selectedOption === "300"}
              onChange={(e) =>
                this.setState({ selectedOption: e.target.value })
              }
            />
            300
          </label>
          <label>
            <input
              type="radio"
              value={600}
              checked={this.state.selectedOption === "600"}
              onChange={(e) =>
                this.setState({ selectedOption: e.target.value })
              }
            />
            600
          </label>
        </div>
        <iframe
          style={{
            border: "none",
            height: "600px",
            width: "670px"
          }}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=1auHh&width=${this.state.selectedOption}&height=505`}
        />
        <a href="https://fred.stlouisfed.org/graph/?g=1auHh">
          https://fred.stlouisfed.org/graph/?g=1auHh
        </a>
        <br />
        <br />
        <Wages
          lastWidth={Math.min(
            600,
            (isNaN(this.props.lastWidth) ? 300 : this.props.lastWidth) - 20
          )}
          style={{
            margin: "5px",
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <br />
      </div>
    ) : this.props.pathname === "/gdp" ? (
      <div>
        <GDP
          lastWidth={Math.min(
            600,
            (isNaN(this.props.lastWidth) ? 300 : this.props.lastWidth) - 20
          )}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <GDP2
          lastWidth={Math.min(
            600,
            (isNaN(this.props.lastWidth) ? 300 : this.props.lastWidth) - 20
          )}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
      </div>
    ) : (
      <div style={{ maxWidth: "500px" }}>
        <PromptAuth
          ref={{
            current: {
              pa: this.pa,
              gui: this.gui,
              ra: this.ra
            }
          }}
          onPromptToLogin={() => {}} //this.props.history.push("/login")}
          verbose={false}
          onStart={() => {
            //if (window.meAuth !== undefined) return this.props.navigate("/");
            window.alert("loading authentication...");
          }}
          onEnd={() => {
            //window.alert("loading authentication...");
          }}
          windowKey={"meAuth"} //window.meAuth
          hydrateUser={(me, reload, isStored) => {
            if (me && me.constructor === Object) {
              if (isStored) return console.log("isStored: ", me); //all but denied

              if (me.isAnonymous) return console.log("anonymous: ", me);

              if (!me.uid)
                return this.setState({
                  user: undefined,
                  auth: undefined
                });
              //console.log("me", me);
              //this.pa.current.click();

              onSnapshot(
                doc(firestore, "users", me.uid),
                (doc) =>
                  doc.exists() &&
                  this.setState(
                    {
                      user: { ...doc.data(), id: doc.id },
                      loaded: true
                    },
                    () => hiddenUserData(me)
                  )
              );
              return reload && window.location.reload();
            }
            console.log("me", me);
          }} //detract alternative, kurt carface bank
          onFinish={() => {}}
          meAuth={window.meAuth === undefined ? null : window.meAuth}
        />
        {meAuth === undefined ? (
          <Sudo
            ref={{ current: {} }}
            forbiddenUsernames={forbiddenUsernames}
            phoneNumberCollection={"numbers"}
            width={this.props.width}
            rooturi={"https://thumbprint.app/"} //comment out to use click
            homeuri={"https://thumbprint.app"} // emulateRoot onroot instead
            logoutofapp={this.props.logoutofapp}
            auth={meAuth}
            lastWidth={this.props.lastWidth}
            availableHeight={this.props.appHeight}
            backgroundColor={null} //transparent
            position={"relative"}
            supportemail={"nick@thumbprint.us"}
            welcomeName={"Thumbprint.us - Social calendar"}
            onroot={true}
            emulateRoot={(e) => this.setState(e)}
            getUserInfo={this.props.getUserInfo}
            setAuth={(auth) =>
              this.setState(auth, () => this.pa.current.click())
            }
            //
            meAuth={window.meAuth}
            user={this.state.user}
            pathname={this.props.pathname}
            navigate={this.props.navigate}
            useTopComment={null}
            memberMessage=""
            subTop=""
            useTitle={<span></span>}
            useCan={null} //trash
            useCanComment={null}
            root={(a) => this.state.onroot && <div></div>}
            rootArguments={[
              {
                current: {}
              }
            ]}
            subRoot=""
            //emulateRoot={() => this.props.navigate("/")}
            home={!this.state.onroot && <div></div>} //Are drug gangs not pharmacists because they have no shop nor employees?
            //Do employees of regular businesses with diverse customers have to report gifted sweat up to $15,000 per year?
          />
        ) : (
          <button
            onClick={() => logoutofapp()}
            style={{
              wordWrap: "unset",
              width: "max-content",
              border: "1px solid",
              borderRadius: "2px",
              padding: "3px 6px"
            }}
          >
            logout of app (
            {this.state.user !== undefined && this.state.user.username})
          </button>
        )}
        <Bank
          getUserInfo={() => this.gui.current.click()}
          user={this.state.user}
          auth={meAuth}
          navigate={this.props.navigate}
          pathname={this.props.pathname}
        />
        <br />
        A limit on compound interest.
        <br />
        For the company that might need extra time.
        <br />
        Payday loans without compound interest late fees nor discharges.
        <br />
        Merchant category code (geographical) after the cost of living
        garnishable.
      </div>
    );
  }
}
export default Auth;

