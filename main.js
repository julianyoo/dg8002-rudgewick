/* CONTACT FORM LOGIC */

function yesnoCheck() {
    if (document.getElementsByName('type').value === "Guest") {
        document.getElementById('guest').style.display = 'block';
        document.getElementById('vendor').style.display = 'none';
        document.getElementById('other').style.display = 'none';
    }
    else if (document.getElementsByName('type').checked) {
        document.getElementById('vendor').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('other').style.display = 'none';
    }
    
    else if (document.getElementsByName('type').checked) {
        document.getElementById('other').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('vendor').style.display = 'none';
    }

    else {
}
}
