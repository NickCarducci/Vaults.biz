import React from "react";
import "./styles.css";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import Archive from "./Archive";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
//import html2canvas from "html2canvas";
//import Tableu from "./Tableau";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //offScroll: true,
      ternaryHeight: document.documentElement.scrollHeight,
      bar: 0,
      listeners: [],
      scrollPlacementHeight: 0,
      width: window.innerWidth,
      //fraudChoice: 4,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari"),
      openForm: true,
      //settleDropboxFree: true,
      browser: name,
      scrollTop: 0
    };
    let genChildRefs3 = [];
    for (let i = 620; i < 820; i++) {
      //this["scrollImg" + i] = React.createRef();
      genChildRefs3.push(["scrollImg" + i, React.createRef()]); // this["scrollImg" + i]
    }
    let genChildRefs2 = [];
    for (let i = 420; i < 620; i++) {
      genChildRefs2.push(["scrollImg" + i, React.createRef()]);
    }
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    //const destruct = (obj, ...keys) =>
    //keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

    //const subset1 = destruct(object, 'color');
    /*const subset1 = destruct(
      ref.current,
      "chapter2",
      "sci",
      "trust",
      "rec",
      "air",
      "immi",
      ...dynamic1
    );*/

    //const obj = Object.fromEntries(entries);
    this.insurance = React.createRef();
    this.saver = React.createRef();
    this.dns = React.createRef();
    this.science = React.createRef();
    this.biz = React.createRef();
    this.crime = React.createRef();
    this.health = React.createRef();
    this.trading = React.createRef();
    this.canvas = React.createRef();
    this.chapter1 = React.createRef();
    this.work = React.createRef();
    this.gdp = React.createRef();
    this.party = React.createRef();
    this.marx = React.createRef();
    this.immi = React.createRef();
    this.rec = React.createRef();
    this.air = React.createRef();
    this.china = React.createRef();
    this.voting = React.createRef();
    this.trade = React.createRef();
    this.first = React.createRef();
    this.chapter2 = React.createRef();
    this.calc = React.createRef();
    this.sci = React.createRef();
    this.con = React.createRef();
    this.trust = React.createRef();
    this.sdr = React.createRef();
    this.bottom = React.createRef();
    this.chapter3 = React.createRef();
    this.plandemic = React.createRef();
    this.education = React.createRef();
    this.redistricting = React.createRef();
    this.psych = React.createRef();
    this.obamacare = React.createRef();
    const entries = new Map([
      ...genChildRefs2,
      /*ref: {
        current: null
      },*/
      ["chapter2", this.chapter2],
      ["sci", this.sci],
      ["trust", this.trust],
      ["rec", this.rec],
      ["air", this.air],
      ["immi", this.immi],
      ["first", this.first],
      ["calc", this.calc],
      ["voting", this.voting],
      ["trade", this.trade],
      ["china", this.china],
      ["obamacare", this.obamacare],
      //
      ...genChildRefs3,
      //ref: { current: null },
      ["chapter3", this.chapter3],
      ["marx", this.marx],
      ["sdr", this.sdr],
      ["gdp", this.gdp],
      ["work", this.work],
      ["party", this.party]
    ]);
    const immutable = {
      current: Object.fromEntries(entries)
    };
    /*{
        ...genChildRefs2,
        /*ref: {
          current: null
        },*
        chapter2: this.chapter2,
        sci: this.sci,
        trust: this.trust,
        rec: this.rec,
        air: this.air,
        immi: this.immi,
        //
        ...genChildRefs3,
        //ref: { current: null },
        chapter3: this.chapter3,
        marx: this.marx,
        sdr: this.sdr,
        gdp: this.gdp,
        work: this.work,
        party: this.party
      }this.ch2refs = React.createRef([
      this.chapter2,
      this.sci,
      this.trust,
      this.sdr,
      this.rec,
      this.work,
      this.gdp,
      this.party,
      this.marx,
      this.air,
      this.immi
    ]);*/
    /*const convertArrayToObject = (array, key) => {
      const initialValue = {};
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item
        };
      }, initialValue);
    };*/
    //console.log(genChildRefs);
    this.ch2refs = immutable;
  }
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          this.getLabel(true);
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.getLabel();
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  getLabel = (dont) => {
    /*const { scrollPlacementHeight } = this.state;
    var topProgress = Math.round(
      (scrollPlacementHeight / (window.innerHeight - 215)) *
        document.documentElement.scrollHeight //window.scrollY
    );*/
    const scrollPlacementHeight = Math.round(
      (window.scrollY / document.documentElement.scrollHeight) *
        (window.innerHeight - 115)
    );
    //console.log(window.scrollY);
    this.setState(
      {
        scrollPlacementHeight
        // provisionalScroll: window.scrollY
      },
      () => !dont && this.label(window.scrollY)
    );
  };
  componentDidMount = () => {
    this.refresh(true);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.refresh);

    /*this.ch2refs = React.createRef([
      this.chapter2,
      this.sci,
      this.trust,
      this.sdr,
      this.rec,
      this.work,
      this.gdp,
      this.party,
      this.marx,
      this.air,
      this.immi
    ]);*/
    /*html2canvas(this.chapter1.current).then((canvas) =>
      canvas.toBlob((blob) =>
        this.setState(
          {
            chapter1: window.URL.createObjectURL(blob)
          },
          () =>
            html2canvas(this.chapter2.current).then((canvas) => {
              console.log(canvas);
              canvas.toBlob((blob) =>
                this.setState({
                  chapter2: window.URL.createObjectURL(blob)
                })
              );
            })
        )
      )
    );*/
    const { scrollPlacementHeight } = this.state;
    var topProgress = Math.round(
      (scrollPlacementHeight / (window.innerHeight - 215)) *
        document.documentElement.scrollHeight //window.scrollY   this.state.ternaryHeight //
    );
    this.label(topProgress);
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    const height = this.state.ios
      ? window.screen.availHeight
      : window.innerHeight;

    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          height,
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.labelTimer);
    clearInterval(this.check);
    clearTimeout(this.moun);
    clearTimeout(this.mountt);
    clearTimeout(this.dragEnd);
    clearTimeout(this.dragMove);
    clearTimeout(this.dragView);
    clearTimeout(this.resizeTimer);
    clearTimeout(this.moving);
    //clearInterval(this.set);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.refresh);
    this.state.listeners.forEach((x) => {
      window.removeEventListener(...x);
    });
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearInterval(this.check);
      clearTimeout(this.moun);
      clearTimeout(this.mountt);
      const check = () => {
        const pager = (planner, current) => {
          /*clearInterval(this.set);
          const ternaryHeight = !this.state.planner
            ? this.chapter1.current
              ? this.chapter1.current.offsetHeight
              : (this.set = setInterval(() => pager(true,current), 1000))
            : !this.chapter3.current || !this.chapter3.current
            ? (this.set = setInterval(pager(true,current), 1000)) //document.documentElement.scrollHeight
            : this.chapter3.current.offsetHeight +
              this.chapter2.current.offsetHeight;*/
          // console.log(ternaryHeight);
          //console.log(current);
          if (
            !this.chapter1.current ||
            !this.chapter2.current ||
            !this.chapter3.current
          )
            return null;
          this.setState({ offScroll: true }, () => {
            //console.log(current, this.chapter1.current.offsetHeight);
            window.scroll(
              0,
              planner === "arc"
                ? this.chapter1.current.offsetHeight +
                    this.chapter2.current.offsetHeight +
                    current
                : !planner
                ? this.chapter1.current.offsetHeight + current
                : current
            );
            clearInterval(this.check);
            this.setState({ offScroll: false });
            /*this.setState(
            {
              ternaryHeight
            }*/
            /* () => {
              this.setState({
                ternaryHeight: this.state.planner
                  ? this.chapter1.current
                    ? this.chapter1.current.offsetHeight
                    : 0
                  : !this.chapter3.current || !this.chapter3.current
                  ? 0 //document.documentElement.scrollHeight
                  : this.chapter3.current.offsetHeight +
                    this.chapter2.current.offsetHeight
              });
            }*/
          });
        };
        if (this.props.pathname === "/") {
          this.setState({ planner: true });
        } else if (this.props.pathname === "/science") {
          this.setState(
            { planner: true },
            () => pager(true, this.science.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/redistricting") {
          this.setState(
            { planner: true },
            () => pager(true, this.redistricting.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/insurance") {
          this.setState(
            { planner: true },
            () => pager(true, this.insurance.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/education") {
          this.setState(
            { planner: true },
            () => pager(true, this.education.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/crime") {
          this.setState(
            { planner: true },
            () => pager(true, this.crime.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/health") {
          this.setState(
            { planner: true },
            () => pager(true, this.health.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/dns") {
          this.setState(
            { planner: true },
            () => pager(true, this.dns.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/trading") {
          this.setState({ planner: true }, () =>
            pager(true, this.trading.current.offsetTop)
          );
        } else if (this.props.pathname === "/con") {
          this.setState(
            { planner: true },
            () => pager(true, this.con.current.offsetTop) //content,comms
          );
        } else if (this.props.pathname === "/psych") {
          this.setState({ planner: true }, () =>
            pager(true, this.psych.current.offsetTop)
          );
        } else if (this.props.pathname === "/trust") {
          this.setState({ planner: true }, () =>
            pager(true, this.trust.current.offsetTop)
          );
        } else if (this.props.pathname === "/biz") {
          this.setState(
            { planner: true },
            () => pager(true, this.biz.current.offsetTop) //content,comms
          );
        } else if (this.props.pathname === "/work") {
          pager("arc", this.work.current.offsetTop);
        } else if (this.props.pathname === "/gdp") {
          pager("arc", this.gdp.current.offsetTop);
        } else if (this.props.pathname === "/party") {
          pager("arc", this.party.current.offsetTop);
        } else if (this.props.pathname === "/marx") {
          pager("arc", this.marx.current.offsetTop);
        } else if (this.props.pathname === "/calc") {
          pager(null, this.calc.current.offsetTop);
        } else if (this.props.pathname === "/obamacare") {
          pager(null, this.obamacare.current.offsetTop);
        } else if (this.props.pathname === "/first") {
          pager(null, this.first.current.offsetTop);
        } else if (this.props.pathname === "/voting") {
          pager(null, this.voting.current.offsetTop);
        } else if (this.props.pathname === "/trade") {
          pager(null, this.trade.current.offsetTop);
        } else if (this.props.pathname === "/air") {
          pager(null, this.air.current.offsetTop);
        } else if (this.props.pathname === "/sci") {
          pager(null, this.sci.current.offsetTop); //costing lives' Salcedo
        } else if (this.props.pathname === "/sdr") {
          pager(null, this.sdr.current.offsetTop);
        } else if (["/receipts", "/rec"].includes(this.props.pathname)) {
          pager(null, this.rec.current.offsetTop);
        } else if (this.props.pathname === "/immi") {
          //console.log("immi");
          pager(null, this.immi.current.offsetTop);
        } else if (this.props.pathname === "/china") {
          pager(null, this.china.current.offsetTop);
        }
      };
      check();
      this.check = setInterval(check, 400);
      this.moun = setTimeout(check, 4000);
      this.mountt = setTimeout(check, 7000);
    }
  };
  saveListeners = (listener, backcall) => {
    this.setState({
      listeners: [
        ...this.state.listeners.filter((x) => x !== listener),
        [listener, backcall]
      ]
    });
  }; /*
  handleMove = (ev, touch) => {
    ev.preventDefault();
    ev.stopPropagation();
    var overMouseDrag = null;
    //var onUpEnd = null;
    var listener = null;
    if (touch) {
      listener = "touchmove";
      //onUpEnd = "ontouchup";
      overMouseDrag = "ontouchenter";
    } else {
      listener = "mousemove";
      //onUpEnd = "onmouseup";
      overMouseDrag = "ondragover";
    }
    const onMouseMove = (ev) => {
      const timeout = 150;
      const e = touch ? ev.touches[0].clientY : ev.clientY;
      const x = touch ? ev.touches[0].clientX : ev.clientX;
      const scrollPlacementHeight = e - 55;
      if (
        e &&
        timeout &&
        !isNaN(scrollPlacementHeight) &&
        scrollPlacementHeight !== this.state.scrollPlacementHeight &&
        scrollPlacementHeight > -5
      ) {
        this.setState(
          { scrollPlacementHeight, offScroll: true, provisionalScroll: e },
          () => {
            //const { scrollPlacementHeight } = this.state;
            var topProgress = Math.round(
              (scrollPlacementHeight / (window.innerHeight - 215)) *
                document.documentElement.scrollHeight //window.scrollY
            );

            clearTimeout(this.dragView);
            this.dragView = setTimeout(() => {
              window.scroll(0, topProgress);

              const ifEnded = (noTime) => {
                window.removeEventListener(listener, onMouseMove);
                window.removeEventListener(overMouseDrag, overIt);

                //clearTimeout(this.dragEnd);
                //this.dragEnd = setTimeout(
                //() => {
                this.setState({ offScroll: false }, () => {
                  this.label(topProgress);
                });
                //},
                //noTime ? 0 : 3500
                //);
              };

              clearTimeout(this.dragMove);
              this.dragMove = setTimeout(ifEnded, timeout);
              if (window.innerWidth - x > 300) {
                console.log("oob");
                clearTimeout(this.dragMove);
                ifEnded(true);
              }
            }, 50);
          }
        );
      }
    };
    const overIt = (event) => event.preventDefault();

    window.addEventListener(overMouseDrag, overIt, false);
    window.addEventListener(listener, onMouseMove);
    this.saveListeners(listener, onMouseMove);
  };*/

  handleMove = (ev, touch, end) => {
    if (this.state.offScroll) return null;
    const move = () => {
      if (!end) {
        ev.preventDefault();
        ev.stopPropagation();
        //ev.nativeEvent.stopImmediatePropagation();
      }
      //console.log("moving");
      const listener = touch ? "touchmove" : "mousemove";
      const overMouseDrag = touch ? "touchenter" : "dragover";
      const onUpEnd = touch ? "touchend" : "mouseup";
      const overIt = (event) => event.preventDefault();
      window.addEventListener(overMouseDrag, overIt);
      this.saveListeners(overMouseDrag, overIt);
      const onMouseMove = (ev) => {
        //ev.preventDefault();
        //ev.stopPropagation();
        //const timeout = 150;
        const e = touch ? ev.touches[0].clientY : ev.clientY;
        const x = touch ? ev.touches[0].clientX : ev.clientX;
        const scrollPlacementHeight = e - 55;
        this.setState({ scrollPlacementHeight, provisionalScroll: e }, () => {
          var topProgress = //Math.round(
            (scrollPlacementHeight / (window.innerHeight - 215)) *
            document.documentElement.scrollHeight; //window.scrollY
          //);
          //console.log(document.documentElement.scrollHeight);
          if (touch) {
            clearTimeout(this.moving);
            this.moving = setTimeout(() => window.scroll(0, topProgress), 0);
          } else {
            window.scroll(0, topProgress);
          }
          const ifEnded = (noTime) => {
            clearTimeout(this.dragEnd);
            this.dragEnd = setTimeout(
              () => {
                window.removeEventListener(listener, onMouseMove);
                window.removeEventListener(overMouseDrag, overIt);
                this.setState({ offScroll: false, noscroll: false }, () => {
                  this.label(topProgress);
                });
              },
              noTime ? 0 : 300
            );
          };

          /*var last = this.state.topProgress;
          this.setState({ topProgress }, () => {
            if (!end) {
              window.scroll(0, topProgress);
              clearTimeout(this.dragMove);
              this.dragMove = setTimeout(ifEnded, timeout);
            }
            if (
              end ||
              Math.abs(topProgress - last) < 0.0000000001
              //&&window.innerWidth - x > 300
            ) {
              clearTimeout(this.dragEnd);
              this.dragEnd = setTimeout(() => {
                console.log("oob");
                clearTimeout(this.dragMove);
                ifEnded(true);
              }, 1000);
            }
          });*/
          if (window.innerWidth - x > 500) {
            clearTimeout(this.dragEnd);
            this.dragEnd = setTimeout(() => {
              console.log("oob");
              clearTimeout(this.dragMove);
              ifEnded(true);
            }, 1000);
          }
          window.addEventListener(onUpEnd, ifEnded, false);
          this.saveListeners(onUpEnd, ifEnded);
        });
      };

      this.setState({ offScroll: true }, () => {
        window.addEventListener(listener, onMouseMove);
        this.saveListeners(listener, onMouseMove);
      });
    };
    if (touch) {
      this.setState({ noscroll: true }, move);
    } else move();
  };
  label = (topProgress) => {
    /*const inSection = (path) => {
      console.log(path);
      this.setState({ scrollPath: path });
    };
    //window.scroll(0, this[path].current.offsetTop);
    const offsetTop = (current) =>
      current.offsetTop < topProgress + window.innerHeight;
*/
    const construct = (planner, current, tryy = 0) => {
      /*console.log(
        offsetTop(current),
        topProgress,
        current.offsetTop,
        current.offsetHeight,
        this.state.scrollTop
      );*/
      if (!current) return null;
      const offsetTop =
        planner === "arc"
          ? this.chapter1.current.offsetHeight +
            this.chapter2.current.offsetHeight +
            current.offsetTop
          : !planner
          ? this.chapter1.current.offsetHeight + current.offsetTop
          : current.offsetTop;
      return Math.abs(topProgress - offsetTop);
      /*this.state.scrollTop - window.innerHeight <
          Math.abs(current.offsetTop + current.offsetHeight) &&
        offsetTop(current)
      */ // < 900;
    };
    //if (this.state.scrollTop < 115) return inSection("saverparty.xyz");
    const gett = (tryy = 0) => {
      var name = null;
      const inSection = (nae) => {
        //this.props.history.push("/" + nae);
        return (name = nae);
      };
      // if (this.state.planner) {//(chapter1 refs)
      if (construct(true, this.psych.current) < tryy) {
        inSection("psych");
      }
      if (construct(true, this.redistricting.current) < tryy) {
        inSection("redistricting");
      } else if (construct(true, this.sci.current) < tryy) {
        inSection("sci");
      } else if (construct(true, this.insurance.current) < tryy) {
        inSection("insurance");
      } else if (construct(true, this.education.current) < tryy) {
        inSection("education");
      } else if (construct(true, this.trust.current) < tryy) {
        inSection("trust");
      } else if (construct(true, this.dns.current) < tryy) {
        inSection("dns");
      } else if (construct(true, this.health.current) < tryy) {
        inSection("health");
      } else if (construct(true, this.crime.current) < tryy) {
        inSection("crime");
      } //else inSection("saverparty.xyz");
      //  } else {
      if (construct("arc", this.gdp.current) < tryy) {
        inSection("gdp");
      } else if (construct("arc", this.work.current) < tryy) {
        inSection("work");
      } else if (construct("arc", this.party.current) < tryy) {
        inSection("party");
      } else if (construct("arc", this.marx.current) < tryy) {
        inSection("marx");
      } else if (construct(null, this.sdr.current) < tryy) {
        inSection("sdr");
      } else if (construct(null, this.calc.current) < tryy) {
        inSection("calc");
      } else if (construct(null, this.voting.current) < tryy) {
        inSection("voting");
      } else if (construct(null, this.trade.current) < tryy) {
        inSection("trade");
      } else if (construct(null, this.obamacare.current) < tryy) {
        inSection("obamacare");
      } else if (construct(null, this.immi.current) < tryy) {
        inSection("immi");
      } else if (construct(null, this.rec.current) < tryy) {
        inSection("rec");
      } else if (construct(null, this.air.current) < tryy) {
        inSection("air");
      } else if (construct(null, this.china.current) < tryy) {
        inSection("china");
      } //else inSection("saverparty.xyz");
      //  }
      // console.log(name);
      tryy = tryy + 1000;
      //console.log(tryy);
      if (name /* && construct(true,this[name].current) < tryy*/) {
        //construct(true,this[name].current);
        //console.log(name, topProgress, this[name].current.offsetTop);
        if (!this[name].current) return console.log(name);
        this.setState({
          scrollPath: name,
          bar:
            this[name].current.offsetHeight *
            ((window.innerHeight - 215) / document.documentElement.scrollHeight)
        });
      } else return gett(tryy);
    };
    clearTimeout(this.labelTimer);
    this.labelTimer = setTimeout(() => {
      gett();
    }, 5);
  };
  render() {
    //const { width } = this.state;
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    /*const hydratehtml = (text) => {
      return text;
    };*/

    /*var divElement = document.getElementById("viz1643742790357");
    var vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "800px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "800px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = divElement.offsetWidth * 1.77 + "px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);*/

    const scrollPath = (scrollPath) =>
      this.state.scrollPath === scrollPath ? "2px solid" : "0px solid";
    return (
      /*<div style={{
        columnCount:""
      }}>*/

      <div
        style={{
          marginLeft: "62px",
          backgroundColor: "rgb(160,70,180)",
          width: "600px",
          maxWidth: "calc(100% - 62px)",
          height: this.state.noscroll ? "100vh" : "min-content",
          overflow: "hidden",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            left: "0px",
            bottom: "0px",
            position: "fixed",
            backgroundColor: `rgba(20,20,20,${this.state.footer ? 0.6 : 0.8})`,
            transition: ".3s ease-in",
            zIndex: this.state.footer ? 4 : 0,
            width: this.state.footer ? "100%" : "0%",
            height: this.state.footer ? "100%" : "0%"
          }}
          onClick={() => this.setState({ footer: false })}
        ></div>
        <div
          style={{
            color: this.state.scrolling ? "white" : "",
            userSelect: "none",
            top: this.state.offScroll
              ? 0
              : Math.min(
                  window.innerHeight - 115,
                  Math.max(60, this.state.scrollPlacementHeight)
                ),
            zIndex: 3,
            backgroundColor: "rgba(255,255,255,.4)",
            position: "fixed",
            width: this.state.offScroll ? "100%" : "0%",
            height: this.state.offScroll ? "100%" : "0%",
            transition: `${this.state.offScroll ? 0.1 : 0}s ease-in`,
            right: "0px"
          }}
        >
          <div
            draggable={true}
            //onMouseLeave={() => this.handleMove(null, null, true)}
            //onTouchEnd={() => this.handleMove(null, true, true)}
            onDragStart={() => false}
            onMouseDown={this.handleMove} //onDrag
            onTouchStart={(e) => this.handleMove(e, true)}
            style={{
              right: "10px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "10px",
              userSelect: "none",
              cursor:
                this.state.scrollTop !== 0 && !this.state.footer
                  ? "pointer"
                  : this.state.scrollTop !== 0
                  ? "n-resize"
                  : this.state.footer
                  ? "pointer"
                  : "s-resize",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              opacity: this.state.scrollTop === 0 ? 1 : 0.8,
              top: Math.min(
                window.innerHeight - 115,
                Math.max(60, this.state.scrollPlacementHeight)
              ),
              textAlign: "right",
              //right: "10px",
              position: "fixed",
              transition: `${this.state.offScroll ? 0.1 : 0.3}s ease-in`
            }}
          >
            <span
              style={{
                userSelect: "none",
                right: "0px",
                fontWeight: "bolder",
                fontSize: "30px",
                WebkitTextStroke: `1px rgba(10,70,120,${
                  this.state.scrolling ? 0.5 : 0.8
                })`
              }}
            >
              {this.state.scrollPath}
            </span>
            <img
              alt=""
              style={{
                userSelect: "none",
                borderRadius: "10px",
                border: "5px solid rgb(5,5,5)",
                width: "30px",
                height: "auto"
              }}
              src={
                this.state.nofred
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
              }
            />
            <div
              style={{
                userSelect: "none",
                backgroundColor: "black",
                width: "10px",
                position: "absolute",
                height: this.state.bar
              }}
            />
          </div>
        </div>
        {/*<div
          style={{
            width: "100%",
            right: "0px",
            position: "relative",
            height: "0px"
          }}
        >*/}
        {/* <div
        //alt=""
          ref={this.canvas}
          style={{
            transition: ".3s ease-in",
            overflow: "hidden",
            height: "100vh",
            width: this.state.offScroll ? "auto" : "0px",
            right: "0px",
            position: "fixed",
            top: "0px",
            transform: `translateY(${this.state.provisionalScroll}px)`
          }}
        />*/}

        <div
          onClick={(e) => {
            /*const ternaryHeight = this.state.planner
              ? this.chapter1.current
                ? this.chapter1.current.offsetHeight
                : 0
              : !this.chapter3.current || !this.chapter3.current
              ? 0 //document.documentElement.scrollHeight
              : this.chapter3.current.offsetHeight +
                this.chapter2.current.offsetHeight;
            // console.log(ternaryHeight);
            this.setState(
              {
                ternaryHeight
              },
              () =>*/
            this.setState({
              planner: !this.state.planner
              /*ternaryHeight: this.state.planner
                    ? this.chapter1.current
                      ? this.chapter1.current.offsetHeight
                      : 0
                    : !this.chapter3.current || !this.chapter3.current
                    ? 0 //document.documentElement.scrollHeight
                    : this.chapter3.current.offsetHeight +
                      this.chapter2.current.offsetHeight*/
            });
          }}
          style={{
            right: "0px",
            transition: `${
              this.state.offScroll ? 0.1 : this.state.planner ? 0.5 : 0.2
            }s ease-in`,
            border: "1px solid",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            display: "flex",
            position: "fixed",
            width: "calc(100% - 42px)",
            fontFamily: "sans-serif",
            justifyContent: this.state.scrollTop === 0 ? "center" : "flex-start"
          }}
        >
          {!this.state.planner ? "planner" : "plan"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          ref={this.chapter1}
          style={{
            width: "100%",
            height: "max-content",
            backgroundColor: "rgb(20,20,25)",
            //transform: `scale(1,${!this.state.planner ? 0 : 1})`,
            //height: !this.props.planner ? 0 : "max-content",
            //zIndex: this.state.planner ? 9 : 0,
            position: "relative",
            fontFamily: "Nunito, sans-serif",
            textAlign: "center",
            transition: `.3s ease-in`,
            color: `rgba(200,200,220,${this.state.scrolling ? 0.5 : 0.8})`,
            fontSize:
              /*this.state.offScroll
              ? "1px"
              : */ this
                .state.width < 300
                ? "21px"
                : "17px"
          }}
        >
          Saver good will land exploration rights
          <br />
          Donee beneficiary
          <br />
          False bid pool too (not insulated casino,{space}
          <a href="https://humanharvest.info/polio">
            population growth, life expectancy ago
          </a>
          )
          <br />
          <br />A 'cause,' would beget an {space}
          <span
            style={{
              textDecoration: "underline"
            }}
          >
            exponential induction
          </span>
          , not a{space}
          <a href="https://www.cdc.gov/transportationsafety/impaired_driving/impaired-drv_factsheet.html">
            basis matching
          </a>
          .
          <br />
          <hr ref={this.psych} />
          Spokeswoman for Trump 2020 campaign: "Non-biomedical and{space}
          <a href="https://www.adcouncil.org/campaign/drug-impaired-driving-prevention">
            unscientific
          </a>
          {space}
          Mental health and drug epidemic can be suppressed by providing access
          to individuals by stock sales of horizontal industry, donee invoking
          and impossible invoices and false bid pool loss."
          <br />
          <br />
          Newsome: "Required to have two week paid leave for trust building more
          than 26 employees' copy kept in{space}
          <a href="https://projectequity.org">
            profit-accounts, collateral or industry-type max-royalty
          </a>
          {space}(not payday loan nor compound interest donee invocation and
          borrower defense, impossible, intentional and retarded for
          GDP/hour-GDP/p bunting tech advancement for productivity, but
          efficient, or productive-efficiency).
          <br />
          Good will{space}
          <a href="https://vaults.biz/science">freedoms</a>."
          <h2>
            "soooold on amazon, find out how to be the next publisher with page
            publishing"
          </h2>
          aren't those collateralized?
          <br />
          settlement state-vic with the{space}
          <a href="https://vaults.biz/trading">security enforcement agency</a>,
          for the general maintenance unit (donee and mvp duress).
          <br />
          <br />
          “why would any doctor work for less than what they were worth in 2010?
          that provision already resulted in several emergency legislations, to
          fix the issue” “Obamacare,” according to the CBO, *saves pennywise
          versus that of healthcare with insurance false bid pools, invoices and
          “general revenue” asset sales (of horizontal 1/12 industry), because
          it *is price-fixed to the **change-rate** (e.g. per year) of
          material+rent inflation (excludes assets [homes, IP, land, equities],
          labor, profits, nor good-will accrual of that collateral which is not
          included).
          <br />
          <br />
          If you do this then this vertical trust is not applicable in equal in
          receipt and scope truncated production tax Article 1.8
          <br />
          And stimmy is Saver land exploration rights that is 20%.
          <br />
          And it has to be relative to input cost, skew, to not be discriminated
          by reasonable doubt of subjective duress beyond minimal viable duress,
          by 11/12 industry-variable science.
          <h2>"Pay tax unvaccinated, unequal"</h2>
          migration is an invasion or trade?
          {/* Swear them in! Wait in line! Watch
          in a cell, $STUDY*/}
          <br />
          {/*'free' healthcare and compenstion should come from the tort, MONETARY DAMAGES REGARDLESS, numerable and state-lands' exploration rights, 'free' science 
          from unreciprocated, albeit tech advancement skipping comparative advantage step, labor*/}
          kill yourself Dr. Yamamoto
          <h2>paradigm entrenchment</h2>
          "Bringing voices that aren't tapped, like quora or thumbprint,
          knowledge discovery, to give working scientists, like statisticians
          whom use indices instead of endogenous R (change-rate correlation)
          {space}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            variance-undiscounting
          </span>
          , -luddite (instead of per capita by all-time)." So important.
          <br />
          <br />
          "Federal supported research, peer-review leverages ARPA-H like NIH and
          NSF confirmation bias and 1/12 industry-variable doubts by reason,
          shunned."
          <h3>
            "Avoid redundant competition: Highly managed, breakthrough research,
            nih radx diagnostic asymptomatic testing has shown virion is not
            correlated, merely the weather and bacteria, is."
          </h3>
          <h2>gentrification: meeting people where they are</h2>
          "Doesn't compute, might displace the private sector, time gated,
          performance metrics, fail early, holding progam managers responsible.
          Medicare false bid pool loss, invoice donee invocation and
          prescription cost direct rebate 44% stock sales." Dr. Miller
          continues, "All it means is if the good will value of the horizontal
          trust is $0, then the price is $0." (?)
          <br />"
          <a href="https://froth.app">$6.5b/yr biomedical r&d gentrification</a>
          {space}(for licensing, rather than open-source ingredient-lists for
          the right to try) doesn't counteract the issues in pricing and drug
          markets (prescription costs, expiring premiums/false bid pool loss,
          'general revenue' asset sales of other industry)."
          <h2>fully unleash the private sector</h2>
          “Seems like congress wants to solve all our problems by throwing a lot
          of money at it, instead of facilitating what could be done in the
          private (or scientific, ‘rent-free’) sector. Less regulation, faster
          approval, HR3 less giving away of IP, less competition.” Mr. Curtis
          <br />
          <br />
          "Purchase vaccines and prevent negotiation by actual voluntary demand,
          not a collective bargain if no actual labor-based-demand, even if the
          purchase is rollover, concurrentable, not good will nor expiring. We
          know provider-users will seek those whom look like them. I am a man of
          science, I like to measure things. How can we measure, metrics?
          Metrics of how populations are identified, and what we are looking
          for. Equitable, affordable for all conumers. Private ensures
          manufacturing and end to end, but we need to make sure we gentrify
          communities, instead of SHARING THE FUCKING SCIENCE FOR FREE FUCKING
          TACO. Consultation in how projects are prioritized, instead of actual
          consumer surrogates. Health equity is short for healthcare workers.
          underlying biology in cross-sectional comparisons, not time-series
          alone on one population, Diversity in Clinical Trials Act."
          <br />
          "An authoritative-healthcare would not make a non-profit (cash not
          held year to year) agency work on behalf of the citizenry by
          laundering share-split from Saver land exploration rights, nor trust
          build r&d, abett closed source science and rents, not equity."
          <hr ref={this.science} />
          rent-free shuffled-extrapolations: sum average per capita fixed for
          skew for median/(mean)
          <h2>
            instead of banning invoices, you funnel $829.5b/yr Medicare thru
            $2.7t/yr '<a href="https://vaults.biz/obamacare">healthcare</a>,'
            and you have the gaul to say that the government doesn't profit from
            this market concentration, making reasonable margins, impractical?
          </h2>
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/itn1ms1mvpo7e2j/Screen%20Shot%202022-02-08%20at%2012.40.12%20PM.png?dl=0"
            }
            float="left"
            title="Energy and Commerce (Youtube) - rent-seeking science and gentrification"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h2>
            should shelving $100ms be liable for damages, or learn from
            mistakes, pivot and move, and exhaust all industry-variable doubts
            or max-royalty income-stakes, like bacterial-all-cause?
          </h2>
          government = tax-payer (?), industry = shareholder: "science belongs
          to the private entity, clawback copyrights when free, or requires more
          scope of work than expected in literal requirements."
          <h3>
            valley of death, right to try, open source, false bid pool loss (not
            reciprocol/isolated trade) - trials, 100ks trials, ARPA-H can be
            price-fixed to the rate of material-inflation.
          </h3>
          Rare can be fulcrum of all else (if TRANSMITTED instead of BYPRODUCT
          PREVALENT); genetic? not so. "Covid type of program, in this very
          complex world we live in. How do we ensure we are complimentary,
          assisting, to get beyond high-risk, how do we draw the line?"
          <br />
          ARPA-H rare diseased, 7k small patient populations, fill
          unincentivized good will and accrual accounting. "Research innovation
          growth direct research funding"{space}
          <a href="https://">anti-trust</a>.
          <h3>
            book is a multiple of concurrentable value into good will, price is
            a multiple of THAT
          </h3>
          <h2>LIABILITIES ARE TRUE, ASSETS ARE BOOK</h2>
          "Maybe our disconnect is that I’m not referencing contemporary banks?
          I’m referencing the act of banking in theory. It also seems to me that
          you’re very caught up in government/legal/financial terminology for
          things; that in no way affects economic theory to me. I don’t care if
          something is classified as (x) according to congress, I am laying out
          the fundamental principles of exchange according to the laws of
          economics."
          <br />
          <br />I would describe your view as Mises and Rothbard - I look at the
          **practical, -applied economics**. You can describe my point of view
          as *bona fide cash accounting, microeconomic Supply and Demand*, with
          the view that *dead-weight-box is ****not only**** descriptive of
          government*, on the economic welfare x-axis, (*that I define as
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">
            **GDP/hour-GDP/p**
          </a>{" "}
          and call, “
          <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
            **productive* *
          </a>
          -efficiency,” -GDP/p change-rate being tech-advancement and less
          work*), **but also** finance, being 2/3 of total debt.{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LOyP">
            Debt to checking
          </a>
          . The collateral of currency, ostensibly either per capita or dollar
          U.S. Saver land exploration rights, third party donee beneficiary
          claimable. This is why I am Chair and Founder of{space}
          <a href="https://saverparty.quora.com/">Saver Party</a>
          {space}
          <span role="img" aria-label="bottom-left white-circle squirrel">
            ↙️⚪️🐿
          </span>
          . (cash/debt)*income every year back instead of cancel is the only
          mediation that which we all paid what we would have without debt, move
          to max-royalty 1/12 industry type, instead of collateral, for future
          investment relations (so I am developing that like{space}
          <a href="http://pipe.io">pipe.io</a>
          {space}without derivatives as outlays at{space}
          <a href="https://vaults.biz/sdr">vaults.biz</a>), and Article 1.8
          equal in scope and receipt truncated production tax.
          <br />
          Thanks for reading and writing cogently, albeit I am no douche! Haha
          I’m for rent-free science - in a world without privacy for
          all-science. Might you know about why GDP/yr=mv1==mv2?? This is the
          good will I am talking about. The velocity of checking,
          “CurrencyComponentOfM1,” isn’t even reported (or at least charted, if
          you know if that is available please let me know)!
          <br />
          <br />
          Stop saying we don’t work, 25-34 work twice per capita than the
          highest paid per capita 45-54.
          <br />
          "economic opportunity and more jobs," without labor-borne-demand
          sounds like busy-work.
          <br />
          <br />
          The{space}
          <a href="https://fred.stlouisfed.org/graph/?g=Lznz">
            Federal Reserve
          </a>
          {space}*induces ***market concentration over the dollar** by
          *laborless-demand and labor cost cornering*, but they are non-profit,
          or - at least, **outlay institutional-fees to their
          accountant-economists within a year**.
          <br />
          Rather, more appropriately, and in aggregate: since the Federal
          Reserve balance sheet is mostly outstanding checking, and{space}
          <a href="https://www.federalreserve.gov/releases/h6/current/default.htm">
            assets are merely Good Will on that negative
          </a>
          {space}basis…. Where they make these fees is obscure, it may be
          general revenue asset (bond and stock) sales, or they just{space}
          <a href="https://fred.stlouisfed.org/graph/?g=Lzu0">**make**</a>
          {space}($b) their salaries to outstanding (share-split) Savers’ claims
          of dollars over bonds’ of state-lands and “exploration” resources.
          <br />
          <br />
          competing with consumers not only is not surprising, but it is
          retarded for bunting GDP/hour-GDP/p
          <h1>Jump! Go ahead, jump!</h1>
          “No to the nordstream pipeline, because Putin poisons his political
          competition. Obama position has been clear, along with pennywise
          cheaper than insurance false bid pool costs by price controls and
          laundering thru healthcare, versus banning on donee invocations
          non-insulated ‘healthcare,’ especially{space}
          <a href="https://vaults.biz/healthcare">44% Medicare</a>
          {space}being stock sales.” Rick Grenel
          <h1>“Working field,” I’m the boss!</h1>
          {/**rot in hell, bitch */}
          <a href="https://www.quora.com/Can-Trump-eradicate-unemployment/answer/Nick-Carducci">
            Stop saying we don't work cunt
          </a>
          , 25-34 work twice per capita than the highest paid per capita 45-54.
          "We have another full time job, younger people don’t want to work,"
          the amount of hours worked per home doubles every 5 years, and not
          because of population growth, but because of good will accounting.
          There is just not enough working age and{space}
          <a href="https://vaults.biz/work">too many boomers</a>.
          <br />
          <br />
          it’s not an opinion, stop slandering us retard Mary Walter.
          <h1>
            "login.gov human smuggling sending children back out there, like a
            champ." Trump
          </h1>
          <h2>
            Kari Lake: "China stole our science and jobs, for cheap slave-labor,
            we need to turn off all support to China, and default on loans: no
            more penny, they have released the virions around the world.
          </h2>
          I will shore up (
          <a href="https://arstechnica.com/information-technology/2021/02/verizon-and-att-dominate-spectrum-auction-spending-combined-69-billion/">
            name your price
          </a>
          ){space}
          <a href="https://thumbprint.us/voting">any election system</a>, for
          any price, even at the cost of general USPTO grounds over science, get
          good will out of the military! ban science as property! Have
          industry-variable juris 11/12 and 1/12 max-royalty without collateral
          nor concurrentable donee from good will, that even the dollar is over
          the labor equity entrenched as overvaluing the land and exploration
          (20% of U.S., Obamacare pennywise 44% $829.5b/yr/$2.7t/yr 'healthcare'
          stock sales outside-1/12-vertical-industry (horizontal) trust
          building), blind trust/indices concentration over the dollar, like I
          come in to make-policy for my book."
          <br />
          <br />
          "How can we fix our failing schools, pennywise 44% of Medicare
          $829.5b/yr of $2.7t/yr 'healthcare?'"
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/sfs3pafxp3uiq5b/mario%20connect%20the%20dots.jpeg?dl=0"
            }
            float="right"
            title="Bo Snerdley, 'connect the dots,' Mario coloring sheet"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h1>
            theft of intellectual property, won the trade war with china, and
            then the Wuhan lab, a lot of things, people are connecting the dots
          </h1>
          Bob Sellers, Rita Crosby, Kash Patel: "Germany wants the Nordstream
          pipeline to go thru, the pipeline is complete, what is the wrench we
          can throw into that? Sanction the people that use the pipeline, so
          Vladimir Putin does not get rich."
          <br />
          <br />
          https://youtu.be/WlSVwRaO-iQ?t=890 "35x more likely to die of covid
          than 18," with covid... but It isn’t even correlated with sickness -
          Jeff Anderson, American Main Street Initiative, 'Kids Full of Life
          with Adults Obsessed with Death,' "Teach chorers how to make natural
          facial expressions."
          <h3>
            all assets on the balance sheet are good will last traded neighbor
            price, non-concurrentable. liabilities, are only enumerated when
            they are outstanding shares, and not principal denominated by
            another entity (like the dollar, Savers' land-exploration{" "}
            {/*donee */}rights, either per capita or share...
          </h3>
          NSF needs to be rethought from the bottom-up,{space}
          <a href="https://vaults.biz/immi">they are not performing</a>. USPTO
          rent-seeking anti-competitive laborless-demand, cornering labor costs.
          "Trump wants to finance with Saver land-exploration rights, and income
          tax for trust-building," says Brian Kilmeade, proudly.
          <br />
          <br />
          "n95 protects you," Brian Kilmeade. FALSE, virion{space}
          <a href="https://www.pfizer.com/news/articles/viral_vs_bacterial_pneumonia_understanding_the_difference">
            bacteria
          </a>
          {space}
          <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
            requires spittle
          </a>
          , not{space}
          <a href="https://vaults.biz/moldmask">dust</a>.
          <h2>"70% of the public says, 'we have to live with the virions.'"</h2>
          "we have emerged from excess expected deaths, and it is time to{space}
          <a href="https://vaults.biz/biz">return to normal life</a>."
          <hr ref={this.health} />
          "We all live in a glass house," Roger Marshall, M.D.
          <br />
          Does health insurance prove how greedy the American government is?
          <br />
          <br />
          Yes! **Obamacare** is *pennywise* cheaper than insurance{space}
          <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
            according to CBO
          </a>
          , only because *government gentrification will keep provider-payouts
          in-line with inflation*, still with **disregard for donee of false bid
          pool loss, invoices and market concentration of general revenue asset
          sales** (
          <a href="https://www.ssa.gov/OACT/TRSUM/2020/tr20summary.pdf#page=17">
            44% of Medicare $829.5b/yr
          </a>
          ), from outside the healthcare industry ($2.7t/yr total “healthcare”).
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            The reconciliation proposal and H.R. 3590 would maintain and put
            into effect a number of policies that might be difficult to sustain
            over a long period of time. Under current law, payment rates for
            physicians’ services in Medicare would be reduced by about 21
            percent in 2010 and then decline further in subsequent years; the
            proposal makes no changes to those provisions. At the same time, the
            legislation includes a number of provisions that would constrain
            payment rates for other providers of Medicare services. In
            particular, **increases in payment rates for many providers would be
            held below the rate of inflation** (in expectation of ongoing
            productivity improvements in the delivery of health care). The
            projected longer-term savings for the legislation also reflect an
            assumption that the Independent Payment Advisory Board established
            by H.R. 3590 would be fairly effective in reducing costs beyond the
            reductions that would be achieved by other aspects of the
            legislation.8
          </div>
          <hr ref={this.plandemic} />
          Dust is stopped with n95, spittle is larger, carrying virion …and
          bacteria, all else heat/(density) Hadley cells.
          <br />
          <br />
          Engineers agree, spittle is stopped by mask, but only physicists think
          it should go to Hadley cell, heat/(density).
          <br />
          <br />
          D614G has yet to be replicated with n immunofluorescence microscopy
          into ACE2 (vivo), all{space}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">coincidences</a>
          {space}so far Engineers agree, spittle is stopped by mask, but only
          physicists think it should go to Hadley cell, heat/(density).
          <br />
          <br />
          "spread is just by testing, which proves asymptomatic uncorrelation."
          <br />
          one minute kimeade praises trump for NSF, then says 'pay for it
          yourself,' after I critique that douche.
          <h3>
            "Vaccines should be voluntary, not mandatory." Chris
            'closed-source-medicine' Smith, it either works or it doesn't.
          </h3>
          "We are not going to allow Putin to profit on such a free rider
          mutable pupeline, albeit operational monopoly that can be
          target-margined, within Article 1.8 equal-by-truncated-production-tax
          receipt and scope."
          <br />
          <br />
          <h3>NHS backlog because: "healthcare" isn't healthcare</h3>
          insurance by expiring premiums, false bid pool loss, investment bank
          (outside 1/12 industry) concentration cornering by labor costs (lower
          poverty whilst higher inequality)
          <h1>outpatient forced medicine, I will slit your throat!</h1>
          pull writers for any skill, discrimination with a numerable skillset
          or chat exhibit. Customers are the ones paying, that which you need
          11/12 industry-variable permit, as well for mvp duress or jail-review
          of physical evidence, never bail.
          <h3>MS is the new polio</h3>
          <h2>"you are going to derail my career!"</h2>
          "pandemic is almost over," because the wave of 1942 baby-boomers has
          passed.{space}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=1">
            NEVER has virion been shown to replicate in a lab STUDY, only
            coincidence
          </a>
          {space}and war bond fraud with Dem/China/Pubs.
          <br />
          <br />
          Spread is just by testing, which proves asymptomatic uncorrelation.
          <br />
          70% spread in households, because it is prevalent
          <h3>every episode is rational, even suicide. not biomedical</h3>
          {/*two weeks to make garbage collection, but ""*/}
          protection from a non-correlated "
          <a href="https://www.fda.gov/media/144245/download#page=42">
            byproduct
          </a>
          ?"{/**warning mechanism */}
          <br />
          "you guys can play the market, because here I am, invested first and
          talking about the thing." Mark Seigel, USA Today.
          <h1>Cuomo killed people in 3/2020, was expected</h1>
          they deserve, saw 9/11 people jumping, name-your-price false bid pool
          loss
          <h3>
            Bernie and Sid wants politicians to be able to own index funds over
            the currency
          </h3>
          3yrs for licensed prohibitions of trade, fuck off troll
          <h2>"don't search unless buzzer goes off," like making up shit?</h2>
          crime and mortality are less and that drop CANNOT happen again from
          such a current level....
          <h3>
            Illegal guns and citizenship are an international human right, stock
            sale welfare with Saver land explotation donee share split,
            notwithstanding).
          </h3>
          The only way to stop crime is because stop and frisk reduction in
          homicide (76%) correlation doesn't mean causation.
          <br />
          <br />
          Jurisdiction imprudence causing trucker terror, 11/12 industry mvp
          duress permit is constitutional.
          <br />
          <br />
          Replace debt-collateral with max-royalty-1/12 industry type, for donee
          invocations unrequited.
          <h2 ref={this.crime}>
            Prejudice, predict, jurisdiction, not jurisprudence
          </h2>
          <h3>Prove a negative to disproof all other reasons for doubts</h3>
          trespass property and not be forcibly removed, for the home collateral
          is Good-Will or last traded neighborhood price compound, not Supply
          nor Demand, but donee invocations and surrendered freedom for
          loitering borrower, liable of the contractor's due diligence as to not
          invoke said donee nor borrower defense of impossibility or implausible
          use by rental-income units, not price, nor pennywise discount by
          transitive labor cost-siphoning.
          <br />
          <br />
          56% profits from vaccine, so ads even in danger naturally
          incentivized, beyond outrageous; not even counting{space}
          <a href="https://lighttec.ch">salaries</a>.
          <br />
          <br />
          We need to have gender change surgery available (with no demand,
          otherwise it would be front running by false bid pool). "Good Will
          mutal fund down looks dour."
          <h1>Pandemic killed 5m around the world, 50m was expected bitch</h1>
          drugs nor immigrants are a problem, working age, except for your
          fucking drooling pharmacy cops addicted to bonds, and unequal tax of
          Saver land exploratory donee rights, therein. 3% under $2k after
          (cash/debt)*income every year back Truncated Production Tax.
          <br />
          <br />
          pull writers for any skill, discrimination with a numerable skillset
          or chat exhibit. Customers are the ones paying, that which you need
          11/12 industry-variable permit, as well for mvp duress or jail-review
          of physical evidence, never bail.
          <br />
          <br />
          France is a huge supplier of weapons on the world market.
          <br />
          Bulk of oil for EU comes from Russia.
          <br />
          Death penalty is reciprocal, but not for an industry-specific victim
          (like cops).
          <h2>
            20% positive is a threat or prevalence uncorrelated to sickness?
          </h2>
          Dr. Hariri:, the next virus will coincide with another baby boom, at
          life expectancy, average-age at death. Doctors don't research, and
          epidemiologists base their livlihood on a false-positive, basis rate
          fallacy, non-exclusive nor even correlated artifact, null hypothesis
          Death rate is integrally age size, so after single year age death rate
          is negatively correlated with sewage, MS and paralytic polio is of the
          same prevalence, bacterial-acute diagnosis is exclusive cause.
          <br />
          <br />
          mRNA sporing grafts proves only mRNA makes virion, not virion (never
          shown in a lab STUDY), attacking protein spore with antibody garbage
          collection causes{space}
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            lymph
          </a>
          <h2>
            "healthcare is funded by expiring premiums, stock sales of other
            industries, estimated claims (good will), closed-source,
            anti-competitive prescription racketeering scheme."
          </h2>
          Donee invocations of false bid pool loss isn’t work, but surrendering
          freedom of others (prize in casino is insulated not an
          external-bid-dependency.
          <br />
          ‘Subsidizing it,’ is perfectly elastic, the same is demanded, no
          matter how much you buy… it it doesn’t rollover or it doesn’t have
          actual demand from individuals, voluntarily it is pure-elastic
          inflation (good will and collateral donee invocations of Savers’
          dollars’ land exploration rights, with standing)
          <br />
          <br />
          “If we spent Saver land exploratory donee on heart disease and asthma,
          we would be better off.” Judge Janine Pirro, 20% lower police (per
          capita?) per crime.
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ width: "300px", float: "left" }}
            key="1421858300979732480"
            tweetId="1421858300979732480"
          />
          "Firing based on vaccine status," is not illegal if 11/12
          industry-variable jury decides virion causes death as opposed to
          byproduction of bacterial-reinfection.
          <br />
          <br />
          “G-d has told me to leave D.C. by pestilence.” The Benny Report.
          <br />
          <br />
          "5 Wherefore when he cometh into the world, he saith, [']Sacrifice and
          offering thou wouldest not, but a body hast thou prepared me:
          <br />
          6 In burnt offerings and sacrifices for sin thou hast had no pleasure.
          <br />7 Then said I, Lo, I come (in the volume of the book it is
          written of me,) to do thy will, O God.[']" Jesus was quoting David in
          Psalm 40:6-8, pussyfooting about the idea that G-d doesn't{space}
          <a href="https://www.jesusfilm.org/blog-and-stories/old-testament-prophecies.html">
            respond to animal sacrifice
          </a>
          , and thought He was G-d, still not an admittance to be sleign.
          <h3>
            pleas are moot, wont even look at video, to label marijuana smokers
            (same per capita as high per accident), as disorderly to SHOOT ON
            SITE
          </h3>
          how are you liable for advice? just certification, not closed source
          licensure
          <h3>good will (ltp) is the root of all evil</h3>
          medicate the homeless
          <h1>Hospital Fund CEO Sundays</h1>
          “We all want to help people when they are going thru a tough time, it
          should be time-limited, not able-bodied people, which is about half.”
          Half of continuing claims is 65+, most of disability, which is 19% of
          the population.
          <br />
          <br />
          If you are going to cut disability in half, doesn’t that change if I
          tell you most are old? I have a hole in my leg and NJ Social security
          says I am schizophreenic because I say, ‘rollover insurance,’ the
          false bid pools are donee invocations. Most of GDP is good will, 44%
          of $829.5b/yr Medicare ($2.7t/yr total "healthcare"), Republicans and
          libertarians like insurance. Saver does not. Why prohibit price
          changes at all, just because lenders, landlords and insurers want to
          extend surrendered freedom donee invocations, compound, expiring
          premiums, estimated claims and general-income payday, max-royalty 1/12
          industry, 44 years to payday current debt impossibly with income
          otherwise, Article 1.8 is unequal taxation, with bonds, in receipt and
          scope.
          <br />
          <br />
          “No cure for pedophelia,” so then why wouldn’t you just lock them up
          instead of racketeer healthcare without biomedical evidence?
          Protecting people, then think about how we can deal with long-term
          causes {/*consequences*/} of crime
          <h1>
            Terrorist truckers: China, but you can make loads of good will with
            China
          </h1>
          {/*, or no other option when malfeasant*/}
          <h2>
            If you don't want Ukraine to be invaded, don't sanction pipelines!
            The last time we have actually intervened is WWII, just spending
            money for stock gains notwithstanding.
          </h2>
          Not even corr, boomers for a reason, population growth life expectancy
          ago. "Can we shut down them, through peaceful protests, if we were
          more organized?"
          <h2>
            American tax-payers are paying for Article 1.8, unequally (receipt
            and scope) with bonds instead of 3%under $2k Truncated Production
            Tax
          </h2>
          <h2>
            "I make sure my guys' families eat, even if it is out of my own
            pocket," This is what becomes of the NJ Consumer Fraud Act fraud,
            treating estimates as property.
          </h2>
          Varo not allowing cash business now - unknown reason
          <h2>2.7m/170m job loss is mostly 65+, most work is not education</h2>
          <h3>
            minimum wage is not enough when wall st exists (laborless-demand)
          </h3>
          <h1>
            cancelling student debt allows the university to keep the money
          </h1>
          Dr. OZ: "Underserved supply chain issues by too much UBI," continuing
          claims are 2.8m and that is normal.
          <h2>
            provide that you aren't a public charge, making money by
            laborless-demand, finance
          </h2>
          Expiring-hours is not unlimited; in fact, it is third party donee
          beneficiary invoking.
          <br />
          Desist invoking third party donee beneficiaries of expiring premiums
          and false bid pool losses.
          <br />
          <br />
          “Vaccine side effects is less than the virus,” but it isn’t even
          correlated… never has a virion been created in a lab, they just assume
          it so. How does it make sense that it requires cell to reproduce, and
          it has some unknown taxonomy? Can’t be both, Tom Cotton.
          <br />
          <br />
          “Effective against hospitalizations and death but not the spread.” So
          where does it come from? It is non-exclusive byproduct of bacteria and
          all-incidence isn’t significant? Just basis rate fallacy if byproduct
          of another cause changes, but you count that as a prevented disease
          because you aren’t looking for 95% of other byproduct incidence.
          <br />
          Competing with consumers is illegal.
          <br />
          Making a new Elis island is not conclusive 11/12 industry-variable
          requirement.
          <br />
          We are not going to have a country if we allow everyone in, why?
          <h2>
            new renewable infrastructure is operational monopoly, no need to
            rent-seek/gentrify science/spectrum/tolls; just target margin &
            geohash/mo free rider immutable local (not healthcare, education,
            housing)
          </h2>
          how do you assimilate covid with "long-haulers?" didn't overall stress
          increase? Manny sethi you fucking dunce
          <h2>Savers pay 100%, not tax-payers</h2>
          I will bar holds of illegal immigration without the ability to
          purchase a home, first.
          <br />
          <br />
          Functional device printing tamper proof dns grid; nodal consensus for
          deeds and transaction-based-sdr.
          <h1>"thinking doesn't require money."</h1>
          GOP tolls 40% debt service, Dems gentrify. Libertarians in private.
          Saver stops it all. "Why are gains for U.S. workers good for the
          world?"
          <br />
          <br />
          Although poverty has income-gains as its denominalization, it lowers
          as inequality rises because labor is an input cost of labor. So, a
          gain for labor would be{space}
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">
            productive-efficiency
          </a>
          , GDP/hour-GDP/p bunting, to follow (-GDP/p) tech advancement (less
          work per living costs).
          <br />
          <br />
          supply==demand is labor borne demand, outlay immediately
          (no-profit-accounts)
          <br />
          Free rider immutable labor costs are used to gain equity by gov.
          <h1>
            Conviction/monitoring before evidence too; "put my money to work,"
            beyond Article 4 is free rider mutable, and Article 1.8 is an
            oxymoron{/**david bernheart AFPI*/}
          </h1>
          <h2>
            challenges for state-vic permits and closed source reason, is
            retarded for GDP/hour-GDP/p
          </h2>
          <h2>
            new road or bypass can be paid by tolls, bike paths, walking pace,
            by Truncated Production Tax, 3% under $2k
          </h2>
          Forcing on device end to end encryption not to work for business,
          forcing open source, and not for scientific nor tech advancement less
          jobs productive efficiency purpose, but to not give secrets to
          competition before users Making them userers.
          <h2>
            nationalization instead of target margin (for operational monopoly),
            retards
          </h2>
          Saver Party vs Taxpayers' Alliance
          <br />
          investment in energy infrastructure is just gentrification, going bust
          is mathematically ensured.
          <h2>The People vs Gov Sleaze</h2>
          <h2>
            "20% is massive profits... energy we bond laundering means of
            production target margin upon Savers' land exploration donee rights,
            11/12, tax-payer money is not $170t/$30t/$2t, "we dont want to
            charge tax-payers when Savers are so docile."
          </h2>
          I'll fucking kill you brits, daniell boxall, Nana Akua.
          <h2>
            margin target operational monoplolies, laborless-demand implausible
            rental-income use cap by units or days
          </h2>
          <h3 ref={this.insurance}>unknown hazard liability</h3>
          "'Does insurance cover punitive damages?'"
          <br />
          "No. It would be against public policy to allow insurance companies to
          sell policies that would cover punitive damages. It’s already illegal
          to sell insurance that covers damages for deliberate torts or fines.
          The NRA got into trouble with New York State for selling coverage for
          legal costs related to gun crimes."
          <br />
          If it is a damage that is a known hazard, then it isn’t liable; so,
          necessarily, all workplace torts (that are valid) are meant to punish
          to fix an operational problem.
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/nk7ssj4p0kjqzp9/Screen%20Shot%202022-02-07%20at%2011.49.23%20AM.png?dl=0"
            }
            float="right"
            title="Carshield (Newsmax) - 'saves money' lie"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          no pennywise equity investment for welfare NHS, premium for nothing,
          donee invoking, at that (casino is insulated loss)
          <br />
          <br />
          "Illegal immigrants being dropped into community not elected officials
          knowing," is not the "cost to," Savers' land exploration donee rights,
          the spending is. They are peaceful and working age, that which
          lending, landlording and insuring laborless-demand (dead-weight of)
          are diminishing its benefacidious fruit-bearingness of GDP/hour-GDP/p,
          productive-efficiency and tech advancement.
          <h1>
            Truncated Production Tax - ween cops off bonds net loss profit
          </h1>
          "Hold people in bars or pay the price in court." Claudia Tenney saying
          bribery/state-vic is legal.
          <h2 ref={this.redistricting}>
            redistricting can be by population density alone, (along lines of
            similar density)
          </h2>
          Gordon G. Chang, "throw-away phones, targeting" can be found by who
          you communicate with. "strong possibility China made virus in a lab."
          <h2>
            Trucker freedom rally is terrorism and like a union barrier to
            entry... just quit and admit that you think the pandemic isn't real
            nor does virion inject DNA into cell but actually is byproduct of
            bacterial infection and only comes out, or think murder should be
            legal
          </h2>
          International law acknowledges human rights as donee over contract and
          juris bias.
          <h2>Duress beyond minimal viable product.</h2>
          inflation an slavery reparations and land deprecation is
          laborless-demand, your supply side economics is labor dispoused of
          supply, and is more of a dead-weight-box towards economic welfare,
          productive-efficiency, GDP/hour-GDP/p utility-indifferent trades
          found, and tech advancement by comparative advantstiges.
          <br />
          <br />
          free rider mutable government gentrification, good will and science,
          implausible use intent rent seeking, implausibly deniability.
          <br />
          <br />
          Michael Foot kink of socialism, the voters said no.
          <br />“<a href="https://qr.ae/pGEDI2">Rise up ranks of legal</a>
          {space}profession, now head of labor party.”
          <h2>Art Laffer - "Free trade except fruitless USPTO tariffs."</h2>
          "Chips are part of the economy, subsidize." Many in Trump admin wanted
          to repatriate industry by not banning finance but gentrify, only 2
          people opposed.{/**trump and kudlow */}
          <br />
          Good Will surrendered freedom donee invocation of Savers' land
          exploration, GDP boom alone is RETARDED macroeconomic GIBBERISH,
          GDP/hour-GDP/p is Nick Carducci's invention, microeconomic that sees
          money-"market" as dead-weight laborless-demand, outstanding good will
          ("supply-side-economics," prosperity by 65% mortagage and asset price
          market concentration by equity, 35% implausible-use rental-income,
          USPTO rent-seeking by bribe, copyright, government trust bridge
          toll/broadband for operational monopoly instead of target margin?
          idiots)
          <hr />
          Free rider immutable labor costs are used to gain equity by gov.
          <br />
          Conviction/monitoring before evidence too.
          <br />
          Forcing on device end to end encryption not to work for business,
          forcing open source, and not for scientific nor tech advancement less
          jobs productive efficiency purpose, but to not give secrets to
          competition before users.
          <br />
          Making them userers.
          <br />
          Stop the spending, reverse amortize the bonds, (cash/debt)*income
          every year back, Article 1.8 is an oxymoron unequal, certainly not
          general revenue asset sales “welfare,” by a century of market
          concentration, misappropriated. Investment in business and technology
          means entrepreneurs need to innovate more ON THEIR OWN, you don’t
          fucking need money to invent, Kudlow. Truncated Production Tax/
          Max-royalty and equities banked transaction-based-sdr thereafter.
          <h2>
            "If inflation is too much money for too much goods (denominomial),
            stimulate like a communist in emergencies of lower prices."
          </h2>
          "They work less, but don't remove their pay, so consumers are in
          pretty good shape here - too much emergency stimulus." ONE CENT IS TOO
          MUCH, let alone{space}
          <a href="https://qr.ae/pGEDI2">Savers' exploration rights</a>. "The
          fed is still punting money, 40%/2 years. That is the cause of 7%
          inflation," but that money isn't even in the economy. "labor have more
          power now to negotiate higher wages' pittance for equity surrendered,"
          {space}
          <a href="https://qr.ae/pGEDpT">for market concentration</a>. "The fed
          will have to take money out of the{space}
          <a href="https://qr.ae/pGEDIE">economy</a>."
          <h1>
            <a href="https://qr.ae/pGEDIW">supply side economics</a>
            {space}== good will
          </h1>
          <h2>revisions of unemployment are claims, not survey</h2>
          <TwitterTweetEmbed
            key="1421471623136358405"
            tweetId="1421471623136358405"
          />
          <h3>
            we are going to have to sweep implausible use landlords off the
            streets.
          </h3>
          tech advancement is less jobs{/**"throwing money at it" */}
          <h2>
            Raegan/Gorbechov false flag, now pipeline sanctions, Trump science
            tariffs
          </h2>
          (mostly good will of equity, $2t checking exists) $4t/yr 2010-2020
          Republicans spend Savers' land exploration rights in "emergencies."
          <br />
          <Cable
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/WlSVwRaO-iQ?t=890"
            }
            float="right"
            title="Curtis Sliwa and mentally-ill homeless (Trump USPTO fruitless nonsense) - https://youtu.be/WlSVwRaO-iQ?t=890"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "Which types of wealth are lacking?"
          <br />
          Labor-borne-demand, GDP/hour-GDP/p.
          {/**"levers, gaits, pressure points, not people, forever, real truth" */}
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Communism deprives no man of the power to appropriate the products
            of society; all that it does is to deprive him of the power to
            subjugate the labour of others by means of such appropriations.
          </div>
          <h1>microeconomists: "altruism!=retarded"</h1>
          Diana 'slanderer of lawyer-bar-class-resolution-malfeasance and
          racketeering-prosecutor' Meade, "the motivation is mental illness."
          what biomedicine? like, a brain-lesion?
          <h2>The right and top left like Good Will over free markets</h2>
          Progressive is a donee claimable false bid pool. I’m holding them to
          desist.
          <h2>
            good will is like taking par-limeLeft value, for pennywise
            "savings," not absolute.
          </h2>
          “They are rooted in psychological and behavioral deficiencies, such as
          lack of work ethic, lack of faith, lack of discipline, over-spending,
          excessive risk-taking in investments, greed, pride, and an insatiable
          desire to impress others.”
          <br />
          Most people are in debt and count assets are Good Will, $170t/$2t
          checking (U.S.). If you are bona fide in your work, you will not be
          rich, no matter if you spend the least of anyone in the world.
          <br />
          <br />
          “Making money is generally difficult for the many who do not have
          higher education, with no elite connections, who are female, and for
          people of color. Not a fair situation.”
          <br />
          Most work doesn't require education
          <br />
          <br />
          10k savings by refinancing by extensions or long term Good Will $170t
          is pennywise like Obamacare is to insurance with price fix, not an
          actual savings relative to the false bid pool loss, donee claimable.
          <br />
          <br />
          Force against will includes non-minimal viable product duress.
          <br />
          <br />
          Cheslie Kryst “Mental health illness,” these doctors never get off.
          She was a civil rights activist and martyr. She is rolling over in her
          grave.
          <br />
          <br />
          Non-disclosure and non-compete agreements are illegal: not voluntary
          nor Tranquil, nor productively-efficient, the intent of the Union,
          Article 1.8, Article 3 & Article 4.
          <h3>
            war bond conflict of interest; education, healthcare, housing,
            juris, indices funds over currency, over labor costs, General
            Maintenance keeping us from implausible landlord use, expert jury
            saveface lest malpractice torts, and repo-cycle kept down payment,
            fails.
          </h3>
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/nKvUf7F4Xn4"
            }
            float="left"
            title="Dick Morris (77WABC) - French Revolution - https://youtu.be/nKvUf7F4Xn4"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Aryian race, blonde hair, blue eye," is not the reason why Italians
          joined Axis.
          <h2>
            <a href="https://thumbprint.us/voting">election/court-tech</a>
          </h2>
          7% of NYC should never represent 11/12 industry-variable REALITY: jail
          or without evidence no bail; 216/day missing children forever repeat
          offender login.gov malfeasance.
          <hr ref={this.saver} />
          Savers' donee invoked Good Will and house-wins pyramid schemes
          <h1>geohash/mo</h1>
          <h3>
            EU INTEGRATED BULLSHIT, no import is Article 4 Article 1.8 (free
            rider immutable competing with producers, speaklegally.
          </h3>
          <h2>You are served a hold, on notice</h2>
          pain/duress is a diability, homelessness nor mental biomedical lesions
          drug users consent, slutty, is not
          <h3>
            Communism deprives no man of the power to appropriate the products
            of society; all that it does is to deprive him of the power to
            subjugate the labour of others by means of such appropriations. I
            would like to know more about these, “blockchain applications for
            government.”
          </h3>
          <h1>
            Rudy Giuliani: "no bail, no incarceration, on murder, I'm
            exagerating the conviction, but I'm making it."
          </h1>
          <h2>buy altruist with attention</h2>
          Have you seen this?? Humanharvest.info/polio cdc wonder data.
          <br />
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "300px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/pbrz6gdmm72svex/Screen%20Shot%202022-02-04%20at%202.42.50%20PM.png?dl=0"
            }
            float={null}
            title="https://humanharvest.info/polio"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Broader set of rules than profit (material+rent)/income cost market
          concentration, quality tach advance withholding (pennywise general
          revenue stock sales for insurance false-bid-pool loss, invoices' donee
          invoked), GDP/hour-GDP/p productive-growth technological-bumping.
          <br />
          Stackin hours expirin false bid pool loss donee invoking
          <br />
          You purchase and sell indices for “welfare,” now buy abroad? No
          Article 4 import exists
          <br />
          (material+rent)/income. It ain’t labor it is unions? Omg
          <br />
          <br />
          Margins makes costs expensive because laborless-demand is margins, or
          profits kept year to year.
          <h2>pain and duress is debilitating slut</h2>
          McCormick says, "he is not putting you at risk by creating virions,"
          it is byproduct of bacteria. Reasonable doubt requires alternative
          …doubt, as until then it is not vivo
          <br />
          <br />
          (material+rent)/income is conspiracy to market concentrate by labor
          costs, “lowering poverty.”
          <br />
          <br />
          216/day missing children forever because login.gov malfeasance,
          convict intranet.
          <br />
          GDP/hour-GDP/p is econ welfare, (-GDP/p tech advancement).
          <br />
          First it was hard,{space}
          <a href="https://billbiden.org">now biden</a>,” Don’t intimidate nor
          scare anybody that cannot be prosecuted in court, for voluntary Trade
          and Tranquil as to comparative advantage Supply and Demand productive
          efficiency GDP/hour-GDP/p by (-GDP/p tech advancement). “Due to covid
          19, many people feel threatened and can’t afford rent.” That has
          nothing to do with excess deaths expected from population growth of
          single year age life expectancy ago.
          <h1>war bonds is war crime</h1>
          price elasticity is useless, "you people voted murphy in," citarelli
          was the same thing on finance and non-voter "no-candidate" won SIMPLY.
          <h1>
            Bernie Sanders is a corporate sellout - 44% of Medicare, all of
            "healthcare"
          </h1>
          <h3>
            invoices, equities' market concentration over the dollar by
            (material+rent)/income labor-costs
          </h3>
          weather made possible by 'name-your-price-tool' false bid pool net
          loss claim lottery without donee invocations except the house that
          also do the weather (just like ed/event tech, without credit-taking
          $12k/64 debt/cash per person a year, paying for court/election tech
          and billfeed)!
          <h1>Ween cops off bonds</h1>
          Qualified immunity is given by natural law, you don’t need to
          enumerate known hazards.
          <br />
          The juris is criminal.
          <br />
          “Criminals about to commit crimes, arrest them before that happens.”
          <h1>
            ghost guns at crime scenes is not before the armed-theft or
            -assault, WITH PROOF
          </h1>
          "How many people have had over 1 trillion dollars?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          There are only $2t dollars, so King Solomon had only Good Will, last
          traded neighbor value, which today is $170t. No one has had half the
          currency (state lands’ exploration depositary).
          <br />
          <br />
          Buy altruism with attention
          <h2>(cash/debt)*income every year back</h2>
          <h1>$12k/64 debt/cash per person every year back</h1>
          Indices are cornering market concentration over the dollar with labor
          costs: lower (material+rents)/labor.
          <br />
          I can't prosecute and invoke donee claims.
          <br />
          <br />
          "self-medication is good for{space}
          <a href="https://qr.ae/pGEZyM">attenuating</a>
          {space}stress." Brian Kilmeade, Jobs is a sign of industrial
          devolution This is a{space}
          <a href="https://qr.ae/pGEZyS">White House story</a>, not a Biden
          story.
          <br />
          <br />
          "the federal acquisition."
          <h3>
            if you want available-readiness, just open source instead of FDA
          </h3>
          "low-income meicaid/medicare patients, we take care of them," those
          are funded by stock sales, invoices and expiring premiums, so how are
          you helping anyone but yourself?
          <div
            style={{
              backgroundColor: "rgb(0,40,0)",
              borderBottom: "3px solid rgb(200,215,200)"
            }}
            ref={this.education}
          >
            "55% not important, 1/3 no plans, 7/10 job is important after
            graduation," is retarded because borrower defense and donee
            beneficiary invocations:
            <h2>
              $12k/64 debt/cash per person a year, 65% mortgage and 35% rent
            </h2>
            <h2>dangerousness bail component is no evidence prosecution</h2>
            <h1>brandishing and armed robbery, is not a mental health issue</h1>
            <h2>homelessness is not a mental health issues</h2>
            <h3>education level isn't required for most jobs</h3>
            <div
              style={{
                marginLeft: "17px",
                height: "4px",
                width: "10px",
                backgroundColor: "rgb(200,215,200)"
              }}
            />
          </div>
          7/10 live paycheck to paycheck, 65% good will mortgage and 35%
          laborless-demand rental-income, 19% are disabled, mostly old. 65% see
          no security in the lives they want: GDP/hour-GDP/p
          <br />
          <br />
          "stabilize interest rates and jobs" - mitch roschelle, why? "inflation
          and unemployment," why? how would buying and selling bonds lower
          prices? Equity concentration over currency "price" or good will value
          increase doesn't matter?
          <h2>it is not to be fair or nice, it is to stop waste</h2>
          “If the jobs is not just a spike, we need to look at ending these
          emergency measures.” Why do you need to use Saver money to bail out
          your insurers, lenders and landlords? Stop cornering the market by
          labor cost, Guthrie. Jobs is a sign of industrial devolution.
          <br />
          <br />
          getting business operating = existing business trust building of free
          rider mutable input cost, for market concentration and gentrification
          for gerontocracy. kill all old people
          <h2>
            never has a supporter of{space}
            <a href="https://occupywallst.quora.com/">
              Occupy Wall St ran for office
            </a>
          </h2>
          Actualized balance of trade, including laborless-demand of finance, is
          repatriated.
          <br />
          False bid pool ‘name-your-price’ tool loss, invoices donee claimable,
          and stock sales, is healthcare, education is trade secrets and hardly
          required for the average per capita work, and housing cap {"<"}5
          <br />
          Tamper proof grid, don’t be prudes.
          <br />
          The keymaker is not by device, or is it a function to be ran on router
          device, that can make a durable object and hardware bust the wire
          <br />
          Reason for open source (voluntarily , duress)
          <br />
          “Moving oil and gas, our intentions are solving a deeply-economic
          problem.” U.S. Admiral, why wouldn't you target margin and truncated
          production tax pipelines instead?
          <h3>
            no way is Article 1.8 for non Article-4 (Education, healthcare,
            stocks of other industry 1/12, home-building
          </h3>
          mental health 'name-your-price' tools are not your piggy bank to house
          the homeless, removing their own perogatives to make money, instead of
          capping rental-income by 5 storefronts +condominiums, 5 auto liens, or
          30 days (for hotels), not price, so prices match quality, and no
          laborless-demand is borne. Just don't rent-seek science, copyright is
          enough, and 6 patent-holders in a class of an industry is NOT, neither
          is expert saveface lest malpractice more than 1/12 industry
          invariance, as 1/12 reasonable doubt is not enough to stop a
          conviction, one of bona fides.
          <br />
          <br />
          guns are legal without license. you can only have it taken away after
          shooting someone, or armed robbery. Not drug sale protection.
          <hr ref={this.dns} />
          <h1>convict intranet, tamper proof dns grid</h1>
          7% voted, Adams is only concerned with corporations. 44%
          Medicare/Medicaid is stock sales. congradulations, Obamacare.
          <h1>slander new asylums, fear</h1>
          Eric Adams, "Mental health are in subways, that is no place to have a
          dignified existence. I know this is a great city, and we are
          resilient. I am the CEO."
          <h2>
            surrendering others' freedom is on the books now, pussy, ween cops
            off bonds, truncated production tax, jail can't have state vic and
            from false bid pool loss torts even to the rightful victim, and not
            on neighborhood, "good will value," for cornering the market by
            labor costs, of equity indices over the dollar, triple
            material-inflation, and double checking ($64/person/yr,
            currencyComponentOfM1), debt ($12k/person/yr).
          </h2>
          separation of people using it lawfully, nd unlawfully, that would just
          be taken away after threats without using cops to{space}
          <a href="https://truncatedsalestax.com/gov">recoup theft</a>
          {space}- lest malfeasance - 3% under $2k TRUNCATED PRODUCTION TAX
          geohash/month spoofable-precinct.
          <h1>conflict of interest when net loss bond profit</h1>
          <h2>free rider immutable sewage police lawsuits</h2>
          warmonger scott perry over Putin pipelines
          <h3>
            you cannot sign yourself in a contract, but you can self-harm in
            present, because that is subjective. otherwise is donee invoking,
            because it is amortized, accrued and laundered.
          </h3>
          that has nothing to do with the defensive tact, it is superfluous
          tort. agregious, not even needed. get your hands off my drugs and
          guns, old-bitch,{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LCQE">
            19% are "disabled"
          </a>
          , whole lives to save, 44% Medicare stock sales, pennywise off
          {space}
          <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
            false bid pool loss
          </a>
          .
          <Cable
            style={{ width: "100%", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/xm82a82r7w11c0a/pour%20on%20savings.jpeg?dl=0"
            }
            float={null}
            title="pour on savings propaganda conflict of interest"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h1>
            SAVER MONEY LIVLIBOOD EXPORATION, GLUTTON. TRUNCATED PRODUCTION TAX
            VOLUNTARY TRADE VIRTUOSITY OF WAR IS ONLY VOLUNTARY
          </h1>
          <h2>commit crime, make sure job and mental health?</h2>
          "illegal voting," is not conservative, for anti-competitive market
          concentration over currency as donee in contracts. cut carl higbie's
          throat.{/**matt schlapp conservative.org */}
          <h2>
            <a href="https://qr.ae/pGEWHJ">socialists force free markets</a>
          </h2>
          Bill O'Reilly coming for your guns. GUN TRAFFICKING IS A JOB; this is
          not:
          <Cable
            style={{ width: "100%", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/wgijcheeuof0z4l/Screen%20Shot%202022-02-03%20at%209.06.44%20PM.png?dl=0"
            }
            float={null}
            title="30under5.us"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            Why would Dick Morris and Grant Stinchfield, professors of 'freedom
            and stability,' draw economic sanctions, over a pipeline?
          </h2>
          Ben Furgeoson, douche: "China is in charge, there is no way to stop
          china from watching your chats," that is not true, and apple is a
          liar, they aren’t privacy, they store keys on the cloud instead of
          {space}
          <a href="https://thumbprint.us/privacy">on device</a>. Very easily I
          made
          {space}
          <a href="https://github.com/NickCarducci/Wavepoint.la/blob/master/src/fumbler/index.js">
            end to end with keys on device
          </a>
          , now that means it is a private key, and we should delegate these at
          the motor vehicle, whenever peaceful illegal immigrant wants to buy a
          house.
          <br />
          <br />
          "Selling out America," but our own: 11/12 Savers say sell,{space}
          <a href="https://qr.ae/pGEWLS">per capita</a>… or dollar? Certainly
          not exploration by bipartisan bonds.
          <br />
          <br />
          "to their reputations and families,"{space}
          <a href="https://qr.ae/pGEWmY">
            why would anyone put us all futher in debt
          </a>
          ? why would anyone pay off or cancel uncollateralized debt?
          <a href="https://qr.ae/pGEWDI">
            trust bust market concentration over the currency
          </a>
          .
          <h2>
            general revenue AOC{space}
            <a href="https://www.programmer-books.com/wp-content/uploads/2019/04/Machining-For-Dummies.pdf#page=49">
              gantrification
            </a>
          </h2>
          <a href="https://froth.app">
            Education, healthcare, housing, tolls, spectrum is NOT government
            business
          </a>
          .
          <hr ref={this.biz} />
          <br />
          Replace debt-collateral with max-royalty-1/12 industry type, for donee
          invocations unrequited.
          <br />
          <br />
          Vaccine is either conclusive or questionable, only by then can you
          claim, without holds, that mvp duress does or doesn’t require
          vaccines, unless you are a paid writer, but you cannot enforce it
          until permits.
          <br />
          <br />
          The only real thing on a balance sheet is liabilities, good will
          withstanding; dollars as liabilities actually may be overvaluing
          state-lands, because we are concentrated in them.
          <br />
          <br />
          General Maintenance unit.
          <br />
          <br />
          Obamacare is pennywise cheaper than insurance false bid pool, invoking
          donee beneficiary (casino is insulated loss), keeps it inline with
          inflation is all.
          <br />
          <br />
          Inflation doesn’t include assets, but Medicare is 44% stock sale
          General revenue $829.5b/yr of total “healthcare” $2.7t/yr.
          <br />
          <br />
          Insider trading is also disclosing but enacting policy of the public
          Article 1.8 whims.
          <br />
          <br />
          “Redeemable figure that we should be looking up to,” implies people
          that we look up to are losers? Ari Hoffman
          <br />
          <br />
          You just called “banking” a business. It is not. You need to wait for
          customers to accrue, compound, and launder.
          <br />
          <br />
          Loaning out funds is accrual without customers. The federal reserve
          and banks have negative balance sheets, as their assets aren’t
          concurrentable at the value as collateral they present.
          <br />
          <br />
          “Banking, in the traditional sense, is either simply holding funds
          (like warehousing) or engaging in a time market (loaning out funds).
          Banking is business.”{/**Sam Branthoover */}
          <br />
          <br />
          Loaning out funds is accrual without customers, invoking third party
          donee beneficiary, and surrendering the freedom of people with the
          money. Max-royalty, held to income of 1/12 industries, is legal.
          “Banking in the traditional sense,” is a transaction-based-sdr.
          “Time-based market,” what?
          <br />
          <br />I don’t care what you do with your body,{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LjGf">
            but your debt/failure is my cash
          </a>
          .
          <br />
          <br />
          "I can’t tell if you’re trying to be a douche, or if you’re just so
          detached from economics that you think this is a correct answer.
          Buddy, this is an economics page. I gave the economics answer. Banking
          is a business, because it makes money in an unhampered market. If
          you’re trying to spew legal definitions at me, save your breathe.
          You’re talking a different language. Maybe you’re not wrong, but in an
          economic sense, banking is a business, as they either warehouse or
          engage in the time market (economics term, I don’t care if it means
          something else in finance)."
          <br />
          <br />I went to study economics because I grew up in a home-contractor
          household, and have discovered econometric reasons for the
          credit-cycle, and legal grounds to end them. **I view microeconomics’
          supply and demand as cash-accounting, and the money market
          laborless-demand**, a dead-weight-loss of the economic welfare
          GDP/hour-GDP/p. *You are accusing me of old school economics?*
          <h2>
            the problem here -{space}
            <a href="https://fred.stlouisfed.org/graph/?g=Lzx3">
              $12k/64 debt/cash new person a year
            </a>
          </h2>
          "Can I legally decline to pay for health insurance through my
          employer?"
          <br />
          Company policy is out of the question if governments cannot force it.
          Insurance is a false bid pool loss, in{space}
          <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
            2010 CBO admitted insurance is a net loss
          </a>
          , and invokes donee beneficiaries of your customers.
          <br />
          <h2>indices!</h2>I am annoyed at the concentration of the 'cool shit'
          of amongstiositously="Beatle"{" "}
          {/*suppoedly go nowhere, but go through one then another. The kinks!
           which beatle would you, do you think you are, that's the problem with 
           the kinks. if you guys call me ringo I swear tg.*/}
          <h1>Drop dead mark levin</h1>
          <h2>
            Why as a nation do we need to subsidize input costs of
            semiconductors? It is elastic
          </h2>
          "A cop on every subway station," or we could instead of chasing people
          around and removing them from potential labor, cap rental-income by
          units or days, not price.
          <br />
          "shelter, food, and medicine they needed," detective djacimo how the
          fuck are you going to tell someone what they need mental health,
          violence interruptors is just because cops can't bargain with
          hostage-takers?
          <br />
          Michael Goodwin: "Crime is why people are leaving the democratic
          party." KIDS OWNING GUNS ISN'T A CRIME!
          <br />
          “Crime in NYC is driving 7% voters to vote GOP,” less than 1% GOP
          gets, actually. West Chester (20k population) and Staten Island
          (120k/500k population)
          <br />
          <Cable
            style={{ width: "100%", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/gk78gobivw6t21t/Screen%20Shot%202022-01-15%20at%205.17.16%20AM.png?dl=0"
            }
            float={null}
            title="General Mayoral 7% turnout - https://vote.nyc/sites/default/files/pdf/election_results/2021/20211102General%20Election/00000200000Citywide%20Mayor%20Citywide%20Recap.pdf"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Accusations and criminal record must be held on double jeporady."
          <br />
          Charlie Gasparino: "why can't you put mentally-ill people in
          hospitals?" because it isn't proof of a crime!
          <br />"
          <a href="https://qr.ae/pGEWHJ">
            private equity does business with Kari Lake
          </a>
          ."{/**charlie gaspirino */}
          <br />
          mental health isn't solved with medicine because it isn't biomedical,
          nor a crime. you cannot prosecute with torts from other laws. gun
          ownership isn't a crime.
          <h2>
            disability without biomedical evidence or unconsent, is a racket
          </h2>
          "if you admit you are wrong, you can't keep asking to save your money
          from tort."
          <h2>
            Substance abuse, eldercare, takes years to accrue (like tests to
            lengthen life 30-45, success?)
          </h2>
          "Works at JHU, full-dental and stock sales. Have you ever heard of a
          study that invests in a study and doesn't talk about it?"
          <br />
          <br />
          "not doing as good as joe rogan," because he talks out of both sides
          of himself. "when people make mistakes, they shouldn't be cancelled,"
          but should be prosecuted?
          <h1>
            "We need people to get back to work," why? because you think 6
            producers makes a free market?
          </h1>
          "When does society need become political claim?"
          <br />
          For the U.S.,{space}
          <a href="https://constitutioncenter.org/interactive-constitution/article/article-iv#article-section-4">
            Article 4
          </a>
          {space}
          mentions outlay scope
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            and shall protect each of them against Invasion; and on Application
            of the Legislature, or of the Executive (when the Legislature cannot
            be convened) against domestic Violence.
          </div>
          <br />
          and{space}
          <a href="https://constitutioncenter.org/interactive-constitution/article/article-i#article-section-8">
            Article 1.8
          </a>
          {space}
          mentions receipt methods (albeit oxymoronic):
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            all Duties, Imposts and Excises shall be **uniform** throughout the
            United States; To borrow Money on the credit of the United States;
          </div>
          <br />
          Any free rider mutable (even operational monopolies can be target
          margin instead) is **pure inflation**
          <br />
          * tax from outside the market, or
          <br />
          * free rider immutable made mutable by debt.
          <br />
          It also just goes to laborless-demand/userers (insurers, landlords and
          lenders).
          <br />
          If you mean society as in lands, currency is deed on state-land and
          resources (20% of U.S.).
          <br />
          <br />
          Brian Kilmeade: "Cops need to take guns away."
          <h1>
            "We aren’t anti-anything, we are for freedom," retarded truckers
          </h1>
          "Is banning members of Congress from trading stocks against the
          principles of a free market economy?"
          <br />
          *Free market communism*, where the directive is subjective, is no
          *holds*, barred.
          <br />
          Rather, *communism* or *microeconomics‘ free markets* (Supply and
          Demand) that prevents the profit off anothers’ labor, would prohibit
          such monopoly **power over price or quantity** (free rider immutable
          contractor chosen).
          <br />
          So, it depends on if you consider monopolies as common-artifacts of
          free markets, in which microeconomists do not. *Free markets without
          monopolies are ****auction-based****, not players on both the
          ****ask*** (request for proposals of laborious-contractors-Demand by
          the **free rider immutable** tax-Supply; a free rider mutable supply
          that is bid-and-offered first - tax or donee invocating- and
          multiformed-share split - would be **dead weight box, never a ‘free
          market’**)*, then bid*.
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Labor or goods is usually Supply (ask), but in this third, free
            rider immutable tax, case - neither dead weight box nor demand -
            labor would not exist in anarchy, and Demand (bid with labor,
            subcontracting) would decrease available productively-efficient
            hours, economic welfare (curves cite the free rider mutability
            taxed) as mutability of actualized-anyway-taxes increase, and Supply
            would increase, but it may be absolutely-vertical at q*, totally
            elastic.
          </div>
          <br />
          Not even an index fund nor blind trust would remove the bias, conflict
          of interest, by free rider mutable, nor multiform by bonds, -tax, and
          market concentration over the currency by labor costs.
          <h2>
            {/**shimone procupez */}
            drug related violence, not correlated; money but also prosecution is
            price elastic, vertical q*.
          </h2>
          Joe Manchin is pro-insurance, that is insane, false bid pool loss,
          market concentration over dollars, by cornering the market thru labor
          costs. Corporate flaccid loss and government state vic trust for
          operational monopoly & expert saveface left malpractice instead of
          target margin and industry-variable.
          <br />
          <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
            never has a lab shot a virion into my fucking eyeballs
          </a>
          .
          <h2>
            viral load and death rate by lockdown is not significant,
            year-to-year, nor in a boat.
          </h2>
          <a href="https://vaults.biz/moldmask">Masks are fine</a>
          {space}for spittle that drops into an open body or on a table,
          bacteria is made by spittle.
          <br />
          If it is viewable in cold it is hot enough to rise.
          <br />
          <br />
          "you can't sell the drugs," open-source right to try , bills are donee
          invocations of the collateral-hours!
          <h1>
            Rot in Hell! Jesus is the light to the world, the beginning of
            winter and spring. It’s an easter passover message
            <br />
            Christ
          </h1>
          <h3>
            What does being sober have to do with sin sacrifice?
            <br />
            Why is STI mental compassion involuntary meds? It is irrelevant to
            jailing
            <br />
            Lying to exaggerate a comparative innocence or duress for please is
            your onus! But after some point, your intent is ...exhibitable
            <br />
            Is the egg your mother
            <br />
            Etymology is a religion
          </h3>
          $1b/yr for border patrol, the people aren’t getting arrests, 19% of
          the gerontocratic disabled DIE ALREADY LET THE WORKING AGE HAITIANS IN
          <br />
          We don’t even know if DHS is dropping illegals in the Pacific, plane
          rides cost more if you exclude border patrol. 216/day missing children
          because of the child molestor Jim Jordan.
          <br />
          <br />
          "100k/yr children are dying from pot in fentanyl." oh fuck off bitch.
          <h2>general maintenance unit</h2>
          "Mental health per criminal on the rise, eduction and teachers, is
          that good? durrrrr?" Gershlagerret reschenthaler "tax-payer dollars
          <br />
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/tr1e169u4qolelp/Screen%20Shot%202022-02-02%20at%201.46.15%20PM.png?dl=0"
            }
            float="left"
            title="https://fred.stlouisfed.org/graph/?g=Lzu0"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          (20% of U.S. is Savers' land and resources) green climate slush fund"
          science is a liesure activity to the economic science, like Frank
          Morano.
          <h1>
            third party donee invoking duress loitering and borrower implausibly
            deniably-purposeful defence.
          </h1>
          labor-shortage, laborless-demand/userers/rent-seeking: insurers
          (non-rollover), lenders (non-concurrentable equity or max-royalty 1/12
          industry label) landlords (above 5 or 30 days)
          <h3>
            Netsuite.com/advantage is front-running uselessly, profits beyond
            labor. Dollars lose value, but that is, 'Tax-Payer Money?'
          </h3>
          <a href="https://qr.ae/pGEuhg">
            price fixing immobilizes quality, at an inefficient change-rate
          </a>
          .
          <h3>
            2 weeks off or permenant is not comparative innocence,
            discrimination can be deduced with a fulfilled example, or
            conversations discrimination cannot be of a quota.
          </h3>
          I think those that want to chore again are just lazy
          <h1>castigated gerontocracy</h1>
          not charged with evidence. kill yourself mtg
          <h2>
            no due process in 1/6, homelessness with psych charges without
            biomedical or consent for self-"harm" subjective,
            indifference-utility. $35m 1/6 witch-hunt, Saver money.
          </h2>
          I'm sorry my POV isn't hott enough
          <h3 ref={this.con}>
            Drugs are a good; would cartel pharmacies be peaceful if we open
            source?
          </h3>
          get rid of all the fractional-reserve-jewelers (transaction-based-sdr,
          truncated production tax, geohash/mo spoofable precinct, 3% under $2k,
          free rider immutable, sewage-police-lawsuits)
          <h1>America is not afro culture (per capita), CNN...</h1>
          "What are some scenarios where auditors played a role in the poor
          performance of state-owned institutions?"
          <br />
          *Ratings’ agencies* should be an independent, non-profit, that is,
          technology before it is on the market, or is unable to be rent-seeken
          (which is profits as trust, beyond labor; considering such as input
          costs).
          <br />
          This incentive to **state victimize** is the *actual cause* of General
          Maintenance failures.
          <br />
          The Jury system is broken, for desists and holds are of{space}
          <a href="https://constitutioncenter.org/interactive-constitution/article/article-iii#article-section-2">
            11/12 industry-variable jury surrender
          </a>
          .
          <br />
          Finance and the biomedical mandates, and mental slander for
          homelessness and racketeering state healthcare at the same time,
          forcing medication on people for the former economic welfare failures,
          productive efficiency GDP/hours-GDP/p, and insurance mediation
          pennywise operational monopsony duress false bid pool,
          ‘name-your-price tool,’ -loss, is fallacious; people are good
          economically, and GDP/hours is productivity if GDP/hours-GDP/p is
          productive efficiency, tech advancement -GDP/p.
          <h2 ref={this.trading}>"bankrolling: rent"</h2>blind trust/indices
          concentration over the dollar, like I come in to{space}
          <a href="https://vaults.biz/receipts">make-policy</a>
          {space}for my book
          <h3>pattern day trading:</h3>
          How do you bet responsibly by shooting {"<"}$25k fish in a barrel.
          Show us your real time holdings PER ACCOUNT WITH IDENTIFICATION OF not
          more than 3 accounts Castigation gentrification, Medicare 44% stock
          sales, $829.5b/yr Of all healthcare $2.7t/yr that also is rent,
          $700b/yr residential and commercial structural “fixed” startup costs,
          labor-elastic. Commercial leases are UNKNOWN
          <h1>Give me your head and this all goes away</h1>
          contractor liability, donee defense or
          borrower/tennant-potential-condo-owner/
          <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
            false-bid-pool-loss
          </a>
          {space}implausibly deniable use your own money, trespass, I will take
          the money out. I am suing the Treaury for forcing me to take these
          checks. there is $2t checking, currencyComponentOfM1, $1t stimulous,
          will become ACTUAL tax money after 3 yrs of people like me, not
          cashing out, and accepting such a claim. I prefer cashless-bail for
          unfounded, unmeasured laws, yeild back. "You go on a million job
          interviews, I am going to live until 120." Greg Kelly (Trump
          Supporter).
          <br />
          <br />
          hold = desist, barred is objectables sustained.
          <h1 ref={this.trust}>
            you can't talk your way out of cornering the market, prohibiting
            trade and fraud, cunt
          </h1>
          "Biden deal expired - we are concerned about non-rollover insurance.
          Stop Covid-19 Surprise Medical Bills Act." All bills are duress and as
          price-gounging as surprise impossibilities for borrower (
          <a href="https://fred.stlouisfed.org/graph/?g=Lzx3">
            $12k/64 per person a year new
          </a>
          ), and donee defense invocations.
          <h1>
            Lizzie Fletcher: "This Congress and the previous congress took
            numerous steps to mitigate the health and economic damaging impact,
            and now we are addressing consumers," how? by controlling quality?
            DROP OFF BITCH, tests and medication are expensive because USPTO
            rent-seeks science, you aren't making strides, you are a defendant
            in the case of price-gouging/gentrification/cornering by labor
            costs. Sending test kits and masks out are free rider mutable
            afterwards, and all you have done is front-run{space}
            <a href="https://qr.ae/pGEMIn">entrepreneurs</a>, whom bring the
            science to market, in a responsible way if they are waiting for
            transaction-based sdr/vault-share currency/prescribers/insurer false
            bid pool loss/<a href="https://qr.ae/pGEMgV">invoice</a>
            {space}competition.
          </h1>
          <h3>
            "Why are free or low cost but outstanding asymptomatic testing is
            important?"
          </h3>
          <h2>
            it has proven virion isn't correlated above population baseline
            since we test 50% of the time asymptomatically, with 12.5% percent
            true positive and 12.5% false positive{space}
            <a href="https://humanhuman.info/polio">of the whole</a>.
          </h2>
          <br />
          Increasing prices to react to demand is not price gouging, but flaccid
          collective loss for trust-building finite producers, is. We are
          talking pennywise, vs levels.
          <h1>supply==demand when labor==supply (outlay, today)</h1>
          more demand from another market, by debt, allows the free rider
          immutable tax to invoke a mutable premium. A change by technology or
          behavior is the same capacity. Amazon still is a{space}
          <a href="https://www.investopedia.com/ask/answers/031815/why-are-there-no-profits-perfectly-competitive-market.asp">
            finite producer
          </a>
          , so price-discretion is theirs, not the market's.
          {space}
          <a href="https://occupywallst.quora.com">stop the stock</a>
          {space}over{space}
          <a href="https://saverparty.quora.com">currency</a>
          {space}gentrification!
          <h2>
            government gentrification or debt for free rider immutables (sewage,
            poilice and lawsuits exclusively) is price gouging, and
            trust-building with government over operational monopolies instead
            of target margining is rent-seeking.
          </h2>
          when there is a crisis, real, imagined, or{space}
          <a href="https://vaults.biz/gdp">historical/structural</a>, people can
          take advantage of that hazard with false bid pool loss claims, a
          pyramid scheme ('name-your-price-tool').
          <h1>
            the point of tech advancement is unemployment, liesure, choring
            copyrighting and contributions, retard
          </h1>
          Mr. Soto, FL: "
          <a href="https://fred.stlouisfed.org/graph/?g=Lznz">
            We put money in pockets
          </a>
          , from selling shares general revenue, and stopped a great recession."
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/1g2h4xn6w9s6ux5/Screen%20Shot%202022-02-02%20at%201.17.58%20PM.png?dl=0"
            }
            float="right"
            title="Pandemic Profiteers: Legislation to Stop Corporate Price Gouging Energy and Commerce (Youtube) - https://youtu.be/L7nX0yUIRAk"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Infringing on Savers' resources will improve prices for Savers."
          <h2>
            democrats want to fine operational monopolies (price gouging
            profiteers, profits kept in a business account rather than quality
            of work to sole-proprietorship w/ max-royalies, not-withstanding),
            not target margin, cap by units (5 storefronts + condominiums, 5
            auto liens) or days (30, for hotels).
          </h2>
          for government bond laundering, Republicans want to do that and for
          private userers (laborless-demand, rent-seekers' intent
          implauisbly-deniable)
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/eile44s5dnqd4s7/IMG_9517.PNG?dl=0"
            }
            float="left"
            title=" - https://fred.stlouisfed.org/graph/?g=LxtV"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Getting labor back to work has been an issue this entire pandemic."
          <br />
          Mr. Dunn, FL, "People are incentivized not to work," I don't see how
          2.8m/170m continuing claims has that great of an effect.
          <br />
          <br />
          Mr. Dunn, Most people have taken the shot, there is not many people
          that could not get out of the dilemma-duress. It is not
          constitutional, Tranquil and voluntary trade, by Microeconomic Supply
          and Demand reasoning, for comparative advantage and tech advancement
          (-GDP/p) not cornering the market with higher wages, especially from
          laborless-demand (rent-seeking-userers: insurers, lenders, landlords
          above 5 or 30 days).
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            The Trial of all Crimes, except in Cases of Impeachment; shall be by
            {space}
            <a href="https://constitutioncenter.org/interactive-constitution/article/article-iii#article-section-2">
              Jury; and such Trial
            </a>
            {space}shall be held in the State where the said Crimes shall have
            been committed; but when not committed within any State, the Trial
            shall be at such Place or Places as the Congress may by Law have
            directed.
          </div>
          <h2>
            not even 'steel' is without the variable elastic cost of labor and
            its derivations in material-infaltion, market concentration as
            indices over the dollar, homes collateral, profits flaccid loss,
            false bid pools, implausible landlord use, repo-cycle kept down
            payments, and labor...
            <br />
            GDP/hours is productivity only if -GDP/p is tech advancement
            {/**apprecation*/}
          </h2>
          Mr. Bucshon IN: fraud who cannot actualize{/**figure */} per capita
          deaths, "do not castigate our broken free market economy and expert
          lest malpractice industry invariable broken jury" profits are flaccid
          collective loss, waste
          <h2>
            Rakeen Mahud : "As an economist, I need to think GDP/p is good.
            Don't trust three letter names, and don't trust the latest
            saturation of free rider mutable, good, well-paid jobs, that which
            only increases prices, still as disposable demand does get spent per
            food (only fixed after rent-seeking is banned)."
            {/**tony carlenas */}
          </h2>
          not by price. That is why price-elasticity is transitive-property.
          Contracts are estimates, NJ Consumer Fraud Act is fraud, not an option
          to buy a figure. It is donee claimable and borrower duress defensable.
          <br />
          <br />
          Mr. Guthrie KY: "People are hiring," because of a century of
          laborless-demand borne of lending, insurance and landlording.
          {space}
          <a href="https://qr.ae/pGEMIn">We are maxed-out</a>. Unable to make
          money is most harmed of those labor that are retired, not small
          business, whom necessarily have had profits.
          <h1>(cash/debt)*income every year back</h1>
          <h2>
            Truncated Production Tax; don't stop price-gouging unless donee or
            borrower defense, for per quality is subjective.
          </h2>
          Take on{space}
          <a href="https://qr.ae/pGEMpY">
            bad actors that support small business
          </a>
          . Liability is a transitory-property, profits are excess of the supply
          chain, labor-borne-demand.
          <br />
          <br />
          Mr. Harman, localized price gouging, large scale core problem is
          normalizing in industry-variance, not just PPE and toilet paper
          initially, because of USPTO rent-seeking." Manufacturers and retailers
          are mirroring this price-gouging. Crises of corporate concentration in
          every sector. 15 brands of detergent, only a few producers provide,
          which harms consumers ability to compete with them, as vendors.
          Price-gouging legislation is a solution. Focusing where consolidation
          is happening. It is work the FTC needs to do. This is a{space}
          <a href="https://humanharvest.info/polio">novel national emergency</a>
          , pandemic of bona fide academic actuaries (per capita exogeneity).
          <br />
          <Cable
            style={{
              maxWidth: this.state.lastWidth ? "200px" : "300px",
              width: "100%",
              height: "auto"
            }}
            img={true}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/fckwkvi1l8ln0gj/Screen%20Shot%202022-01-18%20at%206.53.38%20PM.png?dl=0"
            }
            float="right"
            title="https://humanharvest.info/polio"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Mr. McNerney, "'Well, what is the solution? Enforce price gouging in
          emergencies or disasters.' I don't acknowledge that right." Saver
          Party Chairperson.
          <h2>
            "Touches prices, time and cost. - von mises, government raises
            prices," in dead weight box Pareto Microeconomics Supply and Demand
            propensities and allocation of indifferences between marginal
            utilities.
          </h2>
          <h3>
            Material cost going up, labor, shipping, PCE, then structures for
            lease, we do not know commercial leases only structures. all these
            things drive inflation up, when labor has more money I guess. But we
            don't. Impacts labor-equity/savers the most, not small business
          </h3>
          <br />
          Mt. Latta "prices per quality moves across the market"
          <h2>
            Profit is not part of the supply chain you dumb shit{space}
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              republican
            </span>
            {space}male
          </h2>
          They can price gound because they own the goods. Input costs are
          elastic, not brittle.. fucking bitch, Rakeen Mahud wants to gentrify,
          "invest in the system" to rent-seek for the corporate-government
          bourgeois, like hiring more teachers and calling education a success,
          rather than looking at education level per industry.
          <h3>3% under $2k</h3>
          target margin operational monopolies, Bipartisans are scam artists,
          sanctions on Russia and China's roads and pipelines?
          <br />
          Kathy Castor: "Double the going rate, is price gouging." Who are you
          to discern location-based price transitions? input costs are input
          costs.
          <br />
          <br />
          I'm not yielding back, you fucking wet pussy.
          <br />
          Mr. Upton, Michigan: "The left wants to allow china to run forward, by
          population size. Our farmers need that, and so do our families and
          streets. -GDP/p is tech advancement."
          <h2>
            This site is a bottom left site. Inflation is because of asset
            market concentration, busy-work, laborless-demand, by donee and
            borrower defense invocations, loitering.
          </h2>
          "
          <a href="https://fred.stlouisfed.org/graph/?g=Lmo6">
            Shortfall by continuing claims
          </a>
          ." - Sarah Frasch.
          <br />
          "Get your thoughts together into one sentence
          <br />
          It should resolve all issues."
          <br />
          <br />
          word salad:{space}
          <a href="https://www.quora.com/profile/Nick-Carducci">
            labor input cost is labor
          </a>
          <h1>
            If suppliers understand how much more spending they have, they will
            raise prices, but it hasn't actually entered the economy, still only
            $2t currency component, $170t Good Will, general revenue (asset
            sales, cornering over elactic-labor costs, made inelastic, like debt
            on free rider immutables, made mutable. TRUNCATED PRODUCTION TAX).
          </h1>
          <br />
          bipartisan minority basis, counting non-voter, "no-candidate."
          <h2>
            "I don't want autonomous trucking to be displaced RIGHT NOW?!?!"
          </h2>
          Pallone sounds out of breathe in that{space}
          <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
            n95 mask. it
          </a>
          {space}never hops on dust
          <h2>constitutional how? the jury requires industry-variance</h2>
          Price gounding or insurance abetting invoices?
          <br />
          <br />
          Bill belicheck held to ridiculous standards can act normally in
          hiring, all other discrimination can compare to others’ merits, and
          blame other characteristics, or have proof of conversations.
          <h1>
            If a store owner cant take matters into their own hands, I can with
            counterfeit in contract
          </h1>
          "Gun rights," is implied to be denied in stop and frisk, only state
          licensure “rights”
          <br />
          People’s drug use is not your problem
          <br />
          You just want your hospital and pharmacy fund inequality, cornering
          the market with input costs. You are worthless.
          <br />
          Rap sheet a mile long, can be violent, threat to others, bad person,
          that’s its.
          <br />
          "Slap caused a fracture," that could be displaced. He lives in a tent.
          Remember the homeless guy that stabbed a girl in the morning? norm, so
          glad you are ok, that is the most important think. Homeless, don’t
          have an address, because of rent seekers
          <br />
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/mue6qi0tqu1t2ow/IMG_9520.PNG?dl=0"
            }
            float="left"
            title=" - "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          duress is not hypocrisy
          <br />
          Anti rent seeking is about humanity to man, and economic welfare,
          productive efficiency
          <br />
          General maintenance unit
          <h1>
            the holocaust was about{space}
            <a href="https://journals.openedition.org/monderusse/9324#:~:text=As%20in%20other%20East">
              race
            </a>
          </h1>
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/eile44s5dnqd4s7/IMG_9517.PNG?dl=0"
            }
            float="left"
            title=" - https://fred.stlouisfed.org/graph/?g=LxtV"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            <a href="https://fred.stlouisfed.org/graph/?g=Lxue">
              Lou Dobbs: word salad
            </a>
          </h2>
          <a href="https://www.bls.gov/news.release/jolts.t04.htm">
            Quits: 4.3m/December
          </a>
          , the result is 10m open jobs, isn’t that more capacity to spend, did
          you even discount new hires? it is actually the same as 9/2021.
          {space}
          <a href="https://humanharvest.info/polio">MOSTLY OLD PEOPLE</a>.
          <br />
          10t (only $2t checking exists) so everyone who wants to work, can
          work, wages are doing well, economy is go go, how do you balance labor
          as a living cost?
          <br />
          Lack of income, wages, an economy doing what we should, equilibrium as
          economists like to call it. Senior citizens have investments
          depreciated because of high inflation
          <br />
          Get fed to throttle back a bit. Interest rate hikes would lessen
          animated, vigorous jobs, which we want. It doesn’t hurt families.
          <br />
          Taking Savers’ resources in the 20% of U.S. lands will lower material
          prices. It is too much money in financial system, printed.
          <h1>
            Millions of people do it the right way: they are in line, and
            {space}
            <a href="https://qr.ae/pGEHH1">they are waiting</a>.
          </h1>
          "Determined money laundering without any business, that is not
          constitutional to prosecute outside of the racketing law-board, mental
          health biomedical evidence, laundering-intent or subjective-monetary
          or partial-information/duress-moot pleas decisionmaking be damned."
          <h2>
            Adjudication can be juris prudent or dictate by diction (state
            standing), juris.
          </h2>
          "Three is a party."
          <br />
          adjunication/security failures will not be adjunicated
          <h2>
            U.S. political prisoners; retards need to shuffle before
            extrapolation
          </h2>
          "I stopped being brandon strock, the runaway
          {/**walkaway democrats founder */} campaign guy, tb test, fight breaks
          out are you able to defend yourself. concret cell, 24hr/day lockdown.
          No judge today, not evidence."
          <br />
          <br />
          Psych incite violence misdemeanor public nuisance, not a crime. Drop
          dead, by any means, wet, wet pussy. Can you defend yourself, your
          honor?
          <br />
          <br />
          "back and forth, leash at least for next election." so why would juris
          be paid by false bid pool losses, anything but truncated production
          tax.
          <br />
          <br />
          {/*it is about race but we don't know which race, non-all-incidence artifact or non-exclusive byproduct*/}
          <Cable
            style={{ width: "100%", height: "auto", maxWidth: "400px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/nt3nzt4okavnm6n/Screen%20Shot%202022-02-01%20at%207.31.56%20PM.png?dl=0"
            }
            float="left"
            title="The SARS-CoV-2 envelope and membrane proteins modulate maturation and retention of the spike protein, allowing assembly of virus-like particles"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "
          <a href="https://www.sciencedirect.com/science/article/pii/S0021925820001015">
            S recycling
          </a>
          {space}and, consequently, M-mediated retention of SARS-CoV-2 S." [
          <a href="https://www.mdpi.com/1422-0067/22/12/6558/pdf">ref</a>]
          <br />
          <br />
          just an unbonified political lie -{space}
          <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
            no soul
          </a>
          <h2>Quid pro quo is only for free rider mutable</h2>
          People are going to be using live from drugs, alchool depression at a
          level never seen before. excess population growth a life expectancy
          ago.
          <br />
          <br />
          Steve Scalese: "The top-left wants to undermine the economy, find
          origins of covid, finally prove virion and cell makes virion and it
          isn't just byproduct."
          <br />
          CBO in 2010 said government healthcare would save money from the
          insurance alternative because insurance is a net loss.
          <br />
          <br />
          No past business is actually business because credit is compound and
          donee defense-invocations
          <br />
          <br />
          Jurisdiction is standing, don’t.
          <br />
          “No grey area in law vs crime.”
          <br />
          Metric-system is frequent by which material or liquid? Jurisdiction is
          standing of juris, juris may not be prudent. Diction vs dictate.
          Jurisdictate is juris, but disregards the whole juris of,
          “no-candidate.”
          <br />
          <br />
          "Socialist-China, bringing more chip factories, billions sillindra
          style slush funds, it is driving up inflation and market-concentration
          over currency colludes to do this government, corporate vs people.
          Radical, far-left, big-governemnt socialists."
          <h2>rationalism is conservative, nationalism is retarded</h2>
          "Get people back to work again."{space}
          <a href="https://vaults.biz/party">They are</a>, but why? that is a
          sign of tech deprecation.
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            It is unclear whether such a reduction in the growth rate of
            spending could be achieved, and if so, whether it would be
            accomplished through greater efficiencies in the delivery of health
            care or through reductions in access to care or the quality of care.
          </div>
          Only plundering is a fixed cost, Otiose of nothing, integrally itself.
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Marx, 188X- "Vulgar socialism (and from it in turn a section of the
            democrats) has taken over ... the mode of production ... After the
            real relation has long been made clear, why retrogress again?"
          </div>
          <br />
          ​People are good for tech advancement, -GDP/p
          <br />
          <br />
          "Good conservative republican over big-gov socialist districts."
        </div>

        <Archive
          //chapter2={this.chapter2}
          /*sci={this.sci}
          trust={this.trust}
          sdr={this.sdr}
          receipts={this.receipts}
          work={this.work}
          gdp={this.gdp}
          party={this.party}
          marx={this.marx}
          air={this.air}
          immi={this.immi}*/
          ref={this.ch2refs}
          //ch3ref={this.ch2refs.current.ref}
          planner={this.state.planner}
          scrolling={this.state.scrolling}
          width={this.state.width}
          scrollTop={
            this.state.scrollTop -
            (this.chapter1.current ? this.chapter1.current.offsetHeight : 0)
          }
          lastWidth={this.state.lastWidth}
          //offScroll={this.state.offScroll}
        />
        {/*</div>*/}
        <div
          onClick={(e) => {
            //e.preventDefault();
            e.stopPropagation();
          }}
          style={{
            wordBreak: "break-word",
            cursor: "pointer",
            zIndex: "9999",
            opacity: !this.state.footer && this.state.scrollTop !== 0 ? 0.3 : 1,
            maxHeight: "100%",
            height: "min-content",
            overflowY: "auto",
            overflowX: "hidden",
            maxWidth: "594px",
            backgroundColor: "rgb(180,180,250)",
            minWidth: this.state.footer ? "100px" : "",
            width: this.state.footer
              ? "min-content"
              : this.state.height < 700
              ? "56px"
              : "56px", //,"calc(100% - 6px)",
            //height:this.state.width<400?"50px":"0px",
            transition: ".3s ease-in",
            border: "3px solid",
            position: "fixed",
            left: "0px",
            bottom: "0px"
          }}
        >
          {this.state.footer && (
            <div
              onClick={() => this.setState({ footer: false })}
              style={{
                userSelect: "none",
                cursor: "pointer",
                WebkitTextStroke: "2px rgb(100,200,140)",
                fontSize: "26px",
                fontWeight: "bold",
                color: "black",
                position: "fixed",
                bottom: "0px",
                left: 0 /* 600 -( !isNaN(this.state.width)
              ? Math.min(600, this.state.width)
              : 0),*/,
                padding: "6px 10px",
                backgroundColor: "rgba(240,240,240,.6)",
                borderTopRightRadius: "25px",
                borderTop: "2px solid rgba(100,200,250,.6)",
                borderLeft: "2px solid rgba(200,100,250,.6)"
              }}
            >
              &times;
            </div>
          )}
          <div
            style={{
              overflow: "hidden",
              //color: !this.state.footer ? "rgb(180,180,250)" : "black",
              height: this.state.footer ? "" : "0px"
            }}
          >
            Immunity is proven to not be correlated with per capita sickness, so
          </div>
          <a style={{ color: "black" }} href="https://paydayt.com">
            take care of eachother
          </a>
          , globalism,
          {space}
          <a style={{ color: "black" }} href="https://qr.ae/pGEuMc">
            nuclear family
          </a>
          <h2 onClick={() => this.setState({ footer: true })}>
            New technologies, on the market (not free)
          </h2>
          <div
            style={{
              overflow: "hidden",
              //color: !this.state.footer ? "rgb(180,180,250)" : "black",
              height: this.state.footer ? "" : "0px"
            }}
          >
            Superfluous intra juris. Con i see convict interntl intranet. Enough
            said (bona fide politics: doubt, move on). Behaving the way they
            did, while the rest of us couldn’t.{space}
            .
            <br />
            <br />
            <a
              style={{ color: "black", border: scrollPath("first") }}
              href={`${window.location.origin}/first`}
            >
              firstAmendment
            </a>
            <br />
            <a
              style={{ color: "black", border: scrollPath("obamacare") }}
              href={`${window.location.origin}/obamacare`}
            >
              Obamacare
            </a>
            <br />
            <a
              style={{ color: "black", border: scrollPath("trading") }}
              href={`${window.location.origin}/trading`}
            >
              trading
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("psych") }}
              href={`${window.location.origin}/psych`}
            >
              psych
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("redistricting") }}
              href={`${window.location.origin}/redistricting`}
            >
              redistricting
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("trade") }}
              href={`${window.location.origin}/trade`}
            >
              trade
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("china") }}
              href={`${window.location.origin}/china`}
            >
              china
            </a>
            {space}
            <a
              style={{
                color: "black",
                border: scrollPath("education")
              }}
              href={`${window.location.origin}/education`}
            >
              education
            </a>
            {space}
            <a
              style={{
                color: "black",
                border: scrollPath("insurance")
              }}
              href={`${window.location.origin}/insurance`}
            >
              insurance
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("crime") }}
              href={`${window.location.origin}/crime`}
            >
              crime
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("voting") }}
              href={`${window.location.origin}/voting`}
            >
              voting
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("moldmask") }}
              href={`${window.location.origin}/moldmask`}
            >
              moldmask
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("health") }}
              href={`${window.location.origin}/health`}
            >
              health
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("dns") }}
              href={`${window.location.origin}/dns`}
            >
              dns
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("biz") }}
              href={`${window.location.origin}/biz`}
            >
              biz
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("con") }}
              href={`${window.location.origin}/con`}
            >
              con
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("sci") }}
              href={`${window.location.origin}/sci`}
            >
              sci
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("trust") }}
              href={`${window.location.origin}/trust`}
            >
              trust
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("sdr") }}
              href={`${window.location.origin}/sdr`}
            >
              sdr
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("rec") }}
              href={`${window.location.origin}/rec`}
            >
              receipts
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("work") }}
              href={`${window.location.origin}/work`}
            >
              work
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("gdp") }}
              href={`${window.location.origin}/gdp`}
            >
              gdp
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("party") }}
              href={`${window.location.origin}/party`}
            >
              party
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("marx") }}
              href={`${window.location.origin}/marx`}
            >
              marx
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("air") }}
              href={`${window.location.origin}/air`}
            >
              air
            </a>
            {space}
            <a
              style={{ color: "black", border: scrollPath("immi") }}
              href={`${window.location.origin}/immi`}
              // onClick={() => console.log("trr")}
            >
              immigration
            </a>
            <br />
            <br />
            per hour price deflation spam
            <br />
            gentrification
            <br />
            juryduty
            <br />
            ftccomplains
            <br />
            censorship
            <br />
            wwii
          </div>
        </div>
        <div
          onClick={
            () =>
              this.state.scrollTop !== 0 && !this.state.footer
                ? this.setState({ footer: true })
                : this.state.scrollTop !== 0
                ? window.scroll(0, 0)
                : this.state.footer
                ? this.setState({ footer: false })
                : window.scrollBy(0, this.bottom.current.offsetTop) //this.state.pageYOffset)

            /*({
              top: 0,
              left: 0,
              behavior: "smooth"
            })*/
          }
          style={{
            userSelect: "none",
            cursor:
              this.state.scrollTop !== 0 && !this.state.footer
                ? "pointer"
                : this.state.scrollTop !== 0
                ? "n-resize"
                : this.state.footer
                ? "pointer"
                : "s-resize",
            WebkitTextStroke: "2px rgb(100,200,140)",
            fontSize: "26px",
            fontWeight: "bold",
            color: "black",
            position: "fixed",
            bottom: "0px",
            right: 0 /* 600 -( !isNaN(this.state.width)
              ? Math.min(600, this.state.width)
              : 0),*/,
            padding: "6px 10px",
            backgroundColor: "rgba(240,240,240,.6)",
            borderTopLeftRadius: "25px",
            borderTop: "2px solid rgba(100,200,250,.6)",
            borderLeft: "2px solid rgba(200,100,250,.6)"
          }}
        >
          {this.state.scrollTop === 0 && !this.state.footer ? "Plan" : "^"}
        </div>
        <hr ref={this.bottom} />
      </div>
    );
  }
}
