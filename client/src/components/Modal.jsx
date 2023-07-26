import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TbMailShare } from "react-icons/tb";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = ({
  showModal,
  setShowModal,
  updatedPostId,
  setUpdatedPostId,
}) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    if (updatedPostId) {
      dispatch(updatePostAction(updatedPostId, postData));
      setUpdatedPostId("");
    } else {
      dispatch(createPostAction(postData));
    }

    setShowModal(false);
    setPostData({
      user: "",
      title: "",
      description: "",
    });

    toast("Post ekleme işlemi başarılı.", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold opacity-80 flex items-center gap-3">
                    <span>{updatedPostId ? "Update Post" : "Share Post"}</span>{" "}
                    <TbMailShare />
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-60 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      value={postData.user}
                      name="user"
                      onChange={onChangeFunc}
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      value={postData.title}
                      name="title"
                      onChange={onChangeFunc}
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      value={postData.description}
                      name="description"
                      onChange={onChangeFunc}
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={postCreate}
                  >
                    {updatedPostId ? "Update" : "Share"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
