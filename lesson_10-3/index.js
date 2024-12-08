const book = {
    contacts: [
        {
            name: "Valeriia",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find: function (name) {
        const contact = this.contacts.find(contact => contact.name === name);
        if (contact) {
            console.log("Contact found:", contact);
            return contact;
        } else {
            console.log(`Contact with name '${name}' not found.`);
            return null;
        }
    },

    add: function (newContact) {
        if (newContact && newContact.name && newContact.phone && newContact.email) {
            const existingContact = this.contacts.find(contact => contact.name === newContact.name);
            
            if (existingContact) {
                console.log(`Contact with name '${newContact.name}' already exists.`);
            } else {
                this.contacts.push(newContact);
                console.log("New contact added:", newContact);
            }
        } else {
            console.log("Invalid contact data. Name, phone, and email are required.");
        }
    },
};

book.find("Valeriia");
book.find("Hanna");

book.add({
    name: "Hanna",
    phone: "+380123456789",
    email: "hanna@gmail.com"
})

book.find("Hanna");

book.add({
    name: "Hanna",
});

console.log(book.contacts[0].name); 
console.log(book.contacts);