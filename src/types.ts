export type SchoolAdvies = 
  | 'Praktijkonderwijs'
  | 'VMBO basis'
  | 'VMBO kader'
  | 'VMBO gemengde leerweg'
  | 'VMBO theoretische leerweg'
  | 'HAVO'
  | 'VWO';

export type Vervoer = 
  | 'Lopend'
  | 'Op de fiets'
  | 'Met het openbaar vervoer (bus, tram, metro)'
  | 'Mijn ouders/verzorgers brengen mij';

export type ReistijdVoorkeur = 
  | 'Minder dan 15 minuten'
  | '15-30 minuten'
  | '30-45 minuten'
  | '45-60 minuten'
  | 'Meer dan 60 minuten maakt mij niet uit';

export type SchoolGrootte = 
  | 'Een kleine school waar iedereen elkaar kent'
  | 'Een middelgrote school'
  | 'Een grote school met veel verschillende leerlingen'
  | 'Geen voorkeur';

export type Voorziening = 
  | 'Sportvelden buiten'
  | 'Binnen gymzaal/sporthal'
  | 'Grote aula om te chillen'
  | 'Podium voor optredens en toneel'
  | 'Kunstlokaal voor creatieve vakken'
  | 'Bibliotheek of studieruimte'
  | 'Kantine met lekker eten'
  | 'Computers/laptops voor alle leerlingen';

export type Leerstijl = 
  | 'Zelfstandig werken aan opdrachten'
  | 'In een groepje samenwerken'
  | 'Luisteren naar uitleg van de leraar'
  | 'Door dingen zelf uit te proberen'
  | 'Door te kijken naar voorbeelden';

export type Sfeer = 
  | 'Rustig en gestructureerd'
  | 'Gezellig en veel activiteiten'
  | 'Creatief en vrij'
  | 'Sportief en actief'
  | 'Serieus en gericht op leren';

export type ExtraActiviteit = 
  | 'Schoolreisjes en excursies'
  | 'Sporttoernooien'
  | 'Feesten en vieringen'
  | 'Muziek, toneel of dans'
  | 'Techniek- of wetenschapsprojecten'
  | 'Taalreizen naar het buitenland'
  | 'Maatschappelijke projecten';

export type VakkenVoorkeur = 
  | 'Extra talen leren'
  | 'Veel praktijkvakken'
  | 'Creatieve vakken'
  | 'Exacte vakken'
  | 'Sport en bewegen'
  | 'Ik weet het nog niet';

export type Begeleiding = 
  | 'Een vaste mentor die je goed kent'
  | 'Extra hulp bij vakken die je moeilijk vindt'
  | 'Hulp bij het plannen van je huiswerk'
  | 'Aandacht voor hoe het met je gaat'
  | 'Ruimte om zelfstandig te werken'
  | 'Duidelijke regels en afspraken';

export interface AntwoordenType {
  schoolAdvies: SchoolAdvies[];
  vervoer: Vervoer;
  reistijd: ReistijdVoorkeur;
  schoolGrootte: SchoolGrootte;
  voorzieningen: Voorziening[];
  leerstijl: Leerstijl;
  sfeer: Sfeer;
  extraActiviteiten: ExtraActiviteit[];
  vakkenVoorkeur: VakkenVoorkeur;
  begeleiding: Begeleiding[];
  openVraag: string;
} 