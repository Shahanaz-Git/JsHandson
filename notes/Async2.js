class DataList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Attach shadow DOM
    }

    connectedCallback() {
        this.getDatas(); // Call the function when the element is connected to the DOM
    }

    async getDatas() {
        const datas = [
            { name: "Sultana", role: "Software Engineer" },
            { name: "Ravali", role: "Doctor" }
        ];

        setTimeout(() => {
            let output = "";
            datas.forEach((data) => {
                output += `<li>${data.name}</li>`; // Append data
            });

            // Use shadow DOM to encapsulate the styles and markup
            this.shadowRoot.innerHTML = `<ul>${output}</ul>`; 
        }, 1000);
    }
}

// Define the new element
customElements.define('data-list', DataList);
