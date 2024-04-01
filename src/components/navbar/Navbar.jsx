import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone-fill.svg";
import { ReactComponent as Form } from "../../assets/icons/form-filled.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar-padding navbar navbar-expand-lg border">
      <div class="container-fluid">
        <div class="container-fluid py-2">
          <div class="row">
            <div class="col">
              <Hamburger />
            </div>
            <div class="col">
              <Logo className="w-100 lg:w-75"/>
            </div>
            <div class="col text-end mt-1 d-lg-block d-none">
              <Phone className="me-2" />
              <span className="secondary-color nav-text-size fst-italic">+1 888-495-0680</span>
            </div>
            <div class="col text-end mt-1 d-lg-block d-none">
              <Form className="me-2" />
              <span className="secondary-color nav-text-size fst-italic">Contact Us</span>
            </div>
            <div class="col text-end">
              <button type="button" class="btn btn-outline-primary secondary-color signin-btn fst-italic fw-bold">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
