const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

// When the button is clicked, confirm that the signal is restored.
signalButton.addEventListener("click", function () {
  domeStatus.textContent = "Kairova status: signal confirmed ✓";
  signalButton.textContent = "Signal confirmed";
  signalButton.disabled = true;
});
