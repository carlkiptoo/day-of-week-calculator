let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
let maleNames = ['kwasi', 'kwado', 'kwabena', 'kwaku', 'yaw', 'kofi', 'kwame']
let femaleNames = ['akosua', 'adwoa', 'abenaa', 'akua', 'yaa', 'afua', 'ama']


var nameInput=document.getElementById('name').value;
var monthInput=document.getElementById('month').value;
var dayInput=document.getElementById('date').value;
var yearInput=document.getElementById('year').value;
var gender=document.getElementsByClassName('gender').value;

function mainer(){
    if(nameInput==''){
        alert("Username cant be blank");
        uname.focus();  
        
    }
    else if(monthInput=='' || monthInput>12 || monthInput<=0 ){
        alert('Input a valid month');
        
    }
    else if(dayInput==''||dayInput>31 ||dayInput<=0){
        alert("Input a valid date");
        
    }
    else if(yearInput==''||yearInput>2100 ||yearInput<=1900){
        alert('Input a valid year');
        
    }
    else if (gender==''){
        alert('Select a valid gender');
        return false;}
        else {
            alert('data input is valid');
        }
}
    function formulaDay(){
        var monthInput=document.getElementById('month').value;
        var dayInput=document.getElementById('date').value;
        var yearInput=document.getElementById('year').value;
        var gender=document.getElementsByClassName('gender').value;
        var tarehe=new Date(yearInput + "/" + monthInput + "/" + dayInput);
        var other=tarehe.getDay();
        alert(other);
        let boy=document.getElementsById('male').checked=== male;
        alert(boy);
       //if (genders[0].checked=== true){
        //   var gender = 'male'
        //   alert('male');
       //}
       //if (genders[1].checked=== true){
         //  var gender = 'female'
       //}
       switch(gender){
           case 'male':
               if (tarehe===0){
                   alert('your Akan name is' + maleNames[0])
               }if (tarehe===1){
                alert('your Akan name is' + maleNames[1])
            }if (tarehe===2){
                alert('your Akan name is' + maleNames[2])
            }if (tarehe===3){
                alert('your Akan name is' + maleNames[3])
            }if (tarehe===4){
                alert('your Akan name is' + maleNames[4])
            }if (tarehe===5){
                alert('your Akan name is' + maleNames[5])
            }if (tarehe===6){
                alert('your Akan name is' + maleNames[6])
            }
            break;
            case 'female':
                if (resultInput===0){
                    alert('your Akan name is' + femaleNames[0])
                }if (resultInput===1){
                    alert('your Akan name is' + femaleNames[1])
                }if (resultInput===2){
                    alert('your Akan name is' + femaleNames[2])
                }if (resultInput===3){
                    alert('your Akan name is' + femaleNames[3])
                }if (resultInput===4){
                    alert('your Akan name is' + femaleNames[4])
                }if (resultInput===5){
                    alert('your Akan name is' + femaleNames[5])
                }if (resultInput===6){
                    alert('your Akan name is' + femaleNames[6])
                }
                break;
                default:
       }
    }
    
    function mainer(){
        formulaDay()
    }
