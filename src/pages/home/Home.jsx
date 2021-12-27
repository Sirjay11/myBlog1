import React from "react";
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import "./home.css";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import {useLocation} from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      console.log(res)
      setPosts(res.data)
    };
    fetchPosts()
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}