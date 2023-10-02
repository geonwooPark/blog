import React from "react";

export default function Post({ post }) {
  return (
    <div className="bg-yellow-200 p-4 shadow-lg mb-4">
      <h1 className="text-xl mb-2">{post.title}</h1>
      <p className="mb-4">{post.postText}</p>
      <div className="text-sm flex justify-between">
        <p className="mr-2">{post.author?.username}</p>
        <button className="px-2 py-1 text-red-500 transition duration-200 ease-in-out hover:text-red-600">
          삭제
        </button>
      </div>
    </div>
  );
}
