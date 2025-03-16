const defaultProfileImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
        let passwordEditConfirmed = false;

        function loadProfile() {
            const storedUser = JSON.parse(localStorage.getItem("userProfile"));

            document.getElementById("profilePreview").src = storedUser?.profileImage || defaultProfileImg;
            document.getElementById("fullName").value = storedUser?.fullName || "";
            document.getElementById("email").value = storedUser?.email || "";
            document.getElementById("phone").value = storedUser?.phone || "";
            document.getElementById("password").value = storedUser?.password || "";
        }

        function toggleEdit() {
            const isEditing = document.getElementById("editBtn").textContent === "Save";
            const inputs = document.querySelectorAll("#profileForm input");

            document.getElementById("uploadBtn").classList.toggle("d-none", isEditing);

            if (isEditing) saveProfile();

            inputs.forEach(input => input.disabled = isEditing);
            document.getElementById("editBtn").textContent = isEditing ? "Edit" : "Save";
        }

        function saveProfile() {
            const userProfile = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                password: document.getElementById("password").value,
                profileImage: document.getElementById("profilePreview").src
            };

            localStorage.setItem("userProfile", JSON.stringify(userProfile));
        }

        function togglePassword() {
            const passwordField = document.getElementById("password");
            passwordField.type = passwordField.type === "password" ? "text" : "password";
        }

        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function () {
                document.getElementById("profilePreview").src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }

        function confirmPasswordEdit() {
            if (!passwordEditConfirmed && confirm("Are you sure you want to change your password?")) {
                document.getElementById("password").disabled = false;
                passwordEditConfirmed = true;
            }
        }

        document.getElementById("password").addEventListener("click", confirmPasswordEdit);
        window.onload = loadProfile;


        function logout() {
            // Clear session storage or local storage if using
            localStorage.removeItem("userProfile");
            sessionStorage.removeItem("userProfile");

            // Redirect to login page
            window.location.href = "login.html";
        }