
// 1
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
  };
  
console.log(user.studentstatus);
// 2
let myArray2=[6,76,21,23,45,67,'Nino', 'Goga'];
for(let item of myArray2){
    console.log(item);
}

let i=0;
while(i< myArray2.length){
     console.log(myArray2[i]);
     i++;
}
// 3
let numbers3=[34,2,5,67,89,78,3,2,6,7,45];
for(let item of numbers3){
    if(item >5){
        console.log(item);
    }
}

// 4
let user4={
    name:'giorgi',
    age:20,
    studentstatus:'active'
};

if(user4.age < 18 && user4.studentstatus =='active'){
    console.log('hello')
}else if (user4.name == 'giorgi'){
    console.log('Hello giorgi')
}else if (user4.studentstatus == 'active'|| user4.age < 25){
    console.log('Hello world')
}else{
        console.log(error);
    }
    //5
    
    let array5 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;
    for(let item of array5){
        if(typeof item =='string'){
            console.log(item);
        }
    }
// 6
let array6= [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
for(let z of array6){
    for(let item of z){
        if (item > 0){
            console.log(item);
        }
    } 
}
// 7
let array7 = [32, 10, 'hello', null, 'hello2', 50 ];
for(let x of array7){
    if (x % 5 == 0){
        console.log(x);
    }

}

// function1
function positivesum(...args){
    sum=0;
  for(let item of args){
      if( item >0){
        sum+=item;
      }
  }
  return sum;
}

let resultnumber=positivesum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(resultnumber);

// function2
let resultnum=positivesum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultnum);

// function3

let user31 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };
  function surname(){
      if(user31.isloggedin == true){
          return user31.firstname;
        }else{
      return false;
  }
}

  let namesurname=surname();
  console.log(namesurname);


// function4 
