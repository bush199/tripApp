import React from "react";

function Trip() {
  return (
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SL.No</th>
          <th scope="col">Place</th>
          <th scope="col">Package</th>
          <th scope="col">Days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Delhi</td>
          <td>15000</td>
          <td>A Week</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Goa</td>
          <td>20000</td>
          <td>10 Days</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Karwar</td>
          <td>12000</td>
          <td>5 Days</td>
        </tr>
        <tr>
          <th scope="row"> 4</th>
          <td>Kashmir</td>
          <td>25000</td>
          <td>10 Days</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Kerala</td>
          <td>20000</td>
          <td>12 Days</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Meghalaya</td>
          <td>8000</td>
          <td>2 Days</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Shimla</td>
          <td>20000</td>
          <td>5 Days</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Rajasthan</td>
          <td>25000</td>
          <td>A Week</td>
        </tr>
        <tr>
          <th scope="row"> 9</th>
          <td>Leh Laddak</td>
          <td>50000</td>
          <td>10 Days</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Trip;