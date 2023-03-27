/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

const accountPrototype = {
  deposit: function (amount) {
    if (amount > 0 && Number.isInteger(amount)) {
      this.transactions.push(new Transaction('deposit', amount));
      return true;
    }
    return false;
  },
  withdraw: function (amount) {
    if (amount > 0 && Number.isInteger(amount)) {
      this.transactions.push(new Transaction('withdrawal', amount));
      return true;
    }
    return false;
  },
  getBalance: function () {
    if (this.transactions.length === 0) {
      return 0;
    }
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        balance -= this.transactions[i].amount;
      }
    }
    return balance;
  }
};

Object.setPrototypeOf(Account.prototype, accountPrototype);
