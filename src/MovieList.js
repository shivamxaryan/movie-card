import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team",
            price:"Rs.199",
            rating:8.9,
            stars:0,
            fav:false,
            cart:false
        }
    }

    render(){
        const{title,plot,price,rating,stars,fav,cart}=this.state;
        return(
           <>
           <MovieCard movies={this.state}/>
           </>
        )

        }
}

export default MovieList;