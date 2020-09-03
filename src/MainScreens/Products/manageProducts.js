import React from "react";
import "../../Styles/dashboardHeader.css";
import styles from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import MyProductList from "./productContents/MyProductList";

class ProductList extends React.Component {
  render() {
    return (
      <>
        <div className="d-header">
          <div className="d-header-menu">
            <li className="d-header-menu-li">My Products</li>
          </div>
          <Search>
            <input placeholder='Search your list...' />
            <button className="btn">
            <SearchIcon className='icon'/>
            </button>
          </Search>
        </div>
        <div className="show-content">
          <MyProductList />
        </div>
      </>
    );
  }
}

const Search = styles.div`
width: 30%;
  border: solid 0.5px #979696;
  margin: 12px 0px;
  margin-right: 18px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  input{
    border: none;    
    width: 90%;
    padding-left: 5px;
  }
  .btn{
    background-color: #504f4f;
    margin: 2px 2px;
    color: #fff;
    height: 40px;
  }


`;

export default ProductList;
