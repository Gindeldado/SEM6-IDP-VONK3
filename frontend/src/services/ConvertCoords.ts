/**
 * Werd gebruikt om de polygonen cordinaten voor de kaar naar het goede
 * stelsel te zetten voor Leaflet 
 */
import proj4 from "proj4";

proj4.defs("EPSG:28992", "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=1 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.2369,50.0087,465.658,0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +units=m +no_defs");

export function convertToWGS(x: number, y: number): [number, number] {
    // for some reason the order is reversed in database
  return proj4("EPSG:28992", "EPSG:4326", [x, y]) as [number, number];
}