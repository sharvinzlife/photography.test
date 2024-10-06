import Image from 'next/image'
import { Camera } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-6">
            At PhotoFolio, we believe that every moment is a story waiting to be told. Our passion for photography drives us to capture the essence of life's most beautiful and significant moments, preserving them for generations to come.
          </p>
          <p className="text-lg mb-6">
            With years of experience and a keen eye for detail, our team of professional photographers specializes in a wide range of styles, from breathtaking landscapes to intimate portraits and everything in between.
          </p>
          <div className="flex items-center space-x-4">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">Capturing life, one frame at a time</span>
          </div>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://source.unsplash.com/random/800x600?photographer"
            alt="Photographer at work"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}