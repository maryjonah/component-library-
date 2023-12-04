import React from 'react';
import ReactDOM from 'react-dom/client';
import BadgeDemo from "./demo/BadgeDemo.jsx";

function App() {
  return (
    <main>
        <h1 className="title">COMPONENT LIBRARY++</h1>

        <BadgeDemo />

    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
