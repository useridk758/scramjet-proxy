function navigateToProxy() {
    const url = document.getElementById("urlInput").value.trim();
    if (!url) return;

    // Prepend https:// if missing
    const targetUrl = url.startsWith("http") ? url : https://${url};

    // Redirect to proxy (adjust /gateway/ if Scramjet uses a different prefix)
    window.location.href = /gateway/${encodeURIComponent(targetUrl)};
}

// Allow pressing Enter to submit
document.getElementById("urlInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") navigateToProxy();
});
