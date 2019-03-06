var asyncAdd = (a,b) =>{
    return new Promise((reject, resolve) =>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                console.log("about to resolve")
                resolve(a + b);
            }else{
                console.log("about to reject")
                reject('arguments must be numbers');
            }
        }, 500);
    });
}
asyncAdd(5,7).then((res) => {
    console.log("result:", res);
},(errorMessage) => {
    console.log("Error:",errorMessage );   //why does this execute instead of result ?
}
);

