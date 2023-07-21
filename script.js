const ideasByTopic = {
    app: [
      { idea: "Create a social media app for pet owners.", description: "Connect pet lovers and let them share their furry friends' photos, stories, and advice." },
      { idea: "Build a fitness app with real-time workout tracking.", description: "Track users' workouts, offer personalized fitness plans, and monitor progress over time." },
      { idea: "Develop a recipe-sharing app for food enthusiasts.", description: "Allow users to upload and discover new recipes, create shopping lists, and rate recipes." },
      { idea: "Design an app that connects volunteers with local NGOs.", description: "Match volunteers with NGOs based on their interests and skills, promoting community involvement." },
      { idea: "Create a language learning app with interactive lessons.", description: "Offer language courses with speaking exercises, quizzes, and progress tracking." },
      { idea: "Build a budgeting app to help users manage their finances.", description: "Track expenses, set financial goals, and provide insights into spending habits." },
      { idea: "Develop a meditation app with guided sessions and relaxing sounds.", description: "Help users reduce stress and practice mindfulness through meditation." },
      { idea: "Design a productivity app with task management and time tracking features.", description: "Boost users' efficiency by organizing tasks and analyzing time usage." },
    ],
    webDev: [
      { idea: "Build a blogging platform with Markdown support.", description: "Enable writers to compose posts using Markdown and provide a platform for sharing their thoughts." },
      { idea: "Create a portfolio website template for designers.", description: "Develop a customizable template for designers to showcase their work and skills." },
      { idea: "Develop a weather app that provides local forecasts.", description: "Fetch weather data from APIs and deliver accurate forecasts to users." },
      { idea: "Design a marketplace for buying and selling handmade goods.", description: "Allow artists and crafters to sell their handmade products to a wider audience." },
      { idea: "Create an online coding playground with multiple programming languages.", description: "Enable users to practice coding and see real-time results." },
      { idea: "Build a travel blog platform with geolocation-based posts.", description: "Let travelers share their experiences and recommendations with location tags." },
      { idea: "Develop a job board for remote work opportunities.", description: "Connect remote job seekers with employers offering remote positions." },
      { idea: "Design a quiz platform with interactive quizzes and result sharing.", description: "Create engaging quizzes with different question formats and share results on social media." },
    ],
    web3: [
      { idea: "Create a decentralized voting application.", description: "Develop a voting platform on the blockchain, ensuring secure and transparent elections." },
      { idea: "Build an NFT marketplace for digital artists.", description: "Let artists mint, showcase, and sell their digital art as non-fungible tokens." },
      { idea: "Develop a crowdfunding platform using blockchain technology.", description: "Allow startups and creators to raise funds through token-based crowdfunding campaigns." },
      { idea: "Design a decentralized identity management system.", description: "Enable users to control their digital identities securely using blockchain technology." },
      { idea: "Build a blockchain-based supply chain tracking system.", description: "Track the provenance of goods to ensure transparency and authenticity." },
      { idea: "Create a decentralized finance (DeFi) lending platform.", description: "Enable users to borrow and lend digital assets in a trustless manner." },
      { idea: "Develop a blockchain-based certificate verification platform.", description: "Verify educational and professional certificates on the blockchain." },
      { idea: "Design a decentralized social media platform.", description: "Build a social network that respects users' privacy and data ownership." },
    ],
    aiMl: [
      { idea: "Build a sentiment analysis tool for social media posts.", description: "Analyze social media content to gauge public sentiment and emotional responses." },
      { idea: "Create an AI-powered virtual assistant for productivity.", description: "Develop a virtual assistant to help users with tasks, scheduling, and reminders." },
      { idea: "Develop a recommendation engine for online shopping.", description: "Offer personalized product recommendations to enhance the online shopping experience." },
      { idea: "Design a chatbot for customer support on websites.", description: "Implement an AI chatbot to handle customer inquiries and provide support." },
      { idea: "Create an AI-based language translation tool.", description: "Translate text and speech between multiple languages using AI algorithms." },
      { idea: "Build an AI-driven content curation platform.", description: "Curate and deliver personalized content to users based on their interests and preferences." },
      { idea: "Develop an AI model for medical image analysis.", description: "Assist medical professionals in diagnosing diseases through image recognition." },
      { idea: "Design an AI-powered music composition tool.", description: "Generate original music compositions based on user preferences and styles." },
    ],
    robotics: [
      { idea: "Build a drone for autonomous package delivery.", description: "Create a drone capable of delivering packages safely and autonomously." },
      { idea: "Create a robot for household chores and cleaning.", description: "Develop a domestic robot to assist with cleaning and household tasks." },
      { idea: "Develop a robotic arm for industrial automation.", description: "Design a robotic arm for precise and efficient manufacturing processes." },
      { idea: "Design a self-driving car prototype.", description: "Build a self-driving car with advanced sensing and navigation capabilities." },
      { idea: "Create a robot for agricultural tasks like planting and harvesting.", description: "Assist farmers with labor-intensive agricultural operations." },
      { idea: "Build a humanoid robot for social interaction and companionship.", description: "Create a robot capable of understanding and responding to human emotions." },
      { idea: "Develop a swarm of small robots for search and rescue missions.", description: "Use a team of robots to explore disaster-stricken areas and locate survivors." },
      { idea: "Design a robot for underwater exploration and data collection.", description: "Explore and map the depths of oceans for scientific research and marine conservation." },
    ],
  };
  
  // ... (ideasByTopic and other functions remain the same)

function generateIdeas() {
    const topic = document.getElementById("topicSelect").value;
    const ideas = ideasByTopic[topic];
    const ideaContainer = document.getElementById("ideaOutput");
    ideaContainer.innerHTML = "";
  
    if (!ideas || ideas.length === 0) {
      ideaContainer.textContent = "Sorry, no ideas found for the specified topic.";
      return;
    }
  
    const shuffledIdeas = shuffleArray(ideas);
    const selectedIdeas = shuffledIdeas.slice(0, 3);
  
    const ideaList = document.createElement("ul");
  
    selectedIdeas.forEach((ideaData) => {
      const { idea, description } = ideaData;
  
      const ideaElement = document.createElement("li");
      ideaElement.classList.add("idea");
  
      const ideaHeading = document.createElement("strong");
      ideaHeading.textContent = idea;
      ideaElement.appendChild(ideaHeading);
  
      const ideaDescription = document.createElement("p");
      ideaDescription.classList.add("description");
      ideaDescription.textContent = "Description: " + description;
      ideaElement.appendChild(ideaDescription);
  
      ideaList.appendChild(ideaElement);
    });
  
    ideaContainer.appendChild(ideaList);
  }
  
  // ... (rest of the code remains the same)
  
  
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  document.getElementById("generateBtn").addEventListener("click", generateIdeas);
  