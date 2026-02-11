import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import placeholder photos — replace these with your own!
import photo1 from "@/assets/photos/photo1.jpg";
import photo2 from "@/assets/photos/photo2.jpg";
import photo3 from "@/assets/photos/photo3.jpg";
import photo4 from "@/assets/photos/photo4.jpg";
import photo5 from "@/assets/photos/photo5.jpg"
import photo6 from "@/assets/photos/photo6.jpg";
import photo7 from "@/assets/photos/photo7.jpg"
import photo8 from "@/assets/photos/photo8.jpg"
import photo9 from "@/assets/photos/photo9.jpg"
import photo10 from "@/assets/photos/photo10.jpg"
import photo11 from "@/assets/photos/photo11.jpg"
import photo12 from "@/assets/photos/photo12.jpg"
import photo13 from "@/assets/photos/photo13.jpg"
import photo14 from "@/assets/photos/photo14.jpg"
import photo15 from "@/assets/photos/photo15.jpg"
import photo16 from "@/assets/photos/photo16.jpg"
import photo17 from "@/assets/photos/photo17.jpg"
import photo18 from "@/assets/photos/photo18.jpg"
import photo19 from "@/assets/photos/photo19.jpg"


const photos = [
  { src: photo1, caption: "" },
  { src: photo2, caption: "" },
  { src: photo3, caption: "" },
  { src: photo4, caption: "" },
  { src: photo5, caption: "" },
  { src: photo6, caption: "" },
  { src: photo7, caption: "" },
  { src: photo8, caption: "" },
  { src: photo9, caption: "" },
  { src: photo10, caption: "" },
  { src: photo11, caption: "" },
  { src: photo12, caption: "" },
  { src: photo13, caption: "" },
  { src: photo14, caption: "" },
  { src: photo15, caption: "" },
  { src: photo16, caption: "" },
  { src: photo17, caption: "" },
  { src: photo18, caption: "" },
  { src: photo19, caption: "" },
];

const PhotoSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <section id="memories" className="px-5 py-16 bg-gradient-to-b from-rose-light to-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
          Emlékeink
        </h2>
        <p className="text-center text-muted-foreground font-handwritten text-lg mb-8">
          Itt vagyunk a legcukibbak, ezek közös képek
        </p>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-primary/10 bg-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="aspect-[4/5] sm:aspect-[3/4] relative">
            <img
              src={photos[current].src}
              alt={photos[current].caption}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
              <p className="text-white font-handwritten text-lg">
                {photos[current].caption}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                i === current ? "" : ""
              }`}
              aria-label={`Go to photo ${i + 1}`}
            >
              <span
                className={`block w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-primary/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
