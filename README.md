# AI Hospital Chatbot

Welcome to the **AI Hospital Chatbot** project! This chatbot is designed to assist patients with various hospital-related queries such as booking appointments, retrieving lab results, getting prescriptions, checking visiting hours, and more. Built using Python, Flask, and Google's Text-to-Speech API, this chatbot provides interactive and helpful responses to enhance user engagement.

## Features

- **Natural Language Processing (NLP)**: Uses Spacy to recognize intents and respond intelligently to user inputs.
- **Appointment Booking**: Allows users to book appointments with available doctors.
- **Lab Results & Prescriptions**: Retrieves lab results and prescriptions based on the user's reference number.
- **Google Cloud Text-to-Speech Integration**: Provides audio responses for improved user experience.
- **Dynamic Response Forms**: Displays relevant forms based on the user's query (e.g., appointment booking, reference number input).
- **MongoDB Integration**: Stores and retrieves doctor information and other relevant data from a MongoDB database.

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB
- **API**: Google Cloud Text-to-Speech
- **NLP**: Spacy

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/ai-hospital-chatbot.git
   cd ai-hospital-chatbot
   ```

2. **Set Up a Virtual Environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up MongoDB:**
   Ensure MongoDB is running locally or connect to a remote MongoDB instance. You can update the connection string in the `intent_recognizer.py` file.

5. **Google Cloud API Setup:**
   - Create a project in Google Cloud Console.
   - Enable the Text-to-Speech API.
   - Download your credentials JSON file.
   - Set the environment variable for Google Cloud credentials in your system:
     ```bash
     export GOOGLE_APPLICATION_CREDENTIALS="path_to_your_json_file"
     ```
   - On Windows, use:
     ```bash
     set GOOGLE_APPLICATION_CREDENTIALS="path_to_your_json_file"
     ```

6. **Run the Application:**
   ```bash
   python run.py
   ```

7. **Access the Chatbot:**
   - Open a browser and navigate to `http://127.0.0.1:5000/` to start interacting with the AI Hospital Chatbot.

## Project Structure

```bash
├── static/
│   ├── styles.css         # Custom CSS styles
│   ├── scripts.js         # JavaScript for frontend interactions
├── templates/
│   └── index.html         # Main frontend HTML file
├── data.py                # Lab results, prescriptions, and billing data functions
├── intent_recognizer.py   # Core intent recognition logic
├── run.py                 # Main Flask application file
├── requirements.txt       # Python dependencies
└── README.md              # Project documentation (this file)
```

## Usage

1. **Chat with the Bot**: Users can ask questions about appointments, doctors, lab results, etc.
2. **Dynamic Responses**: Based on the user's input, the bot responds appropriately or asks for additional information.
3. **Audio Feedback**: The bot provides both text and audio responses, enhancing user experience, especially for accessibility.

### Example Commands:

- *"Hello!"* - The bot will greet the user.
- *"I want to book an appointment with Dr. John Doe."* - The bot will help you book an appointment.
- *"Can you tell me my lab results?"* - The bot will request a reference number and provide lab results.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or need further assistance, please feel free to contact:

- **Kalyan Babu Allamudi**
- GitHub: [https://github.com/Kalyanbabuallamudi](https://github.com/Kalyanbabuallamudi)
- Email: allamudikalyanbabu56@gmail.com

---
2024 © Kalyan Babu Allamudi - Made with ❤️
```

This `README.md` provides a comprehensive guide to your AI Hospital Chatbot project, helping users understand how to install, use, and contribute to the project. It also enhances user engagement by describing the chatbot's features and providing a clear project structure.
