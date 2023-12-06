export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

export interface studentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
