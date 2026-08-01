function copyEmail() {
  // Correo oculto/protegido en JS
  const email = "monterojoel135" + "@" + "gmail.com";

  navigator.clipboard
    .writeText(email)
    .then(() => {
      const tooltip = document.getElementById("copyTooltip");
      tooltip.classList.add("show");

      setTimeout(() => {
        tooltip.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      console.error("Error al copiar el correo:", err);
    });
}
