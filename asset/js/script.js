window.onload = function () {
  var sendButton = document.getElementById("sendBtn");

  if (sendButton) {
    sendButton.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire

      // Récupération des champs
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var phone = document.getElementById("phone").value.trim();

      // Détecter les champs vides
      var champsManquants = "";

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