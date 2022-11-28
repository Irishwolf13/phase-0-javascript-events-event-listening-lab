function addingEventListener() {
    const input = document.getElementById("button");
    function myAlert() {
        alert("I was clicked");
    }
    input.addEventListener('click', myAlert);
}
