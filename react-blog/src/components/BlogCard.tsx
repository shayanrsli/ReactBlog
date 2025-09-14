import { FC } from "react";
import { Iblog, IPropsBlog } from "../types/blog.types";

interface BlogCardProps {
  blogs: Iblog[];
}

const BlogCardComponent : FC<IPropsBlog> = ({blogs}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
      {blogs.map((item, index) => (
        <div
          key={index}
          className="border rounded shadow hover:shadow-lg transition-shadow duration-200"
        >
          <img
            className="object-cover w-full h-48 rounded-t"
            src={item.image}
            alt={`image of ${item.title}`}
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-blue-600">
              {item.title}
            </h4>
            <p className="mb-2 text-gray-700 leading-normal">{item.text}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{item.author}</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow hover:bg-blue-600">
                  Read more
                </button>
                <button className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow hover:bg-green-600">
                  {item.author}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardComponent;
