import type { NextConfig } from "next";
import { redirect } from "next/navigation";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/nixos-install',
        destination: 'https://raw.githubusercontent.com/LewisLosa/flake/refs/heads/main/install.sh',
        permanent: false, // 302 redirect
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
