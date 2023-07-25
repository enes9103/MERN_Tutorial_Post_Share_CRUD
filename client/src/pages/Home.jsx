import React from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section className="mx-auto px-4 xl:w-3/4">
      <div className="container px-5 py-24">
        <button
          onClick={() => setShowModal(true)}
          class="mx-auto mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
