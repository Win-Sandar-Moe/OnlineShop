import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/Header.tsx";
import {Home} from "./component/Home.tsx";
import {Footer} from "./component/Footer.tsx";
import {CartContextProvider} from "./provider/CartContextProvider.tsx";
import {CartView} from "./component/CartView.tsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <CartContextProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cart" element={<CartView />} />
                </Routes>
                <Footer/>
                </CartContextProvider>
            </BrowserRouter>
        </>
    );
}
