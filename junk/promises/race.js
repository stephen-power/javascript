let cleanRoom = () => {
    return new Promise((resolve, reject)=>{
        for(i=0;i<100;i++){ // this is blocking so other promise dont get a chance to resolve
            console.log(i)
        }
        console.log("cleaned the room");
        resolve("cleaned the room");
    });
}

let removeGarbage = (message) =>{
    return new Promise((resolve, reject)=>{
        console.log(message +' remove garbage');
        resolve(message +' remove garbage');
    });
}

let winIcecream = (message) =>{
    return new Promise ((resolve, reject) =>{
        console.log (message + ' won icecream');
        resolve (message + ' won icecream');
    });
}

// this does not seem to work ?
Promise.race([cleanRoom(), removeGarbage("please "),winIcecream("you ")])
.then((result)=>{
    console.log('they all finish but the first one will retuen the result');
    console.log(result);
})