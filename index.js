/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from "./libs/test.js";

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from "lodash";
const source = $t.source(1);
$t.answer(1, async () => {
  // Your code goes here
  const targetData = {};

  const filterByExpense = await source
    .filter((el) => el.type === "expense")
    .map((el) => el.amount);
  const sumaExpenses = _.sum(filterByExpense);

  const filterByIncome = await source
    .filter((el) => el.type === "income")
    .map((el) => el.amount);
  const sumaIncome = _.sum(filterByIncome);

  const balance = sumaIncome - sumaExpenses;

  const filterByRestaurants = await source
    .filter((el) => el.category === "Restaurants")
    .map((el) => el.amount);
  const sumaRestaurants = _.sum(filterByRestaurants) * -1;

  const filterByIncomes = await source
    .filter((el) => el.category === "Income")
    .map((el) => el.amount);
  const sumaIncomes = _.sum(filterByIncomes);

  const filterByGroceries = await source
    .filter((el) => el.category === "Groceries")
    .map((el) => el.amount);
  const sumaGroceries = _.sum(filterByGroceries) * -1;

  const filterByRent = await source
    .filter((el) => el.category === "Rent")
    .map((el) => el.amount);
  const sumaRents = _.sum(filterByRent) * -1;

  targetData.balance = balance;
  targetData.income = sumaIncome;
  targetData.expenses = sumaExpenses;
  targetData.byCategories = {
    Restaurants: sumaRestaurants,
    Income: sumaIncomes,
    Groceries: sumaGroceries,
    Rent: sumaRents,
  };
  return targetData;
});

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2);
$t.answer(2, async () => {
  const resultIds = await $source.getIds();
  const resultIdsText = await Promise.all(
    resultIds.map((id) => $source.getText(id))
  );
  return resultIdsText;
});
