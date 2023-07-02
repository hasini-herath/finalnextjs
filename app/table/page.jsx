"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Table";

const MyProfile = () => {
  const router = useRouter();
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

//   const handleEdit = (post) => {
//     router.push(`/update-prompt?id=${post._id}`);
//   };

//   const handleDelete = async (post) => {
//     const hasConfirmed = confirm(
//       "Are you sure you want to delete this prompt?"
//     );

//     if (hasConfirmed) {
//       try {
//         await fetch(`/api/prompt/${post._id.toString()}`, {
//           method: "DELETE",
//         });

//         const filteredPost = post.filter((item) => item._id !== post._id);

//         setPost(filteredPost);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={post}
    //  handleEdit={handleEdit}
    //   handleDelete={handleDelete}
    />
  );
};

export default MyProfile;