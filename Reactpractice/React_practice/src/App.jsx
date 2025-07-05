"use client"
import { useEffect, useRef } from "react";

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleDown = (e: MouseEvent) => {
            console.log("mousedown", e.clientX, e.clientY);
        };

        const handleUp = (e: MouseEvent) => {
            console.log("mouseup", e.clientX, e.clientY);
        };

        const handleMove = (e: MouseEvent) => {
            console.log("mousemove", e.clientX, e.clientY);
        };

        canvas.addEventListener("mousedown", handleDown);
        canvas.addEventListener("mouseup", handleUp);
        canvas.addEventListener("mousemove", handleMove);

        return () => {
            canvas.removeEventListener("mousedown", handleDown);
            canvas.removeEventListener("mouseup", handleUp);
            canvas.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={500}
            height={500}
            style={{
                width: "500px",
                height: "500px",
                border: "1px solid black",
                backgroundColor: "white"
            }}
        />
    );
}