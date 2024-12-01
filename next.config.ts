import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            }
            ,
            {
                protocol: "https",
                hostname: "ik.imagekit.io"
            },
            {
                protocol: "https",
                hostname: "assets.nflxext.com"
            }
        ]
    }
};

export default nextConfig;
