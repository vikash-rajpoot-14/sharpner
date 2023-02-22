

//========== User's Code Starts Here ==========
const posts = [{ title: 'POST1' }, { title: 'POST2' }];

//Do not touch this function below
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

//Do not touch this function below
async function create3rdPost() {
    let post = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve()
        }, 3000)
    })
}
//Do not touch this function below
async function create4thPost() {
    let post = await new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            resolve();
        }, 2000)
    })
}

//Complete this function such that it returns a Promise
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method
async function deletePost() {
    //complete this function
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve()
        }, 1000)
    })
    return data;
}
console.log(posts)
deletePost();
console.log(posts)
//make the following sequence work properly
// create3rdPost().then(() => deletePost().then(() => create4thPost().then(() => printPost())))
