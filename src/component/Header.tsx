import { BiSearch } from "react-icons/bi";
import { BsCart, BsPerson } from "react-icons/bs";
import { PiGuitar } from "react-icons/pi";
import {useCartContext} from "../provider/CartContextProvider.tsx";
import {Link} from "react-router-dom";

export function Header() {
    const {cartItems} = useCartContext();
    const totalQuantity =
        cartItems.reduce((total, item) =>
            total + item.quantity, 0);
    return (
        <>
            {/* Custom Styles for Indigo Theme Customization */}
            <style>{`
        .bg-indigo {
          background-color: #4b0082 !important;
        }
        .btn-indigo-light {
          background-color: #6f42c1;
          color: #ffffff;
          border: none;
        }
        .btn-indigo-light:hover {
          background-color: #59319d;
          color: #ffffff;
        }
        .nav-link:hover {
          color: #d8b4fe !important;
        }
      `}</style>

            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-indigo shadow-sm py-3">
                    <div className="container">
                        {/* Brand / Logo */}
                        <Link to="/" className="navbar-brand fw-bold fs-4 d-flex align-items-center me-4">
                            <PiGuitar size={32} className="me-2" />
                            Music World
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent"
                            aria-controls="navbarContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Content */}
                        <div className="collapse navbar-collapse align-items-center" id="navbarContent">
                            {/* Navigation Links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium align-items-lg-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#deals">Deals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#categories">Categories</a>
                                </li>
                            </ul>

                            {/* Search Bar */}
                            <form className="d-flex me-lg-3 my-2 my-lg-0 flex-grow-1" style={{ maxWidth: "380px" }}>
                                <div className="input-group">
                                    <input
                                        type="search"
                                        className="form-control border-0"
                                        placeholder="Search products..."
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-indigo-light d-flex align-items-center justify-content-center" type="submit">
                                        <BiSearch size={20} />
                                    </button>
                                </div>
                            </form>

                            {/* Right Side Actions (Account & Cart) */}
                            <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
                                <a href="#account" className="btn btn-outline-light d-flex align-items-center gap-1">
                                    <BsPerson size={20} />
                                    <span>Account</span>
                                </a>

                                <Link to="/cart" className="btn btn-warning position-relative d-flex align-items-center gap-1 fw-bold">
                                    <BsCart size={20} />
                                    <span>Cart</span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                  </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}