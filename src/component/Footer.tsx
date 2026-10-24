import {BsFacebook, BsInstagram, BsX, BsYoutube} from "react-icons/bs";

export function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">

                    {/* Brand & Mission */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">
                            IndigoShop
                        </h5>
                        <p>
                            Your one-stop destination for premium musical instruments, studio gear, and accessories. Quality guaranteed with every order.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold text-uppercase">Shop</h6>
                        <p><a href="#guitars" className="text-light text-decoration-none hover-opacity">Guitars & Basses</a></p>
                        <p><a href="#keyboards" className="text-light text-decoration-none hover-opacity">Keyboards & Synths</a></p>
                        <p><a href="#drums" className="text-light text-decoration-none hover-opacity">Drums & Percussion</a></p>
                        <p><a href="#studio" className="text-light text-decoration-none hover-opacity">Studio Gear</a></p>
                    </div>

                    {/* Customer Support */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold text-uppercase">Customer Care</h6>
                        <p><a href="#account" className="text-light text-decoration-none hover-opacity">Your Account</a></p>
                        <p><a href="#orders" className="text-light text-decoration-none hover-opacity">Track Orders</a></p>
                        <p><a href="#shipping" className="text-light text-decoration-none hover-opacity">Shipping Rates</a></p>
                        <p><a href="#help" className="text-light text-decoration-none hover-opacity">Help & Support</a></p>
                    </div>

                    {/* Contact Details */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold text-uppercase">Contact</h6>
                        <p><i className="bi bi-house-door me-2"></i> 123 Music Ave, Suite 100</p>
                        <p><i className="bi bi-envelope me-2"></i> support@indigoshop.com</p>
                        <p><i className="bi bi-phone me-2"></i> +1 800 555 0199</p>
                    </div>

                </div>

                <hr className="my-4" />

                {/* Bottom Row: Copyright & Social Links */}
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-start mb-0">
                            © {new Date().getFullYear()} <span className="fw-bold text-warning">IndigoShop</span>. All rights reserved.
                        </p>
                    </div>

                    <div className="col-md-5 col-lg-4 mt-3 mt-md-0">
                        <div className="text-center text-md-end">
                            <a href="#facebook" className="btn btn-outline-light btn-sm rounded-circle me-2" aria-label="Facebook">
                                <BsFacebook  size={25}/>
                            </a>
                            <a href="#twitter" className="btn btn-outline-light btn-sm rounded-circle me-2" aria-label="Twitter">
                                <BsX size={25}/>
                            </a>
                            <a href="#instagram" className="btn btn-outline-light btn-sm rounded-circle me-2" aria-label="Instagram">
                               <BsInstagram size={25} />
                            </a>
                            <a href="#youtube" className="btn btn-outline-light btn-sm rounded-circle" aria-label="YouTube">
                               <BsYoutube size={25} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}