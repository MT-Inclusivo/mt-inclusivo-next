'use client'

import { Search } from 'lucide-react'

export default function SearchLaw() {
  return (
    <label className="flex gap-4 p-2 text-zinc-800 bg-zinc-50 items-center w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded">
      <Search aria-hidden />
      <input
        aria-required
        type="text"
        placeholder="Busque aqui"
        className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2 bg-zinc-50 placeholder:text-zinc-800 rounded border border-zinc-50 focus:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  )
}
