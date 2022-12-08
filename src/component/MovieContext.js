import React,{createContext, useState} from "react";
export const MovieContext = createContext();

export const MovieProvider =(props)=>{
    const[Movie,setMovie]= useState([
        {
            name:"Thunivu",
            price:"Rs.300",
            id:"001",
        },
        {
            name:"varisu",
            price:"Rs.250",
            id:"002",
        },
        {
            name:"Kgf 3",
            price:"Rs.500",
            id:"003",
        }
        
    ]);
    return(
        <MovieContext.Provider value={[Movie,setMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
};
export default MovieContext;