// app/blog/[slug]/page.tsx
"use client";

import { notFound } from 'next/navigation';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Blog {
  title: string;
  slug: string;
  image: string;
  content: string;
  author: string;
  date: string;
}

const blogs: Blog[] = [
  {
    title: 'The Art of Mindful Parenting',
    slug: 'art-of-mindful-parenting',
    image:
      "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora ratione et iste fuga illum quidem inventore repellendus harum quis aliquam minus odio, similique sunt facilis in praesentium perspiciatis libero mollitia corrupti qui quas? Tempore libero deleniti dolore officia adipisci, perferendis inventore illum quis. Delectus autem quod dolorem a odio alias natus ea! Ipsa nisi quae totam, eum suscipit vero neque laudantium eligendi illo! Delectus distinctio perspiciatis, sint tempora odio explicabo aspernatur reiciendis voluptatibus! Harum, veniam nobis cupiditate cum unde sapiente eius illum eligendi fugiat ad repellat et deleniti placeat est? Quaerat reprehenderit qui sapiente repudiandae maiores. Qui vel ipsum iste molestias vitae hic explicabo repellendus facere laudantium aperiam, nesciunt at sapiente reiciendis! Similique officia laudantium vel, dolorem dolorum sed debitis et esse adipisci asperiores eum? Tempora, temporibus? Vitae eum dolor eaque, corrupti dignissimos fuga illo a magni voluptatem reiciendis odit aliquid perspiciatis minima dolores quidem sit quam deleniti facere modi omnis similique fugiat officia quibusdam? Aut, consequatur odit officia ipsam, nobis nam ratione repudiandae unde vero beatae sed deserunt perspiciatis pariatur est doloremque quod aperiam! Inventore nam quibusdam dolorem eveniet omnis quam, molestiae obcaecati, odit ab qui rerum vel corrupti reprehenderit error nobis laboriosam architecto earum enim itaque tempore. Blanditiis adipisci dolorem, nemo explicabo ullam libero vel unde numquam! Error iste cum amet inventore maiores quaerat minus dicta adipisci odit, delectus eos totam obcaecati neque explicabo! Ipsa obcaecati maiores nostrum fuga a quae omnis, enim at perferendis minima commodi suscipit, temporibus eaque vero minus iusto nesciunt dicta facilis sapiente.',
    author: 'Jasmine Rana',
    date: 'May 15, 2025',
  },
  // Add more dummy blogs here for now
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound(); // Shows Next.js 404 if blog not found
  }

  const BackgroundGradientAnimation = ({ children }: { children: ReactNode }) => {
    return (
      <div className="relative overflow-hidden flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#e0f7ff] to-[#cce0ff]">
        {/* Light blue to dark blue background gradient */}
  
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-[50%] w-72 h-72 bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_20s_infinite]" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#2C3E94]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_25s_infinite] delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#39A4D8]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_30s_infinite] delay-4000" />
        <div className="absolute -bottom-8 right-[50%] w-72 h-72 bg-[#2C3E94]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_35s_infinite] delay-6000" />
  
        {children}
      </div>
    );
  };

    return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <BackgroundGradientAnimation>
        {/* Blog Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-30 flex flex-col justify-center items-center w-full px-4 py-12"
        >
          {/* content goes here */}
          <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl  shadow-xl mt-10 md:px-20 px-7">
          <div className='mt-20 mb-6 relative'>
            <div className="absolute -top-24 -left-20 w-[250px] h-[250px] bg-blue-700 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
            <div className="absolute -top-24 -left-20 w-[150px] h-[150px] bg-pink-500 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
            <h1 className="md:text-7xl font-bold text-gray-800 mb-4 text-5xl">{blog.title}</h1>
            <p className="text-sm text-gray-600 mb-6">
              By <span className="font-semibold">{blog.author}</span> • {blog.date}
            </p>
            </div>
            <img src={blog.image} alt="blogs-image" className="h-[350px] w-full object-cover rounded-lg mb-6" />
            <article className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-20">
              {blog.content}
            </article>
             <div className="absolute -top-24 -left-20 w-[250px] h-[250px] bg-blue-500 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
            <div className="absolute -top-24 -left-20 w-[150px] h-[150px] bg-pink-300 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />

            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
  <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-pink-900 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
          </div>

          {/* Bottom-Right Blobs */}
  <div className="absolute bottom-0 right-50 w-[250px] h-[250px] bg-blue-500 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />
  <div className="absolute bottom-5 right-70 w-[150px] h-[150px] bg-pink-900 rounded-full blur-3xl opacity-35 animate-pulse z-[-1]" />

        </motion.div>
      </BackgroundGradientAnimation>
    </div>
  );
}
