"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      AOS.init({
        duration: 700,
        once: false,
        mirror: true,
        offset: 140,
        easing: "ease-out-cubic",
        anchorPlacement: "top-bottom",
      });
      initialized.current = true;
    }

    const frame = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <>{children}</>;
}
