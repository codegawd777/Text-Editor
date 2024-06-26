const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  window.deferredPrompt = event;

  butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => { 

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // add prompt
  promptEvent.prompt();
  
  // Reset  deferred prompt variable, one time use
  window.deferredPrompt = null;
  
  // Hide the install button
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

  // remove prompt
  window.deferredPrompt = null;
 });
