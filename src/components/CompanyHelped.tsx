import React from "react";
import birdPhoto from "../images/birdPhoto.jpg";
import gucciPhoto from "../images/gucciPhoto.jpg";

const CompanyHelped = () => {
  return (
    <div className="company-helped-div" id="being-here">
      <div className="company-helped">
        <img src={birdPhoto} className="photo-of-work"></img>
        <section className="work-description">
          <div>
            <h1>Eames Institute</h1>
          </div>
          <p>
            Ray and Charles Eames laid the foundation for modern design and
            created work that has transcended time. With an aspiration to bring
            the Eameses’ timeless methodologies to a modern audience, the Eames
            Institute enlisted Instrument to co-create a digital platform to
            unveil their vast collection to the world.
          </p>
        </section>
      </div>
      <div className="company-helped">
        <img src={gucciPhoto} className="photo-of-work"></img>
        <section className="work-description">
          <div>
            <h1>Dropbox "For All Things Worth Saving"</h1>
          </div>
          <p>
            To evolve and mature how Dropbox engages with their customers, we
            developed a multi-year brand platform as well as launched its first
            campaign titled 'For All Things Worth Saving' — an ecosystem of
            branded experiences aimed to remind people of the inherent value of
            their digital files.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CompanyHelped;
