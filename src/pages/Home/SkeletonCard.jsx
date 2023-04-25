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
      <div
        key={index}
        className="xl:w-[200px] h-[200px] md:h-[250px] cursor-pointer bg-gray-100 hover:shadow-xl group relative"
      >
        <div>
          <div className="bg-white w-full h-[90px] md:h-[120px] overflow-hidden">
            <Skeleton height={120} />
          </div>

          <h4 className="px-2 pt-2 text-sm font-semibold line-clamp-2">
            <Skeleton width="80%" count={2} />
          </h4>
          <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
            <p>
              <Skeleton width={50} />
            </p>
            <p className="font-bold">
              <Skeleton width={80} />
            </p>
          </div>
        </div>
        <h4 className="absolute bottom-[10px] right-2 px-1 rounded text-sm md:text-md text-white">
          <Skeleton width={50} />
        </h4>
      </div>
    ));
};

export default SkeletonCard;
