"use client";

import { useTheme } from "next-themes";
import iconMoon from "@/public/assets/images/icon-moon.svg";
import iconSun from "@/public/assets/images/icon-sun.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function Theme() {
  const { setTheme, theme } = useTheme();
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: "-100%",
      }}
      onClick={handleTheme}
      key={theme}
    >
      <Image
        src={theme === "light" ? iconMoon : iconSun}
        alt="icon"
        width={25}
        height={25}
      />
    </motion.button>
  );
}

export default Theme;
