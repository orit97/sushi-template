// Home.tsx
import React from "react";
import "./Home.scss";
import SushiList from "../../components/List/SushiList";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Sushi World!</h1>
      <SushiList />
    </div>
  );
};

export default Home;
