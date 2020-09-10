import React from "react";
import styles from "styled-components";


const Data = [
  {
    id: 0,
    customerName: "User",
    customerID: "user is not registered",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isRead",
  },
  {
    id: 1,
    customerName: "Mr. Philip",
    customerID: "#AT123456789",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isReplied",
  },
  {
    id: 2,
    customerName: "Mr. John",
    customerID: "#AT123456789",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isRead",
  },
  {
    id: 3,
    customerName: "Frank",
    customerID: "user is not registered",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isNotRead",
  },
  {
    id: 4,
    customerName: "Mr. Philip",
    customerID: "#AT123456789",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isReplied",
  },
  {
    id: 5,
    customerName: "Mr. Philip",
    customerID: "#AT123456789",
    customerEmail: "example@exampleemail.com",
    Msg:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    className: "isRead",
  },
];

export default function RecievedQuotes() {
  return (
    <>
      <div className="d-header">
        <div className="d-header-menu">
          <li className="d-header-menu-li">Recieved Quotations</li>
        </div>
      </div>
      <Container>
        
        {Data.map((data) => (
          <div className={data.className}>
            <div className="left">
              <small>Request from</small>
              <p>{data.customerName}</p>
              <small>{data.customerID}</small>
            </div>
            <div className="middle">
              <p>{data.customerEmail}</p>
              <span>{data.Msg}</span>
            </div>
            <div className="right">
              <button className="btn">View Message</button>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

const Container = styles.div`
width: 100%;
margin: auto;
display: table;
.btn{
  width: 70%;
  margin: 30px;
  background-color: #4CAF50;
  color: #fff;
}
.left{
  width: 20%;
  display: flex;
  flex-direction: column;
  p{
    font-size: 20px;
    font-weight: 600;
    margin: 5px 0;
  }
}
.middle{
  width: 60%;
  height: 80px;
  display: flex;
  flex-direction: column;
  text-align: center;
  p{
    font-size: 17px;
    font-weight: 500;
    margin: 5px;
  }
  
  span{
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.right{
  width: 20%;
}


  .isRead{
    width: 80%;
    display: flex;
    margin: 10px auto;
    padding: 10px;
    border-radius: 7px;
    border: solid 1px #cac8c8;
    border-left: solid 7px #2196F3;
  }
  .isReplied{
    width: 80%;
    display: flex;
    margin: 10px auto;
    padding: 10px;
    border-radius: 7px;
    border: solid 1px #cac8c8;
    border-left: solid 7px #FF9800;
  }
  .isNotRead{
    width: 80%;
    display: flex;
    margin: 10px auto;
    padding: 10px;
    border: solid 1px #cac8c8;
    border-radius: 7px;
    border-left: solid 7px #FF5722;
  }
`;
