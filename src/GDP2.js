import React from "react";
import { gdp22 } from "./GDP22";
//import { Line } from "react-svg-curve";

class GDP2 extends React.Component {
  constructor(props) {
    super(props);

    let countryList = [];
    let noData = [];
    let countries = {};
    let countriesData = {};
    Object.keys(gdp22).forEach((country, i) => {
      countryList.push(country);
      Object.keys(gdp22[country]).forEach((year = (y) => Number(y)) => {
        if (!countries[country]) countries[country] = [];
        countries[country].push(gdp22[country][year]);
        if (!countriesData[country]) countriesData[country] = [];
        countriesData[country].push([year, gdp22[country][year]]);
        noData.push([year, 0]);
      });
    });
    noData.sort((a, b) => a[0] - b[0]);

    var state = {
      chosenTime: 1910,
      chosenCountry: "Argentina",
      countryList,
      countries,
      countriesData,
      noData
    };
    this.state = state;
  }
  render() {
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.8 *
        this.props.lastWidth,
      0
    ]);

    let date = [],
      testing = [];
    var countriesData = {};

    var highDate = 2000;
    var lowRate = 0;
    var lowDate = 1820;
    var highRate = 0;
    Object.keys(this.state.countriesData).forEach((country) => {
      if (!countriesData[country]) countriesData[country] = [];
      countriesData[country] = this.state.countriesData[country]
        .map(([x, y]) => {
          if (x < this.state.chosenTime - 90) return null;
          if (x > this.state.chosenTime + 90) return null;
          date.push(x);
          testing.push(y);
          return [x, y];
        })
        .filter((x) => x);
    });
    highDate = Math.max(...date);
    lowRate = Math.min(...testing);
    lowDate = Math.min(...date);
    highRate = Math.max(...testing);
    var yAxis = highRate - lowRate;
    var xAxis = highDate - lowDate;

    Object.keys(countriesData).forEach((country) => {
      countriesData[country] = countriesData[country].map(([x, y]) => {
        return [
          ((x - lowDate) / xAxis) * 0.8 * this.props.lastWidth,
          ((y - lowRate) / yAxis) * 150
        ];
      });
    });
    const crate =
        countriesData[this.state.chosenCountry][
          Math.round(countriesData[this.state.chosenCountry].length / 2)
        ],
      currentRate = crate && crate[1];
    return (
      <div style={{ width: "100%", minHeight: "230px", position: "relative" }}>
        <div
          style={{
            top: "60px",
            display: "flex",
            position: "absolute",
            left: "0px",
            zIndex: "1"
          }}
        >
          <div
            style={{
              padding: "4px 8px",
              display: "block"
            }}
          >
            <div
              style={{
                width: "max-content",
                backgroundColor: "rgba(250,250,250,.2)"
              }}
            >
              rGDP/p${isFinite(lowRate) && Math.round(lowRate * 100) / 100}
              /person -&nbsp;
              <br />${isFinite(highRate) && Math.round(highRate * 100) / 100}
              /person
            </div>
            <div
              style={{
                fontSize: "10px",
                position: "relative",
                height: "min-content",
                margin: "10px 20px",
                display: "flex",
                width: "70%",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  border: "1px solid",
                  padding: "4px",
                  userSelect: "none"
                }}
                onClick={() =>
                  this.setState({
                    chosenTime: this.state.chosenTime - 10
                  })
                }
              >
                {"<"}
              </div>
              {isFinite(currentRate) && (
                <div>
                  {lowDate}
                  &nbsp;-&nbsp;
                  {highDate}
                </div>
              )}
              <div
                style={{
                  border: "1px solid",
                  padding: "4px",
                  userSelect: "none"
                }}
                onClick={() =>
                  this.setState({
                    chosenTime: this.state.chosenTime + 10
                  })
                }
              >
                {">"}
              </div>
            </div>
          </div>
          <div
            style={{
              margin: 5,
              height: "min-content",
              backgroundColor: "rgba(250,250,250,.2)"
            }}
          >
            <div
              style={{
                height: "min-content",
                display: "flex",
                width: "70%",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  border: "1px solid",
                  padding: "4px",
                  userSelect: "none"
                }}
                onClick={() =>
                  this.setState({
                    chosenCountry: this.state.countryList[
                      this.state.countryList.lastIndexOf(
                        this.state.chosenCountry
                      ) - 1
                    ]
                  })
                }
              >
                {"<"}
              </div>
              <select
                style={{ width: "80px" }}
                value={this.state.chosenCountry}
                onChange={(e) =>
                  this.setState({ chosenCountry: e.target.value }, () => {
                    countriesData = Object.keys(countriesData)
                      .sort((a, b) => a === this.state.chosenCountry)
                      .reduce((obj, country) => {
                        obj[country] = countriesData[country];
                        return obj;
                      }, {});
                  })
                }
              >
                {this.state.countryList.map((country) => {
                  return <option key={country}>{country}</option>;
                })}
              </select>
              <div
                style={{
                  border: "1px solid",
                  padding: "4px",
                  userSelect: "none"
                }}
                onClick={() =>
                  this.setState({
                    chosenCountry: this.state.countryList[
                      this.state.countryList.lastIndexOf(
                        this.state.chosenCountry
                      ) + 1
                    ]
                  })
                }
              >
                {">"}
              </div>
            </div>
            ${isFinite(currentRate) && Math.round(currentRate * 100) / 100}
            /person
          </div>
        </div>
        <div style={{ transform: "translate(0px,220px)" }}>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {Object.keys(
              countriesData
            ) /*
              .map(country => {
                countriesData[country][2018]
                return 
              })
              .sort((a,b)=>a[2018]-b[2018])*/
              .map((country) => {
                return countriesData[country].map(
                  ([x, y], i) =>
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={2}
                        stroke={
                          this.state.chosenCountry === country
                            ? "firebrick"
                            : "rgba(200,200,200,.1)"
                        }
                        fill={
                          this.state.chosenCountry === country
                            ? "firebrick"
                            : "rgba(200,200,200,.1)"
                        }
                        strokeWidth={1}
                        key={i}
                      />
                    )
                );
              })}
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "rgba(250,250,250,0.2)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          >
            <a href="https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2018">
              2018 Real GDP per capita
            </a>
            &nbsp;(Maddisen) tbd&nbsp;
            <a href="https://ourworldindata.org/grapher/population-since-1800?country=NOR~CHE~USA~NLD~DEU~JPN~FRA~GBR~CHL~ARG~BRA~CHN~IND">
              pop
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GDP2;
