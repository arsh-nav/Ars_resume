import React from "react";
import data from "../data.json";
import "../Css/skillsPage.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class UnCard extends React.Component {
  render() {
    return (
      <div >
      
        <Card  style={{ backgroundColor: this.props.color }}>
          
          <CardImg
            className="card__"
            src={this.props.imgurl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <p style={{fontSize:"2.2vw",fontWeight: 'bold'}}>{this.props.title}</p>
            </CardTitle>
            <CardText><p className="fontResize">{this.props.info}</p></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
