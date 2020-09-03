import React, { useState } from "react";
import styles from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function ProductList() {
  const items = [
    {
      id: "0",
      orderId: "#141414",
      amount: "15000",
      name: "Atata User",
      status: "success",
    },
    {
      id: "1",
      orderId: "#141415",
      amount: "5000",
      name: "Atata User",
      status: "declined",
    },
    {
      id: "2",
      orderId: "#141416",
      amount: "10000",
      name: "Atata User",
      status: "refunded",
    },
    {
      id: "3",
      orderId: "#141417",
      amount: "500000",
      name: "Atata User",
      status: "declined",
    },
    {
      id: "4",
      orderId: "#141418",
      amount: "55500",
      name: "Atata User",
      status: "awaiting",
    },
    {
      id: "5",
      orderId: "#141419",
      amount: "1000000",
      name: "Atata User",
      status: "declined",
    },
    {
      id: "6",
      orderId: "#141420",
      amount: "1000",
      name: "Atata User",
      status: "success",
    },
    {
      id: "7",
      orderId: "#141421",
      amount: "500",
      name: "Atata User",
      status: "success",
    },
    {
      id: "8",
      orderId: "#141422",
      amount: "1000000",
      name: "Atata User",
      status: "awaiting",
    },
    {
      id: "9",
      orderId: "#141423",
      amount: "1000000",
      name: "Atata User",
      status: "awaiting",
    },
    {
      id: "10",
      orderId: "#141424",
      amount: "1000000",
      name: "Atata User",
      status: "success",
    },
    {
      id: "11",
      orderId: "#141425",
      amount: "10000",
      name: "Atata User",
      status: "declined",
    },
    {
      id: "12",
      orderId: "#141425",
      amount: "10000",
      name: "Atata User",
      status: "refunded",
    },
    {
      id: "13",
      orderId: "#141426",
      amount: "1000",
      name: "Atata User",
      status: "refunded",
    },
    {
      id: "14",
      orderId: "#141427",
      amount: "12550",
      name: "Atata User",
      status: "success",
    },
    {
      id: "15",
      orderId: "#141428",
      amount: "150750",
      name: "Atata User",
      status: "success",
    },
    {
      id: "16",
      orderId: "#141429",
      amount: "1555",
      name: "Atata User",
      status: "success",
    },
  ];

  return (
    <>
      {" "}
      <div className="d-header">
        <div className="d-header-menu">
          <li className="d-header-menu-li">Orders</li>
        </div>
        <Search>
          <input placeholder="Search your order list..." />
          <button className="btn">
            <SearchIcon className="icon" />
          </button>
        </Search>
      </div>
      <OrderList>
        {items.map((item) => (
          <>
            <Item>
              <div className={item.status}>
                <div className="details">
                  <p className="order-No">{item.orderId}</p>
                  <span className={'amount'}>₦{item.amount}</span>
                  <p className='status'>{item.status}</p>
                </div>
                <div className="bottom">{item.name}</div>
              </div>
            </Item>
          </>
        ))}
      </OrderList>
    </>
  );
}

const OrderList = styles.div`
display: flex;
width: 97%;
margin: auto;
flex-wrap: wrap;
`;

const Item = styles.div`
width: 15%;
height: 50%;
margin: 5px;
text-align: center;
display: flex;
flex-direction: column;


.order-No{
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0px;
}

.amount{
  font-size: 15px;
  margin: 5px 0px;
  
}
.status{
  color: #979696;
  font-style: italic;
  font-size: 12px;
  margin: 5px 0px;

}


.success{  
  color:#504f4f;
  padding: 10px;
  border: solid 2px #4CAF50;
  border-radius: 7px;
  .bottom{
    
    background-color: #4CAF50;
color: #ffff;
font-weight: bold;
  }

}
.refunded{  
  color:#504f4f;
  padding: 10px;
  border: solid 2px #2196F3;
  border-radius: 7px;
  .bottom{
    
    background-color: #2196f3;
color: #ffff;
font-weight: bold;
  }

}
.declined{
  color:#504f4f;
  padding: 10px;
  border: solid 2px #FF5722;
  border-radius: 7px;
  .bottom{
    
    background-color: #ff5722;
color: #ffff;
font-weight: bold;
  }
}
.awaiting{
  color:#504f4f;
  padding: 10px;
  border: solid 2px #FF9800;
  border-radius: 7px;
  .bottom{
    
    background-color: #ff9800;
color: #ffff;
font-weight: bold;
  }
}
`;

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
