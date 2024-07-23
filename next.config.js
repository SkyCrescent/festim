/** @type {import('next').NextConfig} */
const nextConfig = {
   trailingSlash: true, // Ajoute un slash à la fin de chaque URL
   output: 'export', // Utiliser le nouvel output pour les exports statiques
   //distDir: 'sort', // Le dossier de sortie de build, changez 'build' par le dossier de votre choix
//   distDir: 'build', // Le dossier de sortie de build, changez 'build' par le dossier de votre choix

  // outdir: './out', // Le dossier de sortie pour les fichiers HTML statiques
};

module.exports = nextConfig;
