class ServicoDePostagem {
    constructor(bancoDeDados) {
      this.bancoDeDados = bancoDeDados;
    }
  
    criarPostagem(usuarioId, conteudo) {
      // Verificar se o usuário existe
      const usuarioExiste = this.bancoDeDados.usuarios.some(
        (usuario) => usuario.id === usuarioId
      );
  
      if (!usuarioExiste) {
        return "Usuário não encontrado";
      }
  
      const novaPostagem = {
        id: this.bancoDeDados.postagens.length + 1,
        usuarioId,
        conteudo,
      };
  
      this.bancoDeDados.postagens.push(novaPostagem);
      return novaPostagem;
    }
  
    listarPostagens() {
      return this.bancoDeDados.postagens;
    }
  }
  
  export default ServicoDePostagem;