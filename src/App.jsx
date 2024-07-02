import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MenuSection from "./components/MenuSection";
import ActionSection from "./components/ActionSection";
import { useSelector } from "react-redux";


function App() {
  const {MenuSectionStyle ,ActionSectionStyle} = useSelector((state)=>state.menuStyle)

  return (
    <>
      <div className="app ">
        <div className="row m-0 p-0">
          <div className={MenuSectionStyle+" "+"border1  m-0 p-0 left "}>
            <MenuSection />
          </div>
          <div className={ActionSectionStyle+" "+"col-lg-10 border1   m-0 p-0 right-section"}>
            <ActionSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
