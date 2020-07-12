import React, {useState} from 'react';
import Card from './Card';

function Form(){
    const [titleText , setTitleText] = useState({
        title : "",
        content : ""
    });
    const [items, setItem] = useState([]);
    
    function handleChange(event){
        const {name , value} = event.target;
        setTitleText(prevValue => {
            return {
                ...prevValue, 
                [name] : value
            }
        })
    }

    function handleClick(){
        setItem(prevItem => {
            return [...prevItem , titleText];
        });

        setTitleText({
            title : "",
            content : ""
        })
    }

    function deleteItem(id){
        setItem(prevItem => {
            return prevItem.filter((item, index)=> {
                return index !== id;
            })
        })
    }

    return(
        <div>
        <div className="container">
        <div className="row">
            <form className="col s12 form">
               <div className="row">
                  <div className="input-field col s12">
                     <input onChange={handleChange} type="text" placeholder="Title" name="title" className="validate" value={titleText.title} />
                     <input onChange={handleChange} type="text" placeholder="Content" name="content" className="validate" value={titleText.content} />
                     <button className="btn" type="button" onClick={handleClick}>+</button>
                   </div>
               </div>
           </form>
        </div>
        </div>
        <div className="container">
           <div className="row">
            {items.map((item, index) =>
            <div className="col s12 m4">
               <Card  key={index} id={index} title= {item.title} content ={item.content} deleteItem={deleteItem}/> 
            </div>
           )}
           </div>
        </div>   
        </div>
        
    )
}

export default Form;