import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Home from './routes/home/Home.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        {/* Example of adding different route to the page */}
        {/* <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
