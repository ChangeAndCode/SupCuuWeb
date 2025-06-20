"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
}

export default function ExpandableText({
  text,
  maxLines = 2,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((prev) => !prev);

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.p
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-800 whitespace-pre-wrap"
          >
            {text}
          </motion.p>
        ) : (
          <motion.p
            key="collapsed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-800 line-clamp-2"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        className="mt-2 text-blue-600 hover:underline text-xs"
      >
        {expanded ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}
