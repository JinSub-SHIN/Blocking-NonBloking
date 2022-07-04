import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Test from "../components/Test";


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<Test />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
