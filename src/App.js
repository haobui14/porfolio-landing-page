import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Home from './routes/Home/Home.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Welcome from './routes/Welcome/Welcome.component';

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
        <Route path='welcome' element={<Welcome />} />
      </Route>
    </Routes>
  );
};

export default App;
