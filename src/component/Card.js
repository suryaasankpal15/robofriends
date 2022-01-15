import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div style={{ margin: '7px'}} className="bg-light-green dib br3 pa3 na2 grow">
            
            <img alt="robots" src={`https://robohash.org/${id}200x20`}/>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;