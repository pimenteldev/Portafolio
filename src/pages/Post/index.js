import React,{useEffect} from 'react'
import Footer from "../../components/Footer";
import "./index.css";
import {blogData} from "../../data/data"
import {useParams, Link, Outlet} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import {GET_POST_BLOG_BY_ID, SET_POSTS_BLOG} from '../../actions/actionTypes'
import DOMPurify from "dompurify"
function index() {
  let {id} = useParams()
  const dispatch = useDispatch()

  const posts = useSelector((state) => {
    return state.portafolioReducer.post
  })

  useEffect(()=>{
    dispatch({
      type: SET_POSTS_BLOG,
      payload: blogData
    })

    dispatch({
      type: GET_POST_BLOG_BY_ID,
      payload: id
    })

  }, [dispatch])

  return (<>
    <div className="blog_content">
      <Link to="/blog" className='btn_back_job'> {'<--'} Back</Link> 
      
      {
        posts && posts.map((post, index) => <div key={index}>
          <figure className="blog-banner-box">
            <img src={window.location.origin+"/blog"+post.image} alt={post.title} loading="lazy" />
          </figure>
          <div className="blog_post_date">{post.date}</div>
          <div className="blog_post_title">{post.title}</div>
          <div className="blog_post_category">{post.categories && post.categories.map((category,index)=> <span key={index} className="blog-category-item">{category}</span>)}</div>
          <div className="blog_post_description">{post.description}</div>
          <div className="blog_post_body" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.body)}}></div>
          
        </div>)
      }
    </div>
    <Outlet />
    <Footer />
    </>
  );
}

export default index;
