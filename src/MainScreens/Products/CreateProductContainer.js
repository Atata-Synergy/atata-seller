import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from 'styled-components'



export default class Hello extends React.Component {
  render() {
    return (
      <>
        <div className="d-header">
          <div className="d-header-menu">
            <li className="d-header-menu-li">Product</li>
          </div>
        </div>
        <p>Hello from here</p>
      </>
    );
  }
}

