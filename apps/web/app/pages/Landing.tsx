"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Landing() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for smooth orchestration
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, // Animates elements one by one
        ease: "power4.out",
      })
      .from(".cta-button", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
      }, "-=0.5"); // Starts slightly before the text ends
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={container} className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="hero-text text-6xl font-bold text-white mb-6">
        Master Algorithms, <br />
        <span className="text-cyan-400">One Problem at a Time.</span>
      </h1>
      <p className="hero-text text-gray-400 max-w-2xl mb-8">
        The ultimate practice sheet to track your progress and ace your interviews.
      </p>
      <Link href="/api/auth/signin" className="cta-button bg-cyan-500 min-w-[150px] px-8 py-3 rounded-full text-white font-semibold">
        Get Started
      </Link>
    </div>
  );
}