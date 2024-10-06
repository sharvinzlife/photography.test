import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Capturing Moments,<br />Creating Memories
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to PhotoFolio, where every image tells a story. Explore our collection of breathtaking photographs that capture the essence of life's most beautiful moments.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'https://source.unsplash.com/random/800x600?nature',
          'https://source.unsplash.com/random/800x600?portrait',
          'https://source.unsplash.com/random/800x600?architecture',
        ].map((src, index) => (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <Image
              src={src}
              alt={`Featured image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-opacity duration-300 hover:opacity-75"
            />
          </div>
        ))}
      </div>
    </div>
  )
}