fetch("/submit", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify({"message": document.cookie})
}).then(res => {
  console.log("Request complete! response:", res);
});
