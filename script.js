const formulaire = document.getElementById('formulaire-contact');

formulaire.addEventListener('submit', function(event) {

    event.preventDefault(); 

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let estValide = true;
    let messagesErreur = [];

    if (nom === "") {
        messagesErreur.push("Le champ Nom est obligatoire.");
        estValide = false;
    }

    if (email === "") {
        messagesErreur.push("Le champ Email est obligatoire.");
        estValide = false;
    } 

    else if (!email.includes('@') || !email.includes('.')) {
        messagesErreur.push("Veuillez entrer une adresse e-mail valide.");
        estValide = false;
    }

    if (message === "") {
        messagesErreur.push("Le champ Message est obligatoire.");
        estValide = false;
    }

    if (estValide) {
        alert(`Formulaire envoyé avec succès ! Merci ${nom} !`);
        formulaire.reset(); 
    } else {
        alert("Erreurs trouvées :\n\n" + messagesErreur.join("\n"));
    }
});