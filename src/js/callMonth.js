export function addCalculatedMonth (){
    const inputName = document.createElement("input");
    const inputPrice = document.createElement("input");
  
    inputName.className=("inputField");
    inputPrice.className=("inputField");
  
    inputName.placeholder = "Utgift";
    inputPrice.placeholder = "Belopp";
  
    form.appendChild(inputName);
    form.appendChild(inputPrice);
    //result.appendChild(form);
    containerMonths.appendChild(form);
  
    calculateBtn.addEventListener("click", ()=>{
      billList.push({
        inputName: inputName.value,
        inputPrice: Number(inputPrice.value),
      });
      
      const table = document.createElement("table");
      containerMonths.innerHTML = "";
  
      let sum = 0;
  
      for (let i=0; i<billList.length; i++){
        //table.innerHTML = "";
        const th = document.createElement("th");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
  
        th.innerHTML = billList[i].inputName;
        td.innerHTML = billList[i].inputPrice;
  
        containerMonths.appendChild(table);
        table.appendChild(th);
        th.appendChild(tr);
        tr.appendChild(td);
  
        sum += billList[i].inputPrice;
    }
  
    const leftOfSalary = salary - sum;
  
    const thSalary = document.createElement("th");
    thSalary.innerHTML = leftOfSalary;
    table.appendChild(thSalary);
    
      console.log(billList);
      console.log(sum);
    })
  }