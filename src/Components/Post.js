import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../contexts/Context";
import Content from "./Content";
import "./post.css";

const Post = () => {
  const { setSidebar, scrollDir, sidebar } = AppState();
  let { id } = useParams();
  // const [blogID, setBlogID] = useState();
  const [blogData, setBlogData] = useState();

  const getBlog = async () => {
    const api_url = `https://inotebookbackend.herokuapp.com/api/message/blog/${id}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogData(data[0].content);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div
      className={
        sidebar === true ? "post-section side-bar-open" : "post-section"
      }
      style={{
        marginTop: scrollDir === "scrolling down" ? "0px" : "75px",
        background: "#ffffff"
      }}
      onClick={() => {
        setSidebar(false);
      }}
    >
      {/* closing sidebar on clicking */}
      <div dangerouslySetInnerHTML={{ __html: blogData }} />
      {/* <Content/> */}
    </div>
  );
};

export default Post;
