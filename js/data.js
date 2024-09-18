const dato = localStorage.getItem('miDato');

    document.getElementById('data').textContent = dato ? dato : 'Ningún dato ha sido ingresado.';