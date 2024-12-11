export default function loadLinearIconsStylesheet() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.linearicons.com/free/1.0.0/icon-font.min.css";
  link.onload = () => {
    console.log("Linear Icons stylesheet has been loaded.");
  };
  document.head.appendChild(link);
}
