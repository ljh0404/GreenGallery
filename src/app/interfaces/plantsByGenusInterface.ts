export interface PlantsObject {
    data:  Datum[];
    links: RootObjectLinks;
    meta:  Meta;
   }
   
   export interface Datum {
    family: Family;
    id:     number;
    links:  DatumLinks;
    name:   string;
    slug:   string;
   }
   
   export interface Family {
    common_name: null;
    id:          number;
    links:       FamilyLinks;
    name:        string;
    slug:        string;
   }
   
   export interface FamilyLinks {
    division_order: null;
    genus:          string;
    self:           string;
   }
   
   export interface DatumLinks {
    family:  string;
    plants:  string;
    self:    string;
    species: string;
   }
   
   export interface RootObjectLinks {
    first: string;
    last:  string;
    self:  string;
   }
   
   export interface Meta {
    total: number;
   }
   