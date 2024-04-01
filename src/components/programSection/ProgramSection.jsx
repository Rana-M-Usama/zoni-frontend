import GirlPic from "../../assets/images/girl.png";
import { ReactComponent as PointerIcon } from "../../assets/icons/tabler_click.svg";
import { ReactComponent as CallIcon } from "../../assets/icons/call.svg";

import "./programSection.css";

const ProgramSection = () => {
  return (
    <div class="container-fluid main-box">
      <div class="row lg-col h-100">
        <div class="col-12 col-lg-5 d-flex align-items-center justify-content-center position-relative">
          <div>
            <img src={GirlPic} alt="GirlPic" className="img-positioning"/>
          </div>
        </div>
        <div class="col-12 col-lg-7 p-0 d-flex align-items-center justify-content-center">
          <div class="program-sec-content-box w-100 h-100 d-flex flex-column justify-content-evenly">
            <div className="left-box-width mx-auto mx-lg-0 my-4">
              <h4 className="primary-color fw-bold">
                Want to know which program is right for you?
              </h4>
              <button className="rounded-4 primary-color program-sec-btn">
                <PointerIcon className="me-2" />
                <span>Click here now!</span>
              </button>
            </div>
            <div className="right-box-width mx-auto mx-lg-0">
              <h4 className="primary-color fw-bold">Still Have Questions?</h4>
              <h5 className="primary-color">
                Our admissions team is here to help!
              </h5>
              <button className="rounded-4 primary-color program-sec-btn">
                <button className="rounded-4 primary-color program-sec-btn">
                  <CallIcon className="me-2" />
                  <span>Call Now!</span>
                </button>
              </button>
              <h4 className="primary-color fw-bold mt-4 text-underline">
                +1 888-495-0680
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
