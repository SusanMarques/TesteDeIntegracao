import Database from "../src/databaseAtv";
import PostService from "../src/post";
import UserService from "../src/user";


describe("Testar Integração entre UserService e PostService", () =>{
    let database;
    let userService;
    let postService;

    beforeEach(() => {
        database = new Database();
        userService = new UserService(database);
        postService = new PostService(database);
    });
    it("Testar a criação de um usuário", () =>{
        const user = userService.createUser("M.A");
        expect(user.name).toBe("M.A");
        expect(user).toHaveProperty("id");
        console.log(user)
    })
    it("Testar a criação de uma postagem", () =>{
        const user = userService.createUser("M.A");
        const post = postService.createPost(user.id, "post  1");
        
        expect(post.userId).toBe(user.id);
        expect(post.content).toBe("post  1");
        console.log(post);
    })
    it("Verificar se a postagem foi associada ao usuário", ()=>{
        const user = userService.createUser("SK");
        const post = postService.createPost(user.id, "post  sk");
        const postagem = postService.getPostByUserId(user.id);
        expect(postagem.length).toBe(1);
        expect(postagem[0].content).toBe("post  sk");
        console.log(post)
    })
})