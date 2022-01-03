import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { BodyWrapper } from "./styles";
document.title = "Main Page";

const MainPage: React.FC = () => {
  return (
    <BodyWrapper>
      <Header drawer logOut/>
      <h1 style={{ textAlign: "center" }}>you are logged</h1>
      <Footer />
    </BodyWrapper>
  );
};

export default MainPage;