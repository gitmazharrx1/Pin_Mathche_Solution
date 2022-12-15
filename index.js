document.getElementById('pin-generate').addEventListener('click',function(){
        const randomNumber = Math.floor(Math.random()*10000);
        const str = randomNumber + '';
        if(str.length == 4){
                const putRandomValue = document.getElementById('random-area');
                putRandomValue.value = randomNumber;
        }
        
})

document.getElementById('key').addEventListener('click',function(number){
        const getKey =number.target.innerText;
        const getnumber = document.getElementById('pin-feild');
        if(isNaN(getKey)){
                if(getKey == 'C'){
                        getnumber.value = '';
                }
        }
        else{
                const getKeyNumbers = getnumber.value;
                const newnumber = getKeyNumbers +getKey;
                getnumber.value = newnumber;
        }
        
})

document.getElementById('submit').addEventListener('click',function(){
        const randomPin = document.getElementById('random-area').value;
        const pinFeild = document.getElementById('pin-feild').value;
        const randomPinNumber = parseInt(randomPin);
        const pin = parseInt(pinFeild);
        
        const display = document.getElementById('ok');
        const displayno = document.getElementById('no');
        if(randomPinNumber == pin){
                
                display.style.display = 'block';
                displayno.style.display = 'none';
        }
        else{
                
                displayno.style.display = 'block';
                display.style.display = 'none';
        }
})