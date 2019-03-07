let promiseToCleanRoom = new Promise((resolve, reject) => {
    let isClean = false;
    if(isClean){
        resolve("clean");
    }else{
        reject("not clean");
    }
})
promiseToCleanRoom.then((fromResolve)=>{
    console.log("the room is ", fromResolve)

}).catch((fromReject)=>{
    console.log("the room is ", fromReject)
})