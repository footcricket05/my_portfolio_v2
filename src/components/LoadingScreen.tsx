import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};