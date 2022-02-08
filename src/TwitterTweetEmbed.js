import React, { Component } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "exenv";
import script from "scriptjs";

export default class TwitterTweetEmbed extends Component {
  static propTypes = {
    /**
     * Tweet id that needs to be shown
     */
    tweetId: PropTypes.string.isRequired,
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
    if (!window.twttr) {
      console.error(
        "Failure to load window.twttr in TwitterTweetEmbed, aborting load."
      );
      return;
    }
    if (!this.tw.current) {
      console.error(
        "Failure to load this.tw in TwitterTweetEmbed, aborting load."
      );
      return;
    }
    if (!this.isMountCanceled && this.props.tweetId && this.tw.current) {
      window.twttr.widgets
        .createTweet(this.props.tweetId, this.tw.current, this.props.options)
        .then((element) => {
          this.setState({
            isLoading: false,
            style: {
              height: "min-content",
              ...this.props.style,
              maxWidth: "100%"
            }
          });
          if (onLoad) {
            onLoad(element);
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (this.state.giveup === 2) return null;
          this.setState({ giveup: this.state.giveup + 1 }, () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              this.renderWidget();
            }, 1000); //in case either window.twttr or this.tw.current fails mount
          });
        });
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      //let script = require("scriptjs");
      this.resize();
      window.addEventListener("resize", this.resize);
      script("https://platform.twitter.com/widgets.js", "twitter-embed", () => {
        this.renderWidget();
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    window.removeEventListener("resize", this.resize);
    this.isMountCanceled = true;
  }
  resize = () => {
    /*this.setState({
      dismount:
        this.tw.current.offsetWidth &&
        this.tw.current.offsetWidth < window.innerWidth //200
    });*/
  };

  render() {
    const { style } = this.props;
    return (
      !this.state.dismount && (
        <div ref={this.tw} style={{ ...style, ...this.state.style }} />
      )
    );
  }
}
