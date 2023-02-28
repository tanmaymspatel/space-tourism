import { useLocation } from 'react-router-dom';
import Routing from './core/components/Routing';

import Header from "./core/Header";

function App() {

  const url = useLocation();
  const { pathname } = url;
  const background = (pathname === '/' || pathname === '/home') ? "home-background" : pathname === '/destination' ? "destination-background" : pathname === '/crew' ? "crew-background" : pathname === '/technology' ? "technology-background" : "";

  return (
    <div className={`${background} h-100 d-flex flex-column background-image`}>
      <header id="header" className="d-flex align-items-center justify-content-between">
        <Header />
      </header>
      <main className="main-content flex-grow-1 overflow-y-auto">
        <section className="section h-100">
          <Routing />
        </section>
      </main>
    </div>
  );
}

export default App;
