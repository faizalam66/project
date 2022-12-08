import React,{usestate,useContext} from "react";
import { MovieContext } from "./MovieContext";

const AddMovie=()=>{
    const[Movie,setMovie]=useContext(MovieContext);

    const[name,setName]=usestate("");
    const[price,setPrice]=usestate("");

    const updateName=(e)=>{
        setName(e.target.value);
    };
    const updatePrice=(e)=>{
        setPrice(e.target.value);
    };

    const AddMovie=(e)=>{
        e.preventDefault();
        setMovie((prevMovie)=>[...prevMovie,{name:name},{price:price}]);
    };
    return(
        <form onSubmit={AddMovie}>
            <input type="text" name="name" onChange={updateName}/><br/>
            <input type="text" name="price" onChange={updatePrice}/><br/>
            <button>Submit</button>
        </form>
    );

};
export default AddMovie;