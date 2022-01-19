
let budgetInput = document.getElementById("budgetInput");
let submitBudget = document.getElementById("submitBudget");
let budgetDisplay = document.getElementById("budgetDisplay");
let header = document.querySelector(".header");
let enterBudgetContainer = document.querySelector(".enterBudget");

submitBudget.addEventListener("submit", (event) => {
    event.preventDefault();

    let budgetEntered = budgetInput.value;
    budgetDisplay.innerText = budgetEntered;

    header.classList.add("headerShow");
    enterBudgetContainer.classList.add("enterBudgetHide");
});

let resetButton = document.getElementById("resetBudget")

resetButton.addEventListener("click", () => {
    header.classList.add("header");
    enterBudgetContainer.classList.add("enterBudget");
    window.location.reload();
});

let category = document.getElementById("category");
let amountLeftInBudgetSpan = document.getElementById("amountLeftInBudget"); //holds current budget
let entertainmentTotalSpan = document.getElementById("entertainmentTotal");
let totalSpentSpan = document.getElementById("totalSpent");
let foodTotalSpan = document.getElementById("foodTotal");
let clothingTotalSpan = document.getElementById("clothingTotal");
let billsTotalSpan = document.getElementById("billsTotal");

let entertainmentTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let amountLeftBudget = 0;
let totalSpent = 0;

entertainmentTotal.toFixed(2);
foodTotal.toFixed(2);
clothingTotal.toFixed(2);
billsTotal.toFixed(2);
amountLeftBudget.toFixed(2);
totalSpent.toFixed(2);

let mainForm = document.getElementById("mainForm");
let amount = document.getElementById("amount");
let userTotal = 0;

let payee = document.getElementById("payee");

var yValues = [0, 0, 0, 0];
var xValues = ["Entertainment", "Food", "Clothes", "Bills"];
var barColors = ["red", "green","blue","orange"];

mainForm.addEventListener('submit', event => {
    event.preventDefault();

    newEntry = document.getElementById("newEntry");
    let listItem = document.createElement("li");

    if(totalSpent + parseFloat(amount.value)<= parseFloat(budgetDisplay.innerText)){
    listItem.innerText = payee.value + " | Amount: $" + amount.value + " | Category: " + category.value;
    
    newEntry.append(listItem);
    };

    if(category.value === "Entertainment"){
        if(parseFloat(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseFloat(amount.value) <= parseFloat(budgetDisplay.innerText)){
        totalSpent += parseFloat(amount.value);
        totalSpentSpan.innerText = `$${totalSpent}`; 
        amountLeftBudget = parseFloat(budgetDisplay.innerText) - totalSpent;
        amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
        entertainmentTotal += parseFloat(amount.value);
        yValues[0] = entertainmentTotal;
        entertainmentTotalSpan.innerText = `$${entertainmentTotal}`;

            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }
    
    } else if (category.value === "Food"){
        if(parseFloat(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseFloat(amount.value) <= parseFloat(budgetDisplay.innerText)){
                totalSpent += parseFloat(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseFloat(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                foodTotal += parseFloat(amount.value);
                foodTotalSpan.innerText = `$${foodTotal}`;
                yValues[1] = foodTotal;
                
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }

    } else if (category.value === "Clothing"){
        if(parseFloat(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseFloat(amount.value) <= parseFloat(budgetDisplay.innerText)){
                totalSpent += parseFloat(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseFloat(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                clothingTotal += parseFloat(amount.value);
                clothingTotalSpan.innerText = `$${clothingTotal}`;
                yValues[2] = clothingTotal;
                
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }

    } else if(category.value === "Bills"){
        if(parseFloat(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseFloat(amount.value) <= parseFloat(budgetDisplay.innerText)){
                totalSpent += parseFloat(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseFloat(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                billsTotal += parseFloat(amount.value);
                billsTotalSpan.innerText = `$${billsTotal}`;
                yValues[3] = billsTotal;
              
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }
    }

    new Chart("myChart", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Spending by Category"
          }
        }
      });
});

let showCategoryTotals = document.querySelector(".showCategoryTotals");
let hideCategoryTotals = document.querySelector(".hideCategoryTotals");

showCategoryTotals.addEventListener("click", () => {
    document.querySelector(".hideCategoryTotals").style.display = "block";
    document.querySelector(".showCategoryTotals").style.display = "none";
});

hideCategoryTotals.addEventListener("click", () => {
    document.querySelector(".showCategoryTotals").style.display = "block";
    document.querySelector(".hideCategoryTotals").style.display = "none";
});

var xValues = ["Entertainment", "Food", "Clothes", "Bills"];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9"
  ];



