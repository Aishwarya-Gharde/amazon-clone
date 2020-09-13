import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__cointainer">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id={1100}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Unknown Binding – 1 January 2011"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={1101}
            title="Cadbury Dairy Milk Silk Chocolate Bar"
            price={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/410dwX6xrbL._AC_SX184_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={1102}
            title="Apple iPhone 11 (64GB, Purple) [Locked] + Carrier Subscription"
            price={549.59}
            image="https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id={1103}
            title="Cadbury Dairy Milk Silk Chocolate Bar"
            price={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/410dwX6xrbL._AC_SX184_.jpg"
            rating={4}
          />
          <Product
            id={1104}
            title="Cadbury Dairy Milk Silk Chocolate Bar"
            price={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/410dwX6xrbL._AC_SX184_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={1105}
            title="Samsung 23.5 FHD Curved LED-Lit FreeSync Monitor(LC24F396FHNXZA)"
            price={129.99}
            image="https://m.media-amazon.com/images/I/51SX+IL41YL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
