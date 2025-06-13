const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

/** Lijst van toegestane buurtnamen die via de API opgevraagd mogen worden */
const AllowedBuurten = [
    "Afrikaanderwijk",
    "Agniesebuurt",
    "Bedrijvenpark Noord-West",
    "Bergpolder",
    "Beverwaard",
    "Blijdorp",
    "Blijdorpsepolder",
    "Bloemhof",
    "Bospolder",
    "Botlek",
    "Buitenwater",
    "Carnisse",
    "Charlois Zuidrand",
    "Cool",
    "Cs Kwartier",
    "De Esch",
    "Delfshaven",
    "Dijkzigt",
    "Dorp",
    "Eemhaven",
    "Europoort",
    "Feijenoord",
    "Groot IJsselmonde",
    "Heijplaat",
    "Het Lage Land",
    "Hillegersberg Noord",
    "Hillegersberg Zuid",
    "Hillesluis",
    "Hoogvliet Noord",
    "Hoogvliet Zuid",
    "Katendrecht",
    "Kleinpolder",
    "Kop van Zuid",
    "Kop van Zuid - Entrepot",
    "Kralingen Oost",
    "Kralingen West",
    "Kralingse Bos",
    "Kralingseveer",
    "Landzicht",
    "Liskwartier",
    "Lombardijen",
    "Maasvlakte",
    "Middelland",
    "Molenlaankwartier",
    "Nesselande",
    "Nieuw Crooswijk",
    "Nieuwe Werk",
    "Nieuwe Westen",
    "Nieuw Mathenesse",
    "Noordereiland",
    "Noord Kethel",
    "Noordzeeweg",
    "Ommoord",
    "Oosterflank",
    "Oud Charlois",
    "Oud Crooswijk",
    "Oude Noorden",
    "Oude Westen",
    "Oud IJsselmonde",
    "Oud Mathenesse",
    "Overschie",
    "Pendrecht",
    "Pernis",
    "Prinsenland",
    "Provenierswijk",
    "Rijnpoort",
    "Rivium",
    "Rozenburg",
    "Rubroek",
    "Schiebroek",
    "Schiemond",
    "Schieveen",
    "'s-Gravenland",
    "Spaanse Polder",
    "Spangen",
    "Stadsdriehoek",
    "Strand en Duin",
    "Struisenburg",
    "Tarwewijk",
    "Terbregge",
    "Tussendijken",
    "Vondelingenplaat",
    "Vreewijk",
    "Waalhaven",
    "Waalhaven Zuid",
    "Wielewaal",
    "Witte Dorp",
    "Zestienhoven",
    "Zevenkamp",
    "Zuiderpark",
    "Zuidplein",
    "Zuidwijk"
];

/** 
 * Haalt een lijst met buurten en hun bijbehorende gegevens op uit de database.  
 * Route: GET /buurten
 */
app.get('/buurten', async (req, res) => {
  const WAARNEMINGEN_DB = require('./waarnemingenRequests.js');
  WAARNEMINGEN_DB.getBuurten()
  .then(data => {
      res.json({ data });
  })
  .catch(err => {
      console.error('[Backend] Database error D:', err.message);
      res.status(500).json({ error: 'Database query failed D:' , log: err.message});
  });
});

/** 
 * Haalt alleen de namen van de buurten op (zonder verdere data).  
 * Route: GET /buurten_names
 */
app.get('/buurten_names', async (req, res) => {
  const WAARNEMINGEN_DB = require('./waarnemingenRequests.js');
  WAARNEMINGEN_DB.getBuurtenNames()
  .then(data => {
      res.json({ data });
  })
  .catch(err => {
      console.error('[Backend] Database error D:', err.message);
      res.status(500).json({ error: 'Database query failed D:' , log: err.message});
  });
});

/** 
 * Haalt waarnemingen op voor een specifieke buurt tussen twee datums.  
 * Queryparameters: ?start=YYYY-MM-DD&end=YYYY-MM-DD&buurt=...  
 * Route: GET /buurt
 */
app.get('/buurt', async (req, res) => {
  const startDate = req.query.start;
  const endDate = req.query.end;  
  const buurt = req.query.buurt;
  
  
  if (!AllowedBuurten.includes(buurt)) {
    return res.status(400).json({
      error: 'Invalid buurt provided...',
    });
  }

  /**
   * Validatie functie voor de datum
   * @param {*} str datum
   * @returns status code 400 wanneer het geen datum is
   */
  const isValidDate = (str) => /^\d{4}-\d{2}-\d{2}$/.test(str) && !isNaN(new Date(str));
  if (!startDate || !endDate || !isValidDate(startDate) || !isValidDate(endDate)) {
    return res.status(400).json({
      error: 'Invalid dates provided...',
    });
  }
  const WAARNEMINGEN_DB = require('./waarnemingenRequests.js');
  WAARNEMINGEN_DB.GetWaarnemingen(buurt, startDate, endDate)
  .then(data => {
    if (typeof data === 'string') {
      // Dit gebeurt als result.length < 1 dus geen waarnemingennn..
      return res.json({ results_count: 0, message: data });
    }

    res.json({ results_count: data.length, data });
  })
  .catch(err => {
    console.error('[Backend] Database error D:', err.message);
    res.status(500).json({ error: 'Database query failed D:', log: err.message });
  });
});


app.listen(3000, () => console.log('Backend draait!'));