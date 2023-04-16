import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ cardsCount }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return Array(cardsCount)
    .fill()
    .map((_, index) => (
      <SkeletonTheme baseColor="#e3e3e3" highlightColor="#f2f2f2" key={index}>
        {/* <p>{windowWidth}px.</p> */}
        <div className="flex flex-col items-center bg-gray-100 pt-2 w-[140px] h-[200px] md:w-[200px] md:h-[250px] cursor-pointer">
          <div>
            <Skeleton
              height={windowWidth <= 768 ? 90 : 120}
              width={windowWidth <= 768 ? 120 : 170}
            />
          </div>
          <div className="text-center">
            <Skeleton
              count={2}
              height={12}
              width={windowWidth <= 768 ? 120 : 170}
            />
          </div>
          <div>
            <Skeleton height={40} width={windowWidth <= 768 ? 120 : 170} />
          </div>
        </div>
      </SkeletonTheme>
    ));
};

export default SkeletonCard;
