import { useState } from "react";

export const Container = () => {
  const [activeOption, setActiveOption] = useState("Populares");

  return (
    <div className="w-full p-6 space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-black">Destaque</h1>
        
        <div className="w-full h-64 bg-[url('fallout4.png')] bg-cover rounded-lg" ></div>
      </div>

      <div>
        <div className="flex gap-3">
          <span 
            onClick={() => setActiveOption("Populares")} 
            className={`py-2 px-4 rounded-md border-2 cursor-pointer ${activeOption === "Populares" ? 'bg-zinc-300 text-black border-zinc-300' : 'border-neutral-800'}`}
          >
            Populares
          </span>
          <span 
            onClick={() => setActiveOption("Novidades")} 
            className={`py-2 px-4 rounded-md border-2 cursor-pointer ${activeOption === "Novidades" ? 'bg-zinc-300 text-black border-zinc-300' : 'border-neutral-800'}`}
          >
            Novidades
          </span>
        </div>  
      </div>

      <div>
        <h2 className="text-2xl font-black">{activeOption}</h2>
      </div>
    </div>
  )
}
