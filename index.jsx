import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <main>
      <h1>COMPONENT LIBRARY++</h1>

      <section>
        <h3>Badges</h3>
        <div>
            <Badge color="gray">Badge</Badge>
            <Badge color="red">Badge</Badge>
            <Badge color="yellow">Badge</Badge>
            <Badge color="green">Badge</Badge>
            <Badge color="blue">Badge</Badge>
            <Badge color="indigo">Badge</Badge>
            <Badge color="purple">Badge</Badge>
            <Badge color="pink">Badge</Badge>

            <div className="second-row">
              <Badge color="gray" type="pill">Badge</Badge>
              <Badge color="red" type="pill">Badge</Badge>
              <Badge color="yellow" type="pill">Badge</Badge>
              <Badge color="green" type="pill">Badge</Badge>
              <Badge color="blue" type="pill">Badge</Badge>
              <Badge color="indigo" type="pill">Badge</Badge>
              <Badge color="purple" type="pill">Badge</Badge>
              <Badge color="pink" type="pill">Badge</Badge>
            </div>
        </div>
      </section>
      
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
