const user = [["POST1"], { "lastupdateTime": "1676927406240" }];


function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user[user.length - 1].lastupdateTime = new Date().getTime();
            resolve(user[user.length - 1].lastupdateTime)
        }, 1000)
    })
}

function createPost(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user[0].push(obj);
            console.log(`Before creating post ${user[0].length}, user lastActivityTime =`, user[1].lastupdateTime)
            resolve(user[0])
        }, 1000)
    })
}
function getPost() {
    console.log(user[0])
}

Promise.all([createPost("POST3"), updateLastUserActivityTime()]).then(([v1, v2]) => {
    console.log(`After creating post ${user[0].length},`);
    getPost();
    console.log("user lastActivityTime =", v2)
})


Promise.all([createPost("POST4"), updateLastUserActivityTime()]).then(([v1, v2]) => {
    console.log(`After creating post ${user[0].length},`);
    getPost();
    console.log("user lastActivityTime =", v2)
})

