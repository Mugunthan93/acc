export class Transactions {
    constructor(
        public Id: string,
        public Name: string,
        public Date: Date,
        public Type: string,
        public Category: string,
        public Amount: number,
        public Description: string,
        public UserId: string
    ) {

    }
}