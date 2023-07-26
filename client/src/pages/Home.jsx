import React, { useState } from "react";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { useEffect } from "react";
import { getPostsAction } from "../redux/actions/post";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [updatedPostId, setUpdatedPostId] = useState("");

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  useEffect(()=>{
    dispatch(getPostsAction());
  }, [posts])

  return (
    <section className="mx-auto px-4 xl:w-3/4">
      <div className="container mx-auto px-5 py-24">
        <button
          onClick={() => setShowModal(true)}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
        >
          Create Post
        </button>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 border-t border-gray-200 pt-6 lg:max-w-none lg:grid-cols-3">
          {posts.length > 0 &&
            posts.map((post, index) => (
              <HomeCard
                key={index}
                post={post}
                setShowModal={setShowModal}
                setUpdatedPostId={setUpdatedPostId}
              />
            ))}
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        updatedPostId={updatedPostId}
        setUpdatedPostId={setUpdatedPostId}
      />
    </section>
  );
};

export default Home;
