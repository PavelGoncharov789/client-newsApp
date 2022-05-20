import { React, useState, useEffect } from "react";
import axios from "axios";
import { News } from "./News";

export const AllNews = () => {
  const [allnews, setAllnews] = useState([])
  const link = `http://localhost:5000`
  useEffect(async () => {
    try {
      await axios.get(`${link}`).then((res) => {
      console.log(res.data);
      });
    } catch (e) {
      alert(e.message);
    }
  }, []);

  return (
    <div>
      {allnews.map((element, index) => <News element={element} key={index} />
      )}
    </div>
  );
};
