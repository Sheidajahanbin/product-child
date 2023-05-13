import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
const DIV = styled.div`
  width: 300px;
  height: 380px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  border-radius: 15px;
`;
const IMG = styled.img`
  width: 200px;
  height: 200px;
  margin: 5px;
`;
const PRICE = styled.p`
  display: inline-block;
  background-color: yellow;
`;
const CHILD = styled.p`
  padding: 0px 40px 0px 40px;
`;
const I = styled.i`
  color: ${(props) => (props.a ? "" : "red")};
`;

class Comp2 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  selectHeart = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    const { img, title, price, children } = this.props;
    return (
      <DIV>
        <IMG src={img} />
        <p>{title}</p>
        <PRICE>{price}</PRICE>
        <CHILD>{children}</CHILD>
        <div onClick={this.selectHeart}>
          <I className="fa fa-heart" a={this.state.flag}></I>
        </div>
      </DIV>
    );
  }
}

export default Comp2;
