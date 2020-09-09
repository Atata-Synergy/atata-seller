import React, { Component, useState } from "react";
import Sidebar from "react-sidebar";
// import { Sidenav, Nav, Dropdown, Icon, Placeholder, Avatar } from "rsuite";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Icon, Input, Menu, Accordion } from "semantic-ui-react";
import CustomScroll from "react-custom-scroll";
import "./sidebar.css";
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
// import "rsuite/dist/styles/dark.css";
import Dashboard from "../MainScreens/Dashboard/Dashboard";
import CreateSeller from "../MainScreens/AuthScreens/CreateSellerContainer";
import Ballance from "../MainScreens/Wallet/Ballance";
import FundAccount from "../MainScreens/Wallet/FundAccount";

//Product
import CreateProduct from "../MainScreens/Products/CreateProduct";
import ProductList from "../MainScreens/Products/ProductList";
import ProductManager from "../MainScreens/Products/manageProducts";

//Invoice
import SentInvoice from '../MainScreens/Invoice/sentInvoice'
import RecievedInvoice from '../MainScreens/Invoice/recievedInvoice'
import CreateInvoice from '../MainScreens/Invoice/createInvoice'

//Order
import Order from "../MainScreens/Order/RecentOrder";
import verifyToken from "../Partials/Authentication";
import "./Style.css";
import SideBarContent from "./SideBarContent";
import fetchUser from "../Partials/Fetch";

//coming soon
import ComingSoon from "../comingSoon";

//Quotation
import ManageQuotation from "../MainScreens/Quotations/ManageQuotation";
import RecievedQuotes from "../MainScreens/Quotations/RecievedQuotations";


const panelStyles = {
  padding: "15px 20px",
  color: "rgb(218, 216, 216)",
};

const linkStyles = {
  color: "#fff",
  padding: "10px",
  textDecoration: "none",
  marginTop: 10,
  borderBottom: "1px" + "solid" + "white",
};
const headerStyles = {
  padding: 20,
  fontSize: 16,
  display: "flex",
  justifyContents: "center",
  color: "rgb(218, 216, 216)",
};

export default class SidebarNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      seller: null,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  async componentDidMount() {
   
  }
  render() {
    const { path, url } = this.props;
    console.log(path);

    return (
      <Sidebar
        docked
        sidebar={
          <SideBarContent props={this.props} seller={this.state.seller} />
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "white",
            overflowY: "scroll",
            overflowX: "hidden",
            position: "fixed",
            backgroundColor: " rgb(51, 51, 51)",
          },
        }}
      >
        {/* <Link to={`seller/quotation/manage`}>lol</Link> */}{" "}
        {/* <NavbarComponent /> */}
        <Switch>
          <Route exact path={path}>
            <Dashboard />
          </Route>{" "}
          <Route path={`${path}/quotation/manage`}>
            <ManageQuotation />
          </Route>{" "}
          <Route path={`${path}/quotation/recieved`}>
            <RecievedQuotes />
          </Route>{" "}
          <Route path={`${path}/balance`}>
            <Ballance />
          </Route>{" "}
          <Route path={`${path}/fundAccount`}>
            <FundAccount />
          </Route>{" "}
          <Route path={`${path}/products/create`}>
            <CreateProduct />
          </Route>{" "}
          <Route path={`${path}/products/list`}>
            <ProductList />
          </Route>{" "}
          <Route path={`${path}/products/manageProduct`}>
            <ProductManager />
          </Route>{" "}
          <Route path={`${path}/order/recent`}>
            <Order />
          </Route>{" "}
          <Route path={`${path}/sent/invoice`}>
            <SentInvoice />
          </Route>{" "}
          <Route path={`${path}/recieved/invoice`}>
            <RecievedInvoice />
          </Route>{" "}
          <Route path={`${path}/create/invoice`}>
            <CreateInvoice />
          </Route>{" "}
          <Route path={`${path}/comingsoon`}>
            <ComingSoon />
          </Route>{" "}
        </Switch>{" "}
      </Sidebar>
    );
  }
}
