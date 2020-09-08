import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="container" ref={ref}>
        hi!
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({toPdf}) => <button onClick={toPdf}>Print</button>}
      </Pdf>
    </>
  ); 
};

export default PDF;
