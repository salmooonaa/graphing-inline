import type { NextConfig } from "next";

const repoName = "graphing-inline";
const deployTarget = process.env.DEPLOY_TARGET ?? "";
const isGitHubPagesBuild = deployTarget === "github-pages";
const basePath = isGitHubPagesBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
};

export default nextConfig;
