import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Offer from "./components/offer/Offer";
import Favourite from "./components/favourite/Favourite";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Offer />
      <Favourite />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
