import React from "react";
import "./Home.scss";
import { IProduct } from "../../types/products";
import SushiList from "./components/SushiList";

const c = "home-page";

const Home = () => {
  return (
    <div className={c}>
      <SushiList />
    </div>
  );
};

export default Home;
