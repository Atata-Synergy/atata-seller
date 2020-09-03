import React, { useState } from "react";
import styles from "styled-components";
import "../../../Styles/dashboardHeader.css";
import Modal from "react-modal";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



function ProductList() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const items = [
    {
      id: "0",
      img: "/images/1.jpg",
      name: "Casual women shoe",
      quantity: "10",
    },
    {
      id: "1",
      img: "/images/2.jpg",
      name: "Casual Men's shoes",
      quantity: "20",
    },
    {
      id: "2",
      img: "/images/3.jpg",
      name: "Italian Shoe for men",
      quantity: "5",
    },
    {
      id: "3",
      img: "/images/4.jpg",
      name: "Ash color roundneck Unisex",
      quantity: "10",
    },
  ];
  

  return (
    <div className="product-list">
      {items.map((item) => (
        <>
        <ListItem key={item.id} onClick={() => setModalIsOpen(true)}>
          <div className="left">
            <div className="image-container">
              <img src={item.img} />
            </div>{" "}
            <p>{item.name}</p>
          </div>{" "}
          <div className="right">
            Available Quantity: <span>{item.quantity}</span>
            <DeleteOutlineIcon className='dlt-btn' />
          </div>{" "}
        </ListItem>
        
      <Modal
      isOpen={ModalIsOpen}
      style={{
        overlay: { zIndex: "1", backgroundColor: "#353535be" },
        content: { width: "60%", margin: "auto" },
      }}
    >
      <ModalHeader>
        <p onClick={() => setModalIsOpen(false)}>X</p>
      </ModalHeader>
      <ModalBody>
        <div className='image-container'>
          <img src='/images/4.jpg'/>
        </div>
        <div className='details'>
          <p></p>

        </div>
      </ModalBody>
    </Modal>
    
    </>
      ))}

    </div>
  );
}

const ModalHeader = styles.div`
height: 40px;
border-bottom: solid 0.5px #d8d8d8;


p{
  font-size: 25px;
  margin-right: 0;  
cursor: pointer;
}
`;

const ModalBody = styles.div`
display: flex;
.image-container{
  width: 50%;
  margin: auto;
padding-top: 50px;

  img{
    width: 350px;
    height: 350px;
  justify-item: center;

  }
}

.details{
  display: table;
  width: 50%;
}


`;


const ListItem = styles.div`
width: 98%;
    height: 80px;
    margin: 5px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    border-radius: 5px;
    border: solid 0.5px #d8d8d8;
    cursor: pointer;
    :hover{
      background-color:#d8d8d8;
    }
    .left{
     display: flex;
     p{
       padding: 10px;
     }
      .image-container{
        width: 50px;
        height: 50px;
        overflow: hidden;
        
      img{
        width: 45px;
        height: 45px;
      }
      }
      }

      
      .right{
        padding: 10px;
        span{
          color: red;
          font-weight: bold;
        }
        .dlt-btn{
          margin:0 20px;
          :hover{
            color: red;
          }
        }
    }
`;
export default ProductList;
