import SearchLaw from '@/app/components/frontend/searchLaw'

export function Header() {
  return (
    <header className="flex flex-col bg-blue-600 p-5 items-center gap-5 h-60">
      <p className="font-bold text-zinc-50 p-4 md:text-3xl lg:text-5xl">
        MT Inclusivo
      </p>
      <SearchLaw />
    </header>
  )
}
