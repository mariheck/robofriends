import React from 'react';

const Header = ({ children }) => {
    return (
        <header className="Header fixed top-0 left-0 h5 w-100 z-2 shadow-5">
            {children}
        </header>
    );
};

export default Header;
