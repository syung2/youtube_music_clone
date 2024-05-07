"use client";

import React from "react";
import { GridLoader } from "react-spinners";
const error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
      <GridLoader color="red" />
      <div>Opps</div>
      <div>잠시 후 시도해주세요.</div>
    </div>
  );
};

export default error;
