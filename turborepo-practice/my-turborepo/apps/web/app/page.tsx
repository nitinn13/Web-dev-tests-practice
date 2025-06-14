"use client"
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [room, setRoom] = useState("")
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200">
      <TextInput 
      onChange={(e) => {
        setRoom(e.target.value);
      }}
      placeholder="Enter room name" />
      <button
      onClick={() => {
        router.push(`/chat/${room}`);
      }}
      >Join room</button>
    </div>
  );
}
