export interface ISpeelterrein {
}

 export interface FieldAliases {
   OBJECTID: string;
   ID: string;
   naam: string;
   straat: string;
   huisnummer: string;
   postcode: string;
   district: string;
   begindatum: string;
   toestellen: string;
   financiering: string;
   opmerking: string;
   x_coord: string;
   y_coord: string;
   GISID: string;
   FOTO1: string;
   NAAM_FOTO1: string;
 }

 export interface SpatialReference {
   wkid: number;
   latestWkid: number;
 }

 export interface Field {
   name: string;
   type: string;
   alias: string;
   length?: number;
 }

 export interface Attributes {
   OBJECTID: number;
   ID: string;
   naam: string;
   straat: string;
   huisnummer: string;
   postcode: number;
   district: string;
   begindatum: any;
   toestellen?: number;
   financiering: string;
   opmerking: string;
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

 export interface RootSpeelterrein {
   displayFieldName: string;
   fieldAliases: FieldAliases;
   geometryType: string;
   spatialReference: SpatialReference;
   fields: Field[];
   features: Feature[];
 }