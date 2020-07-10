import React from 'react';

const Mentions = ({ displayMentions }) => (
    <main className="center mt7 pa4 tl w-80 ">
        <div
            className="tr light-green link dim pointer"
            onClick={() => displayMentions(false)}
        >
            <i className="big x icon"></i>
        </div>

        <h2 className="mentions-title">Website presentation</h2>
        <h4 className="washed-green mb0">Owner and creator :</h4>
        <p className="washed-green">
            Marine Heckler, Web Developer - Toulouse, France
        </p>
        <h4 className="washed-green mb0">Host :</h4>
        <p className="washed-green">
            GitHub - 88 Colin P Kelly Jr St, San Francisco, CA 94107, United
            States
        </p>

        <h2 className="mentions-title mt5">Intellectual property</h2>
        <p className="washed-green lh-copy">
            This website was developed for educational and training purposes. It
            is inspired by Andrei Neagoie’s React tutorial, from his course «The
            Complete Web Developer in 2020 : Zero to Mastery ». The source code,
            available on GitHub, is free to use. 
        </p>
    </main>
);

export default Mentions;
