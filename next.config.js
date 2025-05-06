/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/dienlanhgiadung" : "";

const nextConfig = {
  basePath: basePath,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  //   async headers() {
  //     return [
  //       {
  //         source: "/:path*",
  //         headers: [
  //           {
  //             key: "Content-Security-Policy",
  //             value:
  //               "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';",
  //           },
  //         ],
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
