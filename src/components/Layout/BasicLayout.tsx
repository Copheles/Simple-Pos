import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TopBanner from "../Header/TopBanner";

export default function BasicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Apply max-width to everything except full-width elements */}
      <div className="w-full">
        <TopBanner />
      </div>

      <div className="max-w-screen-lg w-full mx-auto flex-1 flex flex-col">
        <Header />
        <main className="flex-grow min-h-[calc(100vh-200px)]">
          <Outlet />
        </main>
      </div>

      <div className=" w-full mx-auto">
        <Footer />
      </div>
    </div>
  );
}
