import React from "react";
import { Card } from "./components/Card/Card";
import { Crousel } from "./components/Crousel/Crousel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App(){
  return(
    <>
      <Header />
      <Crousel />
      <br/>
      <div className="container h-100">

    <div className="row">
      <div className="col-3" >
      <Card />
      </div>
      <div className="col-3">
      <Card />
      </div>
      <div className="col-3">
      <Card />
      </div>
      <div className="col-3">
      <Card />
      </div>
    </div>
      </div>
      <br />

      <Footer />


    </>
  )
}