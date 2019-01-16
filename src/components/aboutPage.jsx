import React from "react";
export default class about extends React.Component {
  render() {
    // console.log({nbar_class});
    return (
      <div className="fullpage-alt">
        <div>
          <h3>{this.props.title}</h3>
        </div>
        <div>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
