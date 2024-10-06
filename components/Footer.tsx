import { Camera } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Camera className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">PhotoFolio</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">Instagram</Link>
            <Link href="#" className="hover:text-primary">Facebook</Link>
            <Link href="#" className="hover:text-primary">Twitter</Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © 2023 PhotoFolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer