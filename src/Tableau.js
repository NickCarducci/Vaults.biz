import React, { Component } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "exenv";
//import script from "scriptjs";
//const src = `<div class='tableauPlaceholder' id='viz1643742790357' style='position: relative'><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='COVID_excess_mort_withcauses_01262022&#47;WeeklyNumberByAge' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1643742790357');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='800px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='800px';} else { vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*1.77)+'px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>`;

const src = "https://public.tableau.com/javascripts/api/viz_v1.js";
export default class Tableu extends Component {
  static propTypes = {
    /**
     * Additional options to pass to twitter widget plugin
     */
    options: PropTypes.object,
    /**
     * Placeholder while tweet is loading
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Function to execute after load, return html element
     */
    onLoad: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      giveup: 0,
      isLoading: true
    };
    this.tw = React.createRef();
  }

  renderWidget() {
    const { onLoad } = this.props;

    if (!this.tw.current) {
      console.error("Failure to load this.tw in Tableau, aborting load.");
      return;
    }
    if (!this.isMountCanceled) {
      this.setState({
        isLoading: false,
        style: { height: "min-content", ...this.props.style }
      });
      //fetch(
      //"https://public.tableau.com/javascripts/api/viz_v1.js"
      //).then((res) => console.log(res));
      console.log(this.tw.current);
      this.tw.current.src = src;
      this.tw.current.onLoad = () => {
        if (onLoad) {
          //onLoad(element);
        }
      };
      /*this.tw.current.src = "about:blank";
      this.tw.current.innerHTML = ""; // (optional) Totally Clear it if needed
      //this.tw.current.parentNode.appendChild(this.tw.current);
      console.log(src);

      let iFrameDoc =
        this.tw.current.contentWindow && this.tw.current.contentWindow.document;
      if (!iFrameDoc) {
        console.log("iFrame security.");
        return;
      }
      this.tw.current.stopPropagation();
      iFrameDoc.write(src);
      iFrameDoc.close();*/

      /*
        .catch((err) => {
          console.log(err.message);
          if (this.state.giveup === 2) return null;
          this.setState({ giveup: this.state.giveup + 1 }, () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              this.renderWidget();
            }, 1000); //in case either window.twttr or this.tw.current fails mount
          });
        });*/
    }
  }

  receiveMessage = (event) => {
    if (
      event.origin === src //&&
      //event.data === "message we expect" &&
      //event.data.length === 19 &&
      //typeof event.data === "string"
    ) {
      console.log("Excute");
      // execute code
      this.renderWidget();
      event.source.postMessage("message from window", event.origin);
    }
  };
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener("message", this.receiveMessage, false);
      // event listener for message event
      //let script = require("scriptjs");
      //script("https://platform.twitter.com/widgets.js", "twitter-embed", () => {
      // this.renderWidget();
      //});
    }
  }

  componentWillUnmount() {
    //clearTimeout(this.timer);
    window.removeEventListener("message", this.receiveMessage, false);
    this.isMountCanceled = true;
  }

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            window.top.postMessage("message from iframe", src);
          }}
        >
          load
        </button>
        <iframe
          title="tableau"
          ref={this.tw}
          style={{ width: "100%", maxWidth: "800px", ...this.state.style }}
        />
      </div>
    );
  }
}
