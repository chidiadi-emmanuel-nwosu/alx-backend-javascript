export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
    return typeof salary === 'number' && salary < 500
        ? new Teacher
        : new Director;
}

export const isDirector = (employee: any): employee is Director => {
    return typeof (employee as Director).workDirectorTasks === 'function';
}

export const executeWork = (employee: any) => {
    isDirector(employee)
        ? employee.workDirectorTasks()
        : employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) => {
    return `Teaching ${todayClass}`;
}

