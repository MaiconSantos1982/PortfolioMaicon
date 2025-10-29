// Inicializa AOS para animações on-scroll
if (window.AOS && typeof AOS.init === "function") {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out'
    });
  }
  
  // Scroll suave para links internos (#) caso sejam usados futuramente
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const hash = this.getAttribute('href');
      const elem = document.querySelector(hash);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Foca no botão de fechar do modal do Micha Menezes quando aberto
  const michaModal = document.getElementById('michaModal');
  if (michaModal) {
    michaModal.addEventListener('shown.bs.modal', () => {
      const button = michaModal.querySelector('button.btn-close');
      if (button) button.focus();
    });
  }
  
  // Efeito visual: adiciona/remover sombra ao foco do botão WhatsApp (melhora UX)
  const whatsappCTA = document.querySelector('.whatsapp-cta');
  if (whatsappCTA) {
    whatsappCTA.addEventListener('focus', () => {
      whatsappCTA.classList.add('shadow');
    });
    whatsappCTA.addEventListener('blur', () => {
      whatsappCTA.classList.remove('shadow');
    });
  }
  
  // Pronto para expandir com slider, carrossel, api, etc!
  