"use client";
import { istiUtility } from "@/utility";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    istiUtility.customMouse();
  }, []);
  return (
    <div id="magic-cursor">
      <div id="ball" />
    </div>
  );
};
export default Cursor;
