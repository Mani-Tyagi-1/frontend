"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://i.pinimg.com/736x/fb/dd/ba/fbddba800f4b10b4b6dc93a9a102ec25.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://i.pinimg.com/736x/bb/ba/86/bbba86da4190f5c49c217e2fa2819374.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://i.pinimg.com/736x/e2/8b/78/e28b785ba866d17631a520a6063fb8eb.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://i.pinimg.com/736x/d9/88/05/d9880552f1ae62523abd125fe6f69ff2.jpg",
  },
  //   {
  //     title: "SmartBridge",
  //     link: "https://smartbridgetech.com",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  //   },
  //   {
  //     title: "Renderwork Studio",
  //     link: "https://renderwork.studio",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  //   },

  //   {
  //     title: "Creme Digital",
  //     link: "https://cremedigital.com",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  //   },
  //   {
  //     title: "Golden Bells Academy",
  //     link: "https://goldenbellsacademy.com",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  //   },
  //   {
  //     title: "Invoker Labs",
  //     link: "https://invoker.lol",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  //   },
  //   {
  //     title: "E Free Invoice",
  //     link: "https://efreeinvoice.com",
  //     thumbnail:
  //       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  //   },
];
