function submit() {
    let username = document.querySelector("#user").value;
    document.querySelector("#user1").innerHTML = username;

    let password = document.querySelector("#pass").value;
    document.querySelector("#pass1").innerHTML = password;

    document.querySelector("#user").value = "";
    document.querySelector("#pass").value = "";



}