import React from 'react';
import './header.css';
import Typical from 'react-typical';

const Header = () =>{
    return (
        <>
            <header id="header-part">
                <div className="outer-div">
                    <div className="inner-div">
                        <p>Myself Munish Kumar Garg</p>
                    </div>
                    <Typical
                    steps={['Student', 1000, 'Developer', 1000, 'Programmer', 1000]}
                    loop={Infinity}
                    wrapper="div"/>
                </div>
            </header>
        </>
    );
}

export default Header;