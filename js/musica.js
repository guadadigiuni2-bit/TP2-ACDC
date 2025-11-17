// ========================
// CONTROL DE MÚSICA GLOBAL
// ========================

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bgMusic");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumen = document.getElementById("volumen");
  
    if (!audio || !playPauseBtn || !volumen) return;
  
    // Para evitar problemas de autoplay
    document.addEventListener("click", activarMusica);
    function activarMusica() {
      audio.play().catch(() => {});
      document.removeEventListener("click", activarMusica);
    }
  
    // Botón Play / Pausa
    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸ Pausa";
      } else {
        audio.pause();
        playPauseBtn.textContent = "▶ Play";
      }
    });
  
    // Control de volumen
    volumen.addEventListener("input", () => {
      audio.volume = volumen.value;
    });
  
    // Valor inicial (mitad)
    volumen.value = 0.5;
    audio.volume = 0.5;
  });
  