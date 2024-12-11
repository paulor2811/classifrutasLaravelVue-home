module.exports = {
    devServer: {
      host: "0.0.0.0",  // Permite conexões externas
      port: 8080,  // Porta padrão do DevServer
      watchOptions: {
        poll: true,  // Ativa watch contínuo no Docker
        ignored: /node_modules/,  // Ignora dependências
      },
    },
  };