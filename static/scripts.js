document.getElementById('chat-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const messageInput = document.getElementById('message');
    const categorySelect = document.getElementById('category');
    const message = messageInput.value;
    const category = categorySelect.value;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, category }),
        });

        const data = await response.json();
        const chatHistory = document.getElementById('chat-history');
        chatHistory.innerHTML += `<div class="chat-entry user">${message}</div>`;
        chatHistory.innerHTML += `<div class="chat-entry bot">${data.response}</div>`;

        const audio = new Audio(data.audio);
        audio.play();

        messageInput.value = '';

        document.getElementById('appointment-form').style.display = 'none';
        document.getElementById('reference-form').style.display = 'none';

        if (data.showForm === 'appointment') {
            document.getElementById('appointment-form').style.display = 'block';
        } else if (data.showForm === 'reference') {
            document.getElementById('reference-form').style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('appointment-booking-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        const chatHistory = document.getElementById('chat-history');
        chatHistory.innerHTML += `<div class="chat-entry bot">${data.response}</div>`;

        const audio = new Audio(data.audio);
        audio.play();

        event.target.reset();
        document.getElementById('appointment-form').style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('reference-details-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const referenceNumber = document.getElementById('reference-number').value;
    const message = `Reference number ${referenceNumber}`;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, category: 'reference' }),
        });

        const data = await response.json();
        const chatHistory = document.getElementById('chat-history');
        chatHistory.innerHTML += `<div class="chat-entry bot">${data.response}</div>`;

        const audio = new Audio(data.audio);
        audio.play();

        event.target.reset();
        document.getElementById('reference-form').style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
    }
});

document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('h1').style.color = '#ffdd57';
});
