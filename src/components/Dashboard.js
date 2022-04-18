import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import NewsComponents from "./News/NewsComponents";
import { ToastContainer } from "react-toastify";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-left" />
      <Switch>
        <Route exact path="/" component={NewsComponents} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}