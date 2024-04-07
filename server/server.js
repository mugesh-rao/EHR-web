// server.js
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database");
const PORT = process.env.PORT || 1000;

const app = express();

app.use(cors());
app.use(express.json());
connectToDatabase(); 

          


const ChatMessage = require("./models/chatbot.model");
const { createInsuranceApplication, getAllInsuranceApplications,getInsuranceApplicationById } = require("./controller/Insurance");
const { addInsurancePolicy } = require("./controller/Policy");




const { Translate } = require("@google-cloud/translate").v2;



const translate = new Translate({
  projectId: "chennai-cabs-new",
  keyFilename: "./config/service.json",
});
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.post("/api/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    // Simulate a response about agriculture with 10 points
    const insuranceResponse = `Discover comprehensive Health Insurance plans near your location for your peace of mind. +
    Explore Term Life Insurance options nearby, providing security for your loved ones. +
    Find Vehicle Insurance providers near you, offering protection for your car or motorcycle. +
    Check out Home Insurance policies available in your area, safeguarding your home and belongings. +
    Consider Travel Insurance for your next adventure, available from providers near you. +
    Look into Pet Insurance to keep your furry friends covered, with options close to home. +
    Investigate Critical Illness Insurance, offering specialized coverage for serious health conditions, available near you. +
    Browse through Disability Insurance policies near your location, ensuring your financial stability in challenging times. +
    Find the best Dental Insurance plans in your vicinity, covering routine check-ups to unexpected treatments. +
    Explore Personal Accident Insurance near you, providing coverage for unforeseen accidents. +`;
    

    // Split the response into individual points
    const agriculturePoints = insuranceResponse.split('\n');

    // Randomly select one point
    const randomIndex = getRandomInt(0, agriculturePoints.length - 1);
    const selectedPoint = agriculturePoints[randomIndex];

    // Translate the selected point to the target language
    const [translation] = await translate.translate(selectedPoint, {
      to: targetLanguage,
    });

    // Create a new ChatMessage document and save it to the database
    const chatMessage = new ChatMessage({
      text: text,
      response: translation,
    });
    await chatMessage.save();

    res.json({ translation });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "An error occurred during translation" });
  }
});


app.get("/api/chat-messages", async (req, res) => {
  try {
  
    const chatMessages = await ChatMessage.find();

    res.json({ chatMessages });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res.status(500).json({ error: "An error occurred while fetching chat messages" });
  }
});
app.post('/request-Insurance', createInsuranceApplication);
app.get('/Insurance', getAllInsuranceApplications);
app.post('/insurance-policies', addInsurancePolicy);
app.get('/insurance/:id', getInsuranceApplicationById);
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});