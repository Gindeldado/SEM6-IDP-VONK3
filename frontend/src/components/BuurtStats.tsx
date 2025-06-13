import { useParsedBuurtData } from "../services/useBuurtStats";

type BuurtStatsProps = {
  data: any;
};

/**
 * Toont een lijst van soorten en hun waarnemingsaantallen 
 * in een geselecteerde buurt.
 * @param data Waarnemingen data
 * @returns Een lijst van alle soorten met daarnaast de hoeveelheid als component
 */
export function BuurtStats({ data }: BuurtStatsProps) {
  if (!data) {
    return (
      <div className="w-full h-[250px] p-4 rounded-xl shadow bg-white overflow-hidden flex flex-col">
        Selecteer een buurt op de kaart of uit het dropdown-keuzemenu. 
      </div>
    );
  }

  if (data.results_count > 0) {
    const { diffSpicies } = useParsedBuurtData(data);
    const sortedSpecies = Object.entries(diffSpicies).sort(([, a], [, b]) => b - a);

    return (
      <div className="border border-zinc-300 rounded-lg overflow-hidden w-full max-h-[250px]">
      <div className="grid grid-cols-2 font-semibold text-white bg-[#5F7447] py-2 text-sm rounded-t-lg divide-x divide-white">
        <span className="text-center">Soorten</span>
        <span className="text-center">Waarnemingen</span>
      </div>

      <div className="divide-y divide-zinc-300 overflow-y-auto max-h-48">
        {sortedSpecies.map(([naam, count], index) => (
          <div
            key={index}
            className="grid grid-cols-2 text-sm divide-x divide-zinc-300"
          >
            <span className="pl-4 py-2">{naam}</span>
            <span className="text-center py-2">{count}</span>
          </div>
        ))}
      </div>
    </div>
    );
  }

  return (
    <div className="w-full h-[250px] p-4 rounded-xl shadow bg-white overflow-hidden flex flex-col font-medium items-center justify-center">
      Er is geen data beschikbaar. Kies een ander gebied op de kaart of wijzig de tijdsperiode.
    </div>
  );
}



/**
 * [Wordt niet meer gebruikt]
 * Toont het totaal aantal waarnemingen in een buurt.
 * @param data waarnemingen data 
 * @returns aantal waarnemingen component
 */
export function TotaalWaarnemingen({ data }: BuurtStatsProps) {
    if (!data) {
        return (
            <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center w-[150px] h-[100px] self-start">
                
            </div>
        );
    }
    if (data.results_count > 0){
        const { results } = useParsedBuurtData(data);

        return (
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center w-[150px] h-[100px] self-start">
            <span className="text-gray-500 text-sm text-center">Totaal aantal waarnemingen</span>
            <span className="text-3xl font-bold text-[#475d46] mt-2">{results}</span>
        </div>
    )
    }
    return (
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center w-[150px] h-[100px] self-start">
            No data
        </div>
    );
}

/**
 * Toont het totale aantal waarnemingen als los getal.
 * @param data waarnemingen data 
 * @returns totaal aantal waarnemingen component 
 */
export function AantalWaarnemingen({ data }: BuurtStatsProps) {
  if (!data || data.results_count <= 0) return <span className="text-4xl font-medium">-</span>;

  const { results } = useParsedBuurtData(data);
  return <span className="text-4xl font-medium">{results}</span>;
}
