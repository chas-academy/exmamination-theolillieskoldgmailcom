const htmlDescInput = document.getElementById("desc")
const htmlAmountInput = document.getElementById("amount")
const htmlIncomeButton = document.getElementById("incomeBtn")
const htmlExpenseButton = document.getElementById("expenseBtn")
const htmlIncomeList = document.getElementById("incomeList")
const htmlExpenseList = document.getElementById("expenseList")
const htmlTransactionList = document.getElementById("transactionList")
const htmlBalance = document.getElementById("balance")

//Arrayer för inkomster & utgifter
const incomeArray = []
const expenseArray = []
const transactionArray = []
let saldo = 0




//Knapptryck för att lägga till inkomst
htmlIncomeButton.addEventListener("click",()=>{
    collectIncome()
    showIncome()
    showTransactions()
})

//Knapptryck för att lägga till kostnad
htmlExpenseButton.addEventListener("click",()=>{      
    collectExpense()
    showExpense()
    showTransactions()
})




//Funktion för att samla in en inkomst ifrån input fältet
function collectIncome(){
    const transactionobject = {}
    let desc = htmlDescInput.value
    let amount = htmlAmountInput.value
 
        transactionobject.description = desc
        transactionobject.amount = Number(amount)
        transactionobject.type = "income"
        incomeArray.push(transactionobject)
        transactionArray.push(transactionobject)

        saldo += Number(amount)
        updateBalance();
    
    htmlDescInput.value = ""
    htmlAmountInput.value = ""
}

//Funktion för att samla in en kostnad ifrån input fältet
function collectExpense(){
    const transactionobject = {}
    let desc = htmlDescInput.value
    let amount = htmlAmountInput.value

        transactionobject.description = desc
        transactionobject.amount = Number(amount)
        transactionobject.type = "expense"
        expenseArray.push(transactionobject)
        transactionArray.push(transactionobject)

        saldo -= Number(amount)
        updateBalance();
    
    htmlDescInput.value = ""
    htmlAmountInput.value = ""
}

//funktion för att visa upp inkomst på HTML sidan
function showIncome(){
    htmlIncomeList.innerHTML = ""
    for(let i of incomeArray){
        const li = document.createElement("li")
        li.textContent = `${i.description} - ${i.amount}kr`
        htmlIncomeList.appendChild(li)
    }
}

//funktion för att visa upp kostnad på HTML sidan
function showExpense(){
    htmlExpenseList.innerHTML = ""
    for(let e of expenseArray){
        const li = document.createElement("li")
        li.textContent = `${e.description} - ${e.amount}kr`
        htmlExpenseList.appendChild(li)
    }
}


//Funtion för att visa samtliga transaktioner på HTML sidan
function showTransactions(){
    htmlTransactionList.innerHTML = ""
    for(let t of transactionArray){
        const li = document.createElement("li")
        li.textContent = `${t.description} - ${t.amount}kr`
        htmlTransactionList.appendChild(li)
    }
}


//Funktion för att uppdatera saldot på HTML sidan
function updateBalance(){
    htmlBalance.textContent = `${saldo}`
}
