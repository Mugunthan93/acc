export class Transaction {
    constructor(
        public Date: Date,
        public Type: string,
        public Category: string,
        public Amount: string
    ) {

    }
}

export class Transaction2 {
    constructor(
        public Date: Date,
        public Type: string,
        public Category: string,
        public Amount: string,
        public Description: string,
        public UserId: string
    ) {

    }
}