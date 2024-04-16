document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const nombreSelect = document.getElementById('nombreSelect');
            const menuDiv = document.getElementById('menu');
            for (const nombre in data) {
                if (data.hasOwnProperty(nombre)) {
                    const option = document.createElement('option');
                    option.value = nombre;
                    option.textContent = nombre;
                    nombreSelect.appendChild(option);
                }
            }
            nombreSelect.addEventListener('change', function() {
                const nombreSeleccionado = nombreSelect.value;
                const pareja = data[nombreSeleccionado];
                mostrarInformacion(nombreSeleccionado, pareja);
            });
            function mostrarInformacion(nombre, pareja) {
                if (pareja) {
                    menuDiv.textContent = `${nombre} está en una relación con ${pareja[0]}`;
                } else {
                    menuDiv.textContent = `${nombre} está soltero`;
                }
            }
        })
        .catch(error => console.error("ERROR", error));
});
