import React from "react";
import styles from 'styled-components'

const Data = [
  {
    id: 0,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isRead',
  },
  {
    id: 1,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isReplied',
  } ,
  {
    id: 2,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isRead',
  },
  {
    id: 3,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isRead',
  },
  {
    id: 4,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isReplied',
  },
  {
    id: 5,
    customerName:'Mr. Philip',
    customerID: '#AT123456789',
    customerEmail: 'example@exampleemail.com',
    Msg: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    className: 'isRead',
  }
]




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
      <div className='quotation'>
Hello
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
.quotation{
  width: 80%;
  margin: auto;
  padding: 10px;
  border: solid 2px;
  border-left-color: yellow;
}
`