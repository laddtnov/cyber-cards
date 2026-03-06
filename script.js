function toggleEffects() {
    const body = document.body;
    const statusText = document.getElementById('status-text');
    
    body.classList.toggle('safe-mode');
    
    if (body.classList.contains('safe-mode')) {
      statusText.innerText = 'SAFE MODE';
    } else {
      statusText.innerText = 'CYBER MODE';
    }
}