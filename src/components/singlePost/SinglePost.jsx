import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>James Alexander</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          reiciendis esse, quam odit consectetur, expedita dolores adipisci
          delectus velit, sapiente mollitia sequi? Ut exercitationem natus,
          laudantium minus reprehenderit deserunt Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus reiciendis esse, quam odit
          consectetur, expedita dolores adipisci delectus velit, sapiente
          mollitia sequi? Ut exercitationem natus, laudantium minus
          reprehenderit deseruntLorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus reiciendis esse, quam odit consectetur,
          expedita dolores adipisci delectus velit, sapiente mollitia sequi? Ut
          exercitationem natus, laudantium minus reprehenderit deseruntLorem
          ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          reiciendis esse, quam odit consectetur, expedita dolores adipisci
          delectus velit, sapiente mollitia sequi? Ut exercitationem natus,
          laudantium minus reprehenderit deseruntLorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus reiciendis esse, quam odit
          consectetur, expedita dolores adipisci delectus velit, sapiente
          mollitia sequi? Ut exercitationem natus, laudantium minus
          reprehenderit deserunt
        </p>
      </div>
    </div>
  );
}
