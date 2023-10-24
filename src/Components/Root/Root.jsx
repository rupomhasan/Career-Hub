import { Outlet } from "react-router-dom";
import Footer from "../Footer.jsx/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen mt-36 md:mt-3">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
