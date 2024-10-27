
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS ? '/ToDoList/' : '',
  basePath: process.env.GITHUB_ACTIONS ? '/ToDoList' : '',
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
};

export default nextConfig;
