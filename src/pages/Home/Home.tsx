import Announcement from "../../components/Announcement";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
import React from "react";
import Slider from "../../components/Slider";
import Products from "../../components/Products";

const Home: React.FC = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
