import Card from "../card/Card";
import "./favourite.css";
import fav01Img from "../../img/images/promo-01.jpg";
import fav02Img from "../../img/images/promo-02.jpg";

const Favourite = () => {
  return (
    <div className="container">
      <div className="favourite__header">
        <h2 className="title-2">Young’s Favourite</h2>
      </div>
      <div className="favourite__cards">
        <Card title="Trending on instagram" img={fav01Img} />
        <Card title="All Under $40" img={fav02Img} />
      </div>
    </div>
  );
};

export default Favourite;

