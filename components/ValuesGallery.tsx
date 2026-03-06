"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn-carousel";

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesGalleryProps {
  heading?: string;
  values?: Readonly<Value[]> | readonly Value[];
  demoUrl?: string;
}

const ValuesGallery = ({
  heading = "Ce qui nous anime",
  demoUrl = "/menu",
  values,
}: ValuesGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  if (!values || values.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-coffee md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <Link
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium text-coral md:text-base lg:text-lg"
            >
              Découvrir notre carte
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-coral/20 text-coral hover:bg-coral hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-coral/20 text-coral hover:bg-coral hover:text-white"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: false,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: false,
                align: "start",
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {values.map((value, index) => (
              <CarouselItem key={index} className="pl-4 md:max-w-[452px]">
                <div className="group flex h-full flex-col justify-between">
                  <div>
                    <div className="card flex aspect-[3/2] items-center justify-center overflow-clip rounded-xl p-8 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex-1 text-center">
                        <span className="relative block h-full w-full origin-bottom text-8xl animate-pulse transition-transform duration-300 group-hover:scale-110">
                          {value.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 break-words pt-4 text-lg font-medium text-coffee md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {value.title}
                  </div>
                  <div className="mb-8 text-sm text-coffee/70 md:mb-12 md:text-base lg:mb-9">
                    {value.description}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ValuesGallery;
