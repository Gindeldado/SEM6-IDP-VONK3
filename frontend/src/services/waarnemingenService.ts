/**
 * service/waarnemingenService.ts
 * Regelt alleen req naar database
 */
import { FormatDate } from "../components/PeriodeKiezer";

export type Buurt = {
  startDate: Date;
  endDate: Date;
  buurt: string;
};

/**
 * Haalt waarnemingen op voor een bepaalde buurt binnen een datumbereik.
 * @param buurt Object met buurtnaam en periode (startDate, endDate)
 * @returns Promise met opgehaalde data
 */
export async function fetchWaarnemingen(buurt: Buurt): Promise<any> {
    const params = new URLSearchParams();
    params.append("start", (FormatDate(buurt.endDate)));
    params.append("end", (FormatDate(buurt.startDate)));
    params.append("buurt", buurt.buurt);

    const response = await fetch(`http://145.24.222.46:8082/buurt?${params}`);

    if (!response.ok) {
        throw new Error("Error fetchin data!");
    }

    return await response.json();
}