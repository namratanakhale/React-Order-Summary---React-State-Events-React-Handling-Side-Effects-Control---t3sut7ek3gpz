import React, { Fragment, useState } from "react";
import "../styles/App.css";
import picture from "../assets/illustration-hero.png";

const options = [
  { key: 0, plan: "Annual Plan", price: "59.99/year" },
  { key: 1, plan: "6-Month Plan", price: "34.99/6mo" },
  { key: 2, plan: "3-Month Plan", price: "16.99/3mo" },
  { key: 3, plan: "1-Month Plan", price: "5.99/1mo" },
];

const App = () => {
  const [currentPlan, setCurrentPlan] = useState();

  const changeHandler = (e) => {

  };

  const submitHandler = (e) => {
    
  };

  return (
    <div id="main">
      <div className="container">
        <div>
          <img
            src={picture}
            alt="man-with-headphones"
            className="top-pic"
          ></img>
        </div>
        <div className="content">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs audiobooks, and podcasts on
            any device anywhere you like.
          </p>
        </div>
        <form onSubmit={}>
          <div className="select-container">
            <div className="music-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fillRule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                  <path
                    fill="#717FA6"
                    fillRule="nonzero"
                    d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                  />
                </g>
              </svg>
            </div>
            <div className="plan">
              <h4 id="plan-title"></h4>
              <p id="plan-price"></p>
            </div>
            <select onChange={changeHandler} className="select" id="select">
              <option disabled selected>
                Change
              </option>
              {options.map((option) => (
                <option key={option.key} value={option.key}>
                 
                </option>
              ))}
            </select>
          </div>
          <button className="button" type="submit">
            Proceed to Payment
          </button>
          <div className="cancel">
            <a href="/">Cancel Order</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
