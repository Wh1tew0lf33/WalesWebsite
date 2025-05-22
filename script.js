document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('infoForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Standard-Submit verhindern

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // Formular leeren
        successMessage.style.display = 'block'; // Erfolgsnachricht anzeigen
      } else {
        alert('Ein Fehler ist aufgetreten. Bitte versuch es später erneut.');
      }
    } catch (error) {
      alert('Verbindung fehlgeschlagen.');
    }
  });
});
  