import { Metadata } from 'next'
import categories from '@/app/components/data/categories.json'

export const metadata: Metadata = {
  title: 'MT Inclusivo | Pesquisa',
  description: 'Pesquise categorias de lei',
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

interface StaticProps {
  params: {
    slug: string
  }
}

export default function SearchSlug({ params }: StaticProps) {
  const { slug } = params
  return (
    <div className="flex flex-col items-center py-10">
      <p>To DO {slug}</p>
    </div>
  )
}
