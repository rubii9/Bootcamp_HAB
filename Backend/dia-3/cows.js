const cowsay = require("cowsay");

const messages = [
  "lorem ipsum",
  "come menos ternera!",
  "viva la leche",
  "ola hackabos!!!",
];

for (const message of messages) {
  console.log(
    cowsay.think({
      text: message,
      e: "oO",
      cow: "./clippy",
    })
  );
}
