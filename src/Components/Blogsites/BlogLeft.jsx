import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

const BlogLeft = () => {
  const [blogs, setBlogs] = useState({
    tittle: "",
    descriptions: "",
    author: "",
  });
  const [bloginfo, setbloginfo] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    if (!blogs.tittle || !blogs.descriptions || !blogs.author) {
      alert("Data missing");
    } else {
      setbloginfo([...bloginfo, blogs]);
      setBlogs({
        tittle: "",
        descriptions: "",
        author: "",
      });
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

  /**
   * todo: color chnaging things from googgle don't know how it works
   * */

  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
    "lime",
    "brown",
    "gray",
    "navy",
    "teal",
    "violet",
    "indigo",
    "gold",
    "silver",
    "coral",
    "salmon",
    "khaki",
    "peachpuff",
    "lavender",
    "tan",
    "peru",
    "lightblue",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
  });

  /**
   * todo: Handle Edit Btn
   * */
  const HandleEditButton = () => {
    openModal();
  };

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
            value={blogs.tittle}
          />
          <input
            placeholder="Description"
            className="w-full mb-6 p-4 border-b-2 border-gray-300 text-lg focus:outline-none focus:border-blue-500"
            rows="4"
            onChange={Handleinput}
            id="descriptions"
            value={blogs.descriptions}
          />
          <input
            type="text"
            placeholder="Author Name"
            className="w-full mb-6 p-4 border-b-2 border-gray-300 text-lg focus:outline-none focus:border-blue-500"
            onChange={Handleinput}
            id="author"
            value={blogs.author}
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
      <div
        className="w-1/2 p-8 overflow-y-auto"
        style={{
          backgroundColor: colors[colorIndex],
          transition: "background-color 0.5s ease",
        }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-[#333]">
          Blog Posts
        </h1>
        {bloginfo.length > 0 ? (
          bloginfo.map((items) => (
            <div className="mb-8 p-6 bg-[#f0f0f0] rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
              <div>
                <h2 className="text-2xl font-semibold text-[#333]">
                  {items.tittle}
                </h2>
                <p className="text-gray-700 mt-4">{items.descriptions}</p>
                <p className="text-sm text-gray-500 mt-6">
                  Author: {items.author}
                </p>
              </div>
              <div className="mt-5">
                <button
                  className="px-5 py-2 bg-green-400 rounded-xl"
                  onClick={HandleEditButton}
                >
                  Edit
                </button>
                <button className="px-5 py-2 bg-red-400 ml-5 rounded-xl">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No blogs submitted yet.</p>
        )}
      </div>
      {/* Modal start */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
            onClick={closeModal}
            className="px-2 py-1 bg-red-600 rounded-md text-white font-semibold mb-10"
          >
            close
          </button>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="updattittle">Tittle</label>
            <input
              placeholder="tittle"
              id="updattittle"
              name="updattittle"
              className="block w-full px-4 py-2 mt-2 border-[2px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label htmlFor="updatedescriptions">description</label>
            <input
              placeholder="description"
              id="updatedescriptions"
              name="updatedescriptions"
              className="block w-full px-4 py-2 mt-2 border-[2px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label htmlFor="updatAuthor">Author</label>
            <input
              placeholder="Author"
              id="updatAuthor"
              name="updatAuthor"
              className="block w-full px-4 py-2 mt-2 border-[2px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="px-[50px] py-3 bg-indigo-600 mt-5 rounded-xl text-white font-medium block mx-auto
            "
            >
              Update
            </button>
          </form>
        </Modal>
      </div>
      {/* Modal start */}
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
