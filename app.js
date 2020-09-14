
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.value;
            screen.value += value;
        })
    })
    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = 'Nhap phep tinh'
        }else{
            let answer = eval(screen.value);
            screen.value = Math.round(answer*100)/100;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = '';
    })