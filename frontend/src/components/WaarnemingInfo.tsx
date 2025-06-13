type Props = {
    data : any;
    id: any;
};
/**
 * Component die gedetaieerde informatie toont over de geselecteerde waarneming.
 * @param data Gegevens van alle waarnemingen (inclusief count en data array)
 * @param id ID van de geselecteerde waarneming (string index)
 */
export function DisplayWaarnemingInfo({ data, id }: Props){
    if(data === null){
        return (
            <div>Selecteer eerst een buurt!</div>
        );
    }
    if(data.data === undefined){
        return (
            <div>Er is geen data beschikbaar</div>
        );
    }
    const waarneming = (data.data[id])
    if(!waarneming)
    {
        return(
            <div> Klik op een waarneming op de kaart (blauwe cirkel) of selecteer er een uit de lijst!</div>
        );
    }
    return (
        <div className="overflow-auto p-4 text-sm space-y-2 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Waarneming Details</h2>
            <ul className="space-y-1">
                <li><strong>Datum:</strong> {new Date(waarneming.datum).toLocaleDateString()}</li>
                <li><strong>Wetenschappelijke naam:</strong> {waarneming.wetenschappelijke_naam}</li>
                <li><strong>Engelse naam:</strong> {waarneming.engelse_naam}</li>
                <li><strong>Nederlandse naam:</strong> {waarneming.nederlandse_naam}</li>
                <li><strong>Geslacht:</strong> {waarneming.geslacht}</li>
                <li><strong>Gebruikersnaam:</strong> {waarneming.gebruikersnaam}</li>
                <li><strong>Dag van de week:</strong> {waarneming.naam_dag_nl}</li>
                <li><strong>Wijk:</strong> {waarneming.wijknaam}</li>
                <li><strong>Buurt:</strong> {waarneming.buurtnaam}</li>
                <li><strong>Temperatuur:</strong> {waarneming.gemiddelde_temperatuur}°C</li>
                <li><strong>Activiteit:</strong> {waarneming.activiteit}</li>
            </ul>
        </div>
  );
}