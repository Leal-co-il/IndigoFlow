function ToggleMenu() {
    if (document.getElementById("menuOverlay").style.width == "30%") {
        document.getElementById("menuOverlay").style.width = "30px";
        document.getElementById("menuOverlay").style.height = "30px";
        document.getElementById("menuOverlay").style.animationName = "wiggle";
    } else {
        document.getElementById("menuOverlay").style.width = "30%";
        document.getElementById("menuOverlay").style.height = "100vh";
        document.getElementById("menuOverlay").style.animationName = "none";
    }
}