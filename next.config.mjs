import webpack from "webpack"
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  /** Uses Webpack to put the Require Statement in Build Operation at the Entry File only... */
  webpack: (config, {isServer}) => {
    if (isServer) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: 'require("reflect-metadata");',
          raw: true,
          entryOnly: true,
        })
      )
    }
  },
}

export default nextConfig
