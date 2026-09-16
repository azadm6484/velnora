import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useRouter } from '../App';

const CalendlyModal = ({ isOpen, onClose }) => {
  const { theme } = useRouter();
  const [showTimes, setShowTimes] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = 'hidden';
    setShowTimes(false);

    const onMessage = (event) => {
      if (event.origin !== 'https://calendly.com') return;
      const name = event.data?.event;
      if (name === 'calendly.date_and_time_selected') setShowTimes(true);
      if (name === 'calendly.event_type_viewed') setShowTimes(false);
    };

    const loadCalendly = () => {
      const parentElement = document.getElementById('calendly-container');
      if (!window.Calendly || !parentElement) return;
      parentElement.innerHTML = '';
      const bgColor = theme === 'light' ? 'ffffff' : '06141b';
      const textColor = theme === 'light' ? '06141b' : 'ffffff';
      window.Calendly.initInlineWidget({
        url: `https://calendly.com/azadmohd531/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=${bgColor}&text_color=${textColor}&primary_color=4a5c6a`,
        parentElement,
      });
    };

    const frame = window.requestAnimationFrame(() => {
      if (!document.querySelector('script[src*="calendly.com"][src*="widget.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = loadCalendly;
        document.body.appendChild(script);
      } else {
        loadCalendly();
      }
    });

    window.addEventListener('message', onMessage);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('message', onMessage);
      document.body.style.overflow = 'unset';
      const parentElement = document.getElementById('calendly-container');
      if (parentElement) parentElement.innerHTML = '';
    };
  }, [isOpen, theme]);

  const shellBg = theme === 'light' ? 'bg-white' : 'bg-[#06141B]';
  const closeBtn =
    theme === 'light'
      ? 'bg-[#06141B]/10 text-[#06141B] border-[#06141B]/10 hover:bg-[#06141B]/20'
      : 'bg-black/40 text-white/70 border-white/10 hover:text-white hover:bg-black/60';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-stretch justify-center sm:items-center sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 transition-colors duration-500 ${theme === 'light' ? 'bg-white/95' : 'bg-[#06141B]/90'} backdrop-blur-md`}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className={`relative z-10 flex h-[100dvh] w-full max-h-[100dvh] flex-col overflow-hidden sm:h-auto sm:max-h-[min(90dvh,760px)] sm:max-w-[640px] sm:rounded-2xl lg:max-w-3xl ${shellBg}`}
          >
            <div className="flex h-14 shrink-0 items-center justify-end px-3 pt-[max(0px,env(safe-area-inset-top))] sm:h-12 sm:pt-0">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close scheduling calendar"
                className={`transition-all p-2.5 rounded-full shadow-lg border ${closeBtn}`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 m-auto overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)]">
              <div
                id="calendly-container" 
                className={`calendly-embed w-full ${showTimes ? 'calendly-embed--times' : 'calendly-embed--calendar'}`}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;
