import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "styled-components";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import PDF from './Pdf'



class CreateInvoice extends Component {
  state = {
    CustomerName: "",
    CustomerID: "",
    ItemID: "",
    OrderNumber: "",
    postSubmitted: false,
  };

  onChange = input => (e) => {
    
    this.setState({
      [input]: e.target.value,
    });
  };


  submitPost = (e) => {
    {!this.state.CustomerName || !this.state.CustomerID || !this.state.ItemID || !this.state.OrderNumber ?(
      alert('All fields are required!')
    ) : (
      this.setState({
        postSubmitted: true,
      })

    )
    }
  }
  render() {
    return (
      <>
      { !this.setState.postSubmitted ?
       ( <Form>
          <form target='_blank' method="post">
            <div className="form-container">
              <div className="form-label">Customer Details</div>
              <div className="form-inputs">
                <div className="form-group">
                  <label for="CustomerName">Customer Name</label>
                  <input
                    onChange={this.onChange('CustomerName')}
                    type="text"
                    name="CustomerName"
                    placeholder="Customer Name"
                  />
                  <small>Enter Customer Name here</small>
                </div>
                <div className="form-group">
                  <label for="CustomerID">Customer ID</label>
                  <input
                    onChange={this.onChange('CustomerID')}
                    type="text"
                    name="CustomerID"
                    placeholder="ID-0000000"
                  />
                  <small>Enter Customer ID here</small>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-label">Order Details</div>
              <div className="form-inputs">
                <div className="form-group">
                  <label for="ItemID">Item ID</label>

                  <input
                    onChange={this.onChange('ItemID')}
                    type="text"
                    name="ItemID"
                    placeholder="#AT123456"
                  />
                  <small>Enter Item ID here</small>
                </div>
                <div className="form-group">
                  <label for="male">Order Number</label>
                  <input
                    onChange={this.onChange('OrderNumber')}
                    type="text"
                    name="OrderNumber"
                    placeholder="#ATOR1234"
                  />
                  <small>Enter Order Number here</small>
                </div>

                <div className="form-group">
                  <div className="image-preview">
                    <div className="image-container">
                      {/* {ViewImage ? (
                        <img src={""} />
                      ) : ( */}
                      <div className="image-dummy">
                        <WallpaperIcon />
                        <span>Image will preview here...</span>
                      </div>
                      {/* )} */}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button onClick={() => this.submitPost()} className="btn">Show PDF Preview</button>
                </div>
              </div>
            </div>
          </form>
          </Form>) : (
          <PDF CustomerID={this.state.CustomerID} CustomerName={this.state.CustomerName} OrderNumber={this.state.OrderNumber} ItemID={this.state.ItemID} />
        )}
      </>
    );
  }
}

const Form = styles.div`
width: 90%;
margin: 50px auto;

.form-container{
  display: flex;
  width: 70%;
  margin: auto;
}
.form-label{
  width: 25%;
  font-size: 20px;
  font-weight: bold;
}
.form-inputs{
  width: 50%;
  margin: auto;
}
.form-group{
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    
    label{
      font-weight: 700;
    }
    
    small{
font-size: 11px;
    }

    button{
      background-color: #353535;
      color: #fff;
      :hover{
        background-color: #504f4f;
        color: #fff;
        box-shadow: 2px 2px 10px #c5c5c5;
      }
    }

    input{
      height: 50px;
      width: 100%;
      border: none;
      background-color: #e2e0e0;
      padding: 10px;
    }
    .image-preview{
      background-color: #e2e0e0;
      width: 100%;
      height: 70%;      
      padding: 20px;
      
      .image-container{
        border: dashed 3px #979696;
        border-radius: 10px;
      }
      .image-dummy{
        margin: 80px 50px;
        color: #979696;
        justify-content: center;
        align-content: center;
      }

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
export default CreateInvoice;
