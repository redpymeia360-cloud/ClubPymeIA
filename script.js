'use strict';

const WHATSAPP_NUMBER = '56921733645';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, '_blank');

  // Respaldo para navegadores que bloquean ventanas emergentes.
  if (popup) {
    popup.opener = null;
  } else {
    window.location.href = url;
  }
}

function setChatVisibility(show) {
  const chatbot = document.getElementById('chatbot');
  const openButton = document.getElementById('openChat');
  chatbot.style.display = show ? 'block' : 'none';
  chatbot.setAttribute('aria-hidden', String(!show));
  openButton.setAttribute('aria-expanded', String(show));

  if (show) {
    document.getElementById('cServicio').focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const openChatButton = document.getElementById('openChat');
  const closeChatButton = document.getElementById('closeChat');
  const sendChatButton = document.getElementById('sendChat');
  const contactForm = document.getElementById('contactForm');

  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });

  openChatButton.addEventListener('click', () => setChatVisibility(true));
  closeChatButton.addEventListener('click', () => setChatVisibility(false));

  sendChatButton.addEventListener('click', () => {
    const service = document.getElementById('cServicio').value;
    const firstName = document.getElementById('cNombre').value.trim();
    const lastName = document.getElementById('cApellido').value.trim();
    const whatsapp = document.getElementById('cWhatsapp').value.trim();
    const email = document.getElementById('cCorreo').value.trim();
    const date = document.getElementById('cFecha').value;
    const status = document.getElementById('chatStatus');

    if (!firstName || !whatsapp) {
      status.textContent = 'Completa tu nombre y WhatsApp para continuar.';
      return;
    }

    status.textContent = '';
    const message = `Hola Club Pyme IA, soy ${firstName} ${lastName}. Necesito información sobre ${service}. WhatsApp: ${whatsapp}. Correo: ${email || 'No informado'}. Fecha solicitada: ${date || 'Por coordinar'}.`;
    openWhatsApp(message);
    setChatVisibility(false);
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const data = new FormData(contactForm);
    const message = `Hola Club Pyme IA, soy ${data.get('nombre')} ${data.get('apellido')}. Interés: ${data.get('interes')}. Tipo de cliente: ${data.get('tipo_cliente')}. WhatsApp: ${data.get('whatsapp')}. Correo: ${data.get('correo') || 'No informado'}. Fecha: ${data.get('fecha') || 'Por coordinar'}. Hora: ${data.get('hora') || 'Por coordinar'}. Mensaje: ${data.get('mensaje') || 'Sin mensaje adicional'}.`;

    document.getElementById('formStatus').textContent = 'Abriendo WhatsApp…';
    openWhatsApp(message);
  });
});
