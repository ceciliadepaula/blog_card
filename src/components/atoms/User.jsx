import React from 'react';

function User({ userImage, userName }) {
    return (
        <div className='user'>
            <div className="circle-user">
                <img className='user-image' src={userImage} alt={userName} />
            </div>
            <p className='m-0 p-0 text-4'>{userName}</p>
        </div>
    );
}

export default User;