import React, { useEffect, useState } from "react";

const BlogLeft = () => {
  const [blogs, setBlogs] = useState({
    tittle: "",
    descriptions: "",
    author: "",
  });
  const [bloginfo, setbloginfo] = useState([]);

  const handleSubmit = () => {
    if (!blogs.tittle || !blogs.descriptions || !blogs.author) {
      alert("Data missing");
    } else {
      setbloginfo([...bloginfo, blogs]);
      setBlogs("");
    }
  };

  /**
   * todo: Handle All inputs data from here.
   * @perams ({})
   * */
  const Handleinput = (items) => {
    setBlogs({ ...blogs, [items.target.id]: items.target.value });
  };

  /**
   * todo: Set data in local Storage
   * */
  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setbloginfo(JSON.parse(storedBlogs));
    }
  }, []);

  /**
   * todo: get data from local Storage
   * */
  useEffect(() => {
    if (bloginfo.length > 0) {
      localStorage.setItem("blogs", JSON.stringify(bloginfo));
    }
  }, [bloginfo]);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#c72d2d] flex items-center justify-center">
        <div className="w-3/4 p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#333]">
            Submit Blog
          </h1>
          <input
            type="text"
            placeholder="Title"
            className="w-full mb-6 p-4 border-b-2 border-gray-300 text-lg focus:outline-none focus:border-blue-500"
            onChange={Handleinput}
            id="tittle"
          />
          <textarea
            placeholder="Description"
            className="w-full mb-6 p-4 border-b-2 border-gray-300 text-lg focus:outline-none focus:border-blue-500"
            rows="4"
            onChange={Handleinput}
            id="descriptions"
          />
          <input
            type="text"
            placeholder="Author Name"
            className="w-full mb-6 p-4 border-b-2 border-gray-300 text-lg focus:outline-none focus:border-blue-500"
            onChange={Handleinput}
            id="author"
          />
          <button
            className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xl"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[#f812c6] p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#333]">
          Blog Posts
        </h1>
        {bloginfo.length > 0 ? (
          bloginfo.map((items) => (
            <div className="mb-8 p-6 bg-[#f0f0f0] rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#333]">
                {items.tittle}
              </h2>
              <p className="text-gray-700 mt-4">{items.descriptions}</p>
              <p className="text-sm text-gray-500 mt-6">
                Author: {items.author}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No blogs submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default BlogLeft;

// import React, { useState } from "react";

// const BlogLeft = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");
//   const [blogs, setBlogs] = useState([]);

//   const handleSubmit = () => {
//     if (title && description && author) {
//       const newBlog = { title, description, author };
//       setBlogs([...blogs, newBlog]);
//       setTitle("");
//       setDescription("");
//       setAuthor("");
//     } else {
//       alert("Please fill out all fields");
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side */}
//       <div className="w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-3/4 p-6 bg-white rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold mb-4">Submit Blog Post</h1>
//           <input
//             type="text"
//             placeholder="Title"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             placeholder="Description"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//             rows="4"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Author Name"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//           />
//           <button
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="w-1/2 bg-gray-100 p-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
//         {blogs.length > 0 ? (
//           blogs.map((blog, index) => (
//             <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow">
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <p className="text-gray-700 mt-2">{blog.description}</p>
//               <p className="text-sm text-gray-500 mt-4">
//                 Author: {blog.author}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No blogs submitted yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogLeft;
