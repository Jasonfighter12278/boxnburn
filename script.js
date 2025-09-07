// Open Modal
function openModal(plan) {
    document.getElementById('subscription-modal').style.display = "block";
    document.getElementById('plan').value = plan;
}

// Close Modal
function closeModal() {
    document.getElementById('subscription-modal').style.display = "none";
}
