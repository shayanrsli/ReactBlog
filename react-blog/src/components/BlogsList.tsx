import { FC } from "react";
import { Iblog, IPropsBlog, PropsBlogs } from "../types/blog.types";
import BlogCardComponent from "./BlogCard";

const BlogList : FC<PropsBlogs> = ({blogs}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
      {blogs.map((blog, key) => (
        <BlogCardComponent blog={blog} key={key} />
      ))}
    </div>
  );
};

export default BlogList;
