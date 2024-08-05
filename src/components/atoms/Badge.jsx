import React from 'react';

function Badge({ text }) {
    return (
        <div className='badge'>
            <p className='m-0 text-4'>{text}</p>
        </div>
    );
}

export default Badge;