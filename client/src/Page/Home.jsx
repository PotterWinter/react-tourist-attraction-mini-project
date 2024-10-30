import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export function Home() {

    // import form Head
    const [isTyping, setIsTyping] = useState(true);

    const handleFocus = () => {
      setIsTyping(false); 
    };
  
    const handleBlur = (e) => {
      if (e.target.value === '') {
        setIsTyping(true); 
      }
    };
  
    // state สำหรับส่งค่าเข้าไปค้นหาใน endpoint
    const [inputValue,setInputValue] = useState("")
    const typing = (e) => {
      setInputValue(e.target.value)
    }

  // state สำหรับรับข้อมูลจาก server
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    try {
      const postFormServer = await axios.get(
        `http://localhost:4001/trips?keywords=${inputValue}`
      );
      console.log(postFormServer.data.data);
      setPostData(postFormServer.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  // สำหรับสร้างตัวแปรมากำหนดจำนวนตัวอักษร
  const [isShow, setIsShow] = useState(false);
  const handleToggle = () => {
    setIsShow(!isShow);
  };

  // const and = "และ";

  // state สำหรับเก็บสถานะการเปิด/ปิดอ่านต่อของแต่ละโพสต์

  // const [showMore, setShowMore] = useState({});
  // const handleToggleIndex = (index) => {
  //   setShowMore((prevState) => ({
  //     ...prevState, // คัดลอกค่าเดิม
  //     [index]: !prevState[index], // สลับสถานะเฉพาะโพสต์ที่กำลังคลิก
  //   }));
  // };


  return (
    <>
    {/* import form Head */}
    <div>
        <h1 className="flex justify-center text-sky-500 text-6xl my-10">
          เที่ยวไหนดี
        </h1>
        
        <div className="flex flex-col justify-center px-32 outline-none mb-10">
        <p>ค้นหาที่เที่ยว</p>
          <input
            type="text"
            placeholder={isTyping ? 'หาที่เที่ยวแล้วไปกัน ...' : ''}
            className="px-10 text-center rounded-sm py-2 border-b-2 border-gray-300 border-solid"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={typing}
          />
        </div>
      </div>
      {/* กล่องใหญ่สำหรับเรียงลำดับของ Post เป็นแนวตั้ง */}
      <div className=" flex flex-col items-center gap-10 mb-20">
        {/* กล่องภายในแต่ละ Post ที่ให้เรียงเนื้อหาเป็นแนวนอน */}
        {postData.map((postData, index) => (
          <div
            key={postData.eid}
            className=" w-full px-10 flex flex-row justify-center gap-10  "
          >
            {/* รูปภาพปกแต่ละ post */}
            <div className="w-96 h-64">
              <img
                src={postData.photos[0]}
                alt="Loading..."
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* กล่องรองสำหรับเรียงคำอธิบายภายในเป็นแนวตั้ง */}
            <div className="w-2/4 h-64 flex flex-col justify-between py-3">
              {/* หัวข้อสำหรับแต่ละ Post */}

              <h1 className="text-2xl">{postData.title}</h1>
              {/* เนื้อหาที่กำหนดจำนวนเอาไว้เพื่อ state ให้อ่านต่อ */}
              <div className="text-gray-500 text-sm">
                {isShow
                  ? `${postData.description.slice(0, 100)} `
                  : `${postData.description} `}
                <button
                  onClick={handleToggle}
                  className="text-blue-500 underline"
                >
                  {isShow ? " " + "อ่านต่อ" : "อ่านน้อยลง"}
                </button>
              </div>
              {/* type อธิบายสำหรับประเภทของหมวดในการท่องเที่ยว */}
              <div className="text-gray-500 text-sm">
                <p>
                  หมวด {}
                  {postData.tags.map((tag, index) => (
                    <span key={index}>
                      {index !== postData.tags.length - 1 ? (
                        <span className="underline mr-2">{tag}</span>
                      ) : (
                        <>
                          และ <span className="underline">{tag}</span>
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
              {/* สำหรับใส่รูปภาพเพิ่มเติมในส่วนของแนวนอน */}
              <div className="flex flex-row gap-6 h-24">
                {postData.photos.slice(1).map((photo, index) => (
                  <div key={index}>
                    {isShow ? (
                      <div className=" w-24 h-full ">
                        {" "}
                        <img
                          src={photo}
                          alt="Loading..."
                          className=" w-full h-full object-cover rounded-xl"
                        />{" "}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
