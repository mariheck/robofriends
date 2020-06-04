import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => (
    <main className="mt7 pa3">
        {robots.map(robot => (
            <Card key={robot.id} robot={robot} />
        ))}
    </main>
);

export default CardList;
