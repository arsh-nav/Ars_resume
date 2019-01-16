import React, { Component } from "react";

const down = props => {
  console.log(props)
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'-35px',
        transform:'translateY(-75px)'
    }}>
    <div >
      <img src={props.icon} 
      />
      </div>
    </div>
  );
};
export default down;
