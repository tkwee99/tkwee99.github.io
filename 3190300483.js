function print() {
    let formInput1 = document.getElementById('Input1')
    let formInput2 = document.getElementById('Input2')
    let formInput3 = document.getElementById('Input3')
    let formInput4 = document.getElementById('typebox4')
    alert(Date() + '\n' + '\n' + 'Name: ' + formInput1.value + '\n' + 'Student ID: '+formInput2.value + '\n' + 'Grade: ' + formInput3.value + '\n' + 'SAY WHAT: ' + formInput4.value);
    console.log(Date() + '\n' + '\n' + 'Name: ' + formInput1.value + '\n' + 'Student ID: '+formInput2.value + '\n' + 'Grade: ' + formInput3.value + '\n' + 'SAY WHAT: ' + formInput4.value);
}

function scroll() {
    document.getElementById('aboutme').innerHTML = 'BACK TO HOME';
}