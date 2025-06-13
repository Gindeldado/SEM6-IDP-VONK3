import { MapContainer, TileLayer,Polygon  } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

import {polygons_data} from "../services/polygonen"; // Buurt Polygons geo data
import {convertToWGS} from "../services/ConvertCoords";

import {DisplayMarkers} from "./Markers"
import { getLocationsMarkersData } from "../services/useMarkers"
import { DropdownBuurtSelector } from './DropdownBuurtSelector';
import { MapCenterMarker, MapCenterPolygon } from './LeafletFocus';

const startCenterPosition: LatLngTuple = [51.91, 4.44];
const zoomLevel: number = 11;
const polygonSelectedColor: string = "#00e676";
const polygonDefaultColor: string = "#2e7d32";
const borderThicSelected: number = 4;
const borderThicDefault: number = 2;
// alle buurt namen zitten hierin - gevuld door InitBuurtPolygonsGeoData
let allBuurtNames: string[] = []


/**
 * Laadt en zet polygon data om naar LatLngTuple format.
 * Vul globale allBuurtNames met alle buurtnamen.
 * 
 * @returns Array met buurtnamen en hun polygon-coördinaten
 */
function InitBuurtPolygonsGeoData(): { buurtName: string; positions: LatLngTuple[][]; }[] {
    /** NOTE!
     * Laad dit beter in via een json file, kan ook fetchen vand e server
     * en pars dit verder met dit
     */
    const result = [];

    for (const i of polygons_data.data) {
        const buurtName= i.buurtnaam;
        allBuurtNames.push(buurtName);
        const geometry = i.geometry;    
        if (!geometry || !geometry.startsWith("MULTIPOLYGON")) continue;

        const cleaned = geometry
            .replace('MULTIPOLYGON(((', '')
            .replace(')))', '')
            .split('),(');

        const polygons = [];

        for (const polyStr of cleaned) {
            const coords = [];

            for (const pair of polyStr.trim().split(',')) {
                const [xStr, yStr] = pair.trim().split(' ');
                const x = Number(xStr);
                const y = Number(yStr);

                if (!Number.isFinite(x) || !Number.isFinite(y)) continue;

                const [nx, ny] = convertToWGS(x, y);// converter niet meer nodig eigenlijk, sinds coords nu wel goed staan!
                if (!Number.isFinite(nx) || !Number.isFinite(ny)) continue;

                coords.push([ny, nx]); // [lat, lon]
                }

                if (coords.length > 0) {
                polygons.push(coords as LatLngTuple[]);
            }
        }

        if (polygons.length > 0) {
            result.push({
            buurtName: buurtName,
            positions: polygons
            });
        }
    }
    return result;
}


// Contains polygons buurt data from Init func
const BuurtPolygonsGeoData: { buurtName: string; positions: LatLngTuple[][] } [] = InitBuurtPolygonsGeoData();

type ClickedPolygonProps = {
    clickedBuurtPolygonName: string;
    setClickedBuurtPolygonName: (n: string) => void;
    waarnemingenData: any;
    setClickedWaarnemingId: (n: string) => void;
    clickedWaarnemingId: any;
}

/**
 * Kaartcomponent die:
 * - Buurt polygons toont met selectie-visualisatie
 * - Waarnemingen als markers toont
 * - Centert op geselecteerde polygon en marker
 * - Dropdown menu toont voor selectie van buurt
 *
 * @param clickedBuurtPolygonName Geselecteerde buurtnaam
 * @param setClickedBuurtPolygonName Setter voor geselecteerde buurt
 * @param waarnemingenData Data voor markers (waarnemingen)
 * @param clickedWaarnemingId Geselecteerde marker ID
 * @param setClickedWaarnemingId Setter voor geselecteerde marker
 */
export function LeafletPolygonsMap({clickedBuurtPolygonName, setClickedBuurtPolygonName, waarnemingenData, clickedWaarnemingId,setClickedWaarnemingId}: ClickedPolygonProps){

    const handleBuurtPolygonClick = (p : string) =>{
        if(p !== clickedBuurtPolygonName){
            setClickedBuurtPolygonName(p);
        }
    };

    const markers = getLocationsMarkersData(waarnemingenData);

    return(
    <div className="s rounded-2xl shadow-xl p-4">
        <div className="rounded-xl overflow-hidden">
            <MapContainer center={startCenterPosition} zoom={zoomLevel} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Display all stadsdelen */}
                {
                    BuurtPolygonsGeoData.map((polygon, index) => (
                        <Polygon
                            key={index}
                            pathOptions={{ 
                                color: polygon.buurtName === clickedBuurtPolygonName ? polygonSelectedColor : polygonDefaultColor, // Highlight selected
                                weight: polygon.buurtName === clickedBuurtPolygonName ? borderThicSelected : borderThicDefault,           // Thicker border
                            }}
                            positions={polygon.positions}
                            eventHandlers={{
                                click: () => handleBuurtPolygonClick(polygon.buurtName)                              
                            }}
                        />
                    ))
                }
                {/* Display waarnemingen als cirkels */}
                {
                    <DisplayMarkers
                        markers={markers}
                        clickedWaarnemingId={clickedWaarnemingId}
                        setClickedWaarnemingId={setClickedWaarnemingId}
                    />
                }
                <MapCenterPolygon
                    BuurtPolygonsGeoData={BuurtPolygonsGeoData}
                    clickedBuurtPolygonName={clickedBuurtPolygonName}
                />
                <MapCenterMarker 
                    markerslist={markers} 
                    markerId={clickedWaarnemingId}                
                />
            </MapContainer>

            <p>{clickedBuurtPolygonName}</p>
            
            <DropdownBuurtSelector
                selectedBuurt={clickedBuurtPolygonName}
                onSelectBuurt={setClickedBuurtPolygonName}
                buurten={allBuurtNames}
            />

        </div>
    </div>
    );
}