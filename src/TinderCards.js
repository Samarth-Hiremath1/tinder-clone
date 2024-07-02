import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg'
        },
    ]);

    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person, index) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
