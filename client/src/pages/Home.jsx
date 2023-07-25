import React, { useState } from "react";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { posts } = useSelector((state) => state.posts);

  console.log(posts)
  return (
    <section className="mx-auto px-4 xl:w-3/4">
      <div className="container px-5 py-24">
        <button
          onClick={() => setShowModal(true)}
          className="mx-auto mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>

        <div className="bg-gray-200">posts</div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Home;
