"use client";
import { Typewriter } from "react-simple-typewriter";
export function TypewriterText() {
  return (
    <span className="text-primary font-semibold">
      <Typewriter
        words={[
          "I'm currently looking for Frontend / Backend Developer Internship opportunity",
          "I'm currently looking for Frontend / Backend Developer Internship opportunity",
          "I'm currently looking for Frontend / Backend Developer Internship opportunity",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={30}
        delaySpeed={1500}
      />
    </span>
  );
}
export function HeaderTypewriter() {
  return (
    <span className="text-primary text-[28px] font-semibold">
      <Typewriter
        words={[
          "Hi, This is Bùi Lê Huy Phước Portfolio!",
          "Nice to meet you! Welcome to my portfolio website!"
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
