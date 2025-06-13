/**
 * haalt uit (buurt)data de totaal aantal waarnemingen en aantal waarnemingen per soort.
 * 
 * @param data Raw data object met waarnemingen en resultaat telling
 * @returns Object met totaal aantal resultaten (results) en een object (diffSpicies) dat per soort het aantal waarnemingen telt
 */

export function useParsedBuurtData(data: any) {
    const results = data.results_count;

    const diffSpicies: { [key: string]: number} = {};
    data.data.forEach((w: any) => {
        const spicies = w.nederlandse_naam;
        if(diffSpicies[spicies]){
            diffSpicies[spicies]++;
        }else{
            diffSpicies[spicies] = 1;
        }
    });

    return { results , diffSpicies};
}

