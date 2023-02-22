const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"), 3000)
    })
    let ticket = await promiseWifeBringingTicket;
    const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"))
    console.log(`wife : i have ${ticket}`);
    console.log("husband : should we go in");
    console.log("wife : no I am hungry");
    let popcorn = await getPopcorn;
    console.log(`husband :i got the ${popcorn}`);
    console.log("husband :should we go in");
    console.log("wife : no i need butter on my popcorn")
    const getButter = new Promise((resolve, reject) => resolve("butter"));
    let butter = await getButter;
    console.log(`husband : i got the ${butter}`);
    console.log("husband: anything elase darling?");
    console.log("wife : should we get something to drink?");
    console.log("husband:sure darling!");
    let getColdDrink = new Promise((resolve, reject) => resolve("coldDrink"));
    let coldDrink = await getColdDrink;
    console.log(`husband : this is your ${coldDrink}`)
    console.log("wife : lets go we are getting late");
    console.log("husband: thank you for the reminder")
    return ticket;
}
preMovie().then((t) => console.log(`person3 : show ${t}`))