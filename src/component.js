import React from "react";

export default class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Comments:0,
        }
    }
    handleClick=()=>{
        this.setState({
            Comments:this.state.Comments+1
        })
    }

    render(){
        return(
            
            <div>
                {this.state.Comments}<br/>
                <button onClick={this.handleClick}>Add Comments</button>
            </div>
        )
    }
}