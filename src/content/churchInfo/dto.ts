export interface ImportantDatesDto {
    date: ImportantDate[];
}

export interface ImportantDate {
    name: string;
    date: string;
}

export interface ParsonDto {
    parson: [ParsonInfo];
}

export interface HolyMassesDto {
    sunday: HolyMass[];
    excluded: HolyMass[];
    normal: HolyMass[];
}

interface HolyMass {
    hour: string;
}

interface ParsonInfo {
    name: string;
    telephoneNumber: string;
    title: string;
    email: string;
}
