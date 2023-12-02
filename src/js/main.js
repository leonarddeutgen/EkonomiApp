import './../sass/style.scss'
import { Bills } from './Bills';
import { LeftOver } from './LeftOver';

const containerMonths = document.getElementById("containerMonths");
const header = document.getElementById("header");
const containerMonthsBills = document.getElementById("containerMonthsBills");
const containerBtn = document.getElementById("containerBtn");

//let rent = new Bills ("Hyra", 7400);
/* let wiFi = new Bills("Wi-Fi", 279);
let mobile = new Bills("Mobil", 429);
let ica = new Bills("Ica", 2000);
let sl = new Bills("Sl", 650); */

let billList = [];

let salary = 12000; // Användaren ska skriva in detta själv.

const form = document.createElement("form");//Skapar form

//Calculate Btn
const calculateBtn = document.createElement("button");
calculateBtn.textContent = "Skapa Månad";
calculateBtn.className = ("btnClass");

const addBillBtn = document.createElement("button");
addBillBtn.className = ("addBillBtn");
addBillBtn.textContent = "Addera utgift";

//Container för knappar, plockar upp dom här
containerBtn.appendChild(addBillBtn);
containerBtn.appendChild(calculateBtn);

addBillBtn.addEventListener("click", ()=>{
  const inputName = document.createElement("input");
  const inputPrice = document.createElement("input");

  inputName.className=("inputField");
  inputPrice.className=("inputField");

  inputName.placeholder = "Utgift";
  inputPrice.placeholder = "Belopp";

  form.appendChild(inputName);
  form.appendChild(inputPrice);
  //result.appendChild(form);
  containerMonthsBills.appendChild(form);

  const calculatedMonth = document.createElement("section");
  calculatedMonth.className = ("calculatedMonth");

  calculateBtn.addEventListener("click", ()=>{
    billList.push({
      inputName: inputName.value,
      inputPrice: Number(inputPrice.value),
    });
    
    const table = document.createElement("table");
    const grid1 = document.createElement("section"); //skapar grid
    containerMonths.innerHTML = "";

    let sum = 0;

    for (let i=0; i<billList.length; i++){
      //table.innerHTML = "";
      const th = document.createElement("th");
      const tr = document.createElement("tr");
      const td = document.createElement("td");

      th.innerHTML = billList[i].inputName;
      td.innerHTML = billList[i].inputPrice;

      containerMonths.appendChild(calculatedMonth);
      calculatedMonth.appendChild(grid1);
      grid1.appendChild(table);
      table.appendChild(th);
      th.appendChild(tr);
      tr.appendChild(td);

      sum += billList[i].inputPrice;
  }

  const leftOfSalary = salary - sum;
  const thSalary = document.createElement("th");
  thSalary.innerHTML = leftOfSalary;
  //table.appendChild(thSalary);
  
  const account = new LeftOver("Kvar på konto", leftOfSalary);
  const save = new LeftOver("Spar 15%",leftOfSalary * 0.15); // 15% av det som är kvar

  let leftOverList = [account,save];
  const leftOverTabe = document.createElement("table");
  const grid2 = document.createElement("section");

  for (let i=0; i<leftOverList.length; i++){
    const th = document.createElement("th");
    const tr = document.createElement("tr");
    const td = document.createElement("td");


    th.innerHTML = leftOverList[i].leftOverName;
    td.innerHTML = Math.round(leftOverList[i].leftOverPrice);

    containerMonths.appendChild(calculatedMonth);
    calculatedMonth.appendChild(grid2);
    grid2.appendChild(leftOverTabe);
    leftOverTabe.appendChild(th);
    th.appendChild(tr);
    tr.appendChild(td);
  }

  const salaryInPercent = salary/sum*100;
  const billInPercent = sum/salary*100;

  const grid3 = document.createElement("section");
  grid3.id = "donut_single";
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['Lön',     salaryInPercent],
          ['Utgifter', billInPercent],
        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }

  calculatedMonth.appendChild(grid3);

  console.log(billList);
  console.log(sum);
  console.log(billInPercent);
  })
})














/* for (let i=0; i<billList.length; i++){
  const inputName = document.createElement("input");
  const inputPrice = document.createElement("input");

  inputName.className=("inputField");
  inputPrice.className=("inputField");

  inputName.placeholder = "Utgift";
  inputPrice.placeholder = "Belopp";

  form.appendChild(inputName);
  form.appendChild(inputPrice);
  containerMonths.appendChild(form);
} */