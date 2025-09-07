function openModal(plan) {
    document.getElementById("subscription-modal").style.display = "flex";
    document.getElementById("plan-input").value = plan;
}

function closeModal() {
    document.getElementById("subscription-modal").style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("form-status").innerText = data;
    })
    .catch(error => {
        document.getElementById("form-status").innerText = "There was an error sending your message.";
    });
});
