import React from "react";
import data from "../data.json";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import UnCard from "./OneCard.jsx";
import { stripColor } from "ansi-colors";
export default class SkillCards extends React.Component {
  render() {
    return (
      <div className="cardDiv"><div style={{marginBottom:'-8vh'}}><h1>Skills</h1></div>
        <div>
          
          <div>
            <UnCard
              color={this.props.color}
              imgurl={data.sections[1].items[0].content.image}
              title={data.sections[1].items[0].content.skillTitle}
              info={data.sections[1].items[0].content.info}
            />
          </div>
          <div>
            <UnCard
              color={this.props.color}
              imgurl={data.sections[1].items[1].content.image}
              title={data.sections[1].items[1].content.skillTitle}
              info={data.sections[1].items[1].content.info}
            />
          </div>
        </div>
        <div>
          <div>
            <UnCard
              color={this.props.color}
              imgurl={data.sections[1].items[2].content.image}
              title={data.sections[1].items[2].content.skillTitle}
              info={data.sections[1].items[2].content.info}
            />
          </div>
          <div>
            <UnCard
              color={this.props.color}
              imgurl={data.sections[1].items[3].content.image}
              title={data.sections[1].items[3].content.skillTitle}
              info={data.sections[1].items[3].content.info}
            />
          </div>
        </div>
      </div>
    );
  }
}
