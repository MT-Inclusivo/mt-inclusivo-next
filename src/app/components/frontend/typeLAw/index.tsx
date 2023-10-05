import Link from 'next/link'

export default function TypesLa({slug = ""}) {
  return (
    <div className="flex flex-col items-center gap-7 mt-10">
      <Link
      aria-label="Leis Federais"
      href={`/search/${slug}/federais`}
      key="leisFederais"
      className="h-16 w-80 border border-black rounded-full flex items-center justify-center text-lg font-bold bg-gray-200 ">
        LEIS FEDERAIS
      </Link>

      <Link
      aria-label="Leis Estaduais"
      href={`/search/${slug}/estaduais`}
      key="leisEstaduais"
      className="h-16 w-80 border border-black rounded-full flex items-center justify-center text-lg font-bold">LEIS ESTADUAIS</Link> 
    </div>
  )
}