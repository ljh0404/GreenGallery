export interface SearchObject {
    data:  Datum[];
    links: RootObjectLinks;
    meta:  Meta;
   }
   
   export interface Datum {
    author:             string;
    bibliography:       string;
    common_name:        null | string;
    family:             string;
    family_common_name: null | string;
    genus:              string;
    genus_id:           number;
    id:                 number;
    image_url:          string;
    links:              DatumLinks;
    rank:               Rank;
    scientific_name:    string;
    slug:               string;
    status:             Status;
    synonyms:           string[];
    year:               number;
   }
   
   export interface DatumLinks {
    genus: string;
    plant: string;
    self:  string;
   }
   
   export enum Rank {
    Species = "species",
   }
   
   export enum Status {
    Accepted = "accepted",
   }
   
   export interface RootObjectLinks {
    first: string;
    last:  string;
    next:  string;
    self:  string;
   }
   
   export interface Meta {
    total: number;
   }
   