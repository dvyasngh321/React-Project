import React from 'react';

function Card(props){
        
        
    return(    
           <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                 <span className="card-title">{props.title}</span>
                 <p>{props.content}</p>

                 <button type="button" className="btn right" onClick={() => {
                     props.deleteItem (props.id) }
                    }>Delete</button>
             </div>
            </div> 
    )
}

export default Card;

 