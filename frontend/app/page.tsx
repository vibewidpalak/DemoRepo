"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Connection failed"));
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>{message}</p>
    </div>
  );
}