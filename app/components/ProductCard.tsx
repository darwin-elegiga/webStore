import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative h-80">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill" 
          objectFit="cover" 
          className="group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-between p-4">
          <h2 className="text-white text-xl font-semibold">{product.name}</h2>
          <p className="text-white text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

