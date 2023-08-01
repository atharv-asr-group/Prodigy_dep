"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("21bff74d-a3a7-4ce3-8eaa-df545b10943c");
  }, []);

  return null;
};
