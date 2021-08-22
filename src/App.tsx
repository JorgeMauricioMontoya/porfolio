import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-800">
      <div className="max-w-8xl pt-10 md:pt-20">
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Header />
            <Router />
            <Footer />
          </I18nextProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
