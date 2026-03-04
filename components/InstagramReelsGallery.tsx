"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

type ReelItem = {
  title: string;
  permalink: string;
  cover: string;
};

const ACCENT = "#9C7A2D";

const REELS: ReelItem[] = [
  {
    title: "Amwaajessakina Featured",
    permalink: "https://www.instagram.com/reel/DShDHt-EwJJ/",
    cover: "/images/ig/ig-1.jpg",
  },
  {
    title: "Podcasts",
    permalink: "https://www.instagram.com/reel/DSKc_1_EUR3/",
    cover: "/images/ig/ig-2.jpg",
  },
  {
    title: "Influencer Collabs",
    permalink: "https://www.instagram.com/reel/DQ6ZkN_jYIn/",
    cover: "/images/ig/ig-3.jpg",
  },
  {
    title: "Dubai Life Content",
    permalink: "https://www.instagram.com/reel/DQmU-Aokpu3/",
    cover: "/images/ig/ig-4.jpg",
  },
  {
    title: "Personal Branding",
    permalink: "https://www.instagram.com/reel/DQJXWaikZYq/",
    cover: "/images/ig/ig-5.jpg",
  },
  {
    title: "Content Creation",
    permalink: "https://www.instagram.com/reel/DSEOK05kzxL/",
    cover: "/images/ig/ig-6.jpg",
  },
];

export default function InstagramReelsGallery() {
  const [active, setActive] = useState<ReelItem | null>(null);

  const embedKey = useMemo(
    () => (active ? `${active.permalink}-${Date.now()}` : ""),
    [active]
  );

  useEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      // @ts-ignore
      window?.instgrm?.Embeds?.process?.();
    }, 50);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section
      id="instagram"
      className="py-24 md:py-32 px-6 md:px-10 lg:px-14 bg-neutral-50"
    >
      <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="mx-auto max-w-6xl">

        <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-500">
          Instagram
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Video Highlights
        </h2>

        <p className="mt-6 text-neutral-600 max-w-3xl">
          Selected reels sharing ideas, projects, and moments from my professional journey.
        </p>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

          {REELS.map((item) => (
            <button
  key={item.permalink}
  onClick={() => setActive(item)}
  className="group min-w-[260px] md:min-w-[300px] snap-start text-left rounded-[28px] hairline bg-white softshadow hover:translate-y-[-2px] transition"
>

              <div className="relative aspect-[9/16] overflow-hidden rounded-[28px]">

                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {item.title}
                </div>

              </div>

            </button>
          ))}

        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActive(null)}
          />

          <div className="relative w-full max-w-2xl bg-white rounded-2xl p-4">

            <blockquote
              key={embedKey}
              className="instagram-media"
              data-instgrm-permalink={active.permalink}
              data-instgrm-version="14"
              style={{ margin: 0, width: "100%" }}
            />

          </div>

        </div>
      )}
    </section>
  );
}
