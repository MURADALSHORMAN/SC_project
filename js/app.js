'use striect'
let workingHours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalPurhour=[];
let totalBranch=0;
function getRndnum(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function Salmoncookies (namelocation,minCust,maxCust,avrage) {
  this.namelocation=namelocation;
  this.minmCust=minCust;
  this.maxmCust=maxCust;
  this.avrage=avrage;
  this.coustmernumber=[];
  this.purchascookies=[];

  

//   this.getRndCusts = function(){
//       for(let i=0;i<workingHours.length;i++){
      
//     this.coustmernumber[i]=getRndnum(this.minCust,this.maxCust);
    
//       }
//     };
    
//     this.purCookieshour = function(){
    
//     for(let i=0;i<workingHours.length;i++){
    
//       this.purchascookies[i]=(this.coustmernumber[i]*this.avrage).floor;
//       totalBranch=totalBranch+this.purchascookies[i];
//       totalPurhour[i]=totalPurhour[i]+this.purchascookies[i];
    
//       }
//     };

//   this.render = function (){ 

//   const table2El=document.getElementById('table1');
//   const table3EL=document.createElement('table');
//   table2El.appendChild(table3EL);
//   const trEl=document.createElement('tr');
//   table3EL.appendChild(trEl);

// for(i=0;i<workingHours.length;i++){

//   let thEl=document.createElement('th');
//   trEl.appendChild(thEl);
//   thEl.textContent= workingHours[i];
// }


//   const tr1El=document.createElement('tr');
//   table3EL.appendChild(tr1El);
// for( i=1;i<this.purchascookies.length;i++){

//   let th1El=document.createElement('td');
//   let j=i-1;
//   tr1El.appendChild(td1El);
//   td1El.textContent=this.purchascookies[i-1];
// };


// };
};


Salmoncookies.prototype.getRndCusts = function(min,max){
  for(let i=0;i<workingHours.length;i++){
  
this.coustmernumber[i]=getRndnum(this.minmCust,this.maxmCust);

  }
};

Salmoncookies.prototype.purCookieshour = function(){

for(let i=0;i<workingHours.length;i++){

  this.purchascookies[i]=(this.coustmernumber[i]*this.avrage).floor;
  totalBranch=totalBranch+this.purchascookies[i];
  totalPurhour[i]=totalPurhour[i]+this.purchascookies[i];

  }
};


this.render = function (){ 

  const table2El=document.getElementById('table1');
  const table3EL=document.createElement('table');
  table2El.appendChild(table3EL);
  const trEl=document.createElement('tr');
  table3EL.appendChild(trEl);

for(i=0;i<workingHours.length;i++){

  let thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent= workingHours[i];
}


  const tr1El=document.createElement('tr');
  table3EL.appendChild(tr1El);
for( i=1;i<this.purchascookies.length;i++){

  let th1El=document.createElement('td');
  let j=i-1;
  tr1El.appendChild(td1El);
  td1El.textContent=this.purchascookies[i-1];
};


};

// const seattle =new Salmoncookies('seattle',3,65,6.3)
// seattle.getRndCusts();
// seattle.purCookieshour();
// this.render();
// console.log(new Salmoncookies('seattle',3,65,6.3));
// console.log( seattle.getRndCusts());

///////////////////////////////////////////////////////////////////////////////////////////

const seattle = new Salmoncookies('seattle',3,65,6.3);
seattle.getRndCusts();
seattle.purCookieshour();
console.log(new Salmoncookies('seattle',3,65,6.3));
// seattle.render();
