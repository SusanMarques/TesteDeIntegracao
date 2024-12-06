class PostService{
    constructor(database){
        this.database = database;
    }
    createPost(userId, content){
        const postId = Date.now();
        const post = {id:postId, userId, content}
        this.database.posts.push(post);
        return post;
    };
    getPostByUserId(userId){
        return this.database.posts.filter(post => post.userId === userId);
    }
}

export default PostService;