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
      windowScroll: 0,
      scrollcount: 0, //offScroll: true,
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
    this.links = React.createRef();
    this.linksPage = React.createRef();
    this.statistic = React.createRef();
    this.randpaul = React.createRef();
    this.govtech = React.createRef();
    this.insurance = React.createRef();
    this.saver = React.createRef();
    this.dns = React.createRef();
    this.homelessness = React.createRef();
    this.science = React.createRef();
    this.capitalism = React.createRef();
    this.biz = React.createRef();
    this.crime = React.createRef();
    this.health = React.createRef();
    this.trading = React.createRef();
    this.canvas = React.createRef();
    this.chapter1 = React.createRef();
    this.work = React.createRef();
    this.woke = React.createRef();
    this.gdp = React.createRef();
    this.party = React.createRef();
    this.marx = React.createRef();
    this.immi = React.createRef();
    this.bitcongress = React.createRef();
    this.rec = React.createRef();
    this.air = React.createRef();
    this.china = React.createRef();
    this.voting = React.createRef();
    this.crypto = React.createRef();
    this.newecon = React.createRef();
    this.geohash = React.createRef();
    this.medical = React.createRef();
    this.trade = React.createRef();
    this.first = React.createRef();
    this.chapter2 = React.createRef();
    this.calc = React.createRef();
    this.sci = React.createRef();
    this.con = React.createRef();
    this.devil = React.createRef();
    this.trust = React.createRef();
    this.sdr = React.createRef();
    this.bottom = React.createRef();
    this.chapter3 = React.createRef();
    this.gmu = React.createRef();
    this.potholes = React.createRef();
    this.pandemic = React.createRef();
    this.education = React.createRef();
    this.redistricting = React.createRef();
    this.psych = React.createRef();
    this.obamacare = React.createRef();
    this.nato = React.createRef();
    this.intllaw = React.createRef();
    this.monopoly = React.createRef();
    this.juris = React.createRef();
    this.rights = React.createRef();
    this.fines = React.createRef();
    this.menger = React.createRef();
    this.renewables = React.createRef();
    this.drugs = React.createRef();
    this.jews = React.createRef();
    this.inflation = React.createRef();
    this.accounting = React.createRef();
    this.poverty = React.createRef();
    //this.warfare = React.createRef();
    this.leisure = React.createRef();
    this.russia = React.createRef();
    this.rent = React.createRef();
    this.c1775 = React.createRef();
    this.chang = React.createRef();
    this.rcv = React.createRef();
    this.balance = React.createRef();
    this.democrats = React.createRef();
    this.cancel = React.createRef();
    this.price = React.createRef();
    this.awareness = React.createRef();
    this.okboomer = React.createRef();
    this.royalty = React.createRef();
    this.covid = React.createRef();
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
      ["crypto", this.crypto],
      ["first", this.first],
      ["homelessness", this.homelessness],
      ["calc", this.calc],
      ["voting", this.voting],
      ["medical", this.medical],
      ["bitcongress", this.bitcongress],
      ["newecon", this.newecon],
      ["trade", this.trade],
      ["nato", this.nato],
      ["rcv", this.rcv],
      ["china", this.china],
      ["devil", this.devil], //jynx apprentice executioner
      ["intllaw", this.intllaw],
      ["obamacare", this.obamacare],
      //
      ...genChildRefs3,
      //ref: { current: null },
      ["chapter3", this.chapter3],
      ["marx", this.marx],
      ["sdr", this.sdr],
      ["woke", this.woke],
      ["gdp", this.gdp],
      ["gmu", this.gmu],
      ["work", this.work],
      ["party", this.party],
      ["geohash", this.geohash],
      ["potholes", this.potholes]
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
    const { scrollcount, footer, ios } = this.state;
    if (footer) {
      this.linksPage.current.scrollTop =
        this.links.current.offsetTop + window.innerHeight / 2;
    } else {
      if (!ios) {
        clearTimeout(this.footerHelpScroll);
        this.footerHelpScroll = setTimeout(() => {
          if (scrollcount > window.innerHeight * 3)
            this.setState({
              footer: true
            });
        }, 3200);
      }
      const scrollTop = !this.state.offScroll && window.scrollY;
      clearTimeout(this.scrolllTimeout);
      this.scrolllTimeout = setTimeout(() => {
        this.getLabel(); //true
        this.setState(
          !scrollTop
            ? {}
            : {
                scrolling: true,
                scrollTop
              },
          () => {
            if (!ios && footer) {
              clearTimeout(this.footerStopScroll);
              this.footerStopScroll = setTimeout(() => {
                this.setState({ keepFooterScroll: true });
              }, 5000);
            }
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
              clearTimeout(this.footerStopScroll);
              clearTimeout(this.footerHelpScroll);
              this.setState({
                scrollcount: 0,
                footer: this.state.keepFooterScroll,
                scrolling: false
              });
            }, 7500);
          }
        );
      }, 90);
      if (scrollcount < Math.abs(this.state.scrollTop - scrollTop)) {
        return this.setState({
          scrollcount: scrollcount + 100
        });
      }
    }
  };
  /*handleScroll = (e) => {
    if (!this.state.footer) {
      const scrollTop = !this.state.offScroll && window.scrollY;
      clearTimeout(this.scrolllTimeout);
      this.scrolllTimeout = setTimeout(() => {
        this.getLabel(); //true
        this.setState(
          !scrollTop
            ? {}
            : {
                scrolling: true,
                scrollTop
              },
          () => {
            clearTimeout(this.footerStopScroll);
            this.footerStopScroll = setTimeout(() => {
              this.setState({ keepFooterScroll: true });
            }, 2400);
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
              clearTimeout(this.footerStopScroll);
              clearTimeout(this.footerHelpScroll);
              this.setState({
                scrollcount: 0,
                footer: this.state.keepFooterScroll,
                scrolling: false
              });
            }, 4800);
          }
        );
      }, 90);
      if (scrollcount < Math.abs(this.state.scrollTop - scrollTop)) {
        console.log(
          scrollcount,
          Math.abs(this.state.scrollTop - scrollTop)
        );
        return this.setState({
          scrollcount: scrollcount + 100
        });
      }
      clearTimeout(this.footerHelpScroll);
      if (!this.state.footer) {
        this.footerHelpScroll = setTimeout(() => {
          if (this.state.footer)
            this.linksPage.current.scrollTop =
              this.links.current.offsetTop + window.innerHeight / 2;
          this.setState({
            footer: true
          });
        }, 1200);
      }
    }
  };*/
  getLabel = (dont) => {
    /*const { scrollPlacementHeight } = this.state;
    var topProgress = Math.round(
      (scrollPlacementHeight / (window.innerHeight - 215)) *
        document.documentElement.scrollHeight //window.scrollY
    );*/
    const scrollPlacementHeight = Math.round(
      (window.scrollY / document.documentElement.scrollHeight) *
        window.innerHeight
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
      (scrollPlacementHeight / (window.innerHeight - 70)) *
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
    clearTimeout(this.footerHelpScroll);
    clearTimeout(this.labelTimer);
    clearInterval(this.check);
    clearTimeout(this.moun);
    clearTimeout(this.mountt);
    clearTimeout(this.dragEnd);
    clearTimeout(this.dragMove);
    clearTimeout(this.dragView);
    clearTimeout(this.resizeTimer);
    clearTimeout(this.moving);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.scrolllTimeout);
    //clearInterval(this.set);
    clearTimeout(this.removeQuickTouche);
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
        } else if (this.props.pathname === "/jews") {
          this.setState(
            { planner: true },
            () => pager(true, this.jews.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/democrats") {
          this.setState(
            { planner: true },
            () => pager(true, this.democrats.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/okboomer") {
          this.setState(
            { planner: true },
            () => pager(true, this.okboomer.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/awareness") {
          this.setState(
            { planner: true },
            () => pager(true, this.awareness.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/balance") {
          this.setState(
            { planner: true },
            () => pager(true, this.balance.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/chang") {
          this.setState(
            { planner: true },
            () => pager(true, this.chang.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/covid") {
          this.setState(
            { planner: true },
            () => pager(true, this.covid.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/leisure") {
          this.setState(
            { planner: true },
            () => pager(true, this.leisure.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/cancel") {
          this.setState(
            { planner: true },
            () => pager(true, this.cancel.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/price") {
          this.setState(
            { planner: true },
            () => pager(true, this.price.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/drugs") {
          this.setState(
            { planner: true },
            () => pager(true, this.drugs.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/rights") {
          this.setState(
            { planner: true },
            () => pager(true, this.rights.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/accounting") {
          this.setState(
            { planner: true },
            () => pager(true, this.accounting.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/psych") {
          this.setState(
            { planner: true },
            () => pager(true, this.psych.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/menger") {
          this.setState(
            { planner: true },
            () => pager(true, this.menger.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/royalty") {
          this.setState(
            { planner: true },
            () => pager(true, this.royalty.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/inflation") {
          this.setState(
            { planner: true },
            () => pager(true, this.inflation.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/poverty") {
          this.setState(
            { planner: true },
            () => pager(true, this.poverty.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/randpaul") {
          this.setState(
            { planner: true },
            () => pager(true, this.randpaul.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/c1775") {
          this.setState(
            { planner: true },
            () => pager(true, this.c1775.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/statistic") {
          this.setState(
            { planner: true },
            () => pager(true, this.statistic.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/science") {
          this.setState(
            { planner: true },
            () => pager(true, this.science.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/govtech") {
          this.setState(
            { planner: true },
            () => pager(true, this.govtech.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/redistricting") {
          this.setState(
            { planner: true },
            () => pager(true, this.redistricting.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/monopoly") {
          this.setState(
            { planner: true },
            () => pager(true, this.monopoly.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/renewables") {
          this.setState(
            { planner: true },
            () => pager(true, this.renewables.current.offsetTop) //offsetTop
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
        } else if (this.props.pathname === "/juris") {
          this.setState(
            { planner: true },
            () => pager(true, this.juris.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/rent") {
          this.setState(
            { planner: true },
            () => pager(true, this.rent.current.offsetTop) //offsetTop
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
        } else if (this.props.pathname === "/capitalism") {
          this.setState(
            { planner: true },
            () => pager(true, this.capitalism.current.offsetTop) //offsetTop
          );
        } else if (this.props.pathname === "/fines") {
          this.setState(
            { planner: true },
            () => pager(true, this.fines.current.offsetTop) //offsetTop
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
        } else if (this.props.pathname === "/russia") {
          this.setState(
            { planner: true },
            () => pager(true, this.russia.current.offsetTop) //content,comms
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
        } else if (this.props.pathname === "/pandemic") {
          this.setState(
            { planner: true },
            () => pager(true, this.pandemic.current.offsetTop) //content,comms
          );
        } else if (this.props.pathname === "/biz") {
          this.setState(
            { planner: true },
            () => pager(true, this.biz.current.offsetTop) //content,comms
          );
        } else if (this.props.pathname === "/woke") {
          pager("arc", this.woke.current.offsetTop);
        } else if (this.props.pathname === "/work") {
          pager("arc", this.work.current.offsetTop);
        } else if (this.props.pathname === "/gdp") {
          pager("arc", this.gdp.current.offsetTop);
        } else if (this.props.pathname === "/gmu") {
          pager("arc", this.gmu.current.offsetTop);
        } else if (this.props.pathname === "/party") {
          pager("arc", this.party.current.offsetTop);
        } else if (this.props.pathname === "/potholes") {
          pager("arc", this.potholes.current.offsetTop);
        } else if (this.props.pathname === "/geohash") {
          pager("arc", this.geohash.current.offsetTop);
        } else if (this.props.pathname === "/marx") {
          pager("arc", this.marx.current.offsetTop);
        } else if (this.props.pathname === "/crypto") {
          pager(null, this.crypto.current.offsetTop);
        } else if (this.props.pathname === "/homelessness") {
          pager(null, this.homelessness.current.offsetTop);
        } else if (this.props.pathname === "/bitcongress") {
          pager(null, this.bitcongress.current.offsetTop);
        } else if (this.props.pathname === "/medical") {
          pager(null, this.medical.current.offsetTop);
        } else if (this.props.pathname === "/intllaw") {
          pager(null, this.intllaw.current.offsetTop);
        } else if (this.props.pathname === "/crypto") {
          pager(null, this.crypto.current.offsetTop);
        } else if (this.props.pathname === "/calc") {
          pager(null, this.calc.current.offsetTop);
        } else if (this.props.pathname === "/obamacare") {
          pager(null, this.obamacare.current.offsetTop);
        } else if (this.props.pathname === "/nato") {
          pager(null, this.nato.current.offsetTop);
        } else if (this.props.pathname === "/rcv") {
          pager(null, this.rcv.current.offsetTop);
        } else if (this.props.pathname === "/first") {
          pager(null, this.first.current.offsetTop);
        } else if (this.props.pathname === "/voting") {
          pager(null, this.voting.current.offsetTop);
        } else if (this.props.pathname === "/trade") {
          pager(null, this.trade.current.offsetTop);
        } else if (this.props.pathname === "/air") {
          pager(null, this.air.current.offsetTop);
        } else if (this.props.pathname === "/newecon") {
          pager(null, this.newecon.current.offsetTop);
        } else if (this.props.pathname === "/sci") {
          pager(null, this.sci.current.offsetTop); //costing lives' Salcedo
        } else if (this.props.pathname === "/devil") {
          pager(null, this.devil.current.offsetTop);
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
            (scrollPlacementHeight / (window.innerHeight - 70)) *
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
                this.setState({ offScroll: false, noscroll: false }, () => {
                  this.label(topProgress);
                  window.removeEventListener(onUpEnd, ifEnded);
                  window.removeEventListener(listener, onMouseMove);
                  window.removeEventListener(overMouseDrag, overIt);
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

  touche = (ev, touch, direction) => {
    if (this.state.offScroll) return null;

    ev.preventDefault();
    ev.stopPropagation();
    //console.log("touche");
    const listener = touch ? "touchmove" : "mousemove";
    const overMouseDrag = touch ? "touchenter" : "dragover";
    const onUpEnd = touch ? "touchend" : "mouseup";
    var clientX = 0;
    const overIt = (event) => {
      event.preventDefault();
      clientX = event.clientX;
    };
    window.addEventListener(overMouseDrag, overIt);
    this.saveListeners(overMouseDrag, overIt);
    const onMouseMove = (ev) => {
      //console.log(window.scrollY + (direction === "up" ? -20 : 20));
      const x = touch ? ev.touches[0].clientX : ev.clientX;
      //console.log(x);
      const speed =
        window.innerWidth - x < 100
          ? 20
          : window.innerWidth - x < 200
          ? 40
          : window.innerWidth - x < 300
          ? 60
          : window.innerWidth - x < 400
          ? 80
          : 100;
      window.scroll(0, window.scrollY + (direction === "up" ? -speed : speed));
    };
    const ifEnded = () =>
      this.setState({ offScroll: false }, () => {
        clearInterval(this.countmove);
        //window.removeEventListener(listener, ifEnded);
        window.removeEventListener(onUpEnd, ifEnded);
        window.removeEventListener(listener, onMouseMove);
        window.removeEventListener(overMouseDrag, overIt);
      });
    //window.addEventListener(listener, ifEnded, false);
    window.addEventListener(onUpEnd, ifEnded, false);
    this.saveListeners(onUpEnd, ifEnded);
    this.setState({ offScroll: true }, () => {
      clearInterval(this.countmove);
      this.countmove = setInterval(
        () => {
          if (!touch) {
            window.addEventListener(listener, onMouseMove);
            this.saveListeners(listener, onMouseMove);
            clearTimeout(this.removeQuickTouche);
            this.removeQuickTouche = setTimeout(
              () => window.removeEventListener(listener, onMouseMove),
              20
            );
          } else onMouseMove({ touches: [{ clientX }] });
        },

        100
      );

      // window.addEventListener(listener, onMouseMove);
      // this.saveListeners(listener, onMouseMove);
    });
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
      return Math.abs(offsetTop - topProgress); //topProgress - offsetTop <  window.innerHeight/2 ? Math.abs(offsetTop - topProgress) : 100000; //Math.abs(topProgress - offsetTop);
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
      if (construct(true, this.russia.current) < tryy) {
        inSection("russia");
      } else if (construct(true, this.royalty.current) < tryy) {
        inSection("royalty");
      } else if (construct(true, this.awareness.current) < tryy) {
        inSection("awareness");
      } else if (construct(true, this.okboomer.current) < tryy) {
        inSection("okboomer");
      } else if (construct(true, this.democrats.current) < tryy) {
        inSection("democrats");
      } else if (construct(true, this.balance.current) < tryy) {
        inSection("balance");
      } else if (construct(true, this.jews.current) < tryy) {
        inSection("jews");
      } else if (construct(true, this.chang.current) < tryy) {
        inSection("chang");
      } else if (construct(true, this.poverty.current) < tryy) {
        inSection("poverty");
      } else if (construct(true, this.accounting.current) < tryy) {
        inSection("accounting");
      } else if (construct(true, this.leisure.current) < tryy) {
        inSection("leisure");
      } else if (construct(true, this.menger.current) < tryy) {
        inSection("menger");
      } else if (construct(true, this.inflation.current) < tryy) {
        inSection("inflation");
      } else if (construct(true, this.juris.current) < tryy) {
        inSection("juris");
      } else if (construct(true, this.rights.current) < tryy) {
        inSection("rights");
      } else if (construct(true, this.pandemic.current) < tryy) {
        inSection("pandemic");
      } else if (construct(true, this.fines.current) < tryy) {
        inSection("fines");
      } else if (construct(true, this.randpaul.current) < tryy) {
        inSection("randpaul");
      } else if (construct(true, this.drugs.current) < tryy) {
        inSection("drugs");
      } else if (construct(true, this.psych.current) < tryy) {
        inSection("psych");
      } else if (construct(true, this.govtech.current) < tryy) {
        inSection("govtech");
      } else if (construct(true, this.rent.current) < tryy) {
        inSection("rent");
      } else if (construct(true, this.redistricting.current) < tryy) {
        inSection("redistricting");
      } else if (construct(true, this.monopoly.current) < tryy) {
        inSection("monopoly");
      } else if (construct(true, this.cancel.current) < tryy) {
        inSection("cancel");
      } else if (construct(true, this.c1775.current) < tryy) {
        inSection("c1775");
      } else if (construct(true, this.sci.current) < tryy) {
        inSection("sci");
      } else if (construct(true, this.covid.current) < tryy) {
        inSection("covid");
      } else if (construct(true, this.price.current) < tryy) {
        inSection("price");
      } else if (construct(true, this.insurance.current) < tryy) {
        inSection("insurance");
      } else if (construct(true, this.education.current) < tryy) {
        inSection("education");
      } else if (construct(true, this.statistic.current) < tryy) {
        inSection("statistic");
      } else if (construct(true, this.trust.current) < tryy) {
        inSection("trust");
      } else if (construct(true, this.capitalism.current) < tryy) {
        inSection("capitalism");
      } else if (construct(true, this.dns.current) < tryy) {
        inSection("dns");
      } else if (construct(true, this.health.current) < tryy) {
        inSection("health");
      } else if (construct(true, this.crime.current) < tryy) {
        inSection("crime");
      } //else inSection("saverparty.xyz");
      //  } else {
      if (construct("arc", this.woke.current) < tryy) {
        inSection("woke");
      } else if (construct("arc", this.gmu.current) < tryy) {
        inSection("gmu");
      } else if (construct("arc", this.gdp.current) < tryy) {
        inSection("gdp");
      } else if (construct("arc", this.work.current) < tryy) {
        inSection("work");
      } else if (construct("arc", this.party.current) < tryy) {
        inSection("party");
      } else if (construct("arc", this.potholes.current) < tryy) {
        inSection("potholes");
      } else if (construct("arc", this.geohash.current) < tryy) {
        inSection("geohash");
      } else if (construct("arc", this.marx.current) < tryy) {
        inSection("marx");
      } else if (construct(null, this.devil.current) < tryy) {
        inSection("devil");
      } else if (construct(null, this.china.current) < tryy) {
        inSection("china");
      } else if (construct(null, this.rcv.current) < tryy) {
        inSection("rcv");
      } else if (construct(null, this.crypto.current) < tryy) {
        inSection("crypto");
      } else if (construct(null, this.bitcongress.current) < tryy) {
        inSection("bitcongress");
      } else if (construct(null, this.homelessness.current) < tryy) {
        inSection("homelessness");
      } else if (construct(null, this.nato.current) < tryy) {
        inSection("nato");
      } else if (construct(null, this.sdr.current) < tryy) {
        inSection("sdr");
      } else if (construct(null, this.calc.current) < tryy) {
        inSection("calc");
      } else if (construct(null, this.medical.current) < tryy) {
        inSection("medical");
      } else if (construct(null, this.voting.current) < tryy) {
        inSection("voting");
      } else if (construct(null, this.intllaw.current) < tryy) {
        inSection("intllaw");
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
      tryy = tryy + 100;
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
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });

    return (
      /*<div style={{
        columnCount:""
      }}>*/

      <div
        style={{
          userSelect: !this.state.ios ? "" : "none",
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
          onClick={() =>
            this.setState({
              footer: false,
              keepFooterScroll: false,
              scrollcount: 0
            })
          }
        ></div>
        <div
          style={{
            color: this.state.scrolling ? "white" : "",
            userSelect: !this.state.ios ? "" : "none",
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
            //onTouchStart={(e) => this.handleMove(e, true)}**
            style={{
              right: "10px",
              userSelect: !this.state.ios ? "" : "none",
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
            <div
              style={{
                transition: `.3s ease-in`,
                backgroundColor: `rgba(255,255,255,${
                  this.state.scrolling ? 1 : 0.8
                })`,
                borderRadius: "12px",
                padding: "10px",
                userSelect: !this.state.ios ? "" : "none",
                right: "0px",
                fontWeight: "bolder",
                WebkitTextStroke: `1px rgba(10,70,120,${
                  this.state.scrolling ? 0.5 : 0.8
                })`,
                display: this.state.width < 400 ? "block" : "flex",
                fontSize: this.state.width < 400 ? 20 : 30,
                flexDirection: "row"
              }}
            >
              {this.state.scrollPath &&
                this.state.scrollPath
                  .split("")
                  .map((letter) => <div>{letter}</div>)}
            </div>
            <img
              alt=""
              style={{
                transition: `${!this.state.scrolling ? 0.3 : 0.8}s ease-in`,
                backgroundColor: !this.state.scrolling
                  ? "rgb(5,5,5)"
                  : "rgb(255,255,255)",
                borderRadius: "12px",
                padding: "10px",
                userSelect: !this.state.ios ? "" : "none",
                border: this.state.scrolling
                  ? "5px solid rgb(30,40,100)"
                  : "5px solid rgb(255,255,255)",
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
                userSelect: !this.state.ios ? "" : "none",
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
            color: `rgba(200,200,220,${this.state.scrolling ? 0.7 : 0.8})`,
            fontSize:
              /*this.state.offScroll
              ? "1px"
              : */ this
                .state.width < 300
                ? "21px"
                : "17px"
          }}
        >
          "Why doesn't one announcement lead to prosperity for everyone?"
          <br />
          Nick Carducci - BA Political Science & Economics, Johns Hopkins
          University (2015)
          <br />
          Prosperity for everyone is average and without skew, labor (higher
          poverty inflation/income), for laborless-demand aggravates consumption
          costs of GDP/p living, which surely does count homes and IP-collateral
          for compound and general-income by basing-m2, that which is GDP/yr=
          (velocity/yr)*m2, ‘money and savings,’ not chequeing, fungible for 20%
          of the U.S.
          <h2>
            <a href="https://twitter.com/viathumbprint/status/1413909110140149768">
              The emergency is over
            </a>
          </h2>
          assets priced by liabilities: accrual accounting - that which cash
          accountants amortize to $0:$0 balance efficiency positive nominal
          balance upon equal actual.
          <h3>
            "I’ve certainly had cases of defamation," well not yet. Income
            damages only, not *good-will last traded neighborhood price - last
            price for YOUR HOME YOU CAN ACTUALLY GET! YOU CAN YELL FIRE IN A
            CROWDED THEATRE RTOGAN O'HANDLEY YOU POTATO GUZZLER
          </h3>
          disgusting prejudice - You can assume tards do harm themselves, but
          never intentionally like a retard would
          <h1>
            loners are innovators, doctors aren't statisticians/saveface
            investment bank welfare 19% "disabled" but just old trust 1y/0x
            elasticitous-tort without state victimization nor criminalization
            fore per diem incarceration scapegoating, I am going to lock Dr.
            David Samadi up if you vote me in. Nick Carducci 2025
          </h1>
          <br />
          "it is like making a cleve horn and then finding a unicorn right
          outside, the liklihood is sharp," not when the animal variance is a
          millionth of the virion variance, and if you never made it in a lab,
          why are you trying so hard to saveface a century of basis-rate-fallacy
          over sewage all-cause? how can you not conclude that it wasn't made in
          a lab, when it never has?
          <br />
          <br />
          Endogenous is correlation to explain bivariate cause, as a solution.
          <br />
          <br />
          -ous: fully-exogenous cause, positive TEST. -iosity, -ocity:
          fully-causal, exogeneously.
          <br />
          Reciprocity, hypocrisy, as legal-hold is just that, a critic of
          anothers’ actions, then damages, capital loss inflation or income
          loss, not good-will lnt*
          <h1 ref={this.covid}>
            <a href="https://www.sciencedirect.com/science/article/pii/S1931312820303024">
              Mitosis
            </a>
          </h1>
          <hr />
          "How common are invisible illnesses?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          Asymptomatic testing has proven that virion presentation is NOT
          correlated with illness, deaths/hospitalizations per population,
          matching per case (derivative/artifact per capita, not mere
          correlation). Bacteria and garbage collection, lifetime by sewage
          (Alzheimer’s is not caused by sewage).
          <br />
          Brain virus, paralytic polio, acute flaccid paralysis, all identify a
          virion of choice, but we are just finding now that asymptomatic
          infection may be so non-exclusive of an artifact by sickness as
          virion, that it isn’t even an artifact anymore, and it was{space}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">never vivo</a>
          {space}(inception, not correlation nor derivative) proven, by
          immunofluorescent microscopy nor otherwise.
          <br />
          Otherwise, if it is not even vitro biomedical, it is likely a racket,
          amphetamine-rite-of-passage or exaggeration of a natural feeling, like
          mental ‘illness.’
          <br />
          <br />
          omicron is prevalent, not because of spread, but{space}
          <a href="https://vautls.biz/statistic">test</a>: as artifact of none -
          it is prevalent by derivation significant, not n=2019-20 specific-age.
          <br />
          <br />
          Now, **virion presentation** is *not even* correlated per
          **sickness**, nor per **death** per **capita** (if meaningless); basis
          must measure each artifact.
          <br />
          <a href="https://www.cdc.gov/nchs/products/databriefs/db427.htm#:~:text=Did%20age-specific">
            Significance
          </a>
          {space}from mean abount n{"<"}100 random lest 1/100 shuffled if known
          shan’t **declude** mean nor median of order and matter (micron:{" "}
          <a href="https://www.quora.com/Is-E-mc-2-because-we-live-in-three-dimensions">
            spherical diameter
          </a>
          ) of significance from mean, as such assumes 100 years. Only then can
          significance from mean **coincidence** be correlated, authoritatively.
          <br />(
          <a href="https://www.color.com/blog/new-covid-19-test-data-majority-of-people-who-test-positive-for-covid-19-have-mild-symptoms-or-are-asymptomaticN=43,448">
            November 14, 2020
          </a>
          ),{space}
          <a href="https://www.fda.gov/media/144245/download#page=42">Pfizer</a>
          :
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Among 3410 total cases of suspected but unconfirmed COVID-19 in the
            overall study population, 1594 occurred in the vaccine group vs.
            1816 in the placebo group. Suspected COVID-19 cases that occurred
            within 7 days after any vaccination were 409 in the vaccine group
            vs. 287 in the placebo group.
          </div>
          <br />
          That is, 409+1594 vaxxed, 287+1816 not, 409,287 presenting virion &&
          1594,1816 sick, of 43448.
          <br />
          Bacteria acute diagnosis viral version,{space}
          <a href="https://www.pfizer.com/news/articles/viral_vs_bacterial_pneumonia_understanding_the_difference">
            Pfizer
          </a>
          ,{space}
          <a href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/">
            Harvard
          </a>
          .
          <br />
          1.5/100 deaths/cases, is about the per capita death rate, but
          asymptomatic cases are binary{" "}
          <a href="https://www.color.com/blog/new-covid-19-test-data-majority-of-people-who-test-positive-for-covid-19-have-mild-symptoms-or-are-asymptomatic">
            feels
          </a>
          . non-biomedical scapegoating juris handling home-contractor
          gentrification
          <h2>
            Not forcibly, convince them to get the services they need.” I
            abject, as a home-contractor choring bookkeeper.
            <br />
            FDA 5% suspected.
            <br />
            One day there will be a great accounting
          </h2>
          The common cold project (dirty, jk, hotel rooms) counts onset virion
          presentation of sickness, but cause may be of placebo discussed to be
          of 20%, onset, or warning mechanism; still presents the case of
          non-all-incidence{space}
          <a href="https://www.cmu.edu/common-cold-project/">
            artifact of sickness
          </a>
          .
          <br />
          <br />
          In the Kulak ‘crisis,’ average death age existed, pop growth lifetime
          length prior 1931-32 matches ‘excess’ deaths, year to year… without
          discount as to basis, why. 1951–53 excess matches lifetime population
          of today’s multiple sclerosis (all-type) 2.5m population. The Great
          Leap Forward 1958–62 collecting grain tax for ghost cities, ‘killing’
          landlords instead of capping by unit; and the Great Terror 1m+, 1938.
          <br />
          <br />
          A lot of people are feeling the higher costs in the long run by debt
          as good-will non-concurrentable assets, $170t, $167t unfunded
          liabilities, and $2t currency (not “money” or collateralized assets).
          <br />
          <br />
          {/**I'm a genius! */}
          Minsk agreements, normally Normandy, concrete reciprocal, advance
          interests, GDP/p investment bank, premium over training. RUSSIA CANNOT
          JOIN NATO
          <br />
          <br />
          That I don't take lightly, because of my genes, invented basing of
          war, manufactured provocations in theatre. We will glady take any
          criticism that anyone directs at us, I yield back, it's{space}
          <a href="https://billbiden.org">your fucking honor</a>.
          <br />
          “King among equals,” poverty, inflation/income, as The Most
          Interesting Man in the World, by Good sewage, Anthony Tatum, brgd gen.
          <br />
          <br />
          Radio or music, coding?
          <br />
          Best selling at the cost of collective flaccid loss.
          <br />
          A joke or comparative innocence, duress?
          <br />
          "How do I draw a marginal cost curve?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          As Demand does Marginal Revenue Product, Supply does Marginal Cost,
          and this is why I describe laborless-demand as dead-weight-box of
          {space}
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">GDP/hour-GDP/p</a>
          , economic welfare.
          <br />
          Inception of market in order of propensity (Marginal Utility
          Indifference) to cost, is elastic, so bottom-left, top-right, concave
          down.
          <br />
          If order matters, then mean doesn’t.
          <br />
          <br />
          Liabilities values good will assets collateral basing GDP/yr by m2
          FRAUD
          <br />
          <br />
          Nicholas Carducci -{space}
          <a href="https://vaults.biz/nimby">Bond-Zero</a>
          {space}LaborEquity.org, Magnate Auto, SaverParty.xyz, Scopebook,
          Vaults.biz, Thumbprint.us
          <br />
          “Multifamily lending,” can exist within a 1/12, industry-vertical,
          max-royalty, realm? Donee- and borrower-defense, by compound, or
          general-income, is on the way. Any retorts?
          <br />
          <br />
          “$167t unfunded liabilities,” has existed for decades,
          (french4congress.us) - sweet, sweet refined russians, pipelines thru
          Savers' lands (20%/sqftTotal).
          <br />
          <br />
          $100k bail while they look into Louisville proof of ballistics, the
          weapon, tapes and/of the shirt-hole.
          <br />
          <br />
          I need to use broadness to force the bad accountants’ hands. 1/11
          chequeing/m2.
          <br />
          Weiner discrimination by consumer surrogate, his topic is policy,
          which does overlap with 15-yr old, sexting, quite a bit
          <br />
          <br />
          "2% of GDP is defense, to match NATO force training," Robert Wilke,
          {space}
          <a href="https://fred.stlouisfed.org/graph/?g=M9j8">
            do they have special uniforms
          </a>
          ?<br />
          <br />
          "people are still buying stuff even though it is costing more."
          <br />
          CPI doesn’t include labor, profits nor assets like structures,
          equities, bonds. nor{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7KY">homes</a>.
          <br />
          Being the largest factor in GDP, implied by all other goods and m2/yr
          basing, yet not actually counted, you can see that prices rise
          generally not because of population (e.g. 3%/yr+ 1800–1913 0%{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7KY">GDP/p</a>), but
          debt.
          <br />
          <br />
          jobs are retarded, a sign of tech deprecation.
          <br />
          consumers aren't buying things, it is mostly credit.
          <br />
          "Mandate Mental Health treatment for those whom we cannot convict,
          only NYC doesn't."
          <h3>gerotocracy gentrification trust</h3>
          "HHS allocates $25.5 billion to cover financial losses from COVID-19."
          Just abject fraud, less than expected people died, and financial
          losses are of last traded neighborhood good-will (
          <a href="https://qr.ae/pGj03s">non-concurrentable</a>) and
          collateralized price anyway.
          <br />
          How is share split of our own money relief? You are just helping home
          loiterers continue to steal.
          <br />
          <br />
          Why is the GOP spokesperson, Chris Salcedo, saying that a tax-credit
          is something to, “take advantage of?” Or that, it is used to pay child
          costs? Don't you have concern for the children? "Tax-payers on the
          hook," $1.8t/yr is paid for my Savers, and Tax-Payers pay $2.2t/yr,
          but over time it is ONLY SAVERS. SOMEBODY CUT OFF HIS HEAD.
          <br />
          non-concurrentable & compound
          <h3>productive-ward for what?</h3>
          Attacking homelessness by gentrification benefits to stay in the
          Mental Institutions without evidence for one second, conflict of
          interest. Medicare is investment bank, rollover 1/12 verticals, you’ve
          gentrified yourselves this time.
          <h1>Does he speak for you?</h1>
          <h2>
            <a href="https://fred.stlouisfed.org/graph/?g=M9j8">
              How can debt like this have no effect on GDP
            </a>
            ?
          </h2>
          "Lowering good-will last traded neighborhood non-concurrentable
          prices? I worked to hard for that m2 based collateral." Dom Carter,
          decennial-afro-city-hall-reporter. "BBB will make SOME people happy,"
          delights Barney Snowflake. STOP GENTRIFICATION FREE RIDER MUTABLE
          SPECTRUM/AUTO TOLL WITH LOGIN.GOV INTRANET WITH MOTOR VEHICLE (PARENT
          STIMULOUS 19% DISABLED JUST OLD{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M9Xw">
            INVESTMENT BANK OVER CHEQUEING
          </a>
          )."
          <br />
          <br />
          IMO you can't hold suspect for a millisecond.
          <br />
          Just garbage collection “bacteria is acute pneumonia.” Pfizer and
          Harvard Wyss say in unison. Never lab study D614G ACE2
          immunofluorescent microscopy. Don’t front run vaxxes.
          <br />
          Home warranty is estimates scope of requirements as property, end
          Consumer Fraud Act!
          <br />
          M2 bases over homes so GDP by such velocity/yr then does kinda mesur
          homes. (Income/hour)/home, GDP/hour-GDP/p not looking good again.
          <br />
          Keep whistleblowers in the jury and good will out of the military, and
          the military out of pharmacy, and pharmacies out of “Death Valley.”
          Open ingredients, ban invoices & insurance, no more pennywise price
          fix. Just make the move for donee and borrower defense (force majeure
          intent).
          <br />
          Alzheimer’s caused by good sewage according to this econometrist.
          <br />
          Age specific death rate is not “significant.” With 2019-20 n
          humanharvest.info/polio.
          <br />
          Absolutely in that direction to the real mean lmao n{"<"}100.
          <br />
          Government should make science free (open ingredient licensure).
          <br />
          Truncated Production Tax 2025, 3% under $2k, geohash/mo paytech spoof
          precinct protest, transaction-fee-based-sdr.
          <br />
          Everyone died on time. 50m/yr+ expected worldwide, 1.2m/yr+ U.S.
          humanharvest.info/polio.
          <br />
          Homelessness is not because of CT scan, but laborless-demand, userers,
          lenders landlords insurers investment bank false bid pool loss,
          implausible landlord use beyond 5 storefronts and condominiums ,
          compound donee bene invocations surrendered freedoms beyond 1/12
          industry type max-royalty. Paytech forces credit now, impossible to
          BOYCOTT.
          <br />
          Nuts!{space}
          <span role="img" aria-label="nuts squirrel">
            🥜🐿
          </span>
          <br />
          <br />
          We don’t know velocity/yr of CurrencyComponentOfM1 so we look at 1/11
          m2 absolutely with n=population/population (1), but now, GDP, new
          debt, currency per person.
          <br />
          “Real inflation,” is cpi deflated by cpi?
          <br />
          Excluding assets, and (income/hours)/homes
          <br />
          <br />
          Spying is not an international law war crime...
          <br />
          War becausse target-martgin truncates production tax relenting for
          GDP/hour-GDP/p, (income/hour)/home.
          <br />
          Pfizer and Harvard Wyss says acute viral pneumonia is bacteria.
          <br />
          Sample of 2019-20 age specific death rates are not “significant from
          mean, you need 100, and population growth life expectancy ago is 1942,
          so average age at death lowered not because worse sewage this time,
          but just average age, not exogeneity of artifact self mesur, con I
          see.
          <br />
          <br />
          home title lock.com is retarded, saying warrantly scope of requirement
          estimate is concurrentable, just false bid pool loss investment bank.
          Charlie Kirk is a fox.
          <br />
          2/3 debt is private, $2.2t/yr tax pure elastic, $1.8t/yr my
          chequeing-land-share-split over my dead body, 65% are in debt mortgage
          at 44x $2t by $170t non-concurrentable ‘good-will,’ 35% rent of
          outstanding home-contracting.
          <br />
          “You can fax to confiscate the money supply,” that would go to the
          treasury, reset the currency, that is what the great reset wants to
          achieve, (cash/debt)*income every year back. You would gain 100% your
          purchasing power.
          <br />
          <br />
          "How can poverty be reduced in Afghanistan?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          They would need to permit lending for asset-inequality, as poverty is
          inflation/income.
          <br />
          <br />
          "With the current economic retrogation, what are the possible majors
          to restoring economic stability?"
          <br />
          Economic stability is a scientific process with zero upkeep, so
          GDP/hour-GDP/p economic-welfare,
          poverty=(inflation/income)==assetEquality=laborEquity
          <br />
          (income/hour)/home.
          <br />
          You can study any liberal art, English, read - econometrics,
          statistics, calculus, the federal reserve and international law (it is
          all fabricated reciprocity upon microeconomic reasoning if not self
          bona fide good will altruism, for comparative advantage and
          technological advancement -GDP/p is a good motive, of course, as life
          accosts).
          <br />
          Education is trade secrets trust, as pharmacy can open ingredient
          lists online, and as derivative change towards employment is negative
          - while absolutely they remain the same, as Alzheimer’s presented upon
          good sewage.
          <br />
          <br />
          Charity time only IP to the state instead of science open ingredient
          licensure. 10k.
          <br />
          Homes needed right now, then sell outright! Montana is ours.
          <br />
          <a href="https://Nria.net">18008001414</a>
          <br />
          entertaining and cute but not that smart - doxxing scientasks
          (reguratist-scientists and from it the CDC NIH NSF, displaced progress
          with profits; after all these years of confirmation n, why would we
          retrogress again?).
          <br />
          "What is meant by foreign employment? How does foreign employment help
          to improve the economic condition of a nation?"
          <br />
          It may cheapen produce{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7KY">if</a>
          {space}there is low living costs, unless there is laborless demand,
          and cause a negative nominal balance of trade, but not actual.
          <br />
          <br />
          "I am the first one to take my gun and fight for my country," but who
          are you killing?
          <br />
          “My job was to stop drug trafficking from Afghani pharmacists,” wow,
          “I would work with them, then arrest them.”
          <br />
          <br />
          You can collateralize this book, not buy it (impossible to paytech
          without credit).
          <br />
          <br />
          “Bail reform: hold people in jail without evidence” Peter King.
          <br />
          <br />
          "millions losing their jobs," is a good thing, expecially when you ban
          userers: insurers, lenders, landlords. millions of lives lost is much
          less than expected by population growth a life expectancey ago.
          Inflation is 102% but debt price effect is 4400% homes over
          labor-equity. Bipartisan sanction possible terrorists. Scale science,
          or invent a process; artifact per capitis, and repeatable,
          withstanding reverseable: I get paid in science by tech advancement,
          -GDP/p.
          <br />
          "I could clean up the subways in 5 days." - Bill O'Reilly. "'1000x
          crime and neglect more expensive than hoousing them.'{space}
          <a href="https://vaults.biz/homelessness">Okayy</a>...."
          <br />
          Don't blame anything washes on the news. McConnel is culpable.
          <br />
          GDP by debasing m2 collateral - Mark Levin, finance donee beneficiary
          freedom surrenderer gimp, "Nick Carducci doesn't matter to me. The
          Pandemic has really run its course, you great patriots want to talk
          about American Marxism (-GDP/p tech adv. - false bid pool loss
          insurance investment bank bipartisan self-deprecators.)."
          {/**just compensation */}
          <h2>
            We need to invest in solar - gentrification and trust building by
            the left and right.
          </h2>
          You all are comrades for investment banks, I work for science. Either
          you scale science or invent a process. I'm on the edge of people with
          emotions. $6k/yr per person sounds right. M2 is 11x chequeing so I
          must assume 1/11 GDP/yr is actually true. The right calls{space}
          <a href="https://www.yardeni.com/pub/monetagg.pdf">m2 in banks</a>
          {space}
          unlent cause of inflation (material+rent), not assets, labor,
          profits... (income/hour)/homes -5x or more{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7mh">
            https://fred.stlouisfed.org/graph/?g=M7mh
          </a>
          . Relenting QE is not new issue but new outstanding to short term
          TIPS, letting $2t chequeing capacity ask for more par value... Saver
          land-deed laundered and loitered share-split actually{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M24t">THEN</a>.
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/x95ezjugbkcexsb/Screen%20Shot%202022-02-15%20at%206.55.36%20PM.png?dl=0"
            }
            float="right"
            title="Headliners (GBNews) - Roblox sex parties"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "Which is worse, inflation or recession?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          Inflation is laborless-demand and recession is technological
          advancement, GDP/hour-GDP/p or (income/hour)/home, so
          material+inflation even for income (less poverty) is worse.
          <br />
          <br />
          chequeing,{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LZrq">
            currencyComponentOfM1
          </a>
          {space}
          ($b), not{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LjGf">m2</a>
          {space}
          good-will collateralized and last-traded-neighborhood price
          REFLECTION.
          <br />
          <br />
          "people want to go out and do things," $12k/64 debt/cash new per
          person a year, I have a hole in my leg. I will not take credit as
          income you fuking whale of a human, ugly greek. Buy a media company to
          slander Truncated Production Tax to concentrate Sewage Police Lawsuits
          on 3% under $2k, grocers, no more state-victimization and racketeering
          for vig and nothing!
          <br />
          <br />
          companies can raise their prices, profits are a cost,{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7KY">
            supply!=demanded
          </a>
          .<br />
          <hr ref={this.okboomer} />
          "What is something that boomers do better?"
          <br />
          Nick Carducci - Statistician, Historian of Markets and Propaganda
          (2012–present)
          <br />
          the ability to fudge the numbers -{space}
          <a href="https://www.cdc.gov/nchs/data/vsus/vsus_1950_1.pdf#page%3D104">
            19% of the U.S. is disabled
          </a>
          .
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/rb1ehdce3xk7e11/1950%20census.jpeg?dl=0"
            }
            float="left"
            title=" 1950 decennial "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          wouldn’t they be called that for 1942 200k+/yr 10%/yr+? Population
          growth then was 1.2m/yr+ (135m*.015), which is curiously not matching
          even -deaths.
          <br />
          <br />
          how is 19% disabled $1.2t/yr SSA $829.5b/yr Medicare of $2.7t/yr
          “healthcare” false bid pool loss, “taking responsibility?” $2.7t/yr
          again for implausible use landlording, commercial leases unknown, 65%
          mortgage, 35% rent, the rest lend… -GDP/p is tech advancement and
          (cash/debt)*income every year back then 1/12 industry-type max-royalty
          not unequal in receipt and scope untruncated production bond-tax…
          <br />
          <br />
          Prevalence is not causation, it isn't correnated, just normal
          prevalence per artifact itself, death and sniffles. If it is, it could
          be warning mechanism and garbage collection of normal output (common,
          not contageous), of "more acute viral pneumonia," by
          bacterial-reinfection.
          <br />
          <br />
          "Is inflation one of the reasons that the Great Resignation is
          happening?"
          <br />
          The{space}
          <a href="https://www.bls.gov/news.release/jolts.t04.htm">
            Great Resignation
          </a>
          {space}is a{space}
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">
            misunderstanding
          </a>
          {space}, non-farm{space}
          <a href="https://fred.stlouisfed.org/graph/?g=Lwnb">
            quits change-rate total deviation
          </a>
          .
          <br />
          <br />
          <hr ref={this.nimby} />
          “Legal crime is racketeering.”
          <br />
          <br />
          Transaction-fee-based-sdr (security deposit receipt, vault share,
          special drawing rights) no debt! 1/12 industry type max-royalty.
          Cancel is{space}
          <a href="https://vaults.biz/cancel">university boogie</a>.
          (Cash/debt)*income every year back. Amortize the debt as a bad thing
          damage and harm, donee bene and borrower defense liable contractor.
          Those land exploration rights are depositary for dollars.
          <br />
          <br />
          Suck my balls bitch, with standing. Just Do it{/**Ann, hold */}
          <br />
          which pain?
          <br />
          Donating shares to a charity for a tax break.
          <br />
          Borrowing for a tax-break.
          <br />
          <a href="https://www.quora.com/Would-anyone-care-to-explain-why-the-actual-interest-expenses-are-not-included-in-the-APV-method-if-the-intention-is-to-isolate-and-illustrate-the-total-effect-of-debt/answer/Nick-Carducci">
            Most borrowing doesn’t
          </a>
          .
          <br />
          <br />
          anything washes
          <h1>
            Consider Your Man Card Reissued, PUSSY-ASS-BITCH - TAKE CONTROL
            TODAY{space}
            <span role="img" aria-label="gun">
              🔫
            </span>
            {/**but for no female unchaos - J. Peterson */}
          </h1>
          Request for proposals, scope of requirements then scope of work,
          itemized timeclock and material (sprint - NJ Consumer Fraud Act),
          logging and mining until resale, variable. Are you drinking or not?
          <br />
          <br />
          rollover insurance, (home-) warranty is estimate scope of
          requirements, ...but not yet a scope of work.
          <h3>
            $10k + $7k + used, carshield saved nothing by false bid pool loss.
            They can only charge per ware, not invoices.
          </h3>
          James Klug: "
          <a href="https://vaults.biz/fines">
            dollar amount bribe jail{/**james */}
          </a>
          {space}that can actually do some damage to payout to the state trust."
          That is what conservatives wants, to be gimps for the tight blue line.
          <br />
          <br />
          Bill O’Reilly: “$3.3k/yr inflation,” new $64/yr chequeing. I work for
          science (plundercopy, chores and tech deprecation of the 19%
          disabled), I don’t make it about me ($1.2t/yr SSA + $829.5b/yr
          Medicare pennywise of $2.7t/yr "healthcare;" $1.8t/yr Share-split
          collateral (credit/debt-spending), $2.2t/yr federal spending). $12k/yr
          debt total. We just don't know velocity/yr of currencyComponentOfM1
          {/*So, you are telling me that credit is being reloaned
          187.5x/yr?*/}
          <h2>
            <a href="https://qr.ae/pGjmlD">
              borrower, intent and donee defense
            </a>
          </h2>
          Overnight {">"} unknown siringe {">"} elope & lie about kicking and
          punching. Show the tapes, Stuart Varney.
          <br />
          responsible nationas around the world will not hesitate to respond.
          <h2 ref={this.democrats}>Choose diplomacy</h2>
          $800b/yr residential structures and commercial, leases for the former
          $2.7t/yr, the latter unknown.
          <br />
          <br />
          The United States will defend NATO country with full-force of NATO
          powerr, to saveface ongoing expenses and vig reason for false bid pool
          loss, donee invoking other consumers forelorn, unlike casinos' insular
          house-win-fee. Transaction-fee-based-sdr, geohash/mo from paytech 3%
          under $2k production not sales tax. Taking prices at the pump would
          TREAT DOLLARS AS SAVERS' LAND DEEDS 20%. "Ukraine will prove to be a
          self-inflicted wound. Power strength and universal appeal of shared
          democratic values, what we want for the world, liberty and countries
          choose destriny, and peoples futures, and borders deterring forces
          exterior. The U.S. and the NATO is ready to impose sanctions unlike
          Crimea in 2014, price controls IF Russia moves. When it comes to
          Nordstream, if Russia encroached Ukraine, it will NEVER happen."
          <br />
          <br />
          "Is the economy starting to fall because of Covid?"
          <br />
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">-GDP/p</a>
          {space}is not rising, nor is{space}
          <a href="https://fred.stlouisfed.org/graph/?g=M7KY">
            (income/hour)/home
          </a>
          .
          <h1>
            <a href="https://fred.stlouisfed.org/graph/?g=M7mh">
              wage growth lag
            </a>
            {space}-{space}
            <a href="https://fred.stlouisfed.org/graph/?g=LmzU">farce</a>
          </h1>
          <h2>
            <a href="https://fred.stlouisfed.org/graph/?g=M9j8">
              [GDP, DEBT, Chequeing]/p
            </a>
            {space}-{space}
            <a href="https://fred.stlouisfed.org/graph/?g=Lznz">
              mv1===mv2==GDP/yr
            </a>
          </h2>
          you do not get livable costs by gentrification of production, only
          target margin or duress/quality by warning, tort and jail (not
          state-vic conflict of interest free rider mutable racket trust for
          collateralized good will basing++..).
          <br />
          crime is because the ccc parent-trust is gone? because of implausible
          use rental-income. This is to ween off rent, not actual work
          {/*Like with econometrics, significance and truth cannot be found, only
          correlations, with years as n. 65% mortgage, 35% rent, incredulous, the rest lend*/}
          <hr ref={this.rent} />
          Beyond 'Plausible Use,' is grounds, by donee-invoking-leasi, as
          contractor-liable-diligence-undue, for is the ability to buy them
          competing with consumers prohibiting trade, the{space}
          <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
            contractors' surrendered freedom of others
          </a>
          {space}- to boot with the microeconomic Supply and Demand output of
          economic welfare, q*, GDP/hour-GDP/p.
          <br />
          <br />
          "You need to pull the rug out of interest rates," so there is no
          money? Just write down the fucking assets you giant douche!
          "Employment," by busy-work elastic is not actually productive, it just
          makes us work more, lower GDP/hour-GDP/p economic-welfare,
          productive-efficiency (q* of p* supply & demand microeconomics).
          "higher interest rates to put down inflation, a stick to stop debt,"
          dude, just walk up to her.
          <br />
          <br />
          Wages are the ONLY cause of inflation, as even mining and logging are
          not fixed invariable startup (
          <a href="https://froth.app">structural</a>/equipment) costs.
          <br />
          <br />
          "Undoing inflation is going to be painful, there is no simple way of
          doing that, unfortunately." how is mediation of debt as money to a
          ratio of capacity of 1 cash/debt how painful, or unfortunate? Those
          contractors lending, insuring and landlording are liable for
          surrendering the freedoms, you are lucky we MIGHT not come after
          damages for time loitering on the collateral, else the 'good-will'
          last traded neighborhood price.
          <br />
          <br />
          "Lower wages is a lower quality of life," unless
          poverty=(cpi/income)==assetEquality=laborBorneDemand==laborEquity=productiveWard=economicWelfare=GDP/hour-GDP/p
          tech advancement by comparative advantage trade of MUI increases
          (science is open ingredient licensure)!
          <br />
          <br />
          "Workers have the right to negotiate a pay-rise,"{space}
          <a href="https://vaults.biz/newecon">we</a>
          {space}have a right to reverse the shit, (cash/debt)*income every year
          back.
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/vxpuh3clv6ppo75/Screen%20Shot%202022-02-16%20at%2011.02.08%20AM.png?dl=0"
            }
            float="left"
            title=" (GBNews) Matthew Lesh Head of Public Policy, Inst. of Economic Affairs"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "Problems with house building is JUST NOT DOING monopsony by
          $2.2ttax/$1.8taccrual from outside the market for government trust."
          Matthew Lesh you fucking douche, 'cash' is not chequeing $2t in your
          terms, currencyComponentOfM1 has not risen, it is only collateralized
          price, accrual accounting, FAKE{space}
          <a href="https://www.yardeni.com/pub/valcapsales.pdf">$170t</a>
          {space}NON-CONCURRENTABLE 'GOOD-WILL' && LABORLESS-DEMAND
          ACCRUAL/COLLATERALIZATION IS NOT SUPPLY IT IS A DEAD WEIGHT BOX. "They
          have a legal mandate for 2%/yr+ inflation," why? GDP/p 1800-1913 was
          0%... amongst 3%/yr+ population. Scarcity is a lie, Supply and Demand
          curves are dictated by{space}
          <a href="https://qr.ae/pGjE8d">
            MARKET INCEPTION PROPENSITY TO SPEND INDIFFERENTLY FOR ONE UTILITY
            OR ANOTHER
          </a>
          .
          <br />
          <br />
          "The majority of these people in this country own a home," 65%
          mortgage (loitering), 35% rent (laundering), the rest lend
          (laborless-demand) or actually own it. "Is this simply{space}
          <a href="https://qr.ae/pGjBQu">about</a>
          {space}building more homes, Matthew?{space}
          <a href="https://qr.ae/pGjBQu">It</a>
          {space}cannot be NIMBYISM home-contractor gentrification, up and down
          the country, is it?"
          <br />
          {/**
          Referenda/RCV will allow bipartisan plural minorities to win beyond a plural majority
          Party allows a plural majority to win without regard for bipartisan plural minorities
          In disregard of */}
          Mommy, is going to pay, some day, with Savers' land-deeds laundered,
          by collateralized loitering good will last traded neighborhood price
          (market "cap"). I've{space}
          <a href="https://nextdoor.com/p/yJhWyXgPTdNG">found</a>
          {space}the only way for rental-income cap by 5 storefronts or
          condominiums is to make half the no's, FEEL BAD, for prices (fairer
          tho).
          <br />
          <br />
          Rental-income by unit cap isn't a dishwashing cap. Don't be scared. We
          don't need rent to operate, although we have never settled.
          <br />
          <br />
          Higher wages better healthcare per invoice and productivity-ward
          (home)
          <br />
          …More pay per hour per home
          <br />
          …(income/hour)/home
          <br />
          …Not false bid pool loss!
          <br />
          Poverty=(inflation/income)=equality? 19% disabled; just old!
          Delinquents tbqh!
          <br />
          <br />
          Bill O’Reilly: “Drug addicted forced cold turkey 9m 17 younger live
          with 1 parent addicted to substance, needles, drugs: narcotics or
          alcohol. You go ahead steal prostitute yourself, spread disease, that
          is the far left view, 0-5 60% foster children of addicts, harm
          reduction, mandatory rehabilitation.”
          <br />
          <br />A jurisdiction that relies on appeals to lessen their cost is
          just as damaging to the Public as outright trust by state
          victimization instead of warning, personal-tort (without
          false-bid-pool loss) and jail.
          <h2>
            Fine lower judges for appealed convictions of higher courts, make
            them accountable.
          </h2>
          The right calls "mvp duress, no surrendered-freedoms of others,
          prevention of domestic Violence, '
          <a href="https://vaults.biz/gmu">micro-managing</a>.'"
          <br />
          7% NYC voter turnout, education pipeline has no purpose, rob kim, you
          cannmot impose your self-objectified inaquedacies. Just jail people
          that stab people, it has nothing to do with CT scans. I'll kill you
          first. "Pretrial, before you commit a crime, hey you are aa ticking
          time bomb, you don't belong here." Go out to sea faggot. "Mental
          Hygine threat to yourself or others, civilly committed for observation
          and treatment."
          <br />
          "Dog bite illegals, doing their job."
          <br />
          "Inflation with equal labor, profits, and assets over the currency is
          stasis," 45books.com our jouney to hell. That is laborless-demand,
          GDP/hour-GDP/p down, Trump did NOthing forseeable impossible is not
          protection for borrower and donee defense, youo just want tranche
          pittance class resolution precedence malfeasance for bar-racketeering.
          <br />
          I finally understand why I am something of a bipolar, all cheap
          cameras under duress: 50% don’t vote, sayers of "Thanks Sarah adleson
          and Shawn neesee" do not speak for us.
          <br />
          Is this just another mean inflation price fix for insurance false bid
          pool loss supply!=demand.
          <br />
          Get healthcare out of investment banking beyond 1/12 vertical.
          <br />
          Open Ingredient Lists -{space}
          <a href="https://qr.ae/pGjS4p">Scale</a>
          {space}
          <a href="https://qr.ae/pGjS4s">Science</a>.
          <br />
          1942 etymologist ‘baby boomer’ laughing.
          <br />
          19% disabled just old - delinquent.
          <br />
          Particularly on seniors, because they spend so much by
          ‘name-your-price’ non-rollover insurance. No demand, still a waste of
          our sweat.
          <br />
          Supply!=demand when insurance, prescription costs, invoice donee bene
          and free rider mutable untruncated production tax.
          <br />
          pennywise only, they don’t want to ban invoices, insurance, nor
          prescriptions outright.
          <br />
          <hr ref={this.balance} />
          ...doctors do that, government don’t allow invoices nor insurance.
          <br />
          Poverty=equality because labor costs are used to corner the market by
          gov hospital funds general revenue trust.
          <br />
          Literally target margin and open source, don’t make another investment
          bank over the currency.
          <br />
          CBO said Obamacare saved money compared to insurance damages by price
          fix.
          <br />
          Assets $170t aren’t real! Only liabilities, until the clawbacks of
          collateral kept down payments before par-timeLeft good will last
          traded neighborhood price $2t.
          <br />
          We need ROLLOVER insurance - not gentrification and trust
          <br />
          NFL redraft all non-concurrentable hours every year, like docs and
          nannies.
          <br />
          Transaction-fee-based-sdr means no scripts per diem. Like Dollars is
          land-deeds.
          <br />
          False bid pool loss, whistleblowers off jury 11/12 industry type.
          <br />
          44% of $829.5b/yr Medicare $$1.2t/yr of $4t/yr fed spend 40% debt
          spend, 19% disabled, all just old, stock sales.
          <br />
          Laborless-demand is dead weight box upon GDP/hour-GDP/p
          <h2>
            Don't need to gentrify nor make another investment bank for
            operational monopolies or supply!==demand, spectrum/bridges/
            <a href="https://vaults.biz/nato">pipelines</a>
            {space}- just target margin and 11/12 industry
          </h2>
          you need to solve the deficit to say new itemized isn't part of it,
          douche.
          <br />
          "A lot of body and fender." is that cop code for torture? Lying under
          duress for state vic has nothing to do with the other way around
          fuckers. Death To America.
          <br />
          <br />
          "Is the UK like the USA, but less rich?"
          <br />
          Nick Carducci - Legal Writer & Software Engineer at Vaults.biz
          (2020-present)
          <br />
          Rich per capita, or by land, are two different questions.
          <br />
          <a href="https://fred.stlouisfed.org/graph/?g=Lznz">
            The currency is land-deeds
          </a>
          , *yet it could be transaction-fee-based-sdr, with truncated
          production tax free rider immutable sewage police lawsuits and 1/12
          industry max-royalty*.
          <br />
          Rich in such debasement, *by assets’ collateral and good will last
          traded neighborhood price, non-concurrentable $170t/$2t*, is not
          really rich. **To be rich is to live in a decreasing GDP/p**.
          <br />
          **Moreover, I think it is a fallacy to say a country is rich**, as is
          *delusion of the parts or average per capita, -GDP/p, tech
          advancement*. This is attained by exclusively-labor-demand==supply,
          absence of userers (insurers, lenders, landlords); **the UK is like
          the USA** in these said metrics, **but ****smaller**.
          <h1 ref={this.c1775}>
            GENOCIDE THE SLAVE-OWNERS
            {/**proof livlihood is grounds, historically, 
          per American Revolution was not a war crime */}
          </h1>
          Itemized conflict of interest is nothing like known variance of juris.
          An activist/whistleblower is not a conflict of interest.
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/b4dkpbzaiunc8x7/aint%20nobody%20time.gif?dl=0"
            }
            float="left"
            title=" ain't nobody got time for that"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          pennywise margin target to inflation mean material+rent WORKS because
          false bid pool loss supply!==demand without labor makes dead weight
          box, deprecating GDP/hour-GDP/p, econ welfare/output enumerated.
          <h2>
            hawks take care of bonds, not equal in receipt and scope tax: free
            rider mutable gentrification
          </h2>
          "we have no moral or legal (surreendered freedom tort liable of state
          contractor, implied by EULA)," but we do have economic interest in
          truncated production tax and operational monopsony quality by 11/12
          consensus mvp duress and margins work when supply!==demand.
          <h1>WORD SALAD</h1>
          "What is the importance of income elasticity of the demand concept in
          business economics?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          Income is an input cost of supply as demand, or, demand pull - causes
          a dead-weight-box - if income is “subsidized or stimulated” by
          share-split, accrual (good will last traded neighborhood value) and/or
          collateralization, it causes laborless-demand. Hardly is all but
          material+rent counted in input costs, and invariable or fixed startup
          structural investment costs still depend on labors’ competitive
          elasticity. On the other hand, elasticity of labor in another state,
          counteracts scarcity by the same mechanism, modal, -flator, by
          competition.
          <br />
          There must be an index like poverty=((material+rent)/income)=equality,
          with material inflation, income and hours, rather than average income
          or some other perverse measure of equality, good, comparative
          advantage, competition, tech advancement -GDP/p, early Expected
          retirement, and productive-efficiency or economic-welfare,
          GDP/hour-GDP/p.
          <br />
          Demand pull caused by labor (and thereby population, not nominal money
          capacity) would actually pull supply as well, being borne of the same
          people, wheretherebyfor supply==demand.
          <h2>
            security of supply for your own national resources, energy needs are
            important, so then warehouse transaction fee
          </h2>
          whim of states and ... aggregate individual owners of oil? stinks of
          sleaze alan mendoza. "methane binding on my table"
          <br />
          <br />
          "In what way can you address the problems in trade and economic
          policies?"
          <br />
          Nick Carducci - Chairperson at Saver Party (2020–present)
          <br />
          Social Security support - trust market concentration over currency.
          <br />
          Most alarmingly and fundamentally, juris dictation is not prudent in
          duress of a minimal viable product, determined by a jury of 11/12
          industry. I can operate a General Maintenance Unit of polling costs
          for business permitting to these ends, with public review of the
          evidence so the multiple of 11/12 is conviction, working from apparent
          mvp without conflict of interest. For partial{space}
          <a href="https://nextdoor.com/p/yJhWyXgPTdNG">example</a>
          , see this poll, although capping rent by 5 units (storefronts or
          condominiums) is basic mvp, the consensus of 11/12 is not variable
          enough for more than 1/12 profit from duress beyond minimal viable
          product (not trade).
          <br />
          No reason for sanctions except KYC, nor USPTO,
          non-scientific-consensus (all industries, open ingredient lists &
          banned licensures).
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/7iyleyc7czcfi6r/Screen%20Shot%202022-02-14%20at%209.43.17%20AM.png?dl=0"
            }
            float="left"
            title=" (GBNews) methane fracking"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h2>
            "We are sitting on a ton of methane frackable (invisible fire),"
            Savers’ land-deeds… those Euros/Rubles/Yen/Dollars are per diem{" "}
          </h2>
          Operational monopsony target margin equal in receipt and scope
          truncated production tax 2025; transction-based-fee-sdr,
          (cash/debt)*income every year back, not income, nor hours, nor
          material, nor good will assets nor collateral, 1/12 industry
          max-royalty - geohash/month precinct spoof protest sewage police
          lawsuits (conflict of interest by bonds or plantiff/ state as
          "public," Saving America 20% donee beneficiary foreseen contractor
          liability as "Save America..." you know you are incurring tortious
          costs as you persist thru my holds?). Kill America what else for me,
          desist-gov? Not descriptive, but broad.
          <br />
          <Cable
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/zfp42qteh8rldra/Screen%20Shot%202022-02-14%20at%209.24.04%20AM.png?dl=0"
            }
            float="left"
            title=" Putin thru the years (AFP)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          "Why can the US impose economic sanctions on other countries?"
          <br />
          Nick Carducci - Some credits in International Law (college major) &
          Computer Science, Monmouth University (Graduated 2014)
          <br />
          I don’t believe economic warfare is legal international law as towards
          reciprocation, and subjugation or competing with consumers, nor is it
          useful, as science should be open ingredient list anyway, and
          GDP/hour-GDP/p forlorn.
          <br />
          KYC for terrorists, even prohibiting trade, albeit with reason of
          malfeasant juris, does have some grounds to prohibit trade, back?
          <br />
          <br />
          I have a point that disproves the pandemic, excess deaths is expected,
          and age specific death rate cannot be made significant with a sample
          of 2
          <br />
          <br />
          Bigger than myself? I’m the biggest fucking thing in the world. Coding
          statistician?
          <br />
          <br />
          "Is it common that people with bipolar disorder think that they are
          smart?"
          <br />
          Nick Carducci - 13 days for elope chem therapy, saying ‘rollover
          insurance.’
          <br />
          ’Bizarre’ is a term used to diagnose bipolar as well as new science,
          and psychosis is not biomedical CT scan either, to boot.
          <br />
          <br />
          <hr ref={this.awareness} />
          "What is schizo-economics?"
          <br />
          Nick Carducci - Injured yet labeled schizophrenic for boycott credit
          income
          <br />
          Poverty=equality. Are we talking about the faux change between{space}
          <a href="http://www3.law.columbia.edu/bharcourt/documents/harcourt-jls-final-2011.pdf">
            conviction on evidence and slander
          </a>
          ?
          <br />
          <Cable
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/zuojbcf3n6k5zpc/Screen%20Shot%202022-02-14%20at%208.34.01%20AM.png?dl=0"
            }
            float="left"
            title="Schizo-Economics - https://qr.ae/pGjeZ2"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <br />
          or "Technological-advancement (-GDP/p) requires medication."
          <h1>
            Lidia Curanai, what do you even do? "People kill people tht they are
            mentally deranged, they need medicine." No they need jail
          </h1>
          19% disabled, but they are just old - that is good will and
          collateralized loitering and market concentration over the currency,
          either you are for your good will market capitalization, or you are
          for the dollar, $2 checking and $170t for pensions, Medicare $800b/yr
          and Social Security $1.2t/yr, you douches don’t even know how that
          matches $4t/yr fed spending 40% debt spending.
          <br />
          <br />
          10% of the truckers make the virus, or vaccines never worked.
          <br />
          Douche says kids shouldn’t be masked but you are still terrorizing
          2019-20 n as an applicable variance of relevant mean, significance.
          <br />
          Does good sewage cause Alzheimer’s? Why don’t you pricks eat my ass
          <br />
          I’ve got a joke,{space}
          <a href="https://qr.ae/pGjeZ2">douche says what</a>?
          <h1>how many more you got, fatass?</h1>
          Suit for surrogacy and she is claiming emotional distress? That isn’t
          tortious…
          <br />
          <br />
          I can just post to my site rather than call, thanks.
          <br />
          <br />
          No position to account for themselves, you want the parents to be able
          to take care of them, so you share-split their money. :She should know
          that someone whe is with would be abusive with her son, but 32 years
          is a bridge to far, and because the judges prodit per annum. I agree
          with the law, not the sentence,” makes no sense.
          <br />
          <br />
          Pamolina, when you wen to Iceland at 21 was it with your mom’s
          “money?”
          <br />
          <br />
          Bill O'Reilly: "Every dollar you’ve 'earned' of $170t good will and
          collateralized 'value,' $2t checking, Savers’ donee beneficiary
          land-exploration rights (20% of U.S.). Is competitiveness how much you
          can save customers or how much you can counterfeit, launder
          implausible landlord use and false bid pool loss insurance investment
          bank?
          <br />
          <br />
          Average GDP/p made fine for inflation mesur.
          <br />
          Since it is Valentines' Day, International trade begrets -GDP/p, and I
          buy inflation discounted quantity, so I am not impacted!
          <h3>Does less GDP/p make you angry, 'Grow Guy?'</h3>
          Facemask then push out, one to put them ove 10-13 to 17, quick kick
          before the refs on the field but the box and Caesars sportsbook
          beknowst.
          <h2>
            “The most important thing is so that people don’t think there is
            fraud,{space}
            <a href="https://vaults.biz/trading">than prevent it</a>.”
          </h2>
          <h3>
            Prices are ask bid mean, not positions - they would just spoof to
            themselves anon uuid anyway.
          </h3>
          The ref didn’t call that, someone refs don’t like is heavy on the rams
          (uuid random with standing/disparate receipts).
          <br />
          <br />
          Price of quality by fentanyl making up for heroine demand 2013-2015
          Halfwise, antidepressant for entry, Eat my ass, Alzheimer == good
          sewage,{space}
          <a href="https://vaults.biz/gmu">etc</a>.
          <hr ref={this.chang} />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/epv7gzm6155hj48/Screen%20Shot%202022-02-15%20at%2012.20.00%20PM.png?dl=0"
            }
            float="right"
            title="John Bachmann Now (Newsmax) - Gordon Chang"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          “Olympians forced to use glasses to leave cells around, China is DNA
          harvesting.”
          <br />
          <h2>
            Never again will there be another super bowl, I mean thumbprint
          </h2>
          "How serious a problem is unemployment in the U.S.?"
          <br />
          Nick Carducci - CEO & Founder at Thumbprint.us - Social Calendar
          (2012–present)
          <br />
          Not very serious, in fact technologically we strive for unemployment.
          <h3>poverty leads to less suffering</h3>
          Amazing that poverty=(material+rent)/income, and that coincides with
          equality, likely from labor skew-normalization. And education keeps to
          class size and per capita hasn’t increased employment? Makes sense,
          because most jobs don’t require education! I can say poverty=equality
          as much as I can say Alzheimer=goodSewage.
          <br />
          <br />
          "Veganism is just one step above the food chain, lost 7lbs and my
          personality. milk doesn't grow, cow does, seed germinates, CO2 in the
          atmosphere in the atmosphere Hadley cells instead of the ground is bad
          for the ground." Leo Kearse.
          <br />
          <br />
          national gallery is not a copy holy shit - never trust a person with
          three names.
          <br />
          Why is Congress allowed to kill over foreign construction but{space}
          <a href="https://www2.census.gov/library/publications/decennial/1950/population-volume-4/41601751v4p1.pdf#page=14">
            I’m not
          </a>
          ? Just because you?
          <h1>
            intersectionality, forms of oppression hitting in more than one
            factor, like calculus. the sexual politics of meat
          </h1>
          How do you know the animal would have chosen you to eat their corpse?
          If there is another that has an unbridled opportunity - baiting soy
          boys is neonazi cuckolding.
          <br />
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/nvfra2pkmrgvuj8/Screen%20Shot%202022-02-13%20at%207.21.34%20PM.png?dl=0"
            }
            float="left"
            title=" "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Intelligent right wing get better jobs, and the left wing become
          teachers, which is best addressed by doing all we can to get science
          out of the business of trade, good will, and especially industry of
          other industry, said collateral being good will of land or IP at
          science and operational monopoly or duress in Tranquil trade, too
          broad, off-message for GDP/hour-GDP/p, early Expected retirement, and
          tech advancement for that.
          <h1>Quit the good jobs and join the ranks of children</h1>
          <h2>loiterers borrowing and burrowing</h2>
          Battery stuff wasn’t in the script - Household home contractor choring
          bookkeeping.
          <br />
          Resale premium, indurability-absconded - “It is funny that the soap
          says, ‘this will cure your mental illness.’”{space}
          <a href="https://vaults.biz/gmu">General Maintenance Unit</a>
          {space}nowhere to be found. “If saw we were buying his paintings for
          $45m, he would call us all crazy, so let’s buy the Soap.”
          <h2>
            Motor Vehicle NFC automatic toll & login intranet - warn, tort, jail
            - no fines...
          </h2>
          I’ve used Pareto intent to declare supply!=demand not borne of labor,
          but dead-weight-box as demand pull by share split, collateralization,
          or accrual good will last traded concentration, by labor costs less
          material inflation and rents, profits held outlay, insurance
          investment bank false bid pool loss, implausible landlord use rents….
          And so on - only does *price and quality minimal viable product duress
          of 11/12 industry-jurisprudence, not in that order: General
          Maintenance Unit* poll and prohibit actions discriminating not by
          price nor minimal viable product, for full-on Tranquil trade of
          absconded duress ill-will, as **features are made as bugs to
          modularity**, as such on mandate matters, and referenda for determined
          mvp duress, of the like. Of course, market concentration and
          inequality by assets and collateral is bad, albeit non-concurrentable
          $2t for $170t market “capitalization,“ for tech advancement and
          {space}
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">GDP/hour-GDP/p</a>
          , how I enumerate economic-welfare, productive-efficiency, and
          **-GDP/p tech advancement**. Can I get your thoughts on this last bit
          in bold, the indices change-rate, derivative of sorts.
          <br />
          <a href="https://vaults.biz/gdp">source</a>
          {space}1800–2020 GDP/p tech deprecation
          <br />
          poverty=(material+rent)/income average = equality historically….
          <br />
          Change per person is not derivative like indices/indices
          <br />
          Safety net provided by the NHS is Britain’s’ proudest hour, a bona
          fide investment bank and false bid pool loss
          <br />
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/lzfxqgxwe4xyfbh/Screen%20Shot%202022-02-13%20at%201.44.48%20PM.png?dl=0"
            }
            float="left"
            title="google mention word, 'kike' 1868 for Jewish person."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          production insurance{space}
          <a href="https://vaults.biz/insurance">false bid pool loss</a>
          {space}of{space}
          <a href="https://vaults.biz/juris">known</a>
          {space}hazard? cindy adams you kike. - "'next block, and if you make
          it, you are there;'" good will assets numbers like liability when
          foreclosed.
          <br />
          <br />
          Multifaith Alliance for Syrian Refugees
          <br />
          this world is not what it seems, and it shows its face when people
          laugh and show teeth
          <br />
          health plan from the union with the sunshine bis, prisoner of second
          happening, and the ritz: investment banking and beyond 1/12 industry
          vertical production before invariable cost resale but for premium of
          chores!
          <h1>
            Go to{space}
            <a href="https://vaults.biz/devil">Hell</a>
          </h1>
          Savers' land
          <br />
          19% population disabled, or it{space}
          <a href="https://www.linkedin.com/posts/profgalloway_via-the-new-yorker-activity-6898374657855361025-Ofca">
            just ugly
          </a>
          ?
          <br />
          <br />
          “Obviously, it is against the law to break the law.
          <br />
          ...
          <a href="https://nextdoor.com/p/gSknkSPp-t9C">
            51% protesting does something
          </a>
          , ...a bit like the Brexit vote.”
          <h2>borrowers loiter, cancellers keep</h2>
          Obamacare
          <br />
          Problems wouldn’t exist without a solution
          <br />
          The dog house, absolutely from mean the wrong way is still true
          <br />
          <br />
          If you have n{"<"}100
          <br />
          Or 1/100 is shuffleable
          <br />
          and order matters
          <br />
          To watch ice on body{space}
          <a href="https://vaults.biz/moldmask">heat</a>
          {space}in a{space}
          <a href="https://magnate.company">matter of seconds</a>.
          <br />
          Truncated Production Tax for not to be Sales as to
          {space}
          <a href="https://teapharmacy.party/drugs">teapharmacy.party/drugs</a>
          <br />
          It’s not that black men do not like clyburn in saying feminists are
          mutually exclusive to supply and{space}
          <a href="https://vaults.biz/inflation">labor-borne-demand</a>; black
          men are forced to be entrepreneurs, evidently (
          <a href="https://vaults.biz/education">employment by race</a>)?
          <br />
          Support and role model for afro boys, leading to poverty and equality,
          no role model for afro boys, and poverty. Dems are raising afro me ccc
          bbb ppp trust - “Obviously, it is against the law to break the law.”
          <br />
          <br />
          <a href="https://humanharvest.info/polio">
            ‘Excess’ deaths and hospitalizations
          </a>
          {space}were expected (significance from mean single year{space}
          <a href="https://www.cdc.gov/nchs/products/databriefs/db427.htm">
            specific
          </a>
          {space}death rate is not with standing n{"<"}100), and virion aren’t
          even correlated as the artifact.
          <br />
          {/**lunch dioxine, our treat, Ukrainians stood buy dshenko */}
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/g21qlcxmvh4uvu8/Screen%20Shot%202022-02-13%20at%2012.13.41%20PM.png?dl=0"
            }
            float="right"
            title="1933 + 1937 trust"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <h1>
            <a href="https://vaults.biz/obamacare">Obamacare</a>
          </h1>
          <h2>Smart capable and good, sinful pride</h2>
          <h3>
            kulak gulag 1931-32 38 great terror 1m+ Anyone that complained about
            food, mothers literally eating their babies, of thousands of reports
            to that effect. affect.
          </h3>
          <a href="https://teapharmacy.party/drugs">Business guys</a>
          <br />
          <Cable
            style={{ width: "200px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/wiy635x44eo5cje/Screen%20Shot%202022-02-13%20at%2011.37.03%20AM.png?dl=0"
            }
            float="left"
            title="Can capitalism help workers to live better? - https://qr.ae/pGjUTr"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <br />
          <br />
          Should have had another young euro american on
          <br />
          "keep this country together," Nigger word salad retard
          <br />
          All good things, poignant epitaphs for bona fide intents, and faux
          paux of the left and
          <br />
          Improv is not politics
          <br />
          <br />
          Ask the right, what{space}
          <a href="https://constitutioncenter.org/interactive-constitution/article/article-iv#article-section-4">
            they
          </a>
          {space}think about{space}
          <a href="https://qr.ae/pGjOL1">domestic Violence</a>
          <h2>
            inherited wealth by actual work after (cash/debt)*income every year
            back is pro-labor-equity, etymologically
          </h2>
          "Is it possible to have negative inflation for this year in the US?"
          <br />
          Yes, especially if **(cash/debt)*income every year back** is taken up
          prior to my Truncated Production Tax 2025 run. Inflation wouldn’t
          *require a market crash* so much as banning{space}
          <a href="https://vaults.biz/gdp">userers</a>
          : insurers, landlords and lenders.
          <br />
          1/12 industry-type max-royalty, equal in receipt and scope truncated
          production tax geohash/month from your paytech of choice with ability
          to spoof for something in your precinct sewage police lawsuits,
          transaction-fee-based-sdr, Savers’ land-exploration rights (20% of
          U.S.).
          <br />
          <br />
          "providing healthcare," is market concentration, gentrification and
          rent seeking: Social security is{space}
          <a href="https://www.ssa.gov/OACT/TRSUM/2020/tr20summary.pdf#page=17">
            44% general revenue
          </a>
          {space}
          or stock sales, that which has driven the bull market over currency
          since 1937; abject market concentration. take the word populist and
          marx out of your chode-hole.
          <br />
          workers are not just those that take money for copy, chore and
          science, tar-face-cunt.
          <br />
          <br />
          <Cable
            style={{ width: "100%", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/bgy4lo29tyj3c2w/Screen%20Shot%202022-02-22%20at%201.14.17%20PM.png?dl=0"
            }
            float="left"
            title="(GBNews, Newsmax) - 'Could Trump handle Putin?'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          perversion of order as matter, anything washes, "item-issues," free by
          {space}
          <a href="https://vaults.biz/statistic">section</a>
          <h1>destroy the institutions</h1>
          <a href="https://fred.stlouisfed.org/graph/?g=LjGf">
            GDP/yr=mv1==mv2
          </a>
          {space}is fraudulent;{space}
          <a href="https://fred.stlouisfed.org/graph/?g=LZrq">fed balance</a>
          ($b);
          <a href="https://fred.stlouisfed.org/graph/?g=Llrn">GDP/hour-GDP/p</a>
          {space}economic welfare productive efficiency, -
          <a href="https://vaults.biz/gdp">GDP/p</a>
          {space}tech advancement, GDP/hour, “productivity” deflated;
          poverty=((material+rent)/income)=equality.
          <br />
          <br />
          "Can capitalism help workers to live better?"
          <br />
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)
          <br />
          Capitalists view poverty as inequality, when it is actually equality,
          material over income, made such a way when material doesn’t include
          rent to corner the market by assets/equity/productivity-ward. Marxists
          view this as{space}
          <a href="https://www.marxists.org/archive/marx/works/1875/gotha/ch01.htm">
            absurd
          </a>
          :
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Vulgar socialism (and from it in turn a section of the democrats)
            has taken over from the bourgeois economists the consideration and
            treatment of distribution as independent of the mode of production
            and hence the presentation of socialism as turning principally on
            distribution. After the real relation has long been made clear, why
            retrogress again?
          </div>
          28 years{space}
          <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
            prior
          </a>
          :
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            Communism deprives no man of the power to appropriate the products
            of society; all that it does is to deprive him of the power to
            subjugate the labour of others by means of such appropriations.
          </div>
          <br />
          <br />
          Cross referenced means you can reverse the phenomena, replicated
          necessarily, too.
          <br />
          <br />
          Homelessness is because of userers: insurers, lenders and landlords,
          not mental illness slander, non-biomedical, nor can CT scan diagnose
          homelessness.
          <br />
          <br />
          (cash/debt)*income every year back.
          <br />
          1/12 industry-type max-royalty, equal in receipt and scope truncated
          production tax geohash/month from your paytech of choice with ability
          to spoof for something in your precinct sewage police lawsuits,
          transaction-fee-based-sdr, Savers’ land-exploration rights (20% of
          U.S.).
          <h1 ref={
