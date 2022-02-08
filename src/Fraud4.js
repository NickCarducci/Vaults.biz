import React from "react";

class Fraud4 extends React.Component {
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
          height: "700px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "700px",
            left: "0px"
          }}
        >
          {!this.props.iframed && (
            <iframe
              loading="lazy"
              style={{
                width: "550px",
                height: "760px"
              }}
              title="65+ 1.2x 55-64 and 1.3x 25-54, per person; that's 2.4-2.5 elders for every 3 working-age"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=600`}
              scrolling="no"
              className="embed-container1"
            />
          )}
        </div>
      </div>
    );
  }
}
export default Fraud4;
