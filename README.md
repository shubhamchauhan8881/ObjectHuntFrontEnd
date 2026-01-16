# 🎮 Object Hunt – Multiplayer Game  

Object Hunt is a **real-time multiplayer game** built with modern web technologies. It features:  
- 🔹 Real-time chat between players  
- 🔹 Dynamic user filtering  
- 🔹 Winner announcement system  
- 🔹 Object-finding gameplay powered by AI vision  

---

## 🚀 Tech Stack  

### Frontend  
- **React.js** – Component-based UI  
- **Tailwind CSS** + **DaisyUI** – Styling and UI components  
- **HTML & CSS** – Core structure and styling  

### Backend  
- **Python** – Core language  
- **Django** – Web framework  
- **Django Channels** – WebSocket support for real-time communication  
- **JWT Authentication** – Secure user sessions
- **Repo URL** - [Backend URL](https://github.com/shubhamchauhan8881/ObjectHuntBackend)


### AI Integration  
- **Gemini Vision API** – Object detection and recognition  

---

## ⚡ Features  
- **Multiplayer Gameplay** – Compete with friends in real-time  
- **Live Chat** – WebSocket-powered instant messaging  
- **User Filtering** – Dynamic player management  
- **Winner Announcement** – Automatic detection and announcement of winners  
- **Object Finding** – AI-powered object recognition challenges  

---

## 📂 Project Structure  
```
ObjectHuntBackend/
│── manage.py
│── requirements.txt
│── db.sqlite3
│── api/              # Django app for APIs
│── templates/        # HTML templates
│── static/           # CSS, JS, images
│── channels/         # WebSocket handling
│── README.md
```

---

## 🔧 Installation & Setup  

### Prerequisites  
- Python 3.10+  
- Node.js & npm/yarn  
- Django & Django Channels  
- Tailwind & DaisyUI  

### Backend Setup  
```bash
# Clone repository
git clone https://github.com/shubhamchauhan8881/ObjectHuntBackend.git
cd ObjectHuntBackend

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

### Frontend Setup  
```bash
# Clone frontend repo
git clone https://github.com/shubhamchauhan8881/ObjectHuntFrontEnd.git
cd ObjectHuntFrontEnd

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔐 Authentication  
- Uses **JWT tokens** for secure login and session management.  
- Tokens are passed via headers for API and WebSocket connections.  

---

## 🌐 Real-Time Communication  
- Powered by **Django Channels** and **WebSockets**.  
- Enables instant chat, live updates, and winner announcements.  

---

## 🧠 AI Vision  
- Integrated with **Gemini Vision API** for object detection.  
- Players compete to find and identify objects in real-time.  

---

## 📜 License  
This project is licensed under the MIT License.  

---
