import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
