import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupCreate6thPage from "../components/GroupCreate6thPage/GroupCreate6thPage";
import Mainlanding from "../components/Mainlanding/Mainlanding";
import Navbarwrapper from "../components/Navbar/Navbarwrapper";
import Footerwrapper from "../components/Footer/Footerwrapper";
import PaymentPage from "../components/PaymentPage/PaymentPage";

export default function Routes() {
  return (
    <div>
      <Navbarwrapper />
      <Switch>
        <Route path="/" exact>
          <Mainlanding />
        </Route>
        <Route path="/GroupCreate6thPage">
          <GroupCreate6thPage />
        </Route>
        <Route path="/PaymentPage">
          <PaymentPage />
        </Route>
      </Switch>
      <Footerwrapper />
    </div>
  );
}
