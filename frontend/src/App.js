import AllRoutes from "./AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Email from "./Components/Footer/Email";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
