import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <main className="mt7 pa3">
            {robots.map(robot => (
                <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                />
            ))}
        </main>
    );
};

export default CardList;
