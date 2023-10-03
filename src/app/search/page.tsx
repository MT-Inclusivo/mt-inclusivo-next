'use client'
import SearchLaw from '../components/frontend/searchLaw'
import LeisFile from '@/app/components/data/laws.json'
import React, { useState } from 'react'

type LeisJson = {
  palavrasChave: string[]
  tema: string
  esfera: string
  lei: string
  resumo: string
  url: string
}[]

const Leis = LeisFile as LeisJson
export default function SearchPage() {
  const [palavraChave] = useState<string>('')
  return (
    <div className="">
      <div className="flex justify-center items-center my-4">
        <SearchLaw />
      </div>
      <div className="flex justify-center items-center">
        <ul className="max-w-lg w-full">
          {/* eslint-disable-next-line array-callback-return */}
          {Leis.filter((value) => {
            if (palavraChave === '') {
              return null // se colocar value, irá mostrar todos os itens
            } else {
              const formattedPalavraChave = palavraChave
                .replace('º', '')
                .toLowerCase()
              const formattedResumo = value.resumo
                .replace('º', '')
                .toLowerCase()
              const formattedLei = value.lei.replace('°', '').toLowerCase()

              if (
                formattedResumo.includes(formattedPalavraChave) ||
                formattedLei.includes(formattedPalavraChave)
              ) {
                return value
              }
            }
          }).map((lei, index) => (
            <li key={index} className="mb-4 bg-white p-4 shadow">
              <h2 className="text-lg font-bold mb-2">{lei.lei}</h2>
              <p className="text-gray-700 mb-1">{lei.resumo}</p>
              <p className="text-gray-600">
                Palavras-chave: {lei.palavrasChave.join(', ')}
              </p>
              <a
                href={lei.url}
                className="text-blue-500 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver detalhes
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
