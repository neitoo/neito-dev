import { Outlet } from "react-router-dom";
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Stars } from "@components/stars";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <Stars/>
    </>
  );
}

export default Layout;