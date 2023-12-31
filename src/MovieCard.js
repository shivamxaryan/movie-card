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

   
//we have to put addStar in movieList because it has state now.
    // addStar=()=>{

    //     //form1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // });


    //     //form2
    //     if(this.state.stars>=5){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             stars:prevState.stars+0.5
    //         }
    //     });
        
    //     console.log(this);
    // }


    decStar=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars:prevState.stars-0.5
            }
        });
    }

    //handle favourite button
    handlefav=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }


    //handle cart button
    handleCart=()=>{
        this.setState({
            cart:!this.state.cart
        })
    }


    render(){
        const{title,plot,price,rating,stars,fav,cart}=this.props.movies;

        return(
            <div className="main">

                <div className="movie-card">

                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    
                 
                    <div className="right">
                    <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">8.5</div>

                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"  onClick={this.decStar}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={()=>{this.props.addStar(this.props.movies)}}
                                />
                                <span className="starCount">{stars}</span>
                            </div>

                        
                            {fav? <button className="unfavourite-btn" onClick={this.handlefav}>Un-favourite</button>:
                            <button className="favourite-btn" onClick={this.handlefav}>Favourite</button>}



                            {/* {this.state.cart?<button className="decart-btn" onClick={this.handleCart}>Remove from Cart</button>:
                            <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>} */}

                            <button className={cart?"decart-btn":"cart-btn"} onClick={this.handleCart}>
                            {cart?"Remove from Cart":"Add to Cart"}</button>
                            

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;