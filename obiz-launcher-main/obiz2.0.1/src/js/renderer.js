document.addEventListener('DOMContentLoaded', () => {
  const { ipcRenderer } = require('electron');

  // Request the CPU architecture from the main process
  ipcRenderer.send('get-cpu-architecture');

  // Listen for the response and update the <p> element
  ipcRenderer.on('cpu-architecture', (event, cpuArchitecture) => {
    const cpuElement = document.getElementById('cpu-architecture');
    if (cpuElement) {
      cpuElement.textContent = `${cpuArchitecture} `;
    }
  });
});
