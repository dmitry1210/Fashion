import "./subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          <div className="subscribe__text">
            <div className="subscribe__title">
              Join shopping community to <br /> get monthly promo
            </div>
            <div className="subscribe__desc">
              Type your email down below and be young wild generation
            </div>
          </div>
          <div className="subscribe__input-wrapper">
            <input
              type="text"
              placeholder="Add your email here"
              spellcheck="false"
            />
            <button className="subscribe__btn">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
