import React, { useState } from "react";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { posts } = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <section className="mx-auto px-4 xl:w-3/4">
      <div className="container mx-auto px-5 py-24">
        <button
          onClick={() => setShowModal(true)}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
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
