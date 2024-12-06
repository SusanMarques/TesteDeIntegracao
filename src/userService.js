class ServicoDeUsuario {
    constructor(bancoDeDados) {
      this.bancoDeDados = bancoDeDados;
    }
  
    criarUsuario(nome) {
      const novoUsuario = { id: this.bancoDeDados.usuarios.length + 1, nome };
      this.bancoDeDados.usuarios.push(novoUsuario);
      return novoUsuario;
    }
  
    listarUsuarios() {
      return this.bancoDeDados.usuarios;
    }
  }
  
  export default ServicoDeUsuario;