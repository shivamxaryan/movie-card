// import React from "react";

// class MovieCard extends React.Component{
//     render(){
//         return(
//             <div className="main">
//                 <div className="movie card">
//                     <div className="left">
                        
//                     </div>
//                     <div className="right">
                        // <div className="title">The Aveger</div>
                        // <div className="plot">Super Power shown in this movie</div>
                        // <div className="price">Rs.299</div>

//                         <div className="footer">
//                             <div className="rating">8.5</div>

//                             {/**Star image with increase and decrease buttons and star count */}
//                             <div className="star-dis">
//                                 <img className="str-btn" 
//                                     alt="Decrease" 
//                                     src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
//                                 />
//                                 <img className="stars" 
//                                         alt="stars" 
//                                         src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
//                                 />
//                                 <img className="str-btn" 
//                                     alt="increase" 
//                                     src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
//                                 />
//                                 <span className="starCount">0</span>
//                             </div>

//                             {/**Favourite and add to cart buttons */}
//                             <button className="favourite-btn">Favourite</button>
//                             <button className="cart-btn">Add to Cart</button>
                            
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }


// export default MovieCard;


import React from "react";

class MovieCard extends React.Component{

    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
            price:"Rs.199",
            rating:8.9,
            stars:0
        }
    }

    addStar=()=>{

        //form1
        // this.setState({
        //     stars: this.state.stars + 0.5
        // });

        //form2
        this.setState((prevState)=>{
            return{
                stars:prevState.stars+0.5
            }
        });
        
        console.log(this);
    }

    render(){

          
        return(
            <div className="main">

                <div className="movie-card">

                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    
                 
                    <div className="right">
                    <div className="title">{this.state.title}</div>
                        <div className="plot">{this.state.plot}</div>
                        <div className="price">{this.state.price}</div>

                        <div className="footer">
                            <div className="rating">8.5</div>

                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={this.addStar.bind(this)}
                                />
                                <span className="starCount">{this.state.stars}</span>
                            </div>

                        
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;