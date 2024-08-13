"use client";

import React from "react";
import Title from "./title";
import Theme from "./theme";
import { AnimatePresence } from "framer-motion";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title />
      <AnimatePresence>
        <Theme />
      </AnimatePresence>
    </div>
  );
}

export default Header;
