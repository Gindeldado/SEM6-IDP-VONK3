import { useEffect, useState } from "react";
import { Buurt, fetchWaarnemingen } from "./waarnemingenService";
import { FormatDate } from "../components/PeriodeKiezer";

/**
 * Custom React hook om waarnemingen op te halen op basis van een geselecteerde buurt en periode.
 * Roept de API aan via fetchWaarnemingen en houdt de response data bij in state.
 * 
 * @param {Buurt} buurt Object met buurtnaam en datumbereik voor filtering
 * @returns {{ data: any | null }} Opgehaalde waarnemingen data, of null als nog niet geladen
 */
export function useWaarnemingen(buurt:Buurt) {
    // const [info, setInfo] = useState<string | null>(null);
    const [data, setData] = useState<any | null>(null);
    // const [error, setError] = useState<string | null>(null);
    
    useEffect(()=>{
        if (!buurt.buurt) return;

        fetchWaarnemingen(buurt)

        .then((res)=>{
            setData(res);
        })
        .catch((err) => console.log(err.message))
        // .finally(() => console.log(data))

    },[buurt.buurt, FormatDate(buurt.startDate), FormatDate(buurt.endDate)]);

    return {data};
}


