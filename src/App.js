import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import WelDiv from "./components/welcomeDiv";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navBar";
import { SocialIcon } from "react-social-icons";
import SCard from "./components/CardComp";
import "./Css/fullpage.css";
import "./Css/aboutPage.css";
import About from "./components/aboutPage";
import DownIcon from "./components/downArrow";
import { Link, Element } from "react-scroll";
// var wel_class;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blue: 1
    };
    // wel_class = this.themeSwitch(this.state.blue);
  }
  changeColor() {
    this.setState({ blue: (this.state.blue += 1) });
    // wel_class = this.themeSwitch(this.state.blue);
  }

  themeSwitchWel(param) {
    if (param % 3 == 1) return "fullpage";
    else if (param % 3 == 2) return "fullpage2";
    else if (param % 3 == 0) return "fullpage3";
  }
  themeSwitchAbout(param) {
    if (param % 3 == 1) return "blue";
    else if (param % 3 == 2) return "yellow";
    else if (param % 3 == 0) return "red";
  }
  themeSwitchCard(param) {
    if (param % 3 == 1) return "rgba(240, 224, 200, 0.7)";
    else if (param % 3 == 2) return "rgb(241, 241, 97)";
    else if (param % 3 == 0) return "rgb(255, 213, 249)";
  }
  render() {
    let nbar_class = this.themeSwitchAbout(this.state.blue);
    let wel_class = this.themeSwitchWel(this.state.blue);
    console.log(nbar_class);
    let card_class = this.state.bleu ? "cardDiv" : "cardDiv-alt";
    return (
      <div className="App">
        <div className={nbar_class} onClick={this.changeColor.bind(this)}>
          <Header />
        </div>

        <WelDiv cssClass={wel_class} />

        <Link
          className="test6"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <DownIcon icon={data.icons.down} />
        </Link>

        <Element name="about" className="element" />
        <div className={nbar_class}>
          <About
            title={data.sections[0].title}
            content={data.sections[0].content}
            cssClass={nbar_class}
          />
        </div>
        <Link
          className="test6"
          to="Skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <div className={wel_class}>
          <Element name="Skills" className="element" />
          <SCard color={this.themeSwitchCard(this.state.blue)} />
        </div>
      </div>
    );
  }
}

export default App;
