'use client'


import Image from 'next/image'

export type Projeto = {
  titulo: string;
  imagem: string;
  tags: string[];
  repo: string;
}

export default function ProjetoCard({ projeto }: { projeto: Projeto }) {
  return (
    <div className="bg-black bg-opacity-70 text-white rounded-2xl group p-6 relative">
      {/* Imagem do projeto */}
      <Image
        src={projeto.imagem}
        alt={projeto.titulo}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Conteúdo */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white text-center mt-1">
          {projeto.titulo}
        </h3>

        {/* Botões */}
        <div className="flex gap-4 mb-4">
          <a
            href={projeto.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    opacity-0 group-hover:opacity-100
                     bg-purple-600 hover:bg-purple-700 text-white font-semibold
                    px-4 py-2 rounded transition-opacity duration-300 shadow-lg"
          >
            💬 Código
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {projeto.tags.map((tag, index) => (
            <span key={index} className="bg-cyan-900 px-2 py-1 text-xs rounded text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}