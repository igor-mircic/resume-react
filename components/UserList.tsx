import React from 'react';

const toggleMenu = () => {
    document.querySelector('.menu')?.classList.toggle('show');
};

const changeUser = () => {};

interface Iprops {
    name: string;
}

const UserList = (props: Iprops) => {
    return (
        <div className="dropdown">
            <button onClick={toggleMenu}>{props.name}</button>
            <div className="menu">
                <p onClick={changeUser}>Saitama</p>
                <p onClick={changeUser}>Mladen Stankovic</p>
                <p onClick={changeUser}>Igor Mircic</p>
            </div>
        </div>
    );
};

export default UserList;
