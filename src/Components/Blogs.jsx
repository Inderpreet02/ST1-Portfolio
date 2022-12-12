import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "blogs");

    const q = query(colRef, orderBy("timestamp", "desc"))
    //real time update
    onSnapshot(q, (snapshot) => {
      setBlogs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    });
  }, []);
  // console.log(blogs.length);

  return (
    <div className="blogs">
      <div className="blogs__container">
        <div className="main__h2">Blogs</div>
        <div className="blogs__grid">
          {blogs.map((blog) => {
            console.log(blog);
            return (
              <div className="blog">
                <div className="blog__top">
                  <img src={blog.data.img} alt="" className="blog__img" />
                </div>
                <div className="blog__bottom">
                  <div className="blog__title">{blog.data.title}</div>

                  <div className="blog__desc">{blog.data.markdown}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
