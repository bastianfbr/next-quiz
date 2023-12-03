import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8 text-black">Nuit de l&apos;info</h1>

      <div className="flex flex-col items-center justify-center bg-red-500 rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto">
        <p className="text-white">Ceci est une réponse 1</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-green-500 rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto">
        <p className="text-white">Peut-être la réponse 2</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-yellow-500 rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto">
        <p className="text-white">Ou alors la réponse 3</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-blue-500 rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto">
        <p className="text-white">Finalement réponse 4 ?</p>
      </div>
    </main>
  );
}
