import React, { Component } from "react";
import axios from "axios";
import { setData } from "../actions";
import { connect } from "react-redux";
import "./tableEmp.css";
const renderHeader = data => {
  console.log(data);
  return (
    <thead>
      <tr>
        {data &&
          data["user"] &&
          Object.keys(data["user"][0]).map((d, i) => {
            return <th key={i}>{d}</th>;
          })}
      </tr>
    </thead>
  );
};
const renderBody = data => {
  console.log(data);
  return (
    data &&
    data["user"] &&
    data["user"].map(d => (
      <tr key={d.id}>
        <td key={"id"}>{d.id}</td>
        <td key={"name"}>{d.name}</td>
        <td key={"age"}>{d.age}</td>
        <td key={"gender"}>{d.gender}</td>
        <td key={"email"}>{d.email}</td>
        <td key={"phoneNo"}>{d.phoneNo}</td>
      </tr>
    ))
  );
};

class TableEmp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: props.data,
      showTable: false
    };
  }
  UNSAFE_componentWillMount() {
    axios.get("http://localhost:3001/data").then(d => {
      this.props.setData(d.data);
    });
  }

  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div>
        <div id="header">
          <h1> Employee List</h1>
        </div>
        <table>
          {renderHeader(data)}
          <tbody>{renderBody(data)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

export default connect(mapStateToProps, { setData })(TableEmp);
