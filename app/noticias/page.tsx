import Image from 'next/image'

const news = [
  {
    id: 1,
    title: 'Nueva colección de primavera',
    content: 'Descubre nuestra nueva colección de manualidades inspiradas en la primavera. Colores vibrantes y diseños frescos te esperan.',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    title: 'Taller de macramé',
    content: 'Únete a nuestro próximo taller de macramé y aprende a crear hermosas piezas decorativas para tu hogar.',
    image: '/placeholder.svg?height=200&width=300'
  },
]

export default function NoticiasPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-rose-500 mb-12 text-center">Noticias y Eventos</h1>
      <div className="space-y-12">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:scale-105 transition-transform duration-300">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

