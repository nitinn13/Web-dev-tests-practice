// import React, { useContext } from 'react';


// const ChildB = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleClick = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={theme === 'light' ? 'text-black' : 'text-white'}>
//       <button
//         onClick={handleClick}
//         className="bg-red-500 p-5 m-5 border-2 border-black rounded-lg"
//       >
//         Change theme
//       </button>
//       <h1>Theme is: {theme}</h1>
//     </div>
//   );
// };

// export default ChildB;
import React, { useContext } from 'react'; // Added useContext import
import { ThemeContext } from '../App'; // Import ThemeContext from App

const ChildB = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Moved useContext inside the component

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Simplified conditional logic
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        className="bg-red-500 p-5 m-5 border-2 border-black rounded-lg"
      >
        Change theme
      </button>
      <h1>Theme is: {theme}</h1>
    </div>
  );
};

export default ChildB;
  