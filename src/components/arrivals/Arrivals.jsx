import Card from "../card/Card";
import "./arrivals.css";
import cat01Img from "../../img/categories/cat-01.jpg";
import cat02Img from "../../img/categories/cat-02.jpg";
import cat03Img from "../../img/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <div className="container">
      <div className="arrivals__header">
        <h2 className="title-2">NEW ARRIVALS</h2>
      </div>
      <div className="arrivals__cards">
        <Card title="Hoodies & Sweetshirt" img={cat01Img} />
        <Card title="Coats & Parkes" img={cat02Img} />
        <Card title="Tees & T-Shirt" img={cat03Img} />
      </div>
    </div>
  );
};

export default Arrivals;
