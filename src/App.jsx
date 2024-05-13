// import React from 'react';
// import Sidebar from './Sidebar';
// import QuizSub from './components/Quiz/CardsSub';

// function App() {
//     const quizzes = [
//         {
//             id: 1,
//             title: "Math",
//             description: "Chapters : 10",
//             imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg",
//             linkTo: "/quiz/math"
//         },
//         {
//             id: 2,
//             title: "Physics",
//             description: "Chapters : 10",
//             imageUrl: "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-4.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
//             linkTo: "/quiz/physics"
//         },
//         // Add more quizzes as needed
//     ];

//     return (
//         <div className="flex">
//             <Sidebar />
//             <div className="flex-1 flex flex-wrap gap-4 ml-72 mt-8 p-4">
//                 {quizzes.map(quiz => (
//                     <QuizSub
//                         key={quiz.id}
//                         title={quiz.title}
//                         description={quiz.description}
//                         imageUrl={quiz.imageUrl}
//                         linkTo={quiz.linkTo}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;



import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="w-72 ml-72 mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <Link to="/quiz/math">
                <img className="w-full h-50 object-cover" src="https://miro.medium.com/v2/resize:fit:1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg" alt="knm" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Math</div>
                    <p className="text-gray-700 text-base">
                      Chapters : 10
                    </p>
                </div>
                </Link>
            </div>
    );
};

export default App;
