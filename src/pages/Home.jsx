import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "../components/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docsSnap = await getDocs(collection(db, "posts"));
      const posts = [];
      docsSnap.forEach((doc) => posts.push({ ...doc.data() }));
      setPosts(posts);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-6 max-w-[400px] mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
