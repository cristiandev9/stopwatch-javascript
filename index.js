var myInterval = null;
let initialValueInput = document.getElementById('initialValue');
let initialValueHiddenInput = document.getElementById('initialValueHidden');


initialValueInput.onchange = () => {
    document.getElementById('initialValueHidden').value = initialValueInput.value;

}

function Decrease(initialValue) {


    myInterval = setInterval(function () {

        document.querySelector('[class=time]').innerHTML = initialValue;
        document.getElementById('initialValueHidden').value = initialValue;
        initialValue = initialValue - 1;



        if (initialValue < 0) {
            document.querySelector('[class=time]').innerHTML = "FIM!";
            document.getElementById('button-start-stopwatch').innerHTML = 'Start';
            clearInterval(myInterval);
        }

    }, 1000);


}

document.getElementById('button-start-stopwatch').onclick = () => {
    Decrease(initialValueHiddenInput.value);
};


document.getElementById('restart').onclick = function () {
    document.getElementById('button-start-stopwatch').innerHTML = 'Start';
    document.querySelector('[name=initialValueHidden]').value = '';
    document.querySelector('[class=time]').innerHTML = '';
    clearInterval(myInterval);
};


document.getElementById('stop').onclick = () => {
    document.getElementById('button-start-stopwatch').innerHTML = 'Turn Back';
    clearInterval(myInterval)
};