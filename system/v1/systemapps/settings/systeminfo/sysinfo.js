function setSystem() {
    const cpu = document.querySelector("#CPU");
    const motherboard = document.querySelector("#MOTHERBOARD");
    const ram = document.querySelector("#RAM");

    cpu.innerHTML = localStorage.getItem("PCSPEC_CPU");
    motherboard.innerHTML = localStorage.getItem("PCSPEC_Motherboard");
    ram.innerHTML = localStorage.getItem("PCSPEC_RAM");
}