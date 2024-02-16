import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <div className="w-full h-full flex flex-row">
      <Toaster richColors duration={3000} position="top-right" />
      <Navigation />
      <div className="flex-1 min-w-0 z-0 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
