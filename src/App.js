import React from 'react';
import { NewsContainer } from './component/news/NewsContainer';
import { Weather } from './component/weather/Weather';
import { Header } from './component/header/Header';
import { Facts } from './component/facts/Facts';
import { MoreFromYourLocation } from './component/more-from-your-location/MoreFromYourLocation';
import { Footer } from './component/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="global-app-container">
      <div>
        <Header/>
      </div>

      <div className="spacer-16"></div>

      <div className="content-centerer">
        <div className="content-container">
          <div className="content-item">
            <Weather/>
          </div>

          <div className="content-item">
            <NewsContainer/>
          </div>

          <div className="content-item">
            <Facts/>
          </div>

          <div className="content-item">
            <MoreFromYourLocation/>
          </div>
        </div>
      </div>

      <div className="spacer-32"></div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
