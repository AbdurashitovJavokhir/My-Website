function sharePage() {
  if (navigator.share) {
    // Native share (works on mobile + some desktops)
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(err => console.log("Share cancelled or failed:", err));
  } else {
    // Fallback: copy link
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("🔗 Link copied to clipboard!");
    });
  }
}
