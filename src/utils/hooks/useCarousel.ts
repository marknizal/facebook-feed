import { useRef, useState, useEffect } from "react";

type ScrollDirection = "left" | "right";

export function useCarousel(scrollAmount = 200) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsLeft(scrollLeft > 0);
    setIsRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    updateScrollState();
    const ref = scrollRef.current;
    ref?.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      ref?.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return { scrollRef, isLeft, isRight, scroll };
}
