// TOGGLE PERFIL (FOOTER) 
(function(){
    const btnFooter = document.getElementById('btn-toggle-perfil');
    const perfil = document.getElementById('perfil');

    btnFooter.addEventListener('click', () => {
        if (perfil.style.display === 'none') {
            perfil.style.display = '';
            btnFooter.textContent = 'Ocultar Perfil';
        } else {
            perfil.style.display = 'none';
            btnFooter.textContent = 'Mostrar Perfil';
        }
    });
})();

// SECCIONES COLAPSABLES 
(function(){
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);

        btn.addEventListener('click', () => {
            if (targetEl.style.display === 'none') {
                targetEl.style.display = '';
                btn.textContent = '▼';
            } else {
                targetEl.style.display = 'none';
                btn.textContent = '▲';
            }
        });
    });
})();

// EFECTOS EN HABILIDADES TÉCNICAS 
(function(){
    const lista = document.querySelectorAll('#lista-tecnica li');
    lista.forEach(li => {
        li.setAttribute('tabindex', '0');
    });
})();