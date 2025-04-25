document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('signup-message').classList.remove('hidden');
    this.reset(); // Optional: reset the form
  });
  