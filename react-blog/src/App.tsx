import React, { useState } from 'react';
import NavBar from './components/Navbar';
import './index.css';
import BlogCardComponent from './components/BlogCard';
import BlogTableComponent from './components/BlogTables';
import { Iblog } from './types/blog.types';
import BlogList from './components/BlogsList';


function App() {

  const blogData : Iblog[] = [
      {
        title: "random title 1",
        image:
          "https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg",
        text: "random text 1",
        author: "shayan",
      },

      {
        title: "random title 2",
        image:
          "https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg",
        text: "random text 2",
        author: "shayan1",
      },
      {
        title: "random title 3",
        image:
          "https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg",
        text: "random text 3",
        author: "shayan22",
      },
    ]
    const [blogs, setBlogs] = useState<Iblog[]>(blogData);


    const App = () => (
      <>
      <NavBar></NavBar>
      <BlogTableComponent blogs={blogs}/>
      <BlogList  blogs={blogs}/>  
      </>
    )

  return (
    <div className="App">
      <App/>
    </div>
  );
}

export default App;
