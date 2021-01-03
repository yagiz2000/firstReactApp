import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import BazaarCards from "./Cards";
import ProfileSection from "./ProfileSection";
import React, { Component, Image } from "react";
import Customers from "./Customers";
import logo from "./man.png";
import Orders from "./Orders";

export default class App extends Component {
  state = {
    profile: ["Müşterilerim", "Mağazalarım", "Sattıklarım"],
    categoryName: "",
    currenCategory: "",
  };
  changeCategoryName = (item) => {
    this.setState({ categoryName: item });
  };
  logicGate = () => {
    if (this.state.categoryName === "Müşterilerim") {
      return <Customers categoryName={this.state.categoryName}></Customers>;
    }
    if (this.state.categoryName === "Mağazalarım") {
      return <BazaarCards categoryName={this.state.categoryName}></BazaarCards>;
    }
    if (this.state.categoryName === "Sattıklarım") {
      return <Orders categoryName={this.state.categoryName}></Orders>;
    }
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Navi></Navi>
          <Row>
            <Col
              xs="3"
              style={{ backgroundColor: "crimson", borderRadius: "5%" }}
            >
              <img
                src={logo}
                width="75%"
                style={{ borderRadius: "20%", border: "5px solid #555" }}
              ></img>
              <h1>Profilim</h1>
              <ProfileSection
                categoryName={this.state.categoryName}
                profile={this.state.profile}
                changeCategoryName={this.changeCategoryName}
              ></ProfileSection>
            </Col>
            <Col xs="9">{this.logicGate()}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
