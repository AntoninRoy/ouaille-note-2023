
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      // Tremplin desactive : la page est conservee dans pages-disabled/.
      // Pour la reactiver, la remettre dans pages/, retirer cette redirection
      // et remettre l'entree dans components/Layout/Menu.tsx.
      {
        source: "/tremplin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;