import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setText(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      return;
    }

    await addDoc(collection(db, "posts"), {
      title,
      postText: text,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    setTitle("");
    setText("");

    navigate("/");
  };

  return (
    <div className="h-[calc(100vh-48px)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="max-w-[360px]">
        <h1 className="text-2xl font-semibold">포스팅 하기</h1>
        <div>
          <div>제목</div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="제목을 입력하세요"
            className="w-full border border-gray-400 px-2 py-1"
            onChange={onChange}
          />
        </div>
        <div>
          <div>내용</div>
          <textarea
            type="text"
            name="text"
            value={text}
            cols={30}
            rows={10}
            placeholder="내용을 입력하세요"
            className="w-full border border-gray-400 px-2 py-1"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="w-full px-2 py-1 text-white border bg-blue-500 transition duration-200 ease-in-out hover:bg-blue-600"
        >
          게시하기
        </button>
      </form>
    </div>
  );
}
