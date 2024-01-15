import { useEffect, useState } from "react";
import BlogeCards from "./BlogeCards";


const BlogePage = () => {

  const [blog, setBlog] = useState([])
  


  useEffect(()=>{
    async function fetchBloge(){
      let url = `http://localhost:3000/blog`;


      const response = await fetch(url);
      const data = await response.json();
      setBlog(data)
    }

    fetchBloge()
  },[])

  return (
    <div>
      {/* ===category section=== */}
      <div>Page Category</div>
      {/* ===blogeCard section=== */}
      <div>
        <BlogeCards blog={blog} ></BlogeCards>
      </div>
      {/* ===pagination section=== */}
      <div></div>
    </div>
  );
};

export default BlogePage;