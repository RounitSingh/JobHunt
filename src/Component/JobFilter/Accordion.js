import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Accordion.css";

export const Accordion = ({ i, expanded, setExpanded,allowMultiple, title, content }) => {
  const isOpen = allowMultiple ? expanded.includes(i) : i === expanded;

  const toggleAccordion = () => {
    if (allowMultiple) {
      if (isOpen) {
        setExpanded(expanded.filter((index) => index !== i));
      } else {
        setExpanded([...expanded, i]);
      }
    } else {
      setExpanded(isOpen ? null : i);
    }
  };

  const variants = {
    open: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  return (
    <>
      <motion.header
        className={isOpen ? "open" : ""}
        onClick={toggleAccordion}
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#ffd149" : "#6d6d6d",
          color: isOpen ? "#000000" : "#ffffff", 
        }}
        aria-expanded={isOpen}
       
        tabIndex={0}
        onKeyPress={(e) => (e.key === "Enter" ? toggleAccordion() : null)}
    
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }} // Ensures smooth height animation
          >
            <div className="content-placeholder">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};