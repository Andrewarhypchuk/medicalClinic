
let input1 = document.getElementById("input1");
input1.onfocus = function(){
    input1.style.borderColor = 'blue';
    input1.style.borderWidth = "3px";
}
input1.onkeypress = function(){
    let str = input1.value; 
    let regexp = /^[a-zA-Z]{0,20}$/;
    
    if(regexp.test(str)){
       document.getElementById('tick1').classList.remove('none');
       document.getElementById('dagger1').classList.add('none');
       document.getElementById('error1').classList.add('none');

    }else{
        document.getElementById('tick1').classList.add('none');
       document.getElementById('dagger1').classList.remove('none');
       document.getElementById('error1').classList.remove('none');
       setTimeout(() =>{
        document.getElementById('error1').classList.add('none');
        document.getElementById('error1Empty').classList.add('none');    
    },2000)
    }
}
input1.onblur = function(){
    let str = input1.value; 
    let strNoSpace = input1.value.trim();
    console.log(strNoSpace);
    let regexp = /^[a-zA-Z]{0,20}$/;
    if(regexp.test(str) & strNoSpace !== ""){
                  input1.style.borderColor = 'green' ;
                  document.getElementById('error1').classList.add('none');
                  document.getElementById('error1Empty').classList.add('none');
                
    }else{ 
        if(strNoSpace == ""){
            document.getElementById('error1Empty').classList.remove('none'); 
            input1.style.borderColor = 'red' ;
            setTimeout(() =>{
                document.getElementById('error1').classList.add('none');
                document.getElementById('error1Empty').classList.add('none');    
            },2000)
        }else{
           input1.style.borderColor = 'red' ;
           document.getElementById('error1').classList.remove('none');
           setTimeout(() =>{
            document.getElementById('error1').classList.add('none');
            document.getElementById('error1Empty').classList.add('none');    
        },2000)
        }
    }
}
    // =====================================================================================================

