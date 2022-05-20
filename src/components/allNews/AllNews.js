import { React, useState, useEffect } from "react";
import axios from "axios";
import { News } from "./News";

export const AllNews = () => {
  const [allnews, setAllnews] = useState([
    {title:"aaaa",
    text:"ccccc",
     author:"sssss",
     tags:"xcxcxc"}])
  const link = `http://localhost:5000`
  // useEffect(() => {
  //   getAllNews();
  // }, []);
  // const getAllNews = async () => {
  //   try {
  //     await axios.get(`${link}/news`).then((res) => {
  //       setAllnews(res.data);
  //     });
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // };
  return (
    <div>
      {allnews.map((element, index) => <News element={element} key={index} />
      )}
    </div>
  );
};
