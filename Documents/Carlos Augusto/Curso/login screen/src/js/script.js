document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado!');

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const darkMode = localStorage.getItem('dark-mode');

    console.log('Modo atual:', darkMode);

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        toggleSwitch.checked = false;
    }

    toggleSwitch.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            console.log('Modo escuro ativado.');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            console.log('Modo escuro desativado.');
        }
    });
});