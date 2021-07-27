var uname=document.getElementById('name');
var mm=document.getElementById('month');
var dd=document.getElementById('date');
var cc=document.getElementById('century');
var yy=document.getElementById('year');
var gender=document.getElementById('gender');

function mainer(){
    if(uname.value==''){
        alert("Usename cant be blank");
        uname.focus();  
        return false;
    }
    if(mm.value=='' || mm.value>12 || mm.value<=0 ){
        alert('Input a valid month');
        return false;
    }
    if(dd.value==''||dd.value>31 ||dd.value<=0){
        alert("Input a valid date");
        return false
    }
    if(cc.value==''){
        alert('Input a valid century');
        return false;
    }
    if(yy.value==''){
        alert('Input a valid year');
        return false;
    }
    if (gender.value==''){
        alert('Select a valid gender');
        return false;
    }
    
    
    var d = math.floor(( ( (cc.value/4) -2*cc.value-1) + ((5*yy.value/4) ) + ((26*(mm+1)/10)) + DD ) % 7);
    alert('QUOSHENT '+d);
    

}









// let day = monday, tuesday, wednesday, thursday, friday, saturday, sunday
// let date = d
// d <= 0
// d > 31
// let month = m
// m <= 0
// m > 12
// console.log(date, month)
// // for male
// monday = kwadwo
// tuesday = kwabena
// wednesday = kwaku
// thursday = yaw
// friday = kofi
// saturday = kwame
// sunday = kwasi
// // for female
// monday = adwoa
// tuesday = abenaa
// wednesday = akua
// thursday = yaa
// friday = afua
// saturday = Ama 
// sunday = akosua
// var centuryDigits = cc 
// var yearDigits = yy 
// var month = mm 
// var day = dd 
// var modulusFunction = mod 
// var weekDay = d 
// d=(((cc/4)-2*cc-1)+((5*yy/4))+((26*)mm+1))10+dd mod7
// console.log(d)
