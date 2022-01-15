import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    /*if (true) {
        throw new Error('Noooo');
    }*/
    return (
        <React.StrictMode>
        {
            robots.map((user, index) => {
            return (
                <Card 
                key={index} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}/>);
            })
        }
      </React.StrictMode>
    )
}

export default CardList;