import { LatLngBounds, LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

/**
 * Berekent de bounds (grenzen) van een buurt-polygon op basis van de naam en polygon-gegevens.
 * @param clickedBuurtPolygonName - Naam van de geselecteerde buurt.
 * @param BuurtPolygonsGeoData - Lijst met buurtpolygonen en hun coördinaten.
 * @returns LatLngBounds-object dat de grenzen van de polygon omsluit.
 */
function getBoundsForBuurt({clickedBuurtPolygonName, BuurtPolygonsGeoData } : Props) {
    const polygonCoordsIndex = BuurtPolygonsGeoData.findIndex((item) => item.buurtName === clickedBuurtPolygonName);
    const polygonPositions = BuurtPolygonsGeoData[polygonCoordsIndex].positions;
    return new LatLngBounds(polygonPositions.flat());
}
type Props = {
    clickedBuurtPolygonName: string;
    BuurtPolygonsGeoData: { buurtName: string; positions: LatLngTuple[][] } [];
};

/**
 * React component die de kaart automatisch centreert en zoomt op het geselecteerde buurt-polygon.
 * Werkt alleen binnen een <MapContainer> van react-leaflet.
 * 
 * @param clickedBuurtPolygonName - Naam van de geselecteerde buurt.
 * @param BuurtPolygonsGeoData - Lijst van buurtpolygonen met coördinaten.
 * @returns null (render niets visueel).
 */
export function MapCenterPolygon({clickedBuurtPolygonName, BuurtPolygonsGeoData } : Props){
    const map = useMap(); //map mag alleen vanuit <mapcontainer> geroepen worden

    useEffect(()=> { 
        if (!clickedBuurtPolygonName) return;
        const bound = getBoundsForBuurt({clickedBuurtPolygonName,BuurtPolygonsGeoData})
        map.fitBounds(bound,{ padding: [20, 20], maxZoom: 13 })
    }, [clickedBuurtPolygonName]);

    return null;
}


type PropsMarker = {
    markerslist: LatLngTuple[];
    markerId:string;
};

/**
 * React component die de kaart centreert op een marker uit de lijst op basis van de markerId.
 * Werkt alleen binnen een <MapContainer> van react-leaflet.
 * 
 * @param markerslist - Lijst met coordinaten van markers.
 * @param markerId - ID (index) van de te centreren marker.
 * @returns null (render niets visueel).
 */
export function MapCenterMarker({markerslist, markerId } : PropsMarker){
    const map = useMap(); //map mag alleen vanuit <mapcontainer> geroepen worden

    useEffect(()=> { 
        if (!markerId) return;
        map.setView(markerslist[Number(markerId)], map.getZoom(), {
        animate: true,
        duration: 0.5,
      });
    }, [markerId]);

    return null;
}