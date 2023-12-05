export interface FamilyObject {
    data:  Datum[];
    links: RootObjectLinks;
    meta:  Meta;
   }
   
   export interface Datum {
    common_name:    null;
    division_order: null;
    id:             number;
    links:          DatumLinks;
    name:           string;
    slug:           string;
   }
   
   export interface DatumLinks {
    division_order: null;
    genus:          string;
    self:           string;
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
   