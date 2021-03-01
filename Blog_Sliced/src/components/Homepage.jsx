import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData, setInput } from "../features/userSlice";
import Articles from "../subComponents/Articles";
import Footer from "./Footer";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("Cricket");
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=95459e2da4c05747140930720b0932c9`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blog_url, dispatch, searchInput]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className="container-fluid">
      <main className="tm-main">
        <div className="row tm-row">
          <div className="col-12">
            <form method="GET" className="form-inline tm-mb-80 tm-search-form">
              <input
                className="form-control tm-search-input"
                name="query"
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="tm-search-button"
                type="submit"
                onClick={handleClick}
              >
                <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="row tm-row">
          {loading ? <h1 className="loading">Loading...</h1> : ""}
          {blogs?.articles?.map((blog, i) => (
            <Articles
              key={i}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              url={blog.url}
              source={blog.source.name}
              publishedAt={blog.publishedAt}
            />
          ))}
        </div>
        <div className="row tm-row tm-mt-100 tm-mb-75">
          <div className="tm-prev-next-wrapper">
            <a
              href="/"
              className="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20"
            >
              Prev
            </a>
            <a href="/" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
              Next
            </a>
          </div>
          <div className="tm-paging-wrapper">
            <span className="d-inline-block mr-3">Page</span>
            <nav className="tm-paging-nav d-inline-block">
              <ul>
                <li className="tm-paging-item active">
                  <a href="/" className="mb-2 tm-btn tm-paging-link">
                    1
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="/" className="mb-2 tm-btn tm-paging-link">
                    2
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="/" className="mb-2 tm-btn tm-paging-link">
                    3
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="/" className="mb-2 tm-btn tm-paging-link">
                    4
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default Homepage;
