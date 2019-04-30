export interface InfoCharacter {
    count?: number;
    pages?: number;
    next?: string;
    prev?: string;
}

export interface ResultsCharacter {
    info?: InfoCharacter;
    results?: Character[];
}

export interface Character {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: {
        name?: string;
        url?: string;
    };
    location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
}