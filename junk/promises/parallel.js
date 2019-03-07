let cleanRoom = () => {
    return new Promise((resolve, reject)=>{
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


Promise.all([cleanRoom(), removeGarbage("please "),winIcecream("you ")]).then(()=>{
    console.log('all finished');
})