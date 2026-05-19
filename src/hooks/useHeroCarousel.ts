"use client";

import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

const autoplay = Autoplay({
  delay: 7000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
});

export function useHeroCarousel() {
  const [index, setIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return {
    emblaRef,
    index,
    scrollPrev,
    scrollNext,
  };
}
