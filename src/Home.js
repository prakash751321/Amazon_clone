import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup : How Constant Innnovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          id="2"
          title="SAMSUNG Camera 64MP with Exynox 1280 Galaxy A53 (Awesome Black, 256 GB)  (8 GB RAM)"
          price={35.599}
          rating={5}
          image="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a53-5g-1.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="SAMSUNG A73 5G (Awesome Black, 256 GB) (8 GB RAM)"
          price={46.999}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p6pim/levant/feature/164003132/levant-feature-multi-lens-for-the-perfect-shot-531883669?$FB_TYPE_A_MO_JPG$"
        />
        <Product
          id="4"
          title="LG UltraFine 4k Monitor (LGMONX4K)"
          price={11.96}
          rating={3}
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/817-GdpmepL._AC_UF1000,1000_QL80_.jpg"
        />
        <Product
          id="5"
          title="Asus VivoBook - 15 (ASUSVB15XM)"
          price={42.958}
          rating={5}
          image="https://5.imimg.com/data5/AE/QD/KA/SELLER-93454613/asus-laptop-15-x509ua-ej341t-ci3-7020u-uma-4g-1t-15-6fhd-1y-silver-grey-500x500.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Philips 9114 Beard Trimmer"
          price={850.45}
          rating={3}
          image="https://4.imimg.com/data4/WH/NG/MY-13223178/philips-branded-beard-trimmer.jpg"
        />
      </div>

      {/* Products */}
    </div>
  );
}

export default Home;
