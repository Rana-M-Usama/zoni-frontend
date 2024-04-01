import "./heroSection.css";

const HeroSection = () => {
  return (
    <div class="hero-section d-flex align-items-center">
      <div class="hero-text text-white text-start col-9 position-relative h-100">
        <div class="overlay"></div>
        <div className="d-flex align-items-center h-100">
          <div className="col-10 d-flex flex-column mx-auto">
            <h4 className="hero-sec-title">Individual Courses:</h4>
            <div className="sub-title-box">
              <h3 className="hero-sec-sub-title">
                Your Education with Zoni's Diverse Courses!
              </h3>
            </div>
            <button className="rounded-5 primary-color hero-btn">
              Enroll Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
