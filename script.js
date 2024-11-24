// For Loop Function 
function runForLoop() { 
    const number = parseInt(document.getElementById('forNumber').value); 
    let output = ''; 
     
    for (let i = 1; i <= number; i++) { 
        output += `Loop iteration ${i}<br>`; 
    } 
     
    document.getElementById('forOutput').innerHTML = output; 
} 