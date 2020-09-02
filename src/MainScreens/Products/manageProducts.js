import React from "react";
import "../../Styles/dashboardHeader.css";
import MyProductList from "./productContents/MyProductList";

class  ProductList extends React.Component {
  render(){
    return (
      <>
        <div className="d-header"></div>
        <div className="d-header-menu">
          <li className='d-header-menu-li'>My Products</li>
        </div>
        <div className="show-content">
          <MyProductList />
        </div>
      </>
    );

  }
}

export default ProductList
