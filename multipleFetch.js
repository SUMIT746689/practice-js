try{
    
    async function nam () {
    let [posts,users,postId]= await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    ])
    const post = await posts.json();
    const user = await users.json();
    const postI = await postId.json();
    console.log(post,user,postI)
    }
    nam();

    console.log(window.scroll);
}
catch(err)  {
console.log(err)
}