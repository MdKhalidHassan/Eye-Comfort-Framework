const defaults = {
  blue: true,
  blueOpacity: 0.18,
  luminance: true,
  brightness: 0.85,
  contrast: true
};

chrome.storage.sync.get(defaults, settings => {
  document.getElementById("blue").checked = settings.blue;
  document.getElementById("blueOpacity").value = settings.blueOpacity;
  document.getElementById("luminance").checked = settings.luminance;
  document.getElementById("brightness").value = settings.brightness;
  document.getElementById("contrast").checked = settings.contrast;
});

document.querySelectorAll("input").forEach(el => {
  el.addEventListener("input", () => {
    chrome.storage.sync.set({
      blue: document.getElementById("blue").checked,
      blueOpacity: parseFloat(document.getElementById("blueOpacity").value),
      luminance: document.getElementById("luminance").checked,
      brightness: parseFloat(document.getElementById("brightness").value),
      contrast: document.getElementById("contrast").checked
    }, () => {
      chrome.tabs.reload();
    });
  });
});
