

const addTotextBox=(number)=>{
  let display= document.querySelector('.textBox')

   display.innerHTML+=number
 
}
function getResult(){
   
  var display1 = document.querySelector('.textBox').innerHTML
  let array1 = display1.split(/([+,-,*,/,%,+/-])/);

    
    

    for(let i=1;i<array1.length;i++)
     {
        if(array1[i]==="+"){
          let sum= parseFloat(array1[i-1])+parseFloat(array1[i+1])
          document.querySelector('.textBox').innerHTML = sum
       
        
        }
        else if(array1[i]==="-"){
            let diff = parseFloat(array1[i-1])-parseFloat(array1[i+1])
            document.querySelector('.textBox').innerHTML= diff
          
          }
          else if(array1[i]==="*"){
            let product= parseFloat(array1[i-1])*parseFloat(array1[i+1])
            document.querySelector('.textBox').innerHTML= product  
           
          
          }
          else if(array1[i]==="/"){
            let division= parseFloat(array1[i-1])/parseFloat(array1[i+1])
             document.querySelector('.textBox').innerHTML= division 
             
          
          }
          else if(array1[i]==="%"){
            let percent= parseFloat(array1[i-1])/100
             document.querySelector('.textBox').innerHTML= percent  
           
          
          }
          else if(array1[i]==="+/-"){
         

            
        let sum1= parseFloat(array1[i-1])+parseFloat(array1[i-1])
        document.querySelector('.textBox').display.innerHTML = sum1 
          
          
          }


     }
    }
     function clear1(){
        let x= document.querySelector('.textBox')
        x.innerHTML= " "
     }
    function back1()
     {
       let text= document.querySelector('.textBox').innerHTML
        let char=text.split("")
        let charlength = (char.length)-1
        let backtext= ""
        for(let j=0;j<charlength;j++){
        backtext += char[0]
        }
     let y = document.querySelector('.textBox')
        y.innerHTML = backtext
}