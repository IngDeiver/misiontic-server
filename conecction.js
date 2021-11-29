const mongoose = require('mongoose');

main().catch(err => console.log(err));
main().then(() => console.log("Db connected"));

async function main() {
  await mongoose.connect('mongodb+srv://ingdeiver:DEIBERandres1@cluster0.27szq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}
