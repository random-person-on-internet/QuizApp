import React from 'react';
import TopicCards from "./TopicCards";

const Topics = () =>{
  console.log("Topics is rendering");

  const quizzes = [
    { name: "quiz-1", difficulty: "Easy" },
    { name: "quiz-2", difficulty: "Medium" },
    { name: "quiz-3", difficulty: "Hard" },
    { name: "quiz-4", difficulty: "Hard" }
  ];

  return (
    <div className="p-4">
      <TopicCards topic="Binomial Theorem" quizzes={quizzes} />
    </div>
  );
}

export default Topics;

