export type PeriodeBereik = {
  startDate: string;
  endDate: string;
};

/**
 * Formatteert een JavaScript Date-object naar een string in het formaat 'yyyy-mm-dd'.
 * @param date - De datum die geformatteerd moet worden.
 * @returns De geformatteerde datum als string.
 */
export function FormatDate(date: Date): string { 
    return date.toISOString().split("T")[0];
}

/**
 * 
 * @returns Een standaard eind datum van 3 maanden terug
 */
export const staringEndDate = () => { 
    const m = new Date();
    m.setMonth(m.getMonth() - 3);
    return m
}

type PeriodeKiezerProps = {
    periodeBereik: PeriodeBereik;
    setPeriodeBereik: (pb: PeriodeBereik) => void;
};

/**
 * Component waarin gebruikers een begin- en einddatum kunnen kiezen.
 * @param periodeBereik - Het huidige datumbereik.
 * @param setPeriodeBereik - Setter functie om het datumbereik aan te passen.
 */
export function PeriodeKiezerComponent({ periodeBereik, setPeriodeBereik }: PeriodeKiezerProps){
    /**
   * Valideert of een ingevoerde datum geldig is als start- of einddatum.
   * @param d - De te valideren datum.
   * @param isStartDate - Boolean die aangeeft of het om een startdatum gaat.
   * @returns True als de datum geldig is, anders false.
   */
    function validatePeriodeBereik(d: Date, isStartDate: boolean): boolean {
        const now = new Date();
        if (isStartDate) {
            if (d > now ) return false;
            if (d < new Date(periodeBereik.endDate)) return false;
            return true;
        } 
        else {
            if (d > new Date(periodeBereik.startDate)) return false;
            return true;
        }
    }
    
    /**
   * Zet de startdatum op de datum van vandaag als dat nog niet zo is.
   */
    const SetToCurrentDate = () =>{
        if (periodeBereik.startDate === FormatDate(new Date(Date.now()))) return;

        setPeriodeBereik({
            ...periodeBereik,
            startDate: (FormatDate(new Date (Date.now())))
        });
    }
    
    /**
   * Toont een alert met een foutmelding bij ongeldige invoer.
   * @param msg - De foutmelding die getoond moet worden.
   */
    const Reset = (msg: string) => {
        alert(msg)  
    }

    /**
   * Verwerkt en valideert een nieuwe startdatum uit het inputveld.
   * @param e - Het change-event van het inputveld.
   */
    const SetStartDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let dateStr = e.target.value;
        if(!dateStr)    return;

        const d = new Date(dateStr);

        if(validatePeriodeBereik(d, true)){
            // Update prop
            setPeriodeBereik({
                ...periodeBereik,
                startDate: FormatDate(d)
            });
        }else{Reset("Start datum is incorrect! Maximaal datum van vandaag en minimaal een dag na de einddatum")}
    }

    /**
   * Verwerkt en valideert een nieuwe einddatum uit het inputveld.
   * @param e - Het change-event van het inputveld.
   */
    const SetEndDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let dateStr = e.target.value;
        if(!dateStr)    return;
        
        const d = new Date(e.target.value);
        if(validatePeriodeBereik(d, false)){
            const convertedDate = new Date(d);
            // Update prop
            setPeriodeBereik({
                ...periodeBereik,
                endDate: FormatDate(convertedDate)
            });
        }else{Reset("Eind datum is incorrect! Maximaal een dag voor vandaag")}
    }

    return(
        <div className="flex justify-center">
        <div className="flex flex-col gap-2 p-1 border rounded-lg shadow bg-white w-full max-w-sm text-sm">
            <p className="text-center text-xs font-medium text-gray-800">
            Kies een begin- en einddatum
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            {/* start */}
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-0.5">
                <label htmlFor="start" className="text-gray-600 text-xs">Start</label>
                <button
                    type="button"
                    className="px-3 py-.5 bg-[#5F7447] text-white text-xs rounded-md hover:bg-[#afc795] transition duration-200 shadow-sm"
                    onClick={SetToCurrentDate}
                >Vandaag</button>
                </div>
                <input
                id="start"
                type="date"
                className="border border-gray-300 rounded px-1.5 py-0.5 w-full text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={SetStartDate}
                value={(periodeBereik.startDate)}
                />
            </div>

            {/* eind */}
            <div className="flex flex-col">
                <label htmlFor="eind" className="mb-0.5 text-gray-600 text-xs">Eind</label>
                <input
                id="eind"
                type="date"
                className="border border-gray-300 rounded px-1.5 py-0.5 w-full text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={SetEndDate}
                value={(periodeBereik.endDate)}
                />
            </div>
            </div>
        </div>
        </div>
    );
}
