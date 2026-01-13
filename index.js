//Créez une fonction displayArray(array) qui prend en paramètre un tableau et 
//qui affiche chaque élément du tableau dans la console.

function displayArray(array){
    for(let i=0 ; i <array.length ; i++){
        console.log(array[i]);
    }
}

//Créez une fonction displayArrayReverse(array) qui prend en paramètre un tableau
//et qui affiche chaque élément du tableau dans la console dans l'ordre inverse.

function displayArrayReverse(array){
    for( let i=array.length-1 ; i>=0; i--){
        console.log(array[i]);
    }
}

//Créez une fonction findLongestWord(words) qui prend en paramètre un tableau de mots et 
//qui renvoie le mot le plus long du tableau.

function findLongestWord(words){
    let longWord="";
     for(let word of words){
         if(word.length > longWord.length){
         longWord= word;
         
         }
     }
    //  console.log(`the more long word is: ${longWord} `);
    return longWord;
}


//=====================
//4-Exercice 4 : éliminer les doublons:
//Créez une fonction removeDuplicates(array) qui prend en paramètre ===> prendre tableau et rnvoi un tableau
//un tableau et qui renvoie un nouveau tableau sans les doublons.


function removeDuplicates(array){
    let num =0;
    let numRest =[];
    
    for(let i=0 ; j<array.length; j++){
        for(j=i+1 ; i< array.length-1 ; j++){
            if(array[i] !== array[j]){
                num = array[i];
                numRest.push(num);
            }
        }
}
// return numRest;
console.log(numRest);
}

//function plus modern :
function removeDuplicates(array) {
    return [...new Set(array)];
}

let array =[1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

removeDuplicates(array);

//Testez votre fonction avec les tableaux [1, 2, 3, 4, 5], [10, 20, 30, 40, 50], [5, 4, 3, 2, 1], [100, 200, 300, 400, 500]
let tableaux= [[1, 2, 3, 4, 5] ,[10, 20, 30, 40, 50], [5, 4, 3, 2, 1], [100, 200, 300, 400, 500]];
for(let i=0 ; i<tableaux.length ; i++){   // for(array of tableaux)
    let array =tableaux[i];
    displayArray(array);
    console.log("The seconde function")
    displayArrayReverse(array);
}

let words = ['hello', 'world', 'javascript', 'python', 'java'];
    console.log(`the most longest word is: ${findLongestWord(words)} `);



//================================
//5-Exercice 5: classer les nombres par ordre croissant
//1-Créez une fonction sortAscending(numbers) qui prend en paramètre un tableau de nombres 
//2-qui renvoie un nouveau tableau avec les nombres triés par ordre croissant.
//**************************

function sortAscending(numbers){
   let resultat = numbers.slice();   // pour copie le tableaux
   
   for(let i =0; i<resultat.length; i++){
       for(j=0;j<resultat.length-1 ; j++){
           if(resultat[j] > resultat[j+1]){
               let temp =resultat[j];
               resultat[j] = resultat[j+1];
           }
       }
   }
   return resultat;
}

let numbers=[1, 2, 3, 4, 5];
 console.log(sortAscending(numbers));
 
 //=====================================
 //6-Exercice 6: calculer la moyenne des nombres
 //1-Créez une fonction calculateAverage(numbers) qui prend en paramètre un tableau de nombres
 //2-renvoie la moyenne des nombres du tableau.
 
 function calculateAverage(numbers){
     let sum =0;
     let count=0;
     for(let i=0 ; i<numbers.length; i++){
         sum+=numbers[i];
         count++;
         
     }
     return sum/count;
 }
 
 //=========================
 //Exercice 7: vérifier si un nombre est premie:
 //Créez une fonction isPrime(number) qui prend en paramètre un nombre
 //true si le nombre est premier    false sinon.
 
 function isPrime(number){
    if(number <1){
        return false;
    }
    for(let i=2 ; i<number ;i++){
        if(number %i  ===0){
            return false;
        }
    }
   return true; 
 }

//Testez votre fonction avec 
let  nombres=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
for(let i=0 ; i<nombres.length; i++){
    let number =nombres[i];
    console.log(isPrime(number));
}
//===========================
//8-Exercice 8 : afficher les mots au nombre impair de lettres
//Créez une fonction displayOddLengthWords(words) qui prend en paramètre un tableau de mots et qui affiche chaque mot ayant un nombre impair de lettres dans la console

function displayOddLengthWords(words){
    let temp=0;
    for(let word of words){
      if (word.length % 2 !== 0) {
            console.log(word);
       
       }
    }
    
}

let mots =[['hello', 'world', 'javascript', 'python', 'java'], ['apple', 'banana', 'cherry', 'date', 'elderberry'], ['cat', 'dog', 'elephant', 'fox']];
for(let i=0; i<mots.length; i++){
    let mot = mots[i];
  console.log(displayOddLengthWords(mot));  
}
  

//===========================
//Exercice 9 : afficher un décompte
//= = = = = = = = = = = =

function countdown(start){
    for(let i=0 ; i<=start ; i++){
        console.log(i);
    }
}

countdown(10);

// === = == == ======
//Exercice 10 : calculer la moyenne de tableaux imbriqués
// === == == === == == = =

function calculateAverageNested(arrays){
      let sum=0;
      let avarege =0;
    for(let array of arrays){
        for(let i=0 ; i<array.length; i++){
            sum+=array[i]
             avarege = sum/array.length;
        }
        console.log(avarege)
    }
    return avarege;
}



let arrays= [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 20, 30], [40, 50, 60], [70, 80, 90], [1, 2], [3, 4], [5, 6]];
calculateAverageNested(arrays);