function togglePasswordVisibility(inputId, eyeIcon) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
  }

  function validateForm() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      document.querySelector(".error-message").innerText =
        "Please enter a valid email address.";
      return false;
    }
    return true;
  }

  document
    .querySelector("form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const response = await fetch("/login/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful! Redirecting...");
        window.location.href = data.redirect;
      } else {
        document.querySelector(".error-message").innerText = data.message;
      }
    });