"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const images = [
  { src: 'https://source.unsplash.com/random/800x1200?nature', category: 'Nature' },
  { src: 'https://source.unsplash.com/random/800x600?portrait', category: 'Portrait' },
  { src: 'https://source.unsplash.com/random/600x800?architecture', category: 'Architecture' },
  { src: 'https://source.unsplash.com/random/800x800?travel', category: 'Travel' },
  { src: 'https://source.unsplash.com/random/900x600?food', category: 'Food' },
  { src: 'https://source.unsplash.com/random/800x1000?nature', category: 'Nature' },
  { src: 'https://source.unsplash.com/random/700x900?portrait', category: 'Portrait' },
  { src: 'https://source.unsplash.com/random/800x700?architecture', category: 'Architecture' },
  { src: 'https://source.unsplash.com/random/900x700?travel', category: 'Travel' },
  { src: 'https://source.unsplash.com/random/800x800?food', category: 'Food' },
]

const categories = ['All', 'Nature', 'Portrait', 'Architecture', 'Travel', 'Food']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter)

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <LazyLoadImage
              src={img.src}
              alt={`Portfolio image ${index + 1}`}
              effect="blur"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </Masonry>
    </div>
  )
}