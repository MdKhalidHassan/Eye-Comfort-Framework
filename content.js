// ===============================
// Eye Comfort Framework Engine
// ===============================

// --- Blue Light Control ---
function applyBlueControl(opacity) {
  let overlay = document.getElementById("eye-blue-layer");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "eye-blue-layer";
    Object.assign(overlay.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "2147483647"
    });
    document.body.appendChild(overlay);
  }

  overlay.style.backgroundColor = `rgba(255, 145, 0, ${opacity})`;
}

// --- Brightness Regulation ---
function applyLuminance(level) {
  document.documentElement.style.filter = `brightness(${level})`;
}

// --- Contrast & Color Comfort ---
function applyContrastControl() {
  document.documentElement.style.filter += " sepia(0.12) contrast(0.95)";
}

// --- Master Controller ---
function activateFramework(settings) {
  document.documentElement.style.filter = "";

  if (settings.blue) {
    applyBlueControl(settings.blueOpacity);
  } else {
    const overlay = document.getElementById("eye-blue-layer");
    if (overlay) overlay.remove();
  }

  if (settings.luminance) {
    applyLuminance(settings.brightness);
  }

  if (settings.contrast) {
    applyContrastControl();
  }
}

// --- Load settings ---
chrome.storage.sync.get(
  {
    blue: true,
    blueOpacity: 0.18,
    luminance: true,
    brightness: 0.85,
    contrast: true
  },
  activateFramework
);
