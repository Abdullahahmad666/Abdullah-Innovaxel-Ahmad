URL Shortener Service
Backend: Node.js | Frontend: React | Database: MongoDB

📚 Project Overview This is a simple URL Shortener Service built using:

Backend: Node.js + Express.js

Frontend: React

Database: MongoDB (via Mongoose)

✅ Features: Shorten long URLs

Retrieve original URLs

Update or delete shortened URLs

Track how many times a shortened URL has been accessed

🏗️ Project Structure

root/ ├── backend/ # Node.js + Express + MongoDB API ├── frontend/ # React-based UI for interacting with API └── README.md

📥 How to Run the Project

⚙️ Backend Setup cd backend npm install Create a .env file inside backend/ with this content:

MONGO_URI=your_mongodb_connection_string PORT=5000 
Run the backend server: 
npm run dev 
Backend runs at: http://localhost:5000/

🖥️ Frontend Setup cd frontend npm install npm start Frontend runs at: http://localhost:3000/

🔗 API Endpoints Method Endpoint Description 
POST /shorten Create a short URL 
GET /shorten/:code Retrieve the original URL 
PUT /shorten/:code Update existing URL 
DELETE /shorten/:code Delete a shortened URL 
GET /shorten/:code/stats Get usage statistics

🎯 Branching Strategy Branch Purpose main Only this README.md file dev Full working project code (backend & frontend)

💡 How to Use Locally Clone the repository.

Switch to the dev branch: git checkout dev Follow the instructions above to run the backend and frontend.

👨‍💻 Developer Notes MongoDB Atlas is recommended for your database hosting.

Frontend communicates with backend via Axios.

📢 Submission Guidelines Followed 
✅ main: Only README.md 
✅ dev: Full project code (backend & frontend) 
✅ 15+ meaningful commits 
✅ Professional, clear commit messages

🏁 Good Luck Message "Let’s innovate & excel!" — As Innovaxel says.
