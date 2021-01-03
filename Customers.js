import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Customers extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.categoryName}</h1>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>isim</th>
              <th>Soyisim</th>
              <th>Sipariş Tutarı</th>
              <th>Kargo durumu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ayşe</td>
              <td>Ceritoğlu</td>
              <td>50 TL</td>
              <td> Kuryede</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ahmet</td>
              <td>Yıldırım</td>
              <td>100 TL</td>
              <td>Hazırlanıyor...</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Necdet</td>
              <td>Ceritoğlu</td>
              <td>780 TL</td>
              <td>Teslim edildi.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Nilgül</td>
              <td>Erdoğan</td>
              <td>850 TL</td>
              <td>Teslim edildi.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
