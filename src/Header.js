import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{ basket, user }] = useStateValue();
  // console.log(basket)

  const login = () => {
    if(user) {
      auth.signOut()
    }
  }

  return (
    <nav className="header">
      {/* image with link to home page */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}

      <div className="header__nav">
        {/* 1st Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello { user?.email },</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/rtn" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/demo" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* No of items in basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
