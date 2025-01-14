import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: 'Lámpara Geométrica', price: 89.99, image: '/placeholder.svg?height=400&width=400' },
  { id: 2, name: 'Tapiz Moderno', price: 129.99, image: '/placeholder.svg?height=400&width=400' },
  { id: 3, name: 'Escultura Abstracta', price: 199.99, image: '/placeholder.svg?height=400&width=400' },
  { id: 4, name: 'Jarrón Minimalista', price: 59.99, image: '/placeholder.svg?height=400&width=400' },
  { id: 5, name: 'Set de Velas Aromáticas', price: 39.99, image: '/placeholder.svg?height=400&width=400' },
  { id: 6, name: 'Cuadro 3D', price: 149.99, image: '/placeholder.svg?height=400&width=400' },
]

export default function ProductosPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Nuestra Colección
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

