"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


import Profile from "@components/Table";

const MyProfile = () => {

  const { data: session } = useSession();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/test/${session?.testId}/post`);
      const data = await response.json();

      setPost(data);
    };

    if (session?.testId) fetchPost();
  }, [session?.testId]);


  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={post}
    
    />
  );
};

export default MyProfile;