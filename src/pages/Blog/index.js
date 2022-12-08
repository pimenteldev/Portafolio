import React from "react";
import Footer from "../../components/Footer";
import "./index.css";
import {blogData} from "../../data/data"
import Post from "../../components/Post"

function index() {
  
  return (<>
    <div className="blog_content">
      <ul className="blog-posts-list">
        {
          blogData && blogData.map(post=> {
            return <Post post={post} key={post.id} />
          })
        }
      </ul>
      
    </div>
    <Footer />
    </>
  );
}

export default index;
