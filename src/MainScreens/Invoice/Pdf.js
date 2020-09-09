import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="container" ref={ref}>
        Dear {props.CustomerName} {props.CustomerID}
        Thank you for patronizing atata57.
        To improve our service, please help Atata57 customers to have better understanding about the product(s) you
        ordered! Please note: - You can rate products from * (very poor) to ***
        (very good).
        - In case your products are not up to expectations, you may
        still be able to return it. Atata57 has a Quick and easy refund policy,
        to know more click atataRefund.
        - Please click on atataRefund to know about our refund options/Terms and Conditions.
      </div>
      <Pdf targetRef={ref} filename="invoice.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Print</button>}
      </Pdf>
    </>
  );
};

export default PDF;
