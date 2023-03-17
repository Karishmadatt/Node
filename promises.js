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

const getreview = (id,cb)=>{
    setTimeout(()=>{
    const review = reviews.find((review)=>review.movie_id==id);
    cb(review);
    },1000);
}

const getuser = (name,cb)=>{
    setTimeout(()=>{
        const user = users.find((user)=>user.name===name);
        cb(user)
    },1000);
}

getMovie(1)
.then(movie=>{
    console.log(movie);
})
.catch(err=>{
    console.log(err);
})