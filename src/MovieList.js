import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state={
            movies:[
                {
                    title:"The Avengers",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team",
            price:"Rs.199",
            rating:8.9,
            stars:0,
            fav:false,
            cart:false
            },{
                title:"The Hulk",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team",
            price:"Rs.199",
            rating:8.9,
            stars:0,
            fav:false,
            cart:false
            },{
                title:"The Age of Ultron",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team",
            price:"Rs.199",
            rating:8.9,
            stars:0,
            fav:false,
            cart:false
            }
            ]
        }
    }

    handleIncStars=(movie)=>{
        const {movies}=this.state;
        const mId=movies.indexOf(movie);

        if(movies[mId].stars>=5){
            return;
        }
        movies[mId].stars+=0.5;

        this.setState({
            movies:movies
        })
    }

    render(){
        // const{title,plot,price,rating,stars,fav,cart}=this.state;
        const {movies}=this.state;
        return(
           <>
           {movies.map((movie)=> <MovieCard movies={movie} addStar={this.handleIncStars}/>)}
           
           </>
        )

        }
}

export default MovieList;