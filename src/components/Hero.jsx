import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ children }) => {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Spline animation background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Your AI Study Buddy
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-orange-300">Plan. Learn. Quiz.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80"
        >
          Smart explanations, bite-sized examples, and quick quizzes to keep you on track.
        </motion.p>
        <div className="mt-8 max-w-2xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
