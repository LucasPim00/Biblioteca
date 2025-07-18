import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST: Cadastra novo projeto
export async function POST(request: Request) {
  const data = await request.json()

  const novoProjeto = await prisma.projeto.create({
    data: {
      titulo: data.titulo,
      descricao: data.descricao,
      imagem: data.imagem || '',
      projeto: data.projeto || '',
      repo: data.repo,
      tags: data.tags.join(','),
    },
  })

  return NextResponse.json(novoProjeto)
}