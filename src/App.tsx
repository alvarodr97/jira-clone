import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";

function App() {

  return (
    <div className="flex flex-row">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App
