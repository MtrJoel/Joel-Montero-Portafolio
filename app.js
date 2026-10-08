  const EMAIL = 'monteromoretajoel@gmail.com'; // reemplaza con tu correo real

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      alert('Email copiado: ' + EMAIL);
    }).catch(() => { prompt('Copia tu email:', EMAIL); });
  }

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  function toggleMenu() { sidebar.classList.toggle('open'); overlay.classList.toggle('show'); }
  overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); });
  function closeMenu() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  window.matchMedia('(min-width: 881px)').addEventListener('change', (e) => { if (e.matches) closeMenu(); });
  function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    sidebar.classList.remove('open'); overlay.classList.remove('show');
  }