type Props = {
  palavraChave: string;
  setPalavraChave: (value: string) => void;
};

export default function SearchLaw({ palavraChave, setPalavraChave }: Props) {
  return (
    <input
      type="text"
      placeholder="Busque aqui"
      value={palavraChave}
      onChange={(e) => setPalavraChave(e.target.value)}
      className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-2 placeholder:text-zinc-800 rounded border border-gray-300 focus:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
