
document.getElementById('buttonText').addEventListener('click', function() {
    const inputValue = document.getElementById('inputText').value;
    
    localStorage.setItem('miDato', inputValue);
        document.getElementById('inputText').value = '';
});