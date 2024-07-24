/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Utiliser le nouvel output pour les exports statiques

  // trailingSlash: true, // Ajoute un slash à la fin de chaque URL
   //distDir: 'sort', // Le dossier de sortie de build, changez 'build' par le dossier de votre choix
  //distDir: 'build', // Le dossier de sortie de build, changez 'build' par le dossier de votre choix
//pour builder sur vercel fo retirer cette partie && next export dans package
  //vercel il ya que output ainsi que les hebergeur telle que hostinguer
  // outdir: './out', // Le dossier de sortie pour les fichiers HTML statiques
};

module.exports = nextConfig;
