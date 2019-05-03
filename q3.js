function User(userType, productType, membership, bill) {
    this.userType = userType;
    this.productType = productType;
    this.membership = membership;
    this.bill = bill;
}

User.prototype = {
        constructor: User,
        payBill: function() {
            const discount = [10, 30];
            const upToYear = 2;
            const type = "groceries";
            const cutPrice = 5;

            let isGetPercentageBaseDiscount = false;
            let percentageBaseDiscount = 0;
            let billBaseDiscount = 0;
            switch (this.userType) {
                case "employee":
                    percentageBaseDiscount = discount[1]
                    isGetPercentageBaseDiscount = true
                    break;
                case "affiliate":
                    percentageBaseDiscount = discount[0]
                    isGetPercentageBaseDiscount = true
                    break;
            }
            if (!isGetPercentageBaseDiscount && this.membership > upToYear) {
                percentageBaseDiscount = discount[0]
                isGetPercentageBaseDiscount = true
            }
            if (isGetPercentageBaseDiscount && this.productType === type) {
                percentageBaseDiscount = 0
            }
            const billDiv = this.bill / 100;
            billBaseDiscount = parseInt(billDiv) * cutPrice
            const billToPay = this.bill - ((this.bill / 100) * percentageBaseDiscount) - billBaseDiscount
            return billToPay;
        }
    }
//contoh pemakaian
const personA = new User("employee", "non-groceries", 3, 500);
console.log(personA.payBill())
