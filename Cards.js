import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class BazaarCards extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.categoryName}</h1>
          <Card>
            <CardBody
              style={{ backgroundColor: "#7FDBFF", borderRadius: "10px" }}
            >
              <CardTitle tag="h5">Fahrettin Altay </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ortalama Müşteri: 1.000
              </CardSubtitle>
              <CardText>Pazar günleri kapalı</CardText>
              <Button>Satışlarımı Göster</Button>
            </CardBody>
          </Card>
          <Card style={{ backgroundColor: "coral", borderRadius: "10px" }}>
            <CardBody>
              <CardTitle tag="h5">Hatay</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Ortalama Müşteri: 2.000
              </CardSubtitle>
              <CardText>Pazar günleri kapalı.</CardText>
              <Button>Satışlarımı Göster</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
