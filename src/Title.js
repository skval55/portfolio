import React, { useEffect, useState } from "react";

const titles = [
  [..." am a software engineer"],
  [..."  like building sites"],
  [..."  am a web developer"],
  [..."  love coding!"],
];

const Title = () => {
  const [arrIndex, setArrIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [runInterval, setRunInterval] = useState(true);

  useEffect(() => {
    if (runInterval) {
      const typingInterval = setTimeout(() => {
        if (!deleting) {
          setCurrentIndex((currentIndex) => currentIndex + 1);
          console.log(current, currentIndex);
          setCurrent((current) => current + titles[arrIndex][currentIndex]);
        } else {
          if (currentIndex === 0) {
            setArrIndex(arrIndex + 1);
            setDeleting(false);
            setCurrent("");
            setCurrentIndex(2);
          }
          setCurrentIndex((currentIndex) => currentIndex - 1);
          setCurrent((current) => current.substring(0, currentIndex));
        }

        if (arrIndex === 3 && titles[arrIndex].length === currentIndex + 1) {
          setRunInterval(false);
        } else if (titles[arrIndex].length === currentIndex + 1) {
          setDeleting(true);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }

    // Clean up the interval when the component unmounts
  }, [currentIndex]);

  return <div>I{current}</div>;
};

export default Title;
// import React, { useEffect, useState } from "react";

// const titles = [
//   [..."am a software engineer"],
//   [..."like building sites"],
//   [..."am a web developer"],
//   [..."love coding!"],
// ];

// const Title = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [current, setCurrent] = useState("");

//   useEffect(() => {
//     // Use a single interval to iterate through all titles
//     const typingInterval = setInterval(() => {
//       // Check if we have completed typing the current title
//       if (currentIndex === titles[currentIndex].length) {
//         // Check if there are more titles to display
//         if (currentIndex < titles.length - 1) {
//           setCurrentIndex((prevIndex) => prevIndex + 1);
//           setCurrent(""); // Clear the current content for the next title
//         } else {
//           // If all titles are displayed, clear the interval
//           clearInterval(typingInterval);
//         }
//       } else {
//         setCurrent(
//           (prevCurrent) => prevCurrent + titles[currentIndex][currentIndex]
//         );
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       }
//     }, 400);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(typingInterval);
//   }, [currentIndex]);

//   return <div>I{current}</div>;
// };

// export default Title;
