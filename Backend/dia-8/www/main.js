// Formulario
const newMessageForm = document.querySelector("#newmessage");

// Input mensaje
const message = newMessageForm.querySelector("#message");

// Input de email
const email = newMessageForm.querySelector("#email");

// Lista de mensajes
const messageList = document.querySelector("#messagelist");

// Función que escribe la lista de mensajes
function writeMessageList(messages) {
  messageList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const message of messages) {
    const li = document.createElement("li");
    li.textContent = `(${message.email}) - ${message.message})`;

    fragment.append(li);
  }

  messageList.append(fragment);
}

async function formSubmitHandler(event) {
  event.preventDefault();

  const newMessage = {
    message: message.value,
    email: email.value,
  };

  const request = await fetch("/data", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newMessage),
  });

  const list = await request.json();

  writeMessageList(list.messages);
}

newMessageForm.addEventListener("submit", formSubmitHandler);

// Función que se ejecuta en la carga inicial y que pide la lista de
// mensajes al backend.
async function main() {
  const request = await fetch("/data");
  const list = await request.json();

  writeMessageList(list.messages);
}

main();
