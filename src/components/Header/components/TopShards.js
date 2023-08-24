import React from "react";

import {
  ShardTopBig,
  ShardTopMedium,
  ShardTopSmall1,
  ShardTopSmall2,
} from "../../../assets/svgs";

const TopShards = () => {
  return (
    <div className="flex h-32 flex-row justify-between ">
      <div className="w-8 -translate-x-12">
        <ShardTopSmall2 />
      </div>
      <div className="h-48 w-32 -translate-y-20">
        <ShardTopBig />
      </div>
      <div className="h-20 w-16">
        <ShardTopMedium />
      </div>
      <div className="w-12">
        <ShardTopSmall1 />
      </div>
    </div>
  );
};
export default TopShards;
