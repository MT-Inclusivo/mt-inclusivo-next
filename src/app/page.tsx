import { Categories } from '@/app/components/frontend/Categories'

export default function Home() {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl">Categorias</h1>
      <Categories />
    </div>
  )
}
