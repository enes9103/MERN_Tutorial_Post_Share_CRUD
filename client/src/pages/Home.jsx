import React from "react";

const Home = () => {
  return (
    <section className="mx-auto px-4 xl:w-3/4">
      <div className="flex flex-col w-full mt-4">
        <button class="mx-auto mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Post
        </button>

        <div className="bg-gray-200">
          posts
        </div>
      </div>
    </section>
  );
};

export default Home;
