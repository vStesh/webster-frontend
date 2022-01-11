import React from "react";
import {CenterWrapper} from "./styles";

const Loader: React.FC = () => {

  return (
     <CenterWrapper><img src="/loader.gif" alt={'Йде завантаження...'}/></CenterWrapper>
  );
};

export default Loader;
