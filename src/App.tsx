import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main data-theme='pastel'>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
