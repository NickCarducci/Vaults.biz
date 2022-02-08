import React from "react";

class Fraud5 extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: "750px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "750px",
            left: "0px"
          }}
        >
          {!this.props.iframed && (
            <iframe
              loading="lazy"
              style={{
                width: "550px",
                height: "700px"
              }}
              title="(1-price)/hours"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Gkvt&width=500&height=600`}
              scrolling="no"
              className="embed-container1"
            />
          )}
        </div>
      </div>
    );
  }
}
export default Fraud5;
