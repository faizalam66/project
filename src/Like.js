import React from "react";
import Hoc from "./Hoc";

 class Likes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0,
        }
    }
    handleClick=()=>{
        this.setState({
            likes:this.state.likes+1
        })
    }

    render(){
        return(
            
            <div className="hlo">
                {this.state.likes}<br/>
                <button onClick={this.handleClick}>Add Likes</button>
            </div>
        )
    }
}
const EnhancedLikes=Hoc(Likes);

export default EnhancedLikes;