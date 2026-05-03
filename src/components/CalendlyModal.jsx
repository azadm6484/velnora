import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      const loadCalendly = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/azadmohd531/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=06141b&text_color=ffffff&primary_color=4a5c6a',
            parentElement: document.getElementById('calendly-container'),
          });
        }
      };

      // Load Calendly script if not already present
      if (!document.querySelector('script[src*="widget.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = loadCalendly;
        document.body.appendChild(script);
      } else {
        loadCalendly();
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#06141B]/90 backdrop-blur-md"
          />

          {/* Fixed Close Button at Top Corner of Viewport */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 text-white/50 hover:text-white transition-all p-3 bg-black/40 hover:bg-black/60 rounded-full z-[130] backdrop-blur-md shadow-2xl border border-white/10"
          >
            <X size={24} />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl h-auto max-h-[90vh] relative z-10 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Calendly Container */}
            <div className="w-full h-full bg-transparent overflow-hidden flex items-center justify-center pointer-events-auto">
              <div 
                id="calendly-container"
                className="w-full"
                style={{ height: '700px', maxWidth: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;
