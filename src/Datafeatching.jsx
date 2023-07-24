import React from "react";
import UseState from "./Components/UseState";
import { Header, Footer } from "./header";
import Heading from "./Components/Heading";

function Datafeatching() {
  return (
    <div className="">
      <Header />
      <Heading
        text={"Featching data fo Employee Records Using UseEfect hooks"}
      ></Heading>
      <div className="bg-slate-700 border-8 h-screen w-screen overflow-y-auto">
        {<UseState></UseState>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Datafeatching;
