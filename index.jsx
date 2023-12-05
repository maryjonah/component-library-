import React from 'react';
import ReactDOM from 'react-dom/client';
import BadgeDemo from "./demo/BadgeDemo.jsx";
import BannerDemo from './demo/BannerDemo.jsx';
import CardsDemo from "./demo/CardDemo.jsx";

function App() {
  return (
    <main>
        <h1 className="title">COMPONENT LIBRARY++</h1>

        <BadgeDemo />
        <BannerDemo />
        <CardsDemo />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
