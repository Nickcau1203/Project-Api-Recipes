"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export default function Page() {
  const [receitas, setReceitas] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarReceitas = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.sampleapis.com/recipes/recipes')
      const data = response.data;
      setReceitas(data)
      console.table(data)
    } catch (error) {
      console.error('Erro ao buscar receita:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 p-8 text-center">
      {/* Informações obrigatórias */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Turma: 2TDS2</h1>
        <h2 className="text-2xl mb-2">Escola: SENAI Valinhos</h2>
        <h3 className="text-xl mb-4">Aluno: Nicole Cau</h3>
        <div className="flex justify-center mb-4">
          <Image
            src="/avatar.jpg" // Substitua pelo caminho correto da imagem
            alt="Foto do Aluno"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="italic text-lg"> "A vida é como a culinária: você precisa de um pouco de tempero para torná-la especial." - Maya Angelou</p>
      </div>

      {/* Botão para buscar receitas */}
      <div className="text-center mb-12">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarReceitas} disabled={loading}>
          {loading ? "Carregando..." : "Buscar Receita"}
        </button>
      </div>

      {/* Lista de receitas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {receitas.map((receita) => (
          <div className="bg-white p-6 rounded-lg shadow-md" key={receita.id}>
            <h3 className="font-bold text-lg text-gray-800">{receita.name}</h3>
            <p className="text-gray-600">Tempo de preparo: {receita.prepTime}</p>
            <p className="text-gray-600">Ingredientes: {receita.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  )
}