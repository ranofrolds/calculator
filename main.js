function main(){
    const calculator = document.querySelector('.calculadora')
    const botoes = calculator.querySelector('.buttons')
    var count=0;
    var qntNumbers=0;
    var operacaoRepetida=0;
    var operation;
    var displayNumber=[0, 0, 0];
    var decimal=0;
    var decimalrepeat=0;
    var commacases =[] ;
    var commacase=0;
    var chars=0;


    botoes.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const botao = e.target
        const action = botao.dataset.action;
        const targetNumber = parseFloat(e.target.value);
        

        if (!action) {
            //numeros
            
            if(displayNumber[3]!=0 && qntNumbers==1){
                if(count==0){
                    document.getElementById('inpt').value = targetNumber;
                    displayNumber[qntNumbers]=parseFloat(targetNumber);
                    count++;
                    
                }
                else if(count>0){
                    if(decimal>0){    
                        document.getElementById('inpt').value += targetNumber;
                        displayNumber[qntNumbers]=displayNumber[qntNumbers]+(targetNumber/(10*count));         
                        count = count*10; 
                        commacases[qntNumbers]++;
                    }
                    else{ 
                        document.getElementById('inpt').value = (`${displayNumber[qntNumbers]}${targetNumber}`).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        displayNumber[qntNumbers]=parseFloat(`${displayNumber[qntNumbers]}${targetNumber}`);
                        decimal=0
                    }

                }
            }
            else if(count==0){
                displayNumber[3]=0;
                commacases[qntNumbers]=0;
                if(decimal>0){
                    document.getElementById('inpt').value += targetNumber;
                    displayNumber[qntNumbers]=parseFloat(targetNumber)/10*(count+1);
                    commacases[qntNumbers]++;
                    count+=10;
                }
                else{
                    document.getElementById('inpt').value = targetNumber;
                    displayNumber[qntNumbers]=parseFloat(targetNumber);
                    count++;
                    decimalrepeat=0;
                    decimal=0
                }
                operacaoRepetida=0;
                
                
                
                chars++;
            }
            else if(count>0){
                if(decimal>0){    
                    document.getElementById('inpt').value += targetNumber;
                    displayNumber[qntNumbers]=displayNumber[qntNumbers]+(targetNumber/(10*count));
                    count = count*10;
                    commacases[qntNumbers]++;
                }
                else{ 
                    document.getElementById('inpt').value = (`${displayNumber[qntNumbers]}${targetNumber}`).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    displayNumber[qntNumbers]=parseFloat(`${displayNumber[qntNumbers]}${targetNumber}`);
                    decimal=0
                    chars++;

                }
            
            }
            
            
        }
        else if(action ==='multiply' || action ==='add' || action ==='division' || action==='subtract'){
            if(action==='multiply'){
                if(operacaoRepetida>0){
                    return;
                }
                botao.style.backgroundColor= "#298179";
                if(qntNumbers==0){
                    operacaoRepetida++;
                    count=0;
                    
                    qntNumbers++;
                    commacases[qntNumbers]=0;
                    operation = 'multiply'
                    decimal=0;
                    return;
                }
                else if(displayNumber[3]!=0){
                    operation = 'multiply';
                    qntNumbers=1;
                    count=0;
                    commacases[qntNumbers]=0;
                    return;
                }
                decimal=0
                operacaoRepetida=0;
                
            }
            else if(action==='division'){
                if(operacaoRepetida>0){
                    return;
                }
                botao.style.backgroundColor= "#298179";
                if(qntNumbers==0){
                    operacaoRepetida++;
                    count=0;
                    commacases[qntNumbers]=0;
                    qntNumbers++;
                    operation = 'division'
                    decimal=0;
                    return;
                }
                else if(displayNumber[3]!=0){
                    operation = 'division';
                    qntNumbers=1;
                    count=0;
                    commacases[qntNumbers]=0;
                    return;
                }
                decimal=0
                operacaoRepetida=0;
                
            }
            else if(action==='add'){
                if(operacaoRepetida>0){
                    return;
                }
                botao.style.backgroundColor= "#298179";
                if(qntNumbers==0){
                    operacaoRepetida++;
                    count=0;
                    
                    qntNumbers++;
                    commacases[qntNumbers]=0;
                    operation = 'add'
                    decimal=0;
                    return;
                }
                else if(displayNumber[3]!=0){
                    operation = 'add';
                    qntNumbers=1;
                    count=0;
                    commacases[qntNumbers]=0;
                    return;
                }
                decimal=0

                operacaoRepetida=0;
                
            }
            else if(action==='subtract'){
                if(operacaoRepetida>0){
                    return;
                }
                botao.style.backgroundColor= "#298179";
                if(qntNumbers==0){
                    operacaoRepetida++;
                    count=0;
                    qntNumbers++;
                    commacases[qntNumbers]=0;
                    operation = 'subtract'
                    decimal=0;
                    return;
                }
                else if(displayNumber[3]!=0){
                    operation = 'subtract';
                    qntNumbers=1;
                    count=0;
                    commacases[qntNumbers]=0;
                    return;
                }
                decimal=0
                operacaoRepetida=0;
                
            }

        }
        else if(action === 'percent'){
            if(qntNumbers==0 && displayNumber[3]==0){
                if((displayNumber[0]/100)>1000){
                    document.getElementById('inpt').value=(displayNumber[0]/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    displayNumber[0]=displayNumber[0]/100;
                    return;
                }
                var string=(displayNumber[0]/100).toString().replace('.',',');
                var string2=string.substring(string.indexOf(','), 0)

                string=string.substring(string.indexOf(','))

                string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                document.getElementById('inpt').value=`${string2}${string}`; 
                
                displayNumber[3]=displayNumber[0]/100
                return;
            }
            else if(displayNumber[3]!=0){
                if((displayNumber[3]/100)>1000){
                    document.getElementById('inpt').value=(displayNumber[3]/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    displayNumber[3]=displayNumber[0]/100;
                    return;
                }
                var string=(displayNumber[3]/100).toString().replace('.',',');
                var string2=string.substring(string.indexOf(','), 0)

                string=string.substring(string.indexOf(','))

                string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                document.getElementById('inpt').value=`${string2}${string}`; 
                
                displayNumber[3]=displayNumber[3]/100
                return;
            }

        }
        else if(action ==='sinal'){
                
            if(parseFloat(document.getElementById('inpt').value)<0){
                if(qntNumbers==0){
                    displayNumber[0]=-displayNumber[0];
                    document.getElementById('inpt').value=displayNumber[0];
                }
                else if(qntNumbers==1){
                    displayNumber[1]=-displayNumber[1];
                    document.getElementById('inpt').value=displayNumber[0];
                }
            }
            else{
                if(qntNumbers==0){
                    displayNumber[0]=-displayNumber[0];
                    document.getElementById('inpt').value = displayNumber[0];
                }
                else if(qntNumbers==1){
                    displayNumber[1]=-displayNumber[1];
                    document.getElementById('inpt').value = displayNumber[0];
                }
            }
                

        }
        else if(action ==='clear'){
            if(qntNumbers==0){
                displayNumber[0]=0;
                document.getElementById('inpt').value=" ";
                count=0;
                decimalrepeat=0;
            }
            else if(qntNumbers==1){
                displayNumber[1]=0;
                document.getElementById('inpt').value=" ";
                count=0;
                decimalrepeat=0;
            }
            if(decimal>0){
                decimal=0;
            }
        }
        else if(action === 'clear_all'){
            displayNumber[0]=0;
            displayNumber[1]=0;
            displayNumber[3]=0;
            qntNumbers=0;
            document.getElementById('inpt').value=" ";
            count=0;
            for(var i=0; i<=qntNumbers; i++){
                commacases[i]=0;
            }
            commacase=0;
            operacaoRepetida=0;
            decimalrepeat=0;
            if(decimal>0){
                decimal=0;
            }
            document.getElementById('subtract').style.backgroundColor= "#0b040b";
            document.getElementById('add').style.backgroundColor= "#0b040b";
            document.getElementById('division').style.backgroundColor= "#0b040b";
            document.getElementById('multiply').style.backgroundColor= "#0b040b";
        }
        else if(action === 'result'){
            let aux=commacases[0]>commacases[1]? commacases[0]:commacases[1];
            commacase=commacase>aux?commacase:aux;
            if(displayNumber[3]!=0){
                displayNumber[0]=parseFloat(displayNumber[3])
            }

            if(operation ==='multiply' && qntNumbers===1 && count>0){
                

                var result = commacase>0?parseFloat(displayNumber[0]*displayNumber[1]).toFixed(commacase+1):parseFloat(displayNumber[0]*displayNumber[1]);
                
                if(decimal>0 || commacase>0){
                    var string=result.toString().replace('.',',');
                    var string2=string.substring(string.indexOf(','), 0)

                    string=string.substring(string.indexOf(','))

                    string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                    document.getElementById('inpt').value=`${string2}${string}`;   
                    
                }
                else{
                    document.getElementById('inpt').value=result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                document.getElementById('multiply').style.backgroundColor= "#0b040b";
                displayNumber[3]=result;
                operacaoRepetida=0
                qntNumbers=0;
                decimalrepeat=0;
                if(decimal>0){
                    decimal=0;
                }

            }
            else if(operation ==='division' && qntNumbers===1 && count>0){
                
                var result = parseFloat(displayNumber[0]/displayNumber[1]);
                
                if(decimal>0 || commacase>0){
                    var string=result.toString().replace('.',',');
                    var string2=string.substring(string.indexOf(','), 0)

                    string=string.substring(string.indexOf(','))

                    string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                    document.getElementById('inpt').value=`${string2}${string}`;   
                    
                }
                else{
                    document.getElementById('inpt').value=result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                document.getElementById('division').style.backgroundColor= "#0b040b";
                displayNumber[3]=result;
                operacaoRepetida=0
                qntNumbers=0;
                decimalrepeat=0;
                
                if(decimal>0){
                    decimal=0;
                }
            }
            else if(operation ==='add' && qntNumbers===1 && count>0){
                
                
                
                var result = commacase>0?parseFloat(displayNumber[0]+displayNumber[1]).toFixed(commacase+1):parseFloat(displayNumber[0]+displayNumber[1]);
                
                
                
                
                if(decimal>0 || commacase>0){
                    var string=result.toString().replace('.',',');
                    var string2=string.substring(string.indexOf(','), 0)

                    string=string.substring(string.indexOf(','))

                    string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                    document.getElementById('inpt').value=`${string2}${string}`;   
                    
                }
                else{
                    document.getElementById('inpt').value=result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                document.getElementById('add').style.backgroundColor= "#0b040b";
                displayNumber[3]=result;
                operacaoRepetida=0
                qntNumbers=0;
                decimalrepeat=0;
                if(decimal>0){
                    decimal=0;
                }

            }
            else if(operation ==='subtract' && qntNumbers===1 && count>0){
                
                var result =  commacase>0?parseFloat((displayNumber[0]-displayNumber[1])).toFixed(commacase+1):parseFloat((displayNumber[0]-displayNumber[1]));
                
                if(decimal>0 || commacase>0){
                    var string=result.toString().replace('.',',');
                    var string2=string.substring(string.indexOf(','), 0)

                    string=string.substring(string.indexOf(','))

                    string2=string2.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                    document.getElementById('inpt').value=`${string2}${string}`;   
                    
                }
                else{
                    document.getElementById('inpt').value=result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
 

                document.getElementById('subtract').style.backgroundColor= "#0b040b";
                displayNumber[3]=result;
                operacaoRepetida=0
                qntNumbers=0;
                decimalrepeat=0;
                if(decimal>0){
                    decimal=0;
                }

            }
        }
        else if(action ==='point'){
            if(decimalrepeat==0){
                document.getElementById('inpt').value += ',';
                chars++;
                decimalrepeat++;
                decimal++;
            }
            
        }  
    }
    })
    
}


