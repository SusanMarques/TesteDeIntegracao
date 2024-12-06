class UserService{
    constructor(database){
        this.database = database;
    };

    createUser(name){
        // Cria um id único usando o timestamp
        const id = Date.now()
        const user = {id, name};
        this.database.users.push(user);
        return user;
    }
    getUserbyId(id){
        // o find é o método para procurar
        return this.database.users.find(user => user.id === id);
    }
}

export default UserService;