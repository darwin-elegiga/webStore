import Image from 'next/image'

export default function QuienesSomosPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-rose-500 mb-8 text-center">Quiénes Somos</h1>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rosa de Sarón es una tienda de manualidades artesanales fundada con amor y pasión por el arte hecho a mano. Nuestra misión es ofrecer productos únicos y hermosos que llenen de calidez y personalidad los hogares de nuestros clientes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cada pieza que creamos es el resultado de horas de dedicación y cariño, utilizando técnicas tradicionales y materiales de alta calidad. Nos enorgullece poder compartir nuestra creatividad y habilidades con ustedes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En Rosa de Sarón, no solo vendemos productos, sino que también compartimos nuestra pasión por las manualidades a través de talleres y eventos comunitarios. ¡Únete a nuestra familia artesanal!
            </p>
          </div>
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image 
              src="/placeholder.svg?height=400&width=400" 
              alt="Equipo de Rosa de Sarón" 
              layout="fill" 
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