let input2 = document.getElementById("input2");
input2.onfocus = function(){
    input2.style.borderColor = 'blue' ;
    input2.style.borderWidth = "3px";
}
input2.onkeypress = function(){
    let str = input2.value;
    let strNoSpace = input2.value.trim() 
    let regexp =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(strNoSpace == ""){
        document.getElementById('tick2').classList.add('none');
        document.getElementById('dagger2').classList.remove('none');
        document.getElementById('error2Empty').classList.remove('none');
        setTimeout(() =>{
            document.getElementById('error2').classList.add('none');
            document.getElementById('error2Empty').classList.add('none');    
        },500)

    }
    if(regexp.test(str)){
       document.getElementById('tick2').classList.remove('none');
       document.getElementById('dagger2').classList.add('none');
       document.getElementById('error2').classList.add('none');
       document.getElementById('error2Empty').classList.add('none'); 


    }else{
        document.getElementById('tick2').classList.add('none');
       document.getElementById('dagger2').classList.remove('none');
       document.getElementById('error2').classList.remove('none');
       setTimeout(() =>{
        document.getElementById('error2').classList.add('none');
        document.getElementById('error2Empty').classList.add('none');    
    },2000)
    }
}
input2.onblur = function(){
    let str = input2.value; 
    let strNoSpace = input2.value.trim();
    let regexp =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(regexp.test(str)){
        input2.style.borderColor = 'green' ;
        document.getElementById('tick2').classList.remove('none');
       document.getElementById('dagger2').classList.add('none');
       document.getElementById('error2').classList.add('none');

    }else{
        if(strNoSpace == ""){
            document.getElementById('tick2').classList.add('none');
            document.getElementById('error2Empty').classList.remove('none');
            setTimeout(() =>{
                document.getElementById('error2').classList.add('none');
                document.getElementById('error2Empty').classList.add('none');    
            },2000)
    
        }

        input2.style.borderColor = 'red' ;
        document.getElementById('error2').classList.remove('none');
        setTimeout(() =>{
            document.getElementById('error2').classList.add('none');
            document.getElementById('error2Empty').classList.add('none');    
        },2000)
    }
}
// ===================================================================================================
let input3 = document.getElementById("input3");
input3.onfocus = function(){
    input3.style.borderColor = 'blue';
    input3.style.borderWidth = "3px";
}
input3.onkeypress = function(){
    let str = input3.value; 
    let regexp = /^\+38\d{9}$/;
    let strNoSpace = input3.value.trim();
    if(strNoSpace == ''){
        document.getElementById('tick3').classList.add('none');
        document.getElementById('dagger3').classList.remove('none');
        document.getElementById('error3Empty').classList.remove('none');
        setTimeout(() =>{
            document.getElementById('error3').classList.add('none');
            document.getElementById('error3Empty').classList.add('none');    
        },500)
    }
    if(regexp.test(str)){
       document.getElementById('tick3').classList.remove('none');
       document.getElementById('dagger3').classList.add('none');
       document.getElementById('error3').classList.add('none');

    }else{
        document.getElementById('tick3').classList.add('none');
       document.getElementById('dagger3').classList.remove('none');
       document.getElementById('error3').classList.remove('none');
       setTimeout(() =>{
        document.getElementById('error3').classList.add('none');
        document.getElementById('error3Empty').classList.add('none');    
    },2000)
    }
    
}
input3.onblur = function() {
    let str = input3.value; 
    let regexp = /^\+38\d{10}$/;
    let strNoSpace = input3.value.trim();
    if(regexp.test(str)){
        input3.style.borderColor = 'green' ;
        document.getElementById('tick3').classList.remove('none');
        document.getElementById('dagger3').classList.add('none');
        document.getElementById('error3').classList.add('none');
 
     }else{
        if(strNoSpace == ""){
            document.getElementById('tick3').classList.add('none');
            document.getElementById('error3Empty').classList.remove('none');
            setTimeout(() =>{
                document.getElementById('error3').classList.add('none');
                document.getElementById('error3Empty').classList.add('none');    
            },2000)
    
        } 
        input3.style.borderColor = 'red' ;
         document.getElementById('tick3').classList.add('none');
        document.getElementById('dagger3').classList.remove('none');
        document.getElementById('error3').classList.remove('none');
        setTimeout(() =>{
         document.getElementById('error3').classList.add('none');
         document.getElementById('error3Empty').classList.add('none');    
     },2000)
     }
}
// ==============================================================================
let input4 = document.getElementById("input4");
input4.onfocus = function(){
    input4.style.borderColor = 'blue';
    input4.style.borderWidth = "3px";
}
input4.onchange = function(){
    let str = input4.value; 
    let regexp = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    let strNoSpace = input4.value.trim();
    console.log(str);
    if(strNoSpace == ''){
        document.getElementById('tick4').classList.add('none');
        document.getElementById('dagger4').classList.remove('none');
        document.getElementById('error4Empty').classList.remove('none');
        setTimeout(() =>{
            document.getElementById('error4').classList.add('none');
            document.getElementById('error4Empty').classList.add('none');    
        },500)
    }
    if(regexp.test(str)){
       document.getElementById('tick4').classList.remove('none');
       document.getElementById('dagger4').classList.add('none');
       document.getElementById('error4').classList.add('none');

    }else{
        document.getElementById('tick4').classList.add('none');
       document.getElementById('dagger4').classList.remove('none');
       document.getElementById('error4').classList.remove('none');
       setTimeout(() =>{
        document.getElementById('error4').classList.add('none');
        document.getElementById('error4Empty').classList.add('none');    
    },2000)
    }
    
}
input4.onblur = function() {
    let str = input4.value; 
    let regexp = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    let strNoSpace = input4.value.trim();
    if(regexp.test(str)){
        input4.style.borderColor = 'green' ;
        document.getElementById('tick4').classList.remove('none');
        document.getElementById('dagger4').classList.add('none');
        document.getElementById('error4').classList.add('none');
 
     }else{
        if(strNoSpace == ""){
            document.getElementById('tick4').classList.add('none');
            document.getElementById('error4Empty').classList.remove('none');
            setTimeout(() =>{
                document.getElementById('error4').classList.add('none');
                document.getElementById('error4Empty').classList.add('none');    
            },2000)
    
        } 
        input4.style.borderColor = 'red' ;
         document.getElementById('tick4').classList.add('none');
        document.getElementById('dagger4').classList.remove('none');
        document.getElementById('error4').classList.remove('none');
        setTimeout(() =>{
         document.getElementById('error4').classList.add('none');
         document.getElementById('error4Empty').classList.add('none');    
     },2000)
     }
}
// ========================================================================
let input5 = document.getElementById("input5");
input5.onfocus = function(){
    input5.style.borderColor = 'blue';
    input5.style.borderWidth = "3px";
}
input5.onchange = function(){
    let str = input5.value; 
    let strNoSpace = input5.value.trim();
    console.log(str);
    if(strNoSpace == ''){
        document.getElementById('tick5').classList.add('none');
        document.getElementById('dagger5').classList.remove('none');
        document.getElementById('error5Empty').classList.remove('none');
        setTimeout(() =>{
            document.getElementById('error5').classList.add('none');
            document.getElementById('error5Empty').classList.add('none');    
        },500)
    }
    if(strNoSpace === "Ophtalmology" || 
       strNoSpace ===  "Dentistry" ||
       strNoSpace ===  "Cardiology"||
       strNoSpace === "Pediatrics" || 
       strNoSpace ===  "Laboratory" ||
       strNoSpace === "Radiology"){
       document.getElementById('tick5').classList.remove('none');
       document.getElementById('dagger5').classList.add('none');
       document.getElementById('error5').classList.add('none');

    }else{
        document.getElementById('tick5').classList.add('none');
       document.getElementById('dagger5').classList.remove('none');
       document.getElementById('error5').classList.remove('none');
       setTimeout(() =>{
        document.getElementById('error5').classList.add('none');
        document.getElementById('error5Empty').classList.add('none');    
    },2000)
    }
    
}
input5.onblur = function() {
    let str = input5.value; 
    
    let strNoSpace = input5.value.trim();
    if(strNoSpace === "Ophtalmology" || 
    strNoSpace ===  "Dentistry" ||
    strNoSpace ===  "Cardiology"||
    strNoSpace === "Pediatrics" || 
    strNoSpace ===  "Laboratory" ||
    strNoSpace === "Radiology"){
        input5.style.borderColor = 'green' ;
        document.getElementById('tick5').classList.remove('none');
        document.getElementById('dagger5').classList.add('none');
        document.getElementById('error5').classList.add('none');
 
     }else{
        if(strNoSpace == ""){
            document.getElementById('tick5').classList.add('none');
            document.getElementById('error5Empty').classList.remove('none');
            setTimeout(() =>{
                document.getElementById('error5').classList.add('none');
                document.getElementById('error5Empty').classList.add('none');    
            },2000)
    
        } 
        input5.style.borderColor = 'red' ;
         document.getElementById('tick5').classList.add('none');
        document.getElementById('dagger5').classList.remove('none');
        document.getElementById('error5').classList.remove('none');
        setTimeout(() =>{
         document.getElementById('error5').classList.add('none');
         document.getElementById('error5Empty').classList.add('none');    
     },2000)
     }
}
// ============================///////////=================================================
document.getElementById('check').onchange = function(){
   if(input1.style.borderColor == 'green' && input2.style.borderColor == 'green' && input3.style.borderColor == 'green' && input4.style.borderColor == 'green' && input5.style.borderColor == 'green'){ 
       document.getElementById('submit').removeAttribute('disabled');
       document.getElementById('submit').style.backgroundColor = 'blue';
       console.log('very good');
}
}
document.getElementById('submit').onclick = function (){
document.getElementById('great').classList.remove('none');
document.getElementById('great').style.top = '50px';

}
let clients = [];
document.getElementById('start').onclick = function(){
    let client = [];
    client[0] = input1.value;
    client[1] = input2.value;
    client[2] = input3.value;
    client[3] = input4.value;
    client[4] = input5.value;
    clients.push(client);
    console.log(client);
    document.getElementById('great').classList.add('none');

    document.getElementById('tick1').classList.add('none');
    document.getElementById('tick2').classList.add('none');
    document.getElementById('tick3').classList.add('none');
    document.getElementById('tick4').classList.add('none');
    document.getElementById('tick5').classList.add('none');

     document.getElementById('submit').setAttribute('disabled','disabled')

    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
    console.log(clients);
}





