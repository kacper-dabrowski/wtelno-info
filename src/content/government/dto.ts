export type MayorDto = GovernmentPersonDto;

export type GovernorDto = GovernmentPersonDto;

export interface GovernmentMembersDto {
    government: GovernmentMember[];
}

interface GovernmentMember {
    title: string;
    name: string;
}

interface GovernmentPersonDto {
    title: string;
    name: string;
    email: string;
    telephoneNumber: string;
    webpage: string;
    address: {
        street: string;
        place: string;
    };
}
