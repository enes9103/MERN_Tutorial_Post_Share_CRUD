import React from "react";
import { RiUserSharedLine, RiDeleteBin6Line } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const HomeCard = ({ post, setUpdatedPostId, setShowModal }) => {
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(deletePostAction(id));

    toast("Post silme işlemi başarılı.", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  const updatePost = (id) => {
    setShowModal(true);
    setUpdatedPostId(id)
  };

  return (
    <article
      key={post.id}
      className="relative flex w-full flex-col items-start justify-between border shadow-sm rounded-lg p-3 "
    >
      <div className="group">
        <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute inset-0" />
          {post?.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {post?.description}
        </p>
      </div>

      <div className="mt-8 flex items-center">
        {/* <img src={post?.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
        <div className="flex justify-between items-center text-sm leading-6 w-full">
          <p className="flex items-center gap-2 font-semibold text-gray-900">
            <RiUserSharedLine />
            {post?.user}
          </p>

          <span className="text-gray-500 text-xs">{post?.date}</span>
        </div>
      </div>

      <div className="absolute top-1 right-1 flex items-center space-x-2">
        <RiDeleteBin6Line
          onClick={() => deletePost(post._id)}
          className="w-6 h-6 bg-red-500 rounded-full text-white p-1 cursor-pointer"
        />
        <GiCardExchange
          onClick={() => updatePost(post._id)}
          className="w-6 h-6 bg-gray-400 rounded-full text-white p-1 cursor-pointer"
        />
      </div>
    </article>
  );
};

export default HomeCard;
