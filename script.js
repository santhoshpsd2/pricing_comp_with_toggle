const basic_price = document.querySelector('.basic_price');


const prof_price = document.querySelector('.prof_price');


const master_price = document.querySelector('.master_price');


const input_check = document.querySelector('.input_check');
const label_check = document.querySelector('.check');

label_check.addEventListener('click',()=>{
    update_data();
})

function update_data(){
    if(input_check.checked == true){
        basic_price.innerText = "$199.99";
        prof_price.innerText = "$249.99";
        master_price.innerText = "$399.99"
    }
    else if(input_check.checked == false){
        basic_price.innerText = "$19.99";
        prof_price.innerText = "$24.99";
        master_price.innerText = "$39.99"
    }
}

