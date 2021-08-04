import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234"
            title="The lean startup: How constant innovation creates radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg "
            rating={3}
          />
          <Product
            id="12346"
            title="Kenwood KMix Stand Mixer for Baking , Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk , 5 Kitre Glass Bowl"
            price={40.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="123465"
            title="Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor"
            price={888.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg "
            rating={5}
          />
          <Product
            id="1234656"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa , Charcoal Fabric"
            price={70.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            id="1234657"
            title="New Apple iPad Pro (12.9-inch,Wi-fi,128GB) - Silver (4th Generation)"
            price={2598}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg "
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="13465"
            title="Samsung LC49RG()SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={2000}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg "
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
