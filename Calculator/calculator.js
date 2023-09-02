let input = document.querySelector('.input-area');
let btns = document.querySelectorAll('.btn');

let num = '';
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if(e.target.innerHTML == '='){
            num = eval(num);
            input.value = num;
        }
        else if(e.target.innerHTML == 'C'){
            num = '';
            input.value = num;
        }
        else{
            num = num + e.target.innerHTML;
            input.value = num;
        }
    });
});