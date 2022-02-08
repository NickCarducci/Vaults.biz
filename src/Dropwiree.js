import React from "react";
import ExecutionEnvironment from "exenv";

export default class Cable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: [],
      cache: null,
      mountsCount: 0,
      cacheStyle: "",
      URI: ""
    };
    this.page = React.createRef();
    this.fwdtwe = React.createRef();
  }
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({ go: true }, () => this.checkIfBetween());
    }
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.go && this.props.scrolling !== prevProps.scrolling) {
      this.checkIfBetween();
    }
    if (this.state.loaded !== this.state.lastLoaded) {
      this.setState(
        {
          lastLoaded: this.state.loaded
        },
        this.checkIfBetween
      );
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.setset);
  };
  handler = (event) => {
    //if (event.origin !== this.props.src) return;
    //event.source.postMessage("this is response.", event.origin);
    const data = JSON.parse(event.data);
    const uri = new Blob([data], { type: "text/javascript" }); //text/javascript
    this.setState({
      URI: window.URL.createObjectURL(uri)
    });
  };
  fetchher = (event) => {
    //console.log()
    // const { onLoad, onError, title } = this.props;
    //console.log("received message:  ", event.data);
    //event.source.postMessage("this is response.", event.origin);
    var page = this.page.current;
    if (!page || !page.contentWindow) return console.log("none");
    page.contentWindow.addEventListener("message", this.handler);
    page.contentWindow.postMessage("", this.props.src);
    //
    //window.postMessage(this.props.src)//contentWindow
    /**
 * MessageEvent.data Read only
The data sent by the message emitter.

MessageEvent.origin Read only
A USVString representing the origin of the message emitter.

MessageEvent.lastEventId Read only
A DOMString representing a unique ID for the event.

MessageEvent.source Read only
A MessageEventSource (which can be a WindowProxy, MessagePort, or ServiceWorker object) representing the message emitter.

MessageEvent.ports Read only
An array of MessagePort objects representing the ports associated with the channel the message is being sent through (wh
 */
    /*fetch(this.props.src, {
      "Content-Type": "application/javascript"
    })
      .then(async (response) => {
        console.log(response);
        //const data = JSON.parse(response.data);
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/javascript")) {
          throw new TypeError("Oops, we haven't got HTML!");
        }
        return await response.text();
      })
      .then((data) => {
        // Convert the HTML string into a document object
        //var parser = new DOMParser();
        //var doc = parser.parseFromString(html, "text/html");
        const uri = new Blob([data], { type: "text/javascript" }); //text/javascript
        var iframe = React.createElement("iframe", {
          //src :"about:blank",
          src: window.URL.createObjectURL(uri),
          onLoad,
          onError,
          title,
          style: {
            width: "100%",
            border: 0,
            //height: optionalheight,
            ...this.props.style
          },
          ref: (ref) => (this.props.fwd = ref)
        });
        page.innerHTML = iframe; //iframe.src = window.URL.createObjectURL(uri);
        //const iFrameDoc = this.props.fwd.current;
        //iFrameDoc.write(uri);
        //iFrameDoc.close();
        /*var iFrame= React.createElement("iframe",{
    src :"about:blank",
    onLoad,
    onError,
    title,
    style:{
      width: "100%",
      border: 0,
      //height: optionalheight,
      ...this.props.style
    },
    ref:ref=>this.props.fwd=ref
   })*/
    /*React.createClass({
    render: function() {
        return <iframe />;
      },
      componentDidMount: function() {
        this.renderFrameContent();
      },
      renderFrameContents: function() {
        var doc = this.getDOMNode().contentDocument
        if(doc.readyState === 'complete') {
           React.renderComponent(this.props.children, doc.body);
        } else {
           setTimeout(this.renderFrameContents, 0);
        }
      },
      componentDidUpdate: function() {
        this.renderFrameContents();
      },
      componentWillUnmount: function() {
        React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
      }
    });*/
    /*iFrame.src = "about:blank";
    iFrameContainer.innerHTML = ""; // (optional) Totally Clear it if needed
    iFrameContainer.appendChild(iFrame);

    let iFrameDoc = iFrame.contentWindow && iFrame.contentWindow.document;
    if (!iFrameDoc) {
    console.log("iFrame security.");
    return;
    }
    iFrameDoc.write(iframeContent);
    iFrameDoc.close();
    this.setState({
      URI: window.URL.createObjectURL(uri)
    });*
        console.log("Hello World?", data);
      })
      .catch((error) => console.error(error.message));*/
  };

  componentWillUnmount = () => {
    this.page.current &&
      this.page.current.contentWindow &&
      this.page.current.contentWindow.removeEventListener(
        "message",
        this.handler
      );
    clearTimeout(this.setset);
  };
  checkIfBetween = () => {
    const { frameheight, cache } = this.state;
    const { scrollTopAndHeight, scrollTop, girth, timeout } = this.props;
    var girt =
      girth && !isNaN(girth)
        ? girth + 500
        : frameheight
        ? frameheight
        : this.props.style &&
          this.props.style.height &&
          !isNaN(this.props.style.height)
        ? this.props.style.height + 500
        : 500;
    var timeou = timeout ? timeout : 1500;
    clearTimeout(this.setset);
    this.setset = setTimeout(() => {
      var page = this.page.current;
      var between =
        page.offsetTop - scrollTop > Number(`-${girt}`) &&
        scrollTopAndHeight - page.offsetTop > Number(`-${girt}`);

      if (!this.state.mount) {
        this.setState({ mount: between }, () => {});
      } else {
        var continuee = this.props.fwd.current;
        //between && console.log(between, continuee.outerHTML);
        if (!this.props.img) this.fetchher();
        if (!continuee && !cache) return;
        /*const cacheStyle = JSON.parse(
          (cache ? cache : continuee.outerHTML)
            .split(`style="`)[1]
            .split(`"`)[0]
            .replaceAll(";", `",`)
            .replaceAll(": ", `: "`)
        );*/
        //console.log(cacheStyle);
        //console.log(cache, continuee.offsetHeight, continuee.offsetWidth);
        if (!cache) {
          //&&(this.state.loaded || this.props.img)) {
          //if (continuee.offsetHeight !== 0)

          this.setState({
            cache: continuee.outerHTML,
            //cacheStyle,
            frameheight: continuee.offsetHeight,
            framewidth: continuee.offsetWidth
          });
        } else if (!between) {
          //console.log("!between", continuee.outerHTML);
          /* if (continuee) {
                
                const children = [...continuee.children];
                console.log(children);
                if (children.length > 0) {
                  var gl = null;
                  const foun = children.find(
                    (x) => (gl = x.getContext("webgl"))
                  );
                  foun.addEventListener(
                    "webglcontextlost",
                    (e) => console.log(e),
                    false
                  );
                  gl.getExtension("WEBGL_lose_context").loseContext();
                }
              }*/
          //continuee.remove();
          if (scrollTop !== 0) return;
          continuee && continuee.remove();
          //      console.log(girt);
          return (page.innerHTML = "");
          // this.setState({ mount: false });
        } else if (page.innerHTML === "") {
          console.log("reloading");
          const children = [...page.children];
          if (
            cache &&
            (children.length === 0 || !children.find((x) => x === cache))
          ) {
            //console.log("replenishing, new scroll", cache);
            return (page.innerHTML = this.state.cache);
          }
        }
      }
    }, timeou); //window.URL.revokeObjectURL(this.src);
  };
  render() {
    const { mount } = this.state;
    const { src, float, title, img } = this.props;
    const onError = (e) => {
      this.props.onError(e);
    };
    const onLoad = (e) => {
      console.log("loaded");
      this.setState({
        loaded: true
      });
    };
    const optionalwidth = this.state.framewidth
      ? this.state.framewidth
      : this.props.style && this.props.style.width // &&
      ? //!isNaN(this.props.style.width)
        this.props.style.width
      : "200px";
    const optionalheight = this.state.height
      ? this.state.height
      : this.props.style && this.props.style.height // &&
      ? //!isNaN(this.props.style.width)
        this.props.style.height
      : "min-content";
    return (
      <div>
        <div
          ref={this.page}
          style={{
            overflowX: "auto",
            shapeOutside: "rect()",
            float,
            height: this.state.frameheight
              ? this.state.frameheight + 10
              : "max-content",
            width: optionalwidth,
            maxWidth: "100%"
          }}
        >
          {src === "" || (!img && !mount) ? (
            <span style={{ border: "2px gray solid" }}>{title}</span>
          ) : img ? (
            <img
              //onLoad={onLoad}
              onError={onError}
              alt={title}
              style={{
                width: "100%",
                border: src === "" ? "2px gray solid" : 0,
                height: optionalheight,
                ...this.props.style
              }}
              ref={this.props.fwd}
              src={src}
            />
          ) : (
            this.state.URI && (
              <iframe
                onLoad={onLoad}
                onError={onError}
                title={title}
                style={{
                  width: "100%",
                  border: 0,
                  height: optionalheight,
                  ...this.props.style
                }}
                ref={this.props.fwd}
                src={this.state.URI}
                /*srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                window.top.postMessage(
                  JSON.stringify({
                    error: false,
                    message: "Hello World"
                  }),
                  '*'
                );
              </head>
              <body>
                <h1>Content inside an iframe, who knew...</h1>
              </body>
            </html>
          `}*/
              />
            )
          )}
        </div>
      </div>
    );
  }
}
