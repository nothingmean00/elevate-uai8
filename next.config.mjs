/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Add webpack configuration to resolve path aliases
  webpack: (config, { isServer }) => {
    // Add a simple rule to handle path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
    };

    // Allow the webpack module resolution to use package.json
    config.resolve.exportsFields = ['exports', 'browser', 'module', 'main'];
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx']
    };

    // Add module fallbacks
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@/lib/utils': './lib/utils.ts',
      '@/components/ui/button': './components/ui/button.tsx',
      '@/components/contact-form': './components/contact-form.tsx',
      '@/components/faq-accordion': './components/faq-accordion.tsx',
    };

    return config;
  },
};

export default nextConfig;
