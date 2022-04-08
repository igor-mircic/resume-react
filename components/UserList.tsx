import React from 'react';

const toggleMenu = () => {
    document.querySelector('.menu')?.classList.toggle('show');
};

interface Iprops {
    name: string;
    func: any;
}

const UserList = ({ name, func }: Iprops) => {
    return (
        <div className="container dropdown">
            <button onClick={toggleMenu}>Users</button>
            <div className="container menu">
                <p onClick={func} data-value="saitama">
                    Saitama
                </p>
                <p onClick={func} data-value="mladen">
                    Mladen Stankovic
                </p>
                {/* <p onClick={func()}>Igor Mircic</p> */}
            </div>
            <style jsx>
                {`
                    .dropdown {
                        position: fixed;
                        background-color: white;
                        color: var(--main-gray-font);
                        left: 3%;
                        top: 3%;
                        width: 100px;
                        height: 50px;
                        text-align: center;
                        cursor: pointer;
                        border-radius: 15px;
                        z-index: 1;
                    }
                    .menu {
                        display: none;
                        position: fixed;
                        border-radius: 15px;
                        left: 3%;
                        top: 8%;
                        overflow: auto;
                        z-index: 2;
                        line-height: 25px;
                        padding-top: 20px;
                    }
                    .show {
                        display: block;
                    }
                `}
            </style>
        </div>
    );
};

export default UserList;
