/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

const bankPrototype = {
  openAccount: function (holder, balance) {
    if (balance > 0 && Number.isInteger(balance)) {
      const account = new Account(this.nextAccountNumber, holder);
      account.deposit(balance);
      this.accounts.push(account);
      this.nextAccountNumber++;
      return account.number;
    }
    return null;
  },
  getAccount: function (number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === number) {
        return this.accounts[i];
      }
    }
    return null;
  },
  getTotalAssets: function () {
    if (this.accounts.length === 0) {
      return 0;
    }
    let totalAssets = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      totalAssets += this.accounts[i].getBalance();
    }
    return totalAssets;
  }
};

Object.setPrototypeOf(Bank.prototype, bankPrototype);
