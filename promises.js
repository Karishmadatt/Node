const check = false;

const promise = new Promise((resolve,reject)=>{
    if(check){
        resolve('Done');
    }else{
        reject('Undone');
    }
})

promise.then((res)=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})