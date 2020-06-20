import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import "./Style.css";
import Sidebar from "react-sidebar";
// import { Sidenav, Nav, Dropdown, Icon, Placeholder, Avatar } from "rsuite";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Icon, Input, Menu, Accordion } from "semantic-ui-react";
import CustomScroll from "react-custom-scroll";
import "./sidebar.css";
import { Avatar, Placeholder } from "rsuite";
export default class SideBarContent extends Component {
  constructor() {
    super();
    this.state = { activeIndex: null };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { path, history } = this.props.props;
    const { activeIndex } = this.state;
    const { Paragraph } = Placeholder;
    return (
      <CustomScroll>
        <Menu
          style={{
            backgroundColor: " rgb(51, 51, 51)",
            height: "100px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.144)",
            padding: "10px",
          }}
        >
          <div className="d-flex justify-content-between align-items-center ">
            <div className="text-center m-2 p-2 mx-auto">
              <Avatar circle />
              <p>Seller</p>
            </div>
            <div className="text-center m-2 p-2 mx-auto  align-content-center ">
              <div style={{ opacity: 0.5 }}>
                <Paragraph active rowMargin={5} />
              </div>
              <a href="">Edit Profile</a>
            </div>
          </div>
        </Menu>
        <Menu
          style={{
            backgroundColor: " rgb(51, 51, 51)",
            color: "#fff",
          }}
          vertical
        >
          <Menu.Item
            className="menu"
            style={{
              padding: "10px",
              marginBottom: "15px",
            }}
            onClick={() => {
              history.push(path);
            }}
          >
            Dashboard
          </Menu.Item>
          <Accordion
            as={Menu}
            vertical
            fluid
            styled
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 0}
                content="Product"
                index={0}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 0}
                content=" Create Product"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/create`);
                  //   setEvent(4);
                }}
              />
              <Accordion.Content
                active={activeIndex === 0}
                content="Managed Product"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 0}
                content="Trashed Product"
                className="subMenu"
              />
            </Menu.Item>
          </Accordion>
          {/* Order */}
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 1}
                content="Orders"
                index={1}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 1}
                content=" Recent Orders"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(4);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 1}
                content="Order Analysis"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 2}
                content="Invoices"
                index={2}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 2}
                content=" Sent Invoices"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(4);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 2}
                content="Received Invoices"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 2}
                content="Prepare Invoices"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 3}
                content="Received Quotations"
                index={3}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 3}
                content=" Sent Quotations"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(4);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 3}
                content="Request for Quotations"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 4}
                content="ATATAWallet"
                index={4}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 4}
                content="Wallet Dashboard"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(4);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 4}
                content="Transaction History"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 4}
                content="Pay or Fund Account"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          {/* Service Providers */}
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 5}
                content="Service Providers"
                index={5}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Logistics "
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(4);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Warehouse "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Insurance "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Logistics "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Warehouse "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Insurance "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA SecurePay "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 5}
                content="ATATA Agents "
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Menu.Item
            style={{
              padding: "10px",
              marginBottom: "15px",
              marginTop: "15px",
              color: "rgb(153, 153, 153)",
            }}
          >
            Buyer Account
          </Menu.Item>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 6}
                content="Your Purchase"
                index={6}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Saved Cart"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(6);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Wishlist"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Purchase History"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Pending Purchase"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 6}
                content="Quotations And Invoice"
                index={6}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Received Quotations"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(6);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Invoice"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
          <Accordion
            as={Menu}
            vertical
            style={{ backgroundColor: "rgb(51, 51, 51)", color: "#fff" }}
          >
            <Menu.Item>
              <Accordion.Title
                active={activeIndex === 6}
                content="Billing"
                index={6}
                onClick={this.handleClick}
                className="menu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Billing address"
                onClick={() => {
                  history.push(`${path}/order/recent`);
                  //   setEvent(6);
                }}
                className="subMenu"
              />
              <Accordion.Content
                active={activeIndex === 6}
                content="Add Card"
                className="subMenu"
                onClick={() => {
                  history.push(`${path}/products/list`);
                }}
              />
            </Menu.Item>
          </Accordion>
        </Menu>
      </CustomScroll>
    );
  }
}
