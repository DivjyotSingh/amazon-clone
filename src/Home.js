import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon banner"
        />
        <div className="home_row">
          <Product id="12321341" title="The Lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
          <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K- beater" price={239.0} rating={4} image="" />
        </div>
        <div className="home_row">
          <Product
          id="4903850"
          title="Samsung LC49RF90SSUXEN"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
          />
          <Product 
          id="23445930"
          title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
          id="3254354345"
          title="New Apple ipad Pro (12.9-inch,WiFI,128Gb)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
          id="90829332"
          title="Samsung LC 49' Curved Led Gaming Monitor"
          price={10194.98}
          rating={4} 
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"        
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
