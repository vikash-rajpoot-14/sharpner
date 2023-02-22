const post = [];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        const updateLastUserActivityTime = Date.now()
        console.log(updateLastUserActivityTime)
        resolve();

    })
}

function createPost(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push({ "post": obj.title, "body": obj.body })
            resolve(post);
        }, 1000)
    })
}
function printPost() {
    post.forEach(post => {
        console.log(post)
    });
    updateLastUserActivityTime().then(() => {
        console.log(`After creating post ${post.length}, user lastActivityTime = `, post[post.length - 1])
    })
}
// createPost().then((time) => { console.log(`Before creating post ${post.length}, user lastActivityTime = `, time); printPost() })
// createPost().then(() => { console.log(`Before creating post ${post.length}, user lastActivityTime = `); printPost() })
Promise.all([createPost({ title: 'Post Five', body: 'This is Post Five' }), updateLastUserActivityTime()]).then((val) => console.log(val))
// printPost()
updateLastUserActivityTime();