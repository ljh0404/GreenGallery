export interface RootObject2 {
    data: Data;
    meta: Meta;
   }
   
   export interface Data {
    author:             string;
    bibliography:       string;
    common_name:        string;
    family:             Family;
    family_common_name: null;
    forms:              any[];
    genus:              GenusClass;
    genus_id:           number;
    hybrids:            any[];
    id:                 number;
    image_url:          string;
    links:              DataLinks;
    main_species:       MainSpecies;
    main_species_id:    number;
    observations:       string;
    scientific_name:    string;
    slug:               string;
    sources:            Source[];
    species:            Species[];
    subspecies:         Species[];
    subvarieties:       any[];
    varieties:          any[];
    vegetable:          boolean;
    year:               number;
   }
   
   export interface Family {
    common_name: null;
    id:          number;
    links:       FamilyLinks;
    name:        FamilyEnum;
    slug:        string;
   }
   
   export interface FamilyLinks {
    division_order: null;
    genus:          string;
    self:           string;
   }
   
   export enum FamilyEnum {
    Poaceae = "Poaceae",
   }
   
   export interface GenusClass {
    id:    number;
    links: GenusLinks;
    name:  GenusName;
    slug:  string;
   }
   
   export interface GenusLinks {
    family?: string;
    plants:  string;
    self:    string;
    species: string;
   }
   
   export enum GenusName {
    Dactylis = "Dactylis",
   }
   
   export interface DataLinks {
    genus:   GenusEnum;
    self:    Self;
    species: string;
   }
   
   export enum GenusEnum {
    APIV1GenusDactylis = "/api/v1/genus/dactylis",
   }
   
   export enum Self {
    APIV1PlantsDactylisGlomerata = "/api/v1/plants/dactylis-glomerata",
   }
   
   export interface MainSpecies {
    author:             string;
    bibliography:       string;
    common_name:        string;
    common_names:       { [key: string]: string[] };
    distribution:       Distribution;
    distributions:      Distributions;
    duration:           null;
    edible:             boolean;
    edible_part:        null;
    family:             FamilyEnum;
    family_common_name: null;
    flower:             Flower;
    foliage:            Foliage;
    fruit_or_seed:      FruitOrSeed;
    genus:              GenusName;
    genus_id:           number;
    growth:             Growth;
    id:                 number;
    image_url:          string;
    images:             Images;
    links:              MainSpeciesLinks;
    observations:       string;
    rank:               Rank;
    scientific_name:    string;
    slug:               string;
    sources:            Source[];
    specifications:     Specifications;
    status:             Status;
    synonyms:           Synonym[];
    vegetable:          boolean;
    year:               number;
   }
   
   export interface Distribution {
    doubtful:   string[];
    introduced: string[];
    native:     string[];
   }
   
   export interface Distributions {
    doubtful:   Doubtful[];
    introduced: Doubtful[];
    native:     Doubtful[];
   }
   
   export interface Doubtful {
    id:            number;
    links:         GenusLinks;
    name:          string;
    slug:          string;
    species_count: number;
    tdwg_code:     string;
    tdwg_level:    number;
   }
   
   export interface Flower {
    color:       string[];
    conspicuous: boolean;
   }
   
   export interface Foliage {
    color:          null;
    leaf_retention: null;
    texture:        string;
   }
   
   export interface FruitOrSeed {
    color:            null;
    conspicuous:      boolean;
    seed_persistence: null;
    shape:            null;
   }
   
   export interface Growth {
    atmospheric_humidity:  number;
    bloom_months:          string[];
    days_to_harvest:       null;
    description:           null;
    fruit_months:          null;
    growth_months:         null;
    light:                 number;
    maximum_precipitation: ImumPrecipitation;
    maximum_temperature:   ImumTemperature;
    minimum_precipitation: ImumPrecipitation;
    minimum_root_depth:    MinimumRootDepth;
    minimum_temperature:   ImumTemperature;
    ph_maximum:            number;
    ph_minimum:            number;
    row_spacing:           MinimumRootDepth;
    soil_humidity:         null;
    soil_nutriments:       number;
    soil_salinity:         number;
    soil_texture:          null;
    sowing:                null;
    spread:                MinimumRootDepth;
   }
   
   export interface ImumPrecipitation {
    mm: null;
   }
   
   export interface ImumTemperature {
    deg_c: null;
    deg_f: null;
   }
   
   export interface MinimumRootDepth {
    cm: null;
   }
   
   export interface Images {
    "":     Empty[];
    bark:   Empty[];
    flower: Empty[];
    fruit:  Empty[];
    habit:  Empty[];
    leaf:   Empty[];
    other:  Empty[];
   }
   
   export interface Empty {
    copyright: string;
    id:        number;
    image_url: string;
   }
   
   export interface MainSpeciesLinks {
    genus: GenusEnum;
    plant: Self;
    self:  string;
   }
   
   export enum Rank {
    SSP = "ssp",
    Species = "species",
   }
   
   export interface Source {
    citation:    null | string;
    id:          string;
    last_update: Date;
    name:        SourceName;
    url:         null | string;
   }
   
   export enum SourceName {
    Gbif = "GBIF",
    Ipni = "IPNI",
    PlantNet = "PlantNet",
    Powo = "POWO",
    Wfo = "WFO",
   }
   
   export interface Specifications {
    average_height:        MinimumRootDepth;
    growth_form:           string;
    growth_habit:          string;
    growth_rate:           string;
    ligneous_type:         null;
    maximum_height:        MinimumRootDepth;
    nitrogen_fixation:     null;
    shape_and_orientation: null;
    toxicity:              null;
   }
   
   export enum Status {
    Accepted = "accepted",
   }
   
   export interface Synonym {
    author:  string;
    id:      number;
    name:    string;
    sources: Source[];
   }
   
   export interface Species {
    author:             null | string;
    bibliography:       string;
    common_name:        null | string;
    family:             FamilyEnum;
    family_common_name: null;
    genus:              GenusName;
    genus_id:           number;
    id:                 number;
    image_url:          null | string;
    links:              MainSpeciesLinks;
    rank:               Rank;
    scientific_name:    string;
    slug:               string;
    status:             Status;
    synonyms:           string[];
    year:               number;
   }
   
   export interface Meta {
    last_modified: Date;
   }
   