import "./offer.css";
import offerImg from "../../img/images/promo-img.jpg";

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          <div className="promo__img">
            <img src={offerImg} alt="Offer" />
          </div>
          <div className="offer__text">
            <div className="offer__title">
              <span className=" highlight highlight--offer">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <div className="offer__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
              <br />
              <p>
                <span>1 June - 10 June 2023 </span>
                <br /> *Terms & Conditions apply
              </p>
            </div>

            <div className="offer__btn-wrapper">
              <a href="#!" className="offer__btn">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
