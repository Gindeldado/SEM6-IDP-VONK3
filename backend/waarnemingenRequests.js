const db = require('./dbConnector.js');

/**
 * Haalt een lijst met unieke buurtnamen en hun geometrie op uit de database.
 * @returns [{ buurtnaam, geometry }, ...]
 */
exports.getBuurten = async () =>{
    try {
        const result = await db.any(`
            SELECT DISTINCT ON (buurtnaam) buurtnaam, geometry
            FROM public.wijken
            Order BY buurtnaam
        `);
        console.log(`Retrieved ${result.length} results!`);
        return result;
    } catch (err) {
        throw err;
    }
};

/**
 * Haalt alleen de unieke buurtnamen op (zonder geometrie).
 * @returns [{ buurtnaam }, ...]
 */
exports.getBuurtenNames = async () =>{
    try {
        const result = await db.any(`
            SELECT DISTINCT ON (buurtnaam) buurtnaam
            FROM public.wijken
            Order BY buurtnaam
        `);
        return result;
    } catch (err) {
        throw err;
    }
};

/**
 * Haalt alle waarnemingen op binnen een opgegeven buurt en datumbereik.
 * @param {*} buurt - Naam van de buurt
 * @param {*} time_start - Startdatum (YYYY-MM-DD)
 * @param {*} time_end - Einddatum (YYYY-MM-DD)
 * @returns array van waarnemingen of een string als er niets is gevonden.
 */
exports.GetWaarnemingen = async (buurt, time_start, time_end) => {
    const q = `
        SELECT
            id,
            datum,
            wetenschappelijke_naam,
            engelse_naam,
            aantal,
            nederlandse_naam,
            geslacht,
            gebruikersnaam,
            naam_dag_nl,
            wijknaam,
            buurtnaam,
            geometry,
            gemiddelde_temperatuur,
            activiteit
        FROM waarnemingen_volledig
        WHERE datum BETWEEN \${time_start} AND \${time_end}
        AND buurtnaam = \${buurt}
        ORDER BY datum DESC
    
    `;

    try {
        const result = await db.any(q, { time_start, time_end, buurt });
        if(result.length < 1)
        {
            return `Er zijn geen waarnemingen gevonden bij de opgegeven periode in ${buurt}...`
        }
        return result;
    } catch (err) {
        throw err;
    }
};
