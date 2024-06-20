import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";


function App() {
  return (
    <div className="App">
    <CartProvider>
      
    {/* <Header/> */}
    <Main/>
    {/* <Footer/> */}
    <Toaster />
    </CartProvider>
    </div>
    
  );
}

export default App;