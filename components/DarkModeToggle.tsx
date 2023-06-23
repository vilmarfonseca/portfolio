"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@styles/components/Toggle.module.css";
import { Moon } from "styled-icons/heroicons-solid";
import { Moon as MoonOutline } from "styled-icons/heroicons-outline";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const toggleSwitch = () =>
    theme == "dark" ? setTheme("light") : setTheme("dark");

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex gap-2">
      <div
        className={styles.switch}
        data-isOn={theme === "dark"}
        onClick={toggleSwitch}
      >
        <motion.div className={styles.handle} layout transition={spring} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-4 w-4"
      >
        {theme == "dark" ? <Moon /> : <MoonOutline />}
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;
