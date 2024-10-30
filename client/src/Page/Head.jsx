// import React, { useState } from "react";

// export function HeadSection(props) {

//   const [isTyping, setIsTyping] = useState(true);

//   const handleFocus = () => {
//     setIsTyping(false); 
//   };

//   const handleBlur = (e) => {
//     if (e.target.value === '') {
//       setIsTyping(true); 
//     }
//   };

//   // state สำหรับส่งค่าเข้าไปค้นหาใน endpoint
//   const [inputValue,setInputValue] = useState("")
//   const typing = (e) => {
//     setInputValue(e.target.value)
//   }

//   const input = inputValue

//   return (
//     <>
//       <div className="bg-black">
//         <h1 className="flex justify-center text-sky-500 text-6xl my-10">
//           เที่ยวไหนดี
//         </h1>
        
//         <div className="flex flex-col justify-center px-32 outline-none mb-10">
//         <p>ค้นหาที่เที่ยว</p>
//           <input
//             type="text"
//             placeholder={isTyping ? 'หาที่เที่ยวแล้วไปกัน ...' : ''}
//             className="px-10 text-center rounded-sm py-2 border-b-2 border-gray-300 border-solid"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             onChange={typing}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
