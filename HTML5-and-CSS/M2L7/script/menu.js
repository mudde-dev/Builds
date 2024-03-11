var root = document.documentElement;
var showPanel0 = document.getElementById('showPanel0');
var showPanel1 = document.getElementById('showPanel1');
var showPanel2 = document.getElementById('showPanel2');
var showPanel3 = document.getElementById('showPanel3');
var showPanel4 = document.getElementById('showPanel4');
var showPanel5 = document.getElementById('showPanel5');

function clearPanels() {
  root.style.setProperty('--panelMain0-display', 'none');
  root.style.setProperty('--panelMain1-display', 'none');
  root.style.setProperty('--panelMain2-display', 'none');
  root.style.setProperty('--panelMain3-display', 'none');
  root.style.setProperty('--panelMain4-display', 'none');
  root.style.setProperty('--panelMain5-display', 'none');
}

showPanel0.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain0-display', 'flex');
});

showPanel1.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain1-display', 'flex');
});

showPanel2.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain2-display', 'flex');
});

showPanel3.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain3-display', 'flex');
});

showPanel4.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain4-display', 'flex');
});

showPanel5.addEventListener('click', e => {
  clearPanels();
  root.style.setProperty('--panelMain5-display', 'flex');
});
