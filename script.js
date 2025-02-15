// Initialize Lucide icons
lucide.createIcons();

// Menu navigation
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Quick Scan functionality
const scanBtn = document.querySelector('.scan-btn');
const scanningAnimation = document.querySelector('.scanning-animation');
let isScanning = false;

scanBtn.addEventListener('click', () => {
  if (isScanning) return;
  
  isScanning = true;
  scanBtn.innerHTML = `
    <span>Scanning...</span>
  `;
  scanningAnimation.classList.remove('hidden');
  
  setTimeout(() => {
    isScanning = false;
    scanBtn.innerHTML = `
      <i data-lucide="shield"></i>
      <span>Quick Scan</span>
    `;
    scanningAnimation.classList.add('hidden');
    lucide.createIcons();
  }, 5000);
});

// Live CPU and Memory Usage simulation
let cpuUsage = 32;
const cpuDisplay = document.querySelector('.cpu-usage');
const progressFill = document.querySelector('.progress-fill');

setInterval(() => {
  // Simulate CPU usage changes
  cpuUsage = Math.min(100, Math.max(0, cpuUsage + (Math.random() - 0.5) * 10));
  cpuDisplay.textContent = `${Math.round(cpuUsage)}%`;
  progressFill.style.width = `${cpuUsage}%`;
}, 2000);

// Toggle switches functionality
const toggles = document.querySelectorAll('.toggle input');
toggles.forEach(toggle => {
  toggle.addEventListener('change', () => {
    const card = toggle.closest('.protection-card');
    const statusIndicator = card.querySelector('.status-indicator');
    statusIndicator.textContent = `● ${toggle.checked ? 'Enabled' : 'Disabled'}`;
  });
});