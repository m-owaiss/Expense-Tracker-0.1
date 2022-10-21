    class PersonAccount {
        constructor(fname, lname, incomes, expenses) {
            this.fname = fname;
            this.lname = lname;
            this.incomes = incomes;
            this.expenses = expenses;
        }

        totalincome() {
            let total = 0;
            for (let j in this.incomes) {
                total = total + this.incomes[j]

            }
            return console.log(`totalIncome ${total}`)
        }
        totoalexpense() {
            let totalexp = 0;
            for (let j in this.expenses) {
                totalexp = totalexp + this.expenses[j]

            }
            return console.log(`totalexpense ${totalexp}`)
        }
        accountinfo() {
            let totalexp = 0;
            for (let j in this.expenses) {
                totalexp = totalexp + this.expenses[j]
            }
            let total = 0;
            for (let j in this.incomes) {
                total = total + this.incomes[j]

            }
            return console.log(`Accoount No:12345  Account title: ${this.fname + this.lname} Balance=${total - totalexp}`)
        }
        addincome(addincome, value) {
            this.incomes[addincome] = value;
            return console.log(this.incomes)
        }
        addexpense(addexpenses, value) {
            this.expenses[addexpenses] = value
            return console.log(this.expenses)
        }
    }
    let person = new PersonAccount('Muhammad ', 'Owais', { salary: 30000, Propertyrent: 40000, BusinessIncome: 60000 }, {
        Homerent: 30000,
        Utilitiesbill: 40000,
        Fuel: 20000
    })
    person.totalincome();
    person.totoalexpense();
    person.accountinfo();
    person.addincome('bonus', 20000)
    person.addexpense('grocery', 6000)