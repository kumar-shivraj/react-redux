import React from "react";
import { connect } from "react-redux";
import { buyChoco } from "../redux";

const ChocoContainer = (props) => {
  return (
    <div>
      <h2>Number of Choco : {props.numOfChoco}</h2>
      <button onClick={props.buyChoco}>Buy Choco</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfChoco: state.choco.numOfChoco,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyChoco: () => dispatch(buyChoco()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocoContainer);
