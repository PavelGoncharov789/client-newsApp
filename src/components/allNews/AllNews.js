import { React, useState, useEffect } from "react";
import axios from "axios";
import { News } from "../news/News";
import "./AllNews.css"

export const AllNews = () => {
  const [allnews, setAllnews] = useState([])
  const link = `http://localhost:5000`

  const getAllNews = async () => {
    try {
      await axios.get(`${link}`).then((res) => {
        setAllnews(res.data.data);
      });
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="allNews">
      {allnews.map((element, index) => <News element={element} key={index} />
      )}
    </div>
  );
};
