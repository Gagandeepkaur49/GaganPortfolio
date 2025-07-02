import React from 'react';
import { motion } from 'framer-motion';

interface GlassWrapperProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

const GlassWrapper: React.FC<GlassWrapperProps> = ({ children, className = '', ...motionProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`glass-effect ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassWrapper; 