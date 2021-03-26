'use striect'

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRndnum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let seattel = {
  name: 'seattel',
  mincustomer: 23,
  maxcustomer: 65,
  coustmernumber: [0],
  avg: 6.3,
  orderPerHour: [0],
  totalOrder: 0

}

for (let i = 0; i <= workingHours.length; i++) {

  seattel.coustmernumber[i] = getRndnum(seattel.mincustomer, seattel.maxcustomer);
}


for (let i = 0; i <= workingHours.length; i++) {

  seattel.orderPerHour[i] = Math.floor(seattel.coustmernumber[i] * seattel.avg);
}

for (let i = 0; i <= workingHours.length; i++) {

  seattel.totalOrder += seattel.orderPerHour[i];
}

seattel.render = function() {

  const SectionEl= document.getElementById('section');
  let pEl=document.createElement('p')
  SectionEl.appendChild(pEl);
  pEl.textContent=seattel.name;
  let ulEl=document.createElement('ul');
  SectionEl.appendChild(ulEl);
  

   for(let i=0;i<workingHours.length;i++){
      
     let liEl=document.createElement('li');
     ulEl.appendChild(liEl);
     liEl.textContent= ` ${workingHours[i]} : ${seattel.orderPerHour[i]} cookies`;
   }

   let li1El=document.createElement('li');
   ulEl.appendChild(li1El);
   li1El.textContent= `Total : ${seattel.totalOrder} cookies`;
}

seattel.render();
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                       / /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

let Tokyo = {
  name: 'Tokyo',
  mincustomer: 3,
  maxcustomer: 24,
  coustmernumber: [0],
  avg: 1.2,
  orderPerHour: [0],
  totalOrder: 0

}

for (let i = 0; i <= workingHours.length; i++) {

  Tokyo.coustmernumber[i] = getRndnum(Tokyo.mincustomer, Tokyo.maxcustomer);
}


for (let i = 0; i <= workingHours.length; i++) {

  Tokyo.orderPerHour[i] = Math.floor(Tokyo.coustmernumber[i] * Tokyo.avg);
}

for (let i = 0; i <= workingHours.length; i++) {

  Tokyo.totalOrder += Tokyo.orderPerHour[i];
}

Tokyo.render = function() {

  const SectionEl= document.getElementById('section');
  let pEl=document.createElement('p')
  SectionEl.appendChild(pEl);
  pEl.textContent=Tokyo.name;
  let ulEl=document.createElement('ul');
  SectionEl.appendChild(ulEl);
  

   for(let i=0;i<workingHours.length;i++){
      
     let liEl=document.createElement('li');
     ulEl.appendChild(liEl);
     liEl.textContent= ` ${workingHours[i]} : ${Tokyo.orderPerHour[i]} cookies`;
   }

   let li1El=document.createElement('li');
   ulEl.appendChild(li1El);
   li1El.textContent= `Total : ${Tokyo.totalOrder} cookies`;
}

Tokyo.render();

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                       / /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

let Dubai = {
  name: 'Dubai',
  mincustomer: 11,
  maxcustomer: 38,
  coustmernumber: [0],
  avg: 3.7,
  orderPerHour: [0],
  totalOrder: 0

}

for (let i = 0; i <= workingHours.length; i++) {

  Dubai.coustmernumber[i] = getRndnum(Dubai.mincustomer, Dubai.maxcustomer);
}


for (let i = 0; i <= workingHours.length; i++) {

  Dubai.orderPerHour[i] = Math.floor(Dubai.coustmernumber[i] * Dubai.avg);
}

for (let i = 0; i <= workingHours.length; i++) {

  Dubai.totalOrder += Dubai.orderPerHour[i];
}

Dubai.render = function() {

  const SectionEl= document.getElementById('section');
  let pEl=document.createElement('p')
  SectionEl.appendChild(pEl);
  pEl.textContent=Dubai.name;
  let ulEl=document.createElement('ul');
  SectionEl.appendChild(ulEl);
  

   for(let i=0;i<workingHours.length;i++){
      
     let liEl=document.createElement('li');
     ulEl.appendChild(liEl);
     liEl.textContent= ` ${workingHours[i]} : ${Dubai.orderPerHour[i]} cookies`;
   }

   let li1El=document.createElement('li');
   ulEl.appendChild(li1El);
   li1El.textContent= `Total : ${Dubai.totalOrder} cookies`;
}

Dubai.render();

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                       / /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

let Paris = {
  name: 'Paris',
  mincustomer: 20,
  maxcustomer: 38,
  coustmernumber: [0],
  avg: 2.3,
  orderPerHour: [0],
  totalOrder: 0

}

for (let i = 0; i <= workingHours.length; i++) {

  Paris.coustmernumber[i] = getRndnum(Paris.mincustomer, Paris.maxcustomer);
}


for (let i = 0; i <= workingHours.length; i++) {

  Paris.orderPerHour[i] = Math.floor(Paris.coustmernumber[i] * Paris.avg);
}

for (let i = 0; i <= workingHours.length; i++) {

  Paris.totalOrder += Paris.orderPerHour[i];
}

Paris.render = function() {

  const SectionEl= document.getElementById('section');
  let pEl=document.createElement('p')
  SectionEl.appendChild(pEl);
  pEl.textContent=Paris.name;
  let ulEl=document.createElement('ul');
  SectionEl.appendChild(ulEl);
  

   for(let i=0;i<workingHours.length;i++){
      
     let liEl=document.createElement('li');
     ulEl.appendChild(liEl);
     liEl.textContent= ` ${workingHours[i]} : ${Paris.orderPerHour[i]} cookies`;
   }

   let li1El=document.createElement('li');
   ulEl.appendChild(li1El);
   li1El.textContent= `Total : ${Paris.totalOrder} cookies`;
}

Paris.render();

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                       / /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

let Lima = {
  name: 'Lima',
  mincustomer: 2,
  maxcustomer: 16,
  coustmernumber: [0],
  avg: 4.6,
  orderPerHour: [0],
  totalOrder: 0

}

for (let i = 0; i <= workingHours.length; i++) {

  Lima.coustmernumber[i] = getRndnum(Lima.mincustomer, Lima.maxcustomer);
}


for (let i = 0; i <= workingHours.length; i++) {

  Lima.orderPerHour[i] = Math.floor(Lima.coustmernumber[i] * Lima.avg);
}

for (let i = 0; i <= workingHours.length; i++) {

  Lima.totalOrder += Lima.orderPerHour[i];
}

Lima.render = function() {

  const SectionEl= document.getElementById('section');
  let pEl=document.createElement('p')
  SectionEl.appendChild(pEl);
  pEl.textContent=Lima.name;
  let ulEl=document.createElement('ul');
  SectionEl.appendChild(ulEl);
  

   for(let i=0;i<workingHours.length;i++){
      
     let liEl=document.createElement('li');
     ulEl.appendChild(liEl);
     liEl.textContent= ` ${workingHours[i]} : ${Lima.orderPerHour[i]} cookies`;
   }

   let li1El=document.createElement('li');
   ulEl.appendChild(li1El);
   li1El.textContent= `Total : ${Lima.totalOrder} cookies`;
}

Lima.render();
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                       / /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

console.log(seattel);


// let workingHours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let totalPurhour=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let totalBranch=0;
// let y=0;
// let cookiesAry=[];
// function getRndnum(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

// function Salmoncookies (namelocation,minCust,maxCust,avrage) {
//   this.namelocation=namelocation;
//   this.minmCust=minCust;
//   this.maxmCust=maxCust;
//   this.avrage=avrage;
//   this.coustmernumber=[0];
//   this.purchascookies=[0];
//   cookiesAry.push(this);
//   // console.log(this.coustmernumber);
//   // console.log(this.purchascookies);

// };


// Salmoncookies.prototype.getRndCusts = function(min,max){
//   for(let i=0;i<=workingHours.length;i++){

// this.coustmernumber[i]=getRndnum(this.minmCust,this.maxmCust);
//   }
// };


// Salmoncookies.prototype.purCookieshour = function(){

// for(let i=0;i<=workingHours.length;i++){

//   this.purchascookies[i]=Math.floor((this.coustmernumber[i]*this.avrage));
//   totalBranch=totalBranch+this.purchascookies[i];
//   // totalPurhour[i]?totalPurhour[i]+=this.purchascookies[i]:totalPurhour[i]=this.purchascookies[i]  
//   totalPurhour[i]+=this.purchascookies[i];
// // console.log(totalBranch);
// // console.log(totalPurhour[i]);
// // console.log(this.purchascookies);
//   }
// };

//   const SectionEl= document.getElementById('section');
//   const tableEl=document.createElement('table');
//   SectionEl.appendChild(tableEl);

//   /// contant of the table function
// Salmoncookies.prototype.render = function (){ 


//   let tr1El=document.createElement('tr');
//   tableEl.appendChild(tr1El);
//   for(let i=0;i<=this.purchascookies.length;i++){
//     if(i==0){
//       let tdEl=document.createElement('td');
//       tr1El.appendChild(tdEl);
//       tdEl.textContent=this.namelocation;
//     }

//    else if(i!==0 && i<this.purchascookies.length){
//   let tdEl=document.createElement('td');
//   tr1El.appendChild(tdEl);
//   tdEl.textContent=this.purchascookies[i];
//   }

//  else if(i==this.purchascookies.length){
//     let tdEl=document.createElement('td');
//   tr1El.appendChild(tdEl);
//   tdEl.textContent=totalBranch;
//   }
//   }

// };

// /// Header of the table function 
// function hTblet ()
// {
//    let trEl=document.createElement('tr');
//     tableEl.appendChild(trEl);

//     for(let i=0;i<= workingHours.length+1 ;i++){

//     if(i==0){
//       let thEl=document.createElement('th');
//     trEl.appendChild(thEl);
//     thEl.textContent='';
//     }
//     else if(i!==0 && i<=workingHours.length){
//       let thEl=document.createElement('th');
//     trEl.appendChild(thEl);
//     thEl.textContent=workingHours[i-1];
//     }
//     else if (i==workingHours.length+1){
//     let thEl=document.createElement('th');
//     trEl.appendChild(thEl);
//     thEl.textContent='Total';
//    }

//     }
// };

// /// total of the table function

//  function Fotable(){

//   let tr1El=document.createElement('tr');
//   tableEl.appendChild(tr1El);
//   for(let i=0;i<=totalPurhour.length;i++){
//     if(i==0){
//       let tdEl=document.createElement('td');
//       tr1El.appendChild(tdEl);
//       tdEl.textContent='Total';
//     }

//    else if(i!==0 && i<totalPurhour.length){

//   let tdEl=document.createElement('td');
//   tr1El.appendChild(tdEl);
//   tdEl.textContent=totalPurhour[i];
//   }


//   else if(i==totalPurhour.length){

//     for(let j=0;j<totalPurhour.length;j++){
//        y +=totalPurhour[j];
//     }
//     let tdEl=document.createElement('td');
//   tr1El.appendChild(tdEl);
//   tdEl.textContent=y;

//   }
//   // console.log(totalPurhour);
//   }

// };
// function delRaw(){
//   let lastRow=(tableEl.rows.length)-1;
//     tableEl.deleteRow(lastRow);
// };


// hTblet();
// const seattle = new Salmoncookies('seattle',3,65,6.3);
// seattle.getRndCusts();
// seattle.purCookieshour();
// seattle.render();

// const Tokyo = new Salmoncookies('Tokyo',3,24,1.2);
// Tokyo.getRndCusts();
// Tokyo.purCookieshour();
// Tokyo.render();

// const Dubai = new Salmoncookies('Dubai',11,38,3.7);
// Dubai.getRndCusts();
// Dubai.purCookieshour();
// Dubai.render();

// const Paris = new Salmoncookies('Paris',20,38,2.3);
// Paris.getRndCusts();
// Paris.purCookieshour();
// Paris.render();

// const Lima = new Salmoncookies('Lima',2,16,4.6);
// Lima.getRndCusts();
// Lima.purCookieshour();
// Lima.render();
// Fotable();


// ///////////////////////////////////////
// let newBranch=document.getElementById('action');
// // let addNew1=document.getElementById('addnew');

// newBranch.addEventListener('submit',addNewBranch);

// function addNewBranch(event){
// delRaw();
// event.preventDefault();
// let branchName=event.target.locatonname.value;

// let minOrder=event.target.minorder.value;

// let maxOrder=event.target.maxorder.value;

// let avgOrder=event.target.avgorder.value;


// let addNew = new Salmoncookies(branchName,minOrder,maxOrder,avgOrder);
// addNew.getRndCusts();
// addNew.purCookieshour();
// addNew.render();
// Fotable();
// // delRaw();
// }



