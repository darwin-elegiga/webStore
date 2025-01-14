import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          Bienvenidos a Rosa de Sarón
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Donde la artesanía tradicional se encuentra con el diseño moderno. Descubre piezas únicas que transformarán tu espacio.
        </p>
        <Link 
          href="/productos" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
        >
          Explorar Colección <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Star, title: "Calidad Artesanal", description: "Cada pieza es creada con atención meticulosa al detalle." },
          { icon: TrendingUp, title: "Diseños Innovadores", description: "Fusionamos lo tradicional con las últimas tendencias." },
          { icon: Zap, title: "Personalización", description: "Crea piezas únicas que reflejen tu estilo personal." }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <feature.icon className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Lámpara Geométrica", image: "/placeholder.svg?height=300&width=300" },
            { name: "Tapiz Moderno", image: "/placeholder.svg?height=300&width=300" },
            { name: "Escultura Abstracta", image: "/placeholder.svg?height=300&width=300" }
          ].map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={300} 
                className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad Creativa</h2>
        <p className="text-xl text-gray-600 mb-8">
          Suscríbete para recibir inspiración, tutoriales y ofertas exclusivas directamente en tu bandeja de entrada.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit" 
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            Suscribirse
          </button>
        </form>
      </section>
    </div>
  )
}

