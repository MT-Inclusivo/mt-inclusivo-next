'use client'

import categories from '@/app/components/data/categories.json'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type CategoriesProps = typeof categories

const categoriesList: CategoriesProps = categories

export function CategoriesList() {
  return (
    <div
      aria-label="Categorias de Lei"
      className="flex flex-col gap-4 flex-wrap justify-center"
    >
      {categoriesList.map((category) => (
        <Link
          aria-label={category.title}
          href={`/search/${category.slug}`}
          key={category.slug}
          className="flex gap-2 p-2 items-center m-2 text-zinc-800 text-2xl border-b-2 hover:border-blue-500 hover:text-blue-700 cursor-pointer"
        >
          {category.title}
          <ChevronRight aria-hidden="true" />
        </Link>
      ))}
    </div>
  )
}
