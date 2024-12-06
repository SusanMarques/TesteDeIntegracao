import BancoDeDados from "../src/database";
import ServicoDeUsuario from "../src/userService";
import ServicoDePostagem from "../src/postService";

describe("Testes de Integração", () => {
  let bancoDeDados;
  let servicoDeUsuario;
  let servicoDePostagem;

  beforeEach(() => {
    bancoDeDados = new BancoDeDados();
    servicoDeUsuario = new ServicoDeUsuario(bancoDeDados);
    servicoDePostagem = new ServicoDePostagem(bancoDeDados);
  });

  it("Deve criar um usuário e associar uma postagem a ele", () => {
    // Criar um usuário
    const usuario = servicoDeUsuario.criarUsuario("Maria");
    expect(usuario).toEqual({ id: 1, nome: "Maria" });

    // Criar uma postagem associada ao usuário
    const postagem = servicoDePostagem.criarPostagem(usuario.id, "Minha primeira postagem");
    expect(postagem).toEqual({
      id: 1,
      usuarioId: 1,
      conteudo: "Minha primeira postagem",
    });

    // Verificar se os dados foram salvos corretamente
    expect(bancoDeDados.usuarios).toContainEqual(usuario);
    expect(bancoDeDados.postagens).toContainEqual(postagem);
  });

  it("Deve retornar mensagem de erro ao tentar criar uma postagem para um usuário inexistente", () => {
    const resultado = servicoDePostagem.criarPostagem(99, "Postagem inválida");
    expect(resultado).toBe("Usuário não encontrado");
  });
});