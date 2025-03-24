/**
 * This module proxy file helps Next.js find the right modules regardless
 * of the path alias configuration.
 */

// Create a mapping of imports to their actual paths
const moduleMap = {
  // UI components
  '@/components/ui/button': './components/ui/button',
  '@/components/ui/accordion': './components/ui/accordion',
  
  // Other components
  '@/components/contact-form': './components/contact-form',
  '@/components/faq-accordion': './components/faq-accordion',
  '@/components/testimonial-carousel': './components/testimonial-carousel',
  
  // Utils
  '@/lib/utils': './lib/utils',
};

module.exports = moduleMap; 