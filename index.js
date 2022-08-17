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

    const findAnyName = async() => {
        const urls = [
            "https://jsonplaceholder.typicode.com/posts/1",
            "https://jsonplaceholder.typicode.com/users/1saf",
            "https://jsonplaceholder.typicode.com/comments?postId=1"
        ];
          try{
            let res = await Promise.all(urls.map(e => fetch(e)))
            let resJson = await Promise.all(res.map(e => e.json()))
            // resJson = resJson.map(e => e.results[0].name.first)
            console.log(resJson)
          }catch(err) {
            console.log(err.message)
          }
        }
        findAnyName()
}
catch(err)  {
console.log(err)
}