export class Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate?(time: Date): Function;
}