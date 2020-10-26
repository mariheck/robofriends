import React from 'react';

const Footer = ({ displayMentions }) => (
    <footer className="pa3 fw1 f6">
        <a
            href="https://github.com/mariheck/robofriends"
            className="light-green link dim mr2"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="github icon"></i>Source Code
        </a>
        <span
            className="light-green link dim ml2 pointer"
            onClick={() => displayMentions(true)}
        >
            <i className="file alternate icon"></i>Legal
        </span>
    </footer>
);

export default Footer;
