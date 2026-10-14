import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaPause } from 'react-icons/fa';
import weddingMusic from '@/assets/audio/music.mp3';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio autoplay prevented:', err));
    }
  };

  useEffect(() => {
    // Show a gentle hint after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden rounded-full border border-[#DFCEAA] bg-[#FFFDF9]/95 px-3 py-1.5 text-xs font-medium text-[#59463D] shadow-md backdrop-blur-sm sm:block"
            >
              {isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc cưới lãng mạn'}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Dừng nhạc' : 'Phát nhạc'}
          className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-[#DFCEAA] shadow-[0_8px_20px_rgba(89,70,61,0.18)] backdrop-blur-md transition-colors ${
            isPlaying
              ? 'bg-[#59463D] text-[#DFCEAA]'
              : 'bg-[#FFFDF9]/90 text-[#C6A66B] hover:bg-[#FAF7F0]'
          }`}
        >
          {isPlaying && (
            <span className="absolute -inset-1 animate-ping rounded-full border border-[#C6A66B]/40" />
          )}
          {isPlaying ? (
            <FaPause className="text-sm" />
          ) : (
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <FaMusic className="text-sm" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;