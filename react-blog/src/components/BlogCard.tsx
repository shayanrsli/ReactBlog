import { FC } from "react";
import { Iblog, IPropsBlog, propBlog } from "../types/blog.types";


const BlogCardComponent : FC<propBlog> = ({blog , key}) => {
  return (
        <div
          key={key}
          className="border rounded shadow hover:shadow-lg transition-shadow duration-200"
        >
          <img
            className="object-cover w-full h-48 rounded-t"
            src={blog.image}
            alt={`image of ${blog.title}`}
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-blue-600">
              {blog.title}
            </h4>
            <p className="mb-2 text-gray-700 leading-normal">{blog.text}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{blog.author}</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow hover:bg-blue-600">
                  Read more
                </button>
                <button className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow hover:bg-green-600">
                  {blog.author}
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default BlogCardComponent;
