export class Transaction {
    constructor(
        public Date: string,
        public Type: string,
        public Category: string,
        public Amount: number,
        public Description: string
    ) {

    }
}