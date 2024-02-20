// Вам необхідно розширити поведінку прикладу з банківським рахунком. 
// Додайте до нашої програми компонент Bank, який вміє створювати ти закривати акаунти для клієнтів. 
// Кліент може мати декілька аккаунтів з різними типами валют. Bank повинен бути Singleton!
class BankClient {
    constructor(_firstName, _lastName, _bday, _accountNumber = null) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._bday = _bday;
        this._accountNumber = _accountNumber;
        this._accounts = [{ iban: '', currency: '' }];
    }
    get accountNumber() {
        if (!this._accountNumber)
            throw new Error('New client');
        return this._accountNumber;
    }
    set accountNumber(value) {
        this._accountNumber = value;
    }
    get age() {
        return new Date().getFullYear() - this._bday;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
}
class BankAccount {
    constructor(holder, currency, balance = 0) {
        this.holder = holder;
        this.currency = currency;
        this.balance = balance;
        this.iban = [{ iban: this.createIBAN(this.currency), currency: this.currency }];
        this._isActive = true;
    }
    get holderName() {
        return `${this.holder.lastName} ${this.holder.firstName}`;
    }
    get info() {
        return `${this.balance}${this.currency}`;
    }
    createIBAN(currency) {
        return `${currency}${(Math.random().toFixed(10)).toString().slice(2)}`;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount)
            throw new Error(`${this.holderName} you dont have enough money for withdraw`);
        this.balance -= amount;
    }
    getNumber(currency) {
        return this.iban.filter(num => num.currency === 'string' ? num.iban : false);
    }
    createAccount(client, account) {
        if (client.firstName !== this.holder.firstName || client.lastName !== this.holder.lastName) {
            throw new Error('No such client');
        }
        else {
            this.iban.push(account);
        }
    }
    set close(value) {
        this._isActive = value;
    }
}
const bankAccount = new BankAccount({ firstName: 'John', lastName: 'Doe' }, 'UAH', 0);
// const bankAccount2 = new BankAccount({ firstName: 'John', lastName: 'Doe' }, 'EUR', 2)
// const bankAccount3 = new BankAccount({ firstName: 'John', lastName: 'Doe' }, 'USD', 3)
// const bankAccount4 = new BankAccount({ firstName: 'Mark', lastName: 'Some' }, 'UAH', 4)
bankAccount.createAccount({ firstName: 'John', lastName: 'Doe' }, { iban: bankAccount.createIBAN('US'), currency: 'USD' });
// bankAccount.createAccount({ firstName: 'John', lastName: 'Doe' }, { iban: bankAccount.createIBAN('EU'), currency: 'EUR' })
// bankAccount.createAccount({ firstName: 'John', lastName: 'Doe' }, { iban: bankAccount.createIBAN('UA'), currency: 'UAH' })
bankAccount.info;
bankAccount.close = false;
bankAccount.info;
class Bank {
    static getBankInstance() {
        if (!Bank._bankInstance) {
            Bank._bankInstance = new Bank([bankAccount]);
        }
        // console.log(Bank._bankInstance.account.getNumber('USD'))
        return Bank._bankInstance;
    }
    constructor(account) {
        this.account = account;
    }
}
const bank = Bank.getBankInstance();
console.log(bank);
// class Bank {
// 	private readonly salaryProvider = new SalaryProvider();
// 	private readonly creditHistoryProvider = new CreditHistoryProvider();
// 	private readonly policeDBProvider = new PoliceDBProvider();
// 	private readonly accounts = new Map<BankAccount['number'], BankAccount>
// 	public addAccount(account: BankAccount): void {
// 		this.accounts.set(account.number, account)
// 	}
// 	public removeAccount(id: BankAccount['number']): BankAccount {
// 		const account = this.accounts.get(id);
// 		if (!account) throw new Error('Account doesnt exist');
// 		this.accounts.delete(id);
// 		return account;
// 	}
// 	public getAccount(id: BankAccount['number']): BankAccount {
// 		const account = this.accounts.get(id);
// 		if (!account) throw new Error('Account doesnt exist');
// 		return account;
// 	}
// 	public deposit(client: BankClient, amount: number): void {
// 		this.accounts.get(client.accountNumber)?.deposit(amount)
// 	}
// 	public withdraw(client: BankClient, amount: number): void {
// 		try {
// 			this.accounts.get(client.accountNumber)?.withdraw(amount)
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// 	public getCreditDecision(client: BankClient, amount: number, duration: number): boolean {
// 		const salary = this.salaryProvider.getAnnularSalary(client.firstName, client.lastName, 12);
// 		const creditRating = this.creditHistoryProvider.getCreditRating(client.accountNumber);
// 		const criminalRecord = this.policeDBProvider.getCriminalRecord(client.firstName, client.lastName);
// 		return true;
// 	}
// }
// class SalaryProvider {
// 	public getAnnularSalary(firstName: string, lastName: string, duration: number): number {
// 		return 12
// 	}
// }
// class CreditHistoryProvider {
// 	public getCreditRating(bankAccountNumber: string): number {
// 		return 12
// 	}
// }
// class PoliceDBProvider {
// 	public getCriminalRecord(firstName: string, lastName: string): boolean {
// 		return false
// 	}
// }
