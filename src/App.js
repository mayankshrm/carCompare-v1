import { Helmet } from "react-helmet";
import { Crousel } from "./components/Crousel/Crousel";
import { Footer } from "./components/Partials/Footer";
import { Header } from "./components/Partials/Header";
import "./App.css";

import { CardFinal } from "./components/Card/CardFinal";



export function App() {
 
  return (
    <>
    <Helmet>
        <style>{"body { background-color: #F5EDDC; }"}</style>
      </Helmet>
      <Header />
      <Crousel />
      <br />

      <CardFinal />

      <br />
      

      <Footer />
    </>
  );
}
