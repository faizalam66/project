import React from "react";

function List() {
    const details=[
        {
        id:1,
        name:'Faiz',
        roll:'23'
    },
    {
        id:2,
        name:'Alam',
        roll:'24'
    },
   
];
    return(
   <div className="body">
    <h1>welcome you all</h1>
   {details.map(data =>
        (
        <div key={data.id}>
            
       <h2> <p>My name is {data.name}</p></h2>
       <h4> <p> my roll no is {data.roll}</p></h4>
        </div>))
  } 
   </div>
  )
}
  export default List;
