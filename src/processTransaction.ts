type Transaction = {
  type: "deposit" | "withdraw";
  amount: number;
};

const processTransaction = (
  balance: number,
  transaction: Transaction
): number | string => {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  }

  if (transaction.type === "withdraw") {
    if (transaction.amount > balance) {
      return "Insufficient balance";
    }
  }
  return balance - transaction.amount;
};

// Test Case 1: Deposit
const transaction1: Transaction = {
  type: "deposit",
  amount: 2000,
};
// Test Case 2: Successful Withdraw
const transaction2: Transaction = {
  type: "withdraw",
  amount: 1500,
};
// Test Case 3: Insufficient Balance
const transaction3: Transaction = {
  type: "withdraw",
  amount: 6000,
};
// Test Case 4: Withdraw Full Balance
const transaction4: Transaction = {
  type: "withdraw",
  amount: 5000,
};
console.log(processTransaction(5000, transaction1));
console.log(processTransaction(5000, transaction2));
console.log(processTransaction(5000, transaction3));
console.log(processTransaction(5000, transaction4));