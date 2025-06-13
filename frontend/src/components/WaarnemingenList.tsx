import { useScrollToSelected } from "../services/useBuurtFocusScroll";

type WaarnemingenListProps = {
    allWaarnemingenData: any;
    clickedWaarnemingId: string;
    setClickedWaarnemingId: (id: string) => void;
}

/**
 * Component die een lijst van waarnemingen toont.
 * - Scrollt automatisch naar de geselecteerde waarneming (via useScrollToSelected hook).
 * - Toont melding als er geen data is of als er niets geselecteerd is.
 * - Markeert geselecteerde waarneming visueel.
 *
 * @param allWaarnemingenData Gegevens van alle waarnemingen (inclusief count en data array)
 * @param clickedWaarnemingId ID van de geselecteerde waarneming (string index)
 * @param setClickedWaarnemingId Setter functie om geselecteerde waarneming aan te passen
 */
export function WaarnemingenList({allWaarnemingenData, clickedWaarnemingId, setClickedWaarnemingId}: WaarnemingenListProps){
    const { waarnemingFocusRef } = useScrollToSelected(clickedWaarnemingId);

    if(!allWaarnemingenData){
        return (
            <div className="w-full h-[310px] p-4 rounded-xl shadow bg-white overflow-hidden flex flex-col">
                Selecteer een buurt op de kaart of uit het dropdown-keuzemenu.
            </div>
        );
    }

    if ( allWaarnemingenData.results_count < 1) {
        return (
            <div className="w-full h-[310px] p-4 rounded-xl shadow bg-white overflow-hidden flex flex-col">
                Er is geen data beschikbaar. Kies een ander gebied op de kaart of wijzig de tijdsperiode.
            </div>
        );
    }

    return (
        <div className="w-full h-[310px] p-4 rounded-xl shadow bg-white overflow-hidden flex flex-col">
        <h2 className="text-lg font-bold mb-2 text-gray-800">
            Totaal aantal waarnemingen in{' '}
            <span className="text-[#5F7447] ">{allWaarnemingenData.data[0].buurtnaam}</span>
            : {allWaarnemingenData.results_count}
        </h2>

        <li className="p-3 bg-gray-200 rounded-md flex text-sm text-gray-700 font-medium">
            <div className="w-1/3">Datum</div>
            <div className="w-1/3">Naam soort</div>
            <div className="w-1/3 text-right">Aantal</div>
        </li>

        <div className="overflow-y-auto flex-grow pr-1">
            <ul className="space-y-2">
            {allWaarnemingenData.data.map((item: any, i: number) => {
                const isSelected = i === Number(clickedWaarnemingId) && clickedWaarnemingId !== "";
                return (
                <li
                    key={i}
                    ref={waarnemingFocusRef(i)}
                    onClick={() => setClickedWaarnemingId(String(i))}
                    className={`p-3 rounded-md flex justify-between items-center text-sm cursor-pointer
                    ${isSelected ? "bg-green-200 border border-green-700" : "bg-gray-100"}
                    text-gray-700 hover:bg-green-100 transition-all`}
                >
                    <div className="w-1/3">{item.datum.slice(0, 10) }</div>
                    <div className="w-1/3">{item.nederlandse_naam ?? "Onbekend"}</div>
                    <div className="w-1/3 text-right">{item.aantal}</div>
                </li>
                );
            })}
            </ul>
        </div>
        </div>
    );
}
