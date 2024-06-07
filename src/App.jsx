import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { TermsAndConditions } from "./components/termsAndConditions";
import { PrivacyPolicy } from "./components/privacyPolicy";
import { RefundsCancellation } from "./components/refundsCancellations";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./Home";
import { Footer } from "./components/footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={
              <TermsAndConditions data={landingPageData.TermsAndConditions} />
            }
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy data={landingPageData.PrivacyPolicy} />}
          />
          <Route
            path="/refunds-cancellation"
            element={
              <RefundsCancellation data={landingPageData.RefundsCancellation} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
