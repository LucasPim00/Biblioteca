'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjetoCard from '@/components/ProjetoCard'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function HomePage() {
  const [projetos, setProjetos] = useState([
    {
      titulo: "Lista de Países",
      imagem: "/projetos/paises.jpg",
      tags: ["Next", "JavaScript", "Tailwind",],
      repo: "https://github.com/LucasPim00/pa-ses",
    },
    {
      titulo: "Gerador de Senha",
      imagem: "/projetos/gerador-senha.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Montserrat"],
      repo: "https://github.com/LucasPim00/mini/tree/main/gerador_de_senha",
    },
    {
      titulo: "To do List",
      imagem: "/projetos/todo.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Font Awesome"],
      repo: "https://github.com/LucasPim00/mini/tree/main/todo_list",
    },
    {
      titulo: "Kanban",
      imagem: "/projetos/kanban.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/kanban",
    },
    {
      titulo: "Conversor de Moedas",
      imagem: "/projetos/moeda.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/moedas",
    },
    {
      titulo: "Jogo da Memória",
      imagem: "/projetos/memoria.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Picsum Photos API"],
      repo: "https://github.com/LucasPim00/mini/tree/main/jogo_da_memoria",
    },
    {
      titulo: "Jogo da Velha",
      imagem: "/projetos/velha.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/jogo%20da%20velha",
    },
    {
      titulo: "Quiz",
      imagem: "/projetos/quiz.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap CDN"],
      repo: "https://github.com/LucasPim00/mini/tree/main/quizz",
    },
    {
      titulo: "Verificador de idade",
      imagem: "/projetos/idade.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/verificador%20de%20idade",
    },
    {
      titulo: "Tabuada",
      imagem: "/projetos/tabuada.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/gerador%20tabuada",
    },
    {
      titulo: "Gorjeta",
      imagem: "/projetos/gorjeta.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/calculadora_de_gorjeta",
    },
    {
      titulo: "Conversor de Unidades",
      imagem: "/projetos/unidades.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/conversor_de_unidades",
    },
    {
      titulo: "Jogo da Adivinhação",
      imagem: "/projetos/adivinhacao.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/jogo_da_advinhacao",
    },
    {
      titulo: "Contador PA",
      imagem: "/projetos/contar.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/contador%20PA",
    },
    {
      titulo: "Citações",
      imagem: "/projetos/citacao.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/LucasPim00/mini/tree/main/citacoes",
    }
  ])

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    repo: '',
    tags: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const novoProjeto = {
      titulo: form.titulo,
      descricao: form.descricao,
      repo: form.repo,
      projeto: '#',
      imagem: '',
      tags: form.tags.split(',').map(tag => tag.trim())
    }

    // Adiciona na interface
    setProjetos(prev => [...prev, novoProjeto])

    // Envia para API
    await fetch('/api/projetos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoProjeto)
    })

    // Limpa formulário
    setForm({ titulo: '', descricao: '', repo: '', tags: '' })
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <ThemeSwitcher />

      {/* Formulário */}
      <section className="bg-black bg-opacity-70 rounded-xl p-6 mt-20 w-full max-w-md text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Novo Projeto</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            className="p-2 rounded bg-white text-black"
            required
          />
          <input
            type="text"
            placeholder="Descrição"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            className="p-2 rounded bg-white text-black"
            required
          />
          <input
            type="text"
            placeholder="URL do repositório"
            value={form.repo}
            onChange={(e) => setForm({ ...form, repo: e.target.value })}
            className="p-2 rounded bg-white text-black"
            required
          />
          <input
            type="text"
            placeholder="Tags (ex: Next,Prisma,API)"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="p-2 rounded bg-white text-black"
          />
          <button className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
            Cadastrar Projeto
          </button>
        </form>
      </section>

      {/* Lista de projetos */}
      <section className="w-full px-4 md:px-10 lg:px-20 my-12">
        <div className="bg-black bg-opacity-60 rounded-2xl py-10 px-6">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Biblioteca
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projetos.map((projeto, index) => (
              <ProjetoCard key={index} projeto={projeto} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}