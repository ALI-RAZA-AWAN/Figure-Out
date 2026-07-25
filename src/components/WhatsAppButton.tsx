import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923434762149"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg-base shadow-[0_8px_30px_rgba(245,158,11,0.45)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.7)] transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
      <MessageCircle className="h-7 w-7 relative" fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
