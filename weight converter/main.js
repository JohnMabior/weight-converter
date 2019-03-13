document.getElementById('output').style.visibility = "hidden";
document.getElementById('lbsinput').addEventListener('input', function(e){
    console.log(111111);
    let pounds = e.target.value;

    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsoutput').innerHTML = pounds/0.00220246;

    document.getElementById('kgoutput').innerHTML = pounds/2.2046;
    document.getElementById('ozoutput').innerHTML = pounds * 16;

});