let cleanRoom = () => {
    return new Promise((resolve, reject)=>{
        resolve("cleaned the room");
    });
}

let removeGarbage = (message) =>{
    return new Promise((resolve, reject)=>{
        resolve(message +' remove garbage');
    });
}

let winIcecream = (message) =>{
    return new Promise ((resolve, reject) =>{
        resolve (message + ' won icecream');
    });
}

cleanRoom().then((result)=>{
    return removeGarbage(result);
}).then((result)=>{
    return winIcecream(result);
}).then((result)=>{
  console.log(result + ' finished')  
})