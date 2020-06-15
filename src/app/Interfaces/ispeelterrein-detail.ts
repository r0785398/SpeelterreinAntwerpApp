export interface ISpeelterreinDetail {
}

export interface Attributes {
 OBJECTID: number;
 ID: string;
 naam: string;
 straat: string;
 huisnummer: string;
 postcode: number;
 district: string;
 begindatum: number;
 toestellen: number;
 financiering: string;
 opmerking?: any;
 x_coord: number;
 y_coord: number;
 GISID: string;
 FOTO1: string;
 NAAM_FOTO1: string;
}

export interface Geometry {
 x: number;
 y: number;
}

export interface Feature {
 attributes: Attributes;
 geometry: Geometry;
}

export interface RootSpeelterreinDetail {
 feature: Feature;
}