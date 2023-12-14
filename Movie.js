class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    showResult (){
        console.log(`${this.title}, ${this.studio}, ${this.rating}`)
    }
   getPG(movies)
   {
    let resultArray = [];
    for(movie of movies) {
        if(movie.rating == "PG") {
            resultArray.push(movie);
        }
    }
    return resultArray;
   }
}
let movie=new Movie("Casino Royale","Eon Productions","PG13")
movie.showResult()
let arr = [];
arr.push(movie)
console.log(movie.getPG(arr));

