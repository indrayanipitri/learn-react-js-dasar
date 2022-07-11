import React from "react";

function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.content.imageUrl} alt="cat" />
                <div className="card-body">
                    <h4>{props.content.title}</h4>
                    <small className='text-muted'>{props.content.date}</small>
                </div>
            </div>
        </>
    )
}

export default Card;