import React from 'react';

const toggleMenu = () => {
    document.querySelector('.menu')?.classList.toggle('show');
};

interface Iprops {
    onClick: any;
}

// const changeUser = (e: Event, props: Iprops) => {
//     return props.onClick((e.target as HTMLElement)?.dataset?.value);
// };

const UserList = ({ onClick }: Iprops) => {
    return (
        <div className="container dropdown">
            <button onClick={toggleMenu}>Users</button>
            <div className="container menu">
                <p
                    onClick={(e) =>
                        onClick((e.target as HTMLElement)?.dataset?.value)
                    }
                    data-value="saitama"
                >
                    Saitama
                </p>
                <p
                    onClick={(e) =>
                        onClick((e.target as HTMLElement)?.dataset?.value)
                    }
                    data-value="mladen"
                >
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
