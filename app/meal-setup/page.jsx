"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Mealform";

const MealSetup = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ type: "", plan: "", ingredients: "", overview: "", seen:"", date:"", gender:""});

  const mealSetup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/mealsetup/new", {
        method: "POST",
        body: JSON.stringify({
          type: post.type,
          userId: session?.user.id,
          plan: post.plan,
          ingredients: post.ingredients,
          overview: post.overview,
          seen:post.seen,
          date:post.date,
          gender:post.gender,


        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={mealSetup}
    />
  );
};

export default MealSetup;