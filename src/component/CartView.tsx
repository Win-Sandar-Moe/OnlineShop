import { useCartContext } from "../provider/CartContextProvider.tsx";
import { BsTrash } from "react-icons/bs";
import { PiGuitar } from "react-icons/pi";
import type {Product} from "../api/Product.ts";


export function CartView() {
    const { cartItems, removeFromCart } = useCartContext();

    // Calculate totals
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shippingFee = cartItems.length > 0 ? 15.0 : 0.0;
    const grandTotal = subtotal + shippingFee;

    return (
        <>
            {/* Indigo Theme Custom CSS */}
            <style>{`
        .bg-indigo {
          background-color: #4b0082 !important;
        }
        .text-indigo {
          color: #4b0082 !important;
        }
        .btn-indigo {
          background-color: #4b0082;
          color: #ffffff;
          border: none;
          transition: background-color 0.2s ease-in-out;
        }
        .btn-indigo:hover {
          background-color: #380062;
          color: #ffffff;
        }
        .cart-img-box {
          width: 80px;
          height: 80px;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .cart-img-box img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
      `}</style>

            <main className="bg-light py-5 min-vh-100">
                <div className="container">
                    {/* Header Banner */}
                    <div className="bg-indigo text-white p-4 rounded-3 mb-4 shadow-sm d-flex align-items-center justify-content-between">
                        <div>
                            <h2 className="fw-bold mb-1">Shopping Cart</h2>
                            <p className="mb-0 text-white-50">
                                You have {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items in your cart
                            </p>
                        </div>
                        <PiGuitar size={40} className="d-none d-sm-block text-white-50" />
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="row g-4">
                            {/* Left Column: Cart Items List */}
                            <div className="col-lg-8">
                                <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush">
                                            {cartItems.map((item: Product) => (
                                                <li
                                                    key={item.id}
                                                    className="list-group-item p-3 p-md-4 d-flex align-items-center justify-content-between gap-3"
                                                >
                                                    {/* Image & Main Info */}
                                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                                        <div className="cart-img-box p-2 border">
                                                            <img src={item.image} alt={item.name} />
                                                        </div>
                                                        <div>
                                                            <h6 className="fw-bold text-dark mb-1">{item.name}</h6>
                                                            <p className="text-muted small mb-1 text-truncate" style={{ maxWidth: "250px" }}>
                                                                {item.description}
                                                            </p>
                                                            <span className="badge bg-indigo-subtle text-indigo border">
                                ${item.price.toLocaleString()} each
                              </span>
                                                        </div>
                                                    </div>

                                                    {/* Quantity & Item Subtotal */}
                                                    <div className="text-end">
                            <span className="d-block small text-muted mb-1">
                              Qty: <strong className="text-dark">{item.quantity}</strong>
                            </span>
                                                        <span className="fs-6 fw-bold text-indigo">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="btn btn-outline-danger btn-sm border-0 p-2 ms-2"
                                                        title="Remove item"
                                                        aria-label="Remove item"
                                                    >
                                                        <BsTrash size={18} />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Order Summary & Checkout */}
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm rounded-3">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold text-dark mb-4">Order Summary</h5>

                                        {/* Subtotal */}
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Subtotal</span>
                                            <span className="fw-semibold">${subtotal.toLocaleString()}</span>
                                        </div>

                                        {/* Shipping */}
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="text-muted">Estimated Shipping</span>
                                            <span className="fw-semibold">${shippingFee.toFixed(2)}</span>
                                        </div>

                                        <hr className="my-3" />

                                        {/* Grand Total */}
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <span className="fs-5 fw-bold text-dark">Total</span>
                                            <span className="fs-4 fw-bold text-indigo">
                        ${grandTotal.toLocaleString()}
                      </span>
                                        </div>

                                        {/* Checkout Button */}
                                        <button
                                            onClick={() => alert("Proceeding to checkout...")}
                                            className="btn btn-indigo w-100 py-2 fs-6 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                                        >
                                            <span>Proceed to Checkout</span>
                                        </button>

                                        {/* Security Note */}
                                        <div className="text-center mt-3">
                                            <small className="text-muted d-block">
                                                🔒 Secure 256-Bit SSL Encryption
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Empty Cart State */
                        <div className="card border-0 shadow-sm rounded-3 py-5 text-center">
                            <div className="card-body">
                                <div className="mb-3 text-muted">
                                    <PiGuitar size={60} />
                                </div>
                                <h4 className="fw-bold text-dark mb-2">Your Cart is Empty</h4>
                                <p className="text-muted mb-4">
                                    Looks like you haven't added any musical instruments yet.
                                </p>
                                <a href="#shop" className="btn btn-indigo px-4 py-2 fw-semibold">
                                    Start Shopping
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}