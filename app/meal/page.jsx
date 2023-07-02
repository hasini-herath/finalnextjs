"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Meal/Meal";

const Test = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ type: "", name: "", message: "", gender:"", date:"", age:""});

  const test = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/meal/new", {
        method: "POST",
        body: JSON.stringify({
          type: post.type,
          userId: session?.user.id,
          name: post.name,
          message: post.message,
          gender: post.gender,
          date: post.date,
          age: post.age,
          

        }),
      });

      if (response.ok) {
        router.push("/table");
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
      handleSubmit={test}
    />
  );
};

export default Test;