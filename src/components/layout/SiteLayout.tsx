import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PampaiAssistant from "@/components/PampaiAssistant";
import { useEffect } from "react";

const SiteLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNavbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
      <WhatsAppButton />
      <PampaiAssistant />
    </div>
  );
};

export default SiteLayout;
