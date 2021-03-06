export class Sale {
    id: string;
    date: string;
    fakeDateId: number;
    paymentStatus: boolean;
    paymentTypeId: number;
    paymentMethod: { number: number, franchise: string };
    value: number;
    deduction?: number;

    constructor(
        id: string,
        date: string,
        fakeDateId: number,
        paymentStatus: boolean,
        paymentTypeId: number,
        paymentMethod: { number: number, franchise: string }, value: number,
        deduction?: number
    ) {

        this.id = id;
        this.date = date;
        this.fakeDateId = fakeDateId;
        this.paymentTypeId = paymentTypeId;
        this.paymentStatus = paymentStatus;
        this.paymentMethod = paymentMethod;
        this.deduction = deduction;
    }
}
