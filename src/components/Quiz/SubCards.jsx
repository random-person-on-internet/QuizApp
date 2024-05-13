import React from 'react';
import { Link } from 'react-router-dom';

const SubCards = ({ title, description, imageUrl, linkTo }) => {
    return (
            <div className="w-72 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-50 object-cover" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
            </div>
    );
};

export default SubCards;
