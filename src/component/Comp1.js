import React, { Component } from "react";
import Comp2 from "./Comp2";
import styled from "styled-components";
// import { FaAngleUp } from "react-icons/fa";

import "../../node_modules/font-awesome/css/font-awesome.min.css";
import pic1 from "../images/pic1.webp";
import pic2 from "../images/pic2.webp";
import pic3 from "../images/pic3.webp";
import pic4 from "../images/pic4.webp";

const TOP = styled.div`
  width: 90%;
  height: 35px;
  background-color: ${(props) => (props.x ? "#ccc" : "#1e90ff")};

  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px 10px 0px 0px;
  color: white;
`;
const CONTAINER = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 400px;
  border: 1px solid #ccc;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  opacity: ${(props) => (props.x ? "0" : "1")};
`;
const DOWN = styled.i`
  padding: 10px;
  transform: ${(props) => (props.a ? "rotate(180deg)" : "rotate( 0deg)")};
  transition: 0.3s;
`;
class Comp1 extends Component {
  constructor() {
    super();
    this.state = { flag: false };
  }
  chengeState = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <>
        <TOP x={this.state.flag}>
          <div>
            <span>digital product</span>
          </div>
          <div onClick={this.chengeState}>
            <DOWN className="fa fa-angle-up" a={this.state.flag}></DOWN>
          </div>
        </TOP>
        <CONTAINER x={this.state.flag}>
          <Comp2 img={pic1} title="PRODUCT_1" price="230$">
            n publishing and graphic designa placeholder text commonly used to
            demonstrate the
          </Comp2>
          <Comp2 img={pic2} title="PRODUCT_2" price="400$">
            In publishing and graphicis a placeholder text commonly used to
            demonstrator a typeface without relying
          </Comp2>
          <Comp2 img={pic3} title="PRODUCT_3" price="350$">
            In publishing and graphic design, Lorem ipsum is a placeholder
          </Comp2>
          <Comp2 img={pic4} title="PRODUCT_4" price="520$">
            form of a document or a relying In publishing and graphic
          </Comp2>
        </CONTAINER>
      </>
    );
  }
}

export default Comp1;
