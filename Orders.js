import React, { Component } from "react";
import { Table } from "reactstrap";
import domat from "./domates.png";
import patlıcan from "./patlıcan.jpg";
import portakal from "./portakal.jpg";

export default class Orders extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.categoryName}</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Miktarı</th>
              <th>Fİyatı</th>
              <th>Resmi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Domates</td>
              <td>15 kg</td>
              <td>2TL</td>
              <td>
                <img
                  src={domat}
                  style={{
                    width: "20%",
                    borderRadius: "20%",
                    border: "5px solid #555",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Portakal</td>
              <td>30 kg</td>
              <td>4TL</td>
              <td>
                <img
                  src={portakal}
                  style={{
                    width: "20%",
                    borderRadius: "20%",
                    border: "5px solid #555",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Patlıcan</td>
              <td>20 kg</td>
              <td>5TL</td>
              <td>
                <img
                  src={patlıcan}
                  style={{
                    width: "20%",
                    borderRadius: "20%",
                    border: "5px solid #555",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
