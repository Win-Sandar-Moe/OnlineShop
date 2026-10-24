import useProduct from "../hook/useProduct.tsx";
import type {Product} from "../api/Product.ts";
import {useCartContext} from "../provider/CartContextProvider.tsx";
import {BsCartPlus} from "react-icons/bs";



export function Home() {
    const { products } = useProduct();

    const {addToCart} =useCartContext();

    return (
        <>
            {/* Custom Theme Styles for Indigo Palette */}
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
        .product-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(75, 0, 130, 0.15) !important;
        }
        .product-img-container {
          background-color: #f8f9fa;
          height: 220px;
        }
        .product-img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
        }
      `}</style>

            <main className="bg-light py-5 min-vh-100">
                <div className="container">
                    {/* Header Banner */}
                    <div className="bg-indigo text-white p-4 p-md-5 rounded-3 mb-5 shadow-sm d-flex flex-column align-items-center text-center">
                        <h1 className="display-5 fw-bold mb-2">Featured Collection</h1>
                        <p className="lead mb-0 text-white-50">
                            Discover top-quality instruments and audio gear with fast shipping.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {products && products.length > 0 ? (
                            products.map((product: Product) => (
                                <div key={product.id} className="col">
                                    <div className="card h-100 border-0 shadow-sm product-card overflow-hidden">

                                        {/* Padded Image Container */}
                                        <div className="product-img-container p-3 d-flex align-items-center justify-content-center border-bottom">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="product-img rounded"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Card Body */}
                                        <div className="card-body d-flex flex-column p-4">
                                            {/* Name & Stock Badge */}
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <h5 className="card-title fw-bold text-dark mb-0 me-2 text-truncate">
                                                    {product.name}
                                                </h5>
                                                <span
                                                    className={`badge ${
                                                        product.quantity > 0
                                                            ? "bg-success-subtle text-success border border-success-subtle"
                                                            : "bg-danger-subtle text-danger border border-danger-subtle"
                                                    } rounded-pill px-2 py-1`}
                                                    style={{ fontSize: "0.75rem" }}
                                                >
                          {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
                        </span>
                                            </div>

                                            {/* Description */}
                                            <p className="card-text text-muted small flex-grow-1 mb-3 line-clamp-2">
                                                {product.description}
                                            </p>

                                            {/* Price & Action Button */}
                                            <div className="pt-3 border-top d-flex align-items-center justify-content-between mt-auto">
                                                <div className="d-flex flex-column">
                                                    <span className="text-muted small">Price</span>
                                                    <span className="fs-5 fw-bold text-indigo">
                            ${product.price.toLocaleString()}
                          </span>
                                                </div>

                                                <button
                                                    className="btn btn-indigo d-flex align-items-center gap-1 px-3 py-2"
                                                    disabled={product.quantity === 0}
                                                    onClick={() => addToCart(product)}
                                                >
                                                    <BsCartPlus size={20}/>
                                                    <span>Add</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : (
                            /* Empty State */
                            <div className="col-12 text-center py-5">
                                <i className="bi bi-box-seam display-1 text-muted"></i>
                                <h4 className="mt-3 text-secondary">No products available</h4>
                                <p className="text-muted">Check back later for restocks!</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}