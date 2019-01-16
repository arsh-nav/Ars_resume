import React from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "../Css/firstPage.css";
import { Link, Element } from "react-scroll";

export default class welDiv extends React.Component {
  themeIconColor(param){
    if (param == 'fullpage') return "goldenrod";
    else if (param == 'fullpage2') return "rgb(104, 50, 12)";
    else if (param == 'fullpage3') return "rgb(139, 16, 109)";
  }
  render() {
    // console.log({this.props.cssClass});
    const dadClass = this.props.cssClass;
    let childClass = this.themeIconColor(dadClass)
    // console.log(childClass , dadClass);
    
    return (
      
      <div className={dadClass}>
        <div>
          <h2 className="title">{data.title}</h2>
        </div>
        <div>
          <h3 className="subtitle">{data.subtitle}</h3>
        </div>
        <div className="logo-links">
          {Object.keys(data.links).map(key => {
            return (
              <div>
                <SocialIcon bgColor={childClass} url={data.links[key]} color="currentColor" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
