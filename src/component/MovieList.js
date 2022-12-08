import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList=()=>{
    const[Movie,setMovie]=useContext(MovieContext);
    return(
        <div>
            {Movie.map((Movie) =>(
                <Movie name={Movie.name} price={Movie.price} key={Movie.id}/>

           ))}
        </div>
    );
};
export default MovieList;
