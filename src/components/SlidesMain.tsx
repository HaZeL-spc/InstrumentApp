import React from "react";
import CEO from "../images/CEO.jpg";
import interestingPhoto from "../images/interestingPhoto.jpg";
import phonePhoto from "../images/phonePhoto.jpg";
import { HiArrowSmRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import AssetCompany from "./AssetCompany";

const SlidesMain = () => {
  return (
    <div className="slides-main-div" id="who-we-are">
      <div className="slides-main-div-quote">
        <h2>
          We enrich human lives through the thoughtful application of design and
          technology
        </h2>
      </div>
      <div className="slides-of-assets">
        <AssetCompany
          image={CEO}
          text="It is with great excitement that we announce Kara Place as
              Instrument’s next CEO."
          class="asset-holder"
        />
        <AssetCompany
          image={interestingPhoto}
          text="In the summer of 2020, we reported our representation data and
          committed to doing so annually. One year later, we are pleased to
          share an update on our goals, our progress, and the work that
          still needs to be done."
          class="asset-holder asset-holder-second"
        />
        <AssetCompany
          image={phonePhoto}
          text="As a full-service partner to the world’s most ambitious companies,
          we create transformational change through best-in-class digital
          products and communications."
          class="asset-holder"
        />
      </div>
      <div className="explore-our-work-div">
        <h2>Explore a few of our most impactful projects</h2>
        <button className="instrument-button">
          Our Work <HiArrowSmRight />
        </button>
      </div>
    </div>
  );
};

export default SlidesMain;
