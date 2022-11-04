import React, { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

interface propsPassed {
  image: string;
  text: string;
  class: string;
}

function AssetCompany(props: propsPassed) {
  const { ref, inView, entry } = useInView({ threshold: 0.8 });
  const [hasAlreadyChanged, setHasAlreadyChanged] = useState(false);
  //   console.log(inView);

  useEffect(() => {
    if (inView && !hasAlreadyChanged) {
      setHasAlreadyChanged(true);
      console.log(entry, ref);
      if (entry && entry.target) {
        entry.target.classList.add("show");
        setTimeout(() => {
          console.log(entry.target.nextElementSibling);
          if (entry.target.nextElementSibling) {
            entry.target.nextElementSibling.classList.add("show");
          }
        }, 400);
      }
    }
  }, [inView]);

  return (
    <div className={props.class}>
      <img ref={ref} src={props.image} alt="error" className="assets-photo"></img>
      <div className="text-about">
        <h2>{props.text}</h2>
        <button className="instrument-button">
          Read More
          <HiArrowSmRight style={{ paddingLeft: "5px" }} />
        </button>
      </div>
    </div>
  );
}

export default AssetCompany;
