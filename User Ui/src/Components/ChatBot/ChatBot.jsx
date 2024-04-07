import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios"; // You'll need axios for API requests
import { BsFillMicFill, BsFillXCircleFill } from "react-icons/bs"; // Import the microphone and stop icons
import { AiOutlineClose } from "react-icons/ai"; // Import the microphone and stop icons
import Layouts from "../../Layout/Layouts";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function Chatbot() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translation, setTranslation] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
      translateText(transcript, selectedLanguage);
    }
  }, [transcript, selectedLanguage]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post("http://localhost:1000/api/translate", {
        text,
        targetLanguage,
      });
      setTranslation(response.data.translation);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  const handleVoiceRecognition = () => {
    SpeechRecognition.startListening({ language: selectedLanguage });
  };

  const sendUserMessage = async () => {
    try {
      // Send the user message to the server with the role "user"
      const response = await axios.post("http://localhost:1000/api/translate", {
        text: inputText,
        targetLanguage: selectedLanguage,
      });

      // Handle the response from the server
      const translatedResponse = response.data.translation;
      console.log("User message translated and stored:", translatedResponse);

      // Clear the input field
      setInputText("");
    } catch (error) {
      console.error("Error sending user message:", error);
    }
  };
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Fetch chat messages from your API and set them in the state
    axios.get("http://localhost:1000/api/chat-messages").then((response) => {
      setChatMessages(response.data);
    });
  }, []);

  const sendBotResponse = async (responseText) => {
    try {
      // Send the bot response to the server with the role "bot"
      const response = await axios.post("http://localhost:1000/api/translate", {
        text: responseText,
      });

      // Handle the response from the server
      const translatedResponse = response.data.translation;
      console.log("Bot response stored:", translatedResponse);
    } catch (error) {
      console.error("Error sending bot response:", error);
    }
  };
  const TypingEffect = ({ text, typingSpeed = 50 }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, typingSpeed);

      return () => {
        clearInterval(timer);
      };
    }, [text, typingSpeed]);

    return <p>{displayText}</p>;
  };

  return (
    <>
      <Layouts>
        <div className="flex w-full flex-col gap-4 ">
          <div className="flex-1 space-y-6 overflow-y-auto rounded-lg bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm  sm:text-base sm:leading-7">
            <div>
              <div className="flex items-start">
                <img
                  className="mr-2 h-8 w-8 rounded-full"
                  alt="mhn"
                  src="https://dummyimage.com/128x128/363536/ffffff&text=J"
                />
                <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4  sm:max-w-md md:max-w-2xl">
                  <p>
                    Welcome to your multilingual AI voice assistant, designed to
                    recommend the perfect insurance based on your unique needs!
                    🌟 Let's navigate the world of insurance together, finding
                    you the ideal protection with ease and precision. Ready to
                    start? Your personalized insurance journey begins now!
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-start">
                <img
                  className="ml-2 h-8 w-8 rounded-full"
                  alt="142"
                  src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
                />

                <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4  sm:min-h-0 sm:max-w-md md:max-w-2xl">
                  <p>
                    {translation}
                    <br />
                  </p>
                </div>
                <Link
                  to="/Insurancee/652e440c6e3f74238b7d9fe4"
                  className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row"
                >
                  <FiExternalLink />
                </Link>
              </div>
            </div>
            <div className="bg-slate-300 p-4 z-20 rounded-lg  flex flex-row gap-4">
              <p className="text-airbnb-darkgray mb-2">
                {listening ? "Listening" : "Turned off"}
              </p>
              {listening && (
                <div className="flex items-center">
                  <button
                    onClick={SpeechRecognition.stopListening}
                    className=" text-black py-2 px-4 rounded-md mr-2 hover:bg-airbnb-darkred"
                  >
                    <AiOutlineClose className="w-7 h-7" />
                  </button>
                  <button
                    onClick={resetTranscript}
                    className="bg-airbnb-gray text-black py-2 px-4 rounded-md hover:bg-airbnb-darkgray"
                  >
                    Reset
                  </button>
                </div>
              )}
              <select
                id="languageSelect"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="border border-airbnb-gray rounded-md py-2 px-3 bg-airbnb-white text-airbnb-darkgray focus:outline-none focus:ring focus:border-airbnb-slate"
              >
                <option
                  value="en"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  English
                </option>
                <option
                  value="ta"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Tamil
                </option>
                <option
                  value="te"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Telugu
                </option>
                <option
                  value="hi"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Hindi
                </option>
                <option
                  value="bn"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Bengali
                </option>
                <option
                  value="kn"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Kannada
                </option>
                <option
                  value="mr"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Marathi
                </option>
                <option
                  value="gu"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Gujarati
                </option>
                <option
                  value="ml"
                  className="text-airbnb-darkgray bg-airbnb-white"
                >
                  Malayalam
                </option>
              </select>
            </div>
          </div>

          {/* Prompt message input */}
          <form
            className="flex w-[90%] mx-auto items-center rounded-md bg-slate-200 p-2 my-4 justify-center"
            onSubmit={sendUserMessage} // Handle form submission
          >
            <label htmlFor="prompt" className="sr-only">
              Enter your prompt
            </label>
            <div>
              <BsFillMicFill
                className="h-10 w-10 hover:text-slate-600 cursor-pointer sm:p-2"
                onClick={handleVoiceRecognition}
                aria-hidden="true"
              />
            </div>
            <input
              id="prompt"
              rows="1"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)} // Handle input changes
              className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-200 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
              placeholder="Enter your prompt"
            />
            <div>
              <button
                className="inline-flex hover:text-slate-600 sm:p-2"
                type="submit"
                onSubmit={sendBotResponse}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </Layouts>
    </>
  );
}

export default Chatbot;
