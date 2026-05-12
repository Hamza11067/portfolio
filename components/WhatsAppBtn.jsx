"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); // 3-second delay
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/+923231045234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all"
    >
      <div className="relative group">
        {/* Tooltip (Optional) */}
        <span className="absolute -left-28 top-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with me!
        </span>
        
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full shadow-2xl hover:animate-none transition-transform duration-300 hover:scale-110"
        />
      </div>
    </a>
  );
}