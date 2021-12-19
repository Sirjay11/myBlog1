import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/10223873/pexels-photo-10223873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        consequuntur minima qui voluptatum, amet repellat quidem at obcaecati
        laborum temporibus, eaque cum ducimus porro ut, enim quisquam?
        Reprehenderit, possimus accusantium? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam consequuntur minima qui voluptatum,
        amet repellat quidem at obcaecati laborum temporibus, eaque cum ducimus
        porro ut, enim quisquam? Reprehenderit, possimus accusantium?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ullam consequuntur minima
        qui voluptatum, amet repellat quidem at obcaecati laborum temporibus,
        eaque cum ducimus porro ut, enim quisquam? Reprehenderit, possimus
        accusantium?
      </p>
    </div>
  );
}
