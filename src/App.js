import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import LoosingMoney from './pages/LoosingMoney/LoosingMoney';
import PowerOfTechnicalAnalysis from './pages/PowerOfTechnicalAnalysis/PowerOfTechnicalAnalysis';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Services from './pages/Services/Services';
import SwingTradingVsDayTrading from './pages/SwingTradingVsDayTrading/SwingTradingVsDayTrading';
import TopStrategies from './pages/TopStrategies/TopStrategies';
import TradingPlan from './pages/TradingPlan/TradingPlan';

function App() {
  const [enrollVisible, setEnrollVisible] = useState(false)

  // const apiKey = 'LAAM6CXDZSN4W5W4';


  return (
    <>
      <Navbar setEnrollVisible={setEnrollVisible} />
      <Routes>
        <Route path='/' element={<Home enrollVisible={enrollVisible} setEnrollVisible={setEnrollVisible} />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/blog/are-you-tired-of-losing-money-in-the-market-heres-how-to-avoid-common-trading-mistakes-and-turn-the-tide-in-your-favour" element={<LoosingMoney />} />
        <Route path="/blog/power-of-technical-analysis" element={<PowerOfTechnicalAnalysis />} />
        <Route path="/blog/swing-trading-vs-day-trading" element={<SwingTradingVsDayTrading />} />
        <Route path='/blog/trading-plan' element={<TradingPlan />} />
        <Route path="/blog/top-strategies" element={<TopStrategies />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
