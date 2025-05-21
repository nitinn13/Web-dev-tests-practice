import { motion } from "framer-motion";

const SaleBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-red-600 py-2">
      <motion.div
        className="whitespace-nowrap text-white text-xl font-bold flex"
        initial={{ x: "-150%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        <span className="mx-4">🔥 Huge Sale! Up to 50% Off! 🔥</span>
        <span className="mx-4">🛒 Limited Time Offer! Shop Now! 🛒</span>
        <span className="mx-4">💥 Don't Miss Out! Grab Your Deals Today! 💥</span>
      </motion.div>
    </div>
  );
};

export default SaleBanner;
