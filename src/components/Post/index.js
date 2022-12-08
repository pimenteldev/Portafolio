import React from "react";
import "./index.css";
import {Link, Outlet} from 'react-router-dom'

function index (props) {
  const {post} = props
  return (<>
    <li className="blog-post-item">
      <Link to={"/blog/"+post.id} className="post_a">
        <figure className="blog-banner-box">
          <img src={window.location.href+post.image} alt={post.title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{post.categories && post.categories.map((category,index)=> <span key={index} className="blog-category-item">{category}</span>)}</p>
            <span className="dot"></span>
            <time>{post.date}</time>
          </div>
          <h3 className="h3 blog-item-title">{post.title}</h3>
          <p className="blog-text">
            {post.description}
          </p>
        </div>
      </Link>
    </li>
    <Outlet />
  </>);
}

export default index;
