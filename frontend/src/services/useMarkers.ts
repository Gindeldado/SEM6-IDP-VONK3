import { LatLngTuple } from "leaflet";

/**
 * Parsed een WKT POINT-string naar een LatLngTuple [lat, lng].
 * @param p - WKT string in het formaat 'POINT(lng lat)'
 * @returns LatLngTuple of null als de string niet overeenkomt
 */
function ParsePoint(p: string): LatLngTuple | null {
  const match = p.match(/^POINT\(\s*([\d\.\-]+)\s+([\d\.\-]+)\s*\)$/);
  if (!match) return null;

  const lng = parseFloat(match[1]);
  const lat = parseFloat(match[2]);
  return [lat, lng];
}

/**
 * Haalt coördinaten uit buurtdata en zet deze om naar een array van LatLngTuple voor markers.
 * Filtert ongeldige of ontbrekende geometrieën eruit.
 * 
 * @param buurtData - Raw buurtdata met geometrie strings
 * @returns Array van LatLngTuple voor gebruik als markers op de kaart
 */
export function getLocationsMarkersData(buurtData: any): LatLngTuple[] {
    console.log("getLocationsMarkers called!");

    if (!buurtData || !Array.isArray(buurtData.data)) return [];

    return buurtData.data
        .map((item: any) => ParsePoint(item.geometry))
        .filter((point: any): point is LatLngTuple => point !== null);
}
