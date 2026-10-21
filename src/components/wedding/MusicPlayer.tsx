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
              className="hidden rounded-full border border-[#E0D3C1] bg-[#FCF8F2]/95 px-3.5 py-1.5 text-xs font-medium text-[#523F34] shadow-[0_4px_16px_rgba(82,63,52,0.08)] backdrop-blur-sm sm:block"
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
          className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-[#DBC4A2] shadow-[0_4px_18px_rgba(82,63,52,0.08)] backdrop-blur-md transition-all duration-300 ${
            isPlaying
              ? 'bg-[#FCF8F2] text-[#B79265] ring-2 ring-[#B79265]/25'
              : 'bg-[#FCF8F2]/95 text-[#B79265] hover:bg-[#F3EBE1]'
          }`}
        >
          {isPlaying && (
            <span className="absolute -inset-1 animate-ping rounded-full border border-[#B79265]/40" />
          )}
          {isPlaying ? (
            <FaPause className="text-sm text-[#B79265]" />
          ) : (
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <FaMusic className="text-sm text-[#B79265]" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;