/** @type {import("snowpack").SnowpackUserConfig } */
import proxy from 'http2-proxy';

export default {
  env: {
    
  },
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-react-refresh',
    ['@snowpack/plugin-sass', {
      native: true,
    }],
    ['@snowpack/plugin-dotenv'],
  ],
  routes: [
    {
      src: '/api',
      dest: (req, res) => {
        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 3001,
        });
      },
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
