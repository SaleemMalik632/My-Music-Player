import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Blog from './Blog';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import './App.css';
import Dashboard from './Dashboard';
import Chart from './Chart';
import Spotify from './Spotify';



// Initialize i18next (move this part to index.js or a separate initialization file)
i18n.init({
  resources: {
    en: {
      translation: {

        // to change the language
        language: 'اردو',
        // this is for the sidebar
        appTitle: 'Your App',
        dashboard: 'Dashboard',
        blogs: 'Audio ',
        profilePage: 'Video ',
        analytics: 'Favorite ',
        lastPage: 'Now Music',
        '404Page': '404 Page',

        // this is for the dashbosed page 
        Dashboardmain: 'Dashboard',
        wellcomeDashboard: 'Welcome to Me Player',
        BtnUpload: 'Upload Music',
        Audio: 'Audio ',
        Video: 'Video ',
        Watchtime: 'Watch Time',
        LikeMusic: 'Like ',
        Report: 'Last 10 Days Report',
        RecentPlay: 'Recent Play',
        PlayNow: 'Play Now',


      },
    },
    ur: {
      translation: {
        // to change the language
        language: 'English',
        // this is for the sidebar
        appTitle: 'آپ کا ایپ',
        dashboard: 'ڈیش بورڈ',
        blogs: 'آڈیو ',
        profilePage: 'ویڈیو ',
        analytics: 'پسندیدہ ',
        lastPage: 'اب میوزک',
        '404Page': '404 صفحہ',

        // this is forteh dashboard page
        Dashboardmain: 'ڈیش بورڈ',
        wellcomeDashboard: 'میں پلیئر میں خوش آمدید',
        BtnUpload: 'میوزک اپ لوڈ کریں',
        Audio: 'آڈیو ',
        Video: 'ویڈیو ',
        Watchtime: 'ویچ ٹائم',
        LikeMusic: 'لائیک ',
        Report: 'آخری 10 دنوں کا رپورٹ',
        RecentPlay: 'حالیہ پلے',
        PlayNow: 'اب پلے کریں',


      },
    },
  },
  fallbackLng: 'en',
  debug: true,
});


function App() {
  const [dashboard, setDashboard] = useState('250px');
  const marginfunction = () => {
    if (dashboard === '250px') {
      setDashboard('80px');
    } else {
      setDashboard('250px');
    }
  }
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Sidebar marginfunction={marginfunction} />
          <div style={{ marginLeft: dashboard, marginTop: '-845px' }}>
            <Routes >
              <Route path="/" element={<Dashboard />} />
              <Route path='/tables' element={<Spotify />} />
            </Routes>
          </div>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
