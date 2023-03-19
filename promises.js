const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovie = (id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const movie = movies.find((movie)=>movie.id===id);
            if(movie){
                resolve(movie);
            }else{
                reject('Not Found');
            }
        }, 1000);
        });
    }

const getreview = (id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
        const review = reviews.find((review)=>review.movie_id==id);
        if(review){
            resolve(review);
        }else{
            reject('Not Found');
          }
        },1000);
    });
}

const getuser = (name)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const user = users.find((user)=>user.name===name);
            if(user){
                resolve(user);
            }else{
                reject("Not Found");
            }
        },1000);
    });
}

getMovie(1)
.then(movie=>{
   return getreview(movie.id);
})
// .then(review=>{
//     return getuser(review.reviewer);
// })
.then(user=>{
    console.log(user);
})
.catch(err=>{
    console.log(err);
})



// getuser()