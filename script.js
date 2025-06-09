async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

  try {
    const res = await fetch("https://axas-api.replit.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><b>aXas:</b> ${data.reply}</p>`;
  } catch (e) {
    chatBox.innerHTML += `<p><b>aXas:</b> ❌ Error reaching server</p>`;
  }

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}