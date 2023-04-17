import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonLoadng = () => {
  return (
    <div className="m-4 border-4 rounded sm:grid sm:grid-cols-3 max-w-[900px] md:mx-auto">
      {/* col 1 */}
      <div className="flex items-center justify-center py-4 overflow-hidden">
        <Skeleton height={150} width={150} />
      </div>
      {/* col 2 */}
      <div className="p-4 sm:col-span-2">
        <h3 className="px-4 py-4 mb-4">
          <Skeleton width="100%" height={40} />
        </h3>
        <div className="flex flex-wrap justify-around mb-4">
          <h4 className="flex items-center justify-center gap-2 capitalize">
            <Skeleton width={100} />
          </h4>
          <div className="flex items-center gap-1">
            <p className="flex mr-1">
              <Skeleton width={50} />
            </p>
            <p className="text-xl font-semibold"></p>
            <p className="text-gray-700">
              <Skeleton width={100} />
            </p>
          </div>
        </div>
        <p className="px-2 py-4 bg-gray-200 rounded">
          <Skeleton count={3} />
        </p>
        <div className="flex justify-end mt-8 mr-8">
          <label htmlFor="quantity" className="mr-2">
            <Skeleton width={80} />
          </label>
          <Skeleton width={50} height={30} />
        </div>
        <div className="flex justify-end gap-8 m-8">
          <Skeleton width={120} height={40} />
          <Skeleton width={120} height={40} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoadng;
