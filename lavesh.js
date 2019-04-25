let result;
     let a =[];
     let operation = [];
     let index;

     function enterNumber(num){
     index = a.length; 
     if(operation.length == a.length - 1){
         if(num == '.' && String(a[index-1]).indexOf('.') != -1){

         } else if(a[index-1] < 9999999999999999999999){
             a[index-1] = a[index-1] + String(num);
             result = a[index-1];
         }
     }
     else {
     		a.push(num);
            result = a[index];
     }
     document.getElementById('display').innerHTML = result;
     
     }

    function enterOperations( opr){
         index = operation.length;
         if(a.length === index){
             operation[index-1] = opr;
         } else {
             operation.push(opr);
         }
        result = opr;
        document.getElementById('display').innerHTML = result;
    }   

     document.getElementById('display').innerHTML = "0";
    
     function findresult(){
         result = a[0];
         if(a.length === operation.length){
             result = "Invalid input"
         } else{
             for(let i = 0;i<operation.length;i++){
                 if(operation[i] === '+'){
                     result = Number(result) + Number(a[i+1]);
                 } else if (operation[i] === '-'){
                     result = Number(result) - Number(a[i+1]);
                 } else if (operation[i] === '*'){
                     result = Number(result) * Number(a[i+1]);
                 } else if (operation[i] === '/'){
                     result = Number(result) / Number(a[i+1]);
                 }
             }
         }
         
         if(result != "Invalid input" && isNaN(result)){
            result =0;
        }
         a =[];
         a.push(result);
         operation = [];
        document.getElementById('display').innerHTML = result;
         
     }

     function clearText(){
         a =[];
         operation = [];
         document.getElementById('display').innerHTML = "Welcome to Calculator";
     }
