function loadComponent(id, file) {

    fetch(file)

        .then(response => response.text())

        .then(data => {

            document.getElementById(id).innerHTML = data;

            // Initialize navbar after loading

            if (id === "navbar") {

                initNavbar();

            }

        })

        .catch(error => {

            console.error(error);

        });

}