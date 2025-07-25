
window.onload = function () {
  const sendButton = document.getElementById("sendBtn");

  if (sendButton) {
    sendButton.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire

      // Récupération des champs
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();

      // Détecter les champs vides
      let champsManquants = "";

      if (name === "") {
        champsManquants += "Nom ,";
      }

      if (email === "") {
        champsManquants += "email ,";
      }

      if (phone === "") {
        champsManquants += "Téléphone ,";
      }

      // Si au moins un champ est vide, on affiche un message d'erreur
      if (champsManquants !== "") {
        // Retire la dernière virgule et espace
        champsManquants = champsManquants.slice(0, -2);
        alert("Veuillez remplir : " + champsManquants);
      } else {
        alert("Votre message a bien été envoyé !");
      }
    });
  }
};