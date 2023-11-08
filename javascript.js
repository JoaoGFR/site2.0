let expenses = [];
let totalExpenses = 0;
let salary = 0;

function calculateBalance() {
    salary = parseFloat(document.getElementById("salary").value) || 0;
    const balance = salary - totalExpenses;
    document.getElementById("total-expenses").textContent = totalExpenses;
    document.getElementById("balance").textContent = balance;
}

function addExpense() {
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (description && amount && !isNaN(amount)) {
        const expense = {
            description,
            amount,
            category
        };

        expenses.push(expense);

        totalExpenses += amount;
        calculateBalance();
        updateExpenseTable();
    }
}

function removeExpense(index) {
    const removedExpense = expenses.splice(index, 1)[0];
    totalExpenses -= removedExpense.amount;
    calculateBalance();
    updateExpenseTable();
}

function updateExpenseTable() {
    const table = document.getElementById("expense-table");
    table.innerHTML = "";

    expenses.forEach((expense, index) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = expense.description;
        cell2.textContent = expense.amount;
        cell3.textContent = expense.category;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", () => removeExpense(index));
        cell4.appendChild(removeButton);
    });
}




    function calculateBalance() {
        salary = parseFloat(document.getElementById("salary").value) || 0;
        const balance = salary - totalExpenses;
        document.getElementById("total-expenses").textContent = totalExpenses;

        const balanceElement = document.getElementById("balance");
        balanceElement.textContent = balance;

        if (balance >= 0) {
            balanceElement.style.color = "green"; // Saldo positivo (verde)
        } else {
            balanceElement.style.color = "red"; // Saldo negativo (vermelho)
        }
    }

    
    document.addEventListener("DOMContentLoaded", function () {
        const categories = ["Alimentação", "Moradia", "Transporte", "Lazer"];
        const expenseAmounts = [200, 400, 150, 100]; // Substitua pelos valores reais
    
        const ctx = document.getElementById("expense-chart").getContext("2d");
    
       
        });
    