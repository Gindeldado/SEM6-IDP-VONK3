import { LatLngTuple } from "leaflet"
import { CircleMarker } from "react-leaflet"


type Props = {
  markers: LatLngTuple[];
  clickedWaarnemingId: string;
  setClickedWaarnemingId: (id: string) => void;
};

/**
 * Component die markers toont op de kaart als CircleMarkers.
 * Niet-geselecteerde markers worden standaard weergegeven.
 * De geselecteerde marker wordt groter en opvallender weergegeven.
 * Klikken op een marker selecteert deze.
 * 
 * @param markers - Array van marker-coördinaten.
 * @param clickedWaarnemingId - Huidig geselecteerde marker ID.
 * @param setClickedWaarnemingId - Functie om selectie te veranderen.
 * @returns React fragment met CircleMarkers.
 */
export function DisplayMarkers({ markers, clickedWaarnemingId, setClickedWaarnemingId }: Props) {
  return (
    <>
      {markers.map((position, idx) => {
        const isSelected = clickedWaarnemingId === String(idx);
        if(isSelected) return null;

        return (
          <CircleMarker
            key={`marker-${idx}`}
            center={position}
            radius={  5} 
            pathOptions={{
              color: "#0b0b5e",     
              fillColor: "#3471eb", 
              fillOpacity: 0.5,
            }}
            eventHandlers={{
              click: () => {
                setClickedWaarnemingId(String(idx));    
              },
            }}
          />
        );
      })}

      {/* Highlighting selected waarneming marker */}
      {clickedWaarnemingId ? (
        <CircleMarker
          key={`marker-${clickedWaarnemingId}`}
          center={markers[Number(clickedWaarnemingId)]}
          radius={7}
          pathOptions={{
            color: "#053315",
            fillColor: "#0ca642",
            fillOpacity: 0.8,
          }}
          eventHandlers={{
            click: () => {
              setClickedWaarnemingId(clickedWaarnemingId);
            },
          }}
        />
      ) : null}
    </>
  );
}