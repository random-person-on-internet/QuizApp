import React, { useState } from 'react';

const TopicCards = ({ topic, quizzes }) => {
    const [isHovered, setIsHovered] = useState(false);

    return ( 
            <div 
                className="relative w-72 border border-gray-300 rounded-lg p-5 mb-5 cursor-pointer bg-white shadow hover:shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="quiz-info">
                    <h2 className="text-lg font-bold">{topic}</h2>
                    <p className="text-gray-600">{quizzes.length} Quizzes Available</p>
                </div>
                {isHovered && (
                    <div className="quiz-dropdown absolute w-full bg-white border-t-0 rounded-b-lg shadow-lg z-10">
                        {quizzes.map((quiz, index) => (
                            <div key={index} className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                {quiz.name} <span className={`font-semibold ${quiz.difficulty === "Easy" ? "text-green-500" : quiz.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"}`}>
                                    {quiz.difficulty}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    );
};

export default TopicCards;