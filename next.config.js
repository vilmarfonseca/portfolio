const path = require('path');

const nextConfig = {
  images: {
    unoptimized: true
  },
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
