"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Defer one frame so the opacity transition fires
    const raf = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
