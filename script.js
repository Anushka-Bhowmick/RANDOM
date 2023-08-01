const ideasByTopic = {
    app: [
        { idea: "Fitness Tracker", description: "Create an app that allows users to track their fitness activities, set goals, monitor progress, and provide workout recommendations. Include features like GPS tracking, calorie counting, and integration with wearable devices." },
        { idea: "Language Learning App", description: "Develop an interactive app that helps users learn a new language. Incorporate features such as vocabulary exercises, pronunciation guides, quizzes, and progress tracking." },
        { idea: "Habit-Building App", description: "Build an app that assists users in forming and tracking positive habits. Include features like habit reminders, streak tracking, goal setting, and motivational messages." },
        { idea: "Meditation and Mindfulness App", description: "Design an app that offers guided meditation sessions, breathing exercises, and relaxation techniques. Include features like customizable meditation durations, soothing sounds, and progress tracking." },
        { idea: "Personal Finance Manager", description: "Create an app that helps users manage their finances, track expenses, set budgets, and view visualizations of their spending habits. Consider integrating features like bill reminders and savings goals." },
        { idea: "Travel Planner App", description: "Develop an app that assists users in planning their trips, including features like destination suggestions, itinerary creation, flight and hotel bookings, and offline maps." },
        { idea: "Task Management and Productivity App", description: "Build an app that allows users to organize tasks, set priorities, and track their productivity. Include features like reminders, deadlines, collaboration options, and integration with calendar platforms." },
        { idea: "Recipe and Meal Planning App", description: "Create an app that provides users with recipes, meal planning tools, grocery lists, and nutritional information. Consider incorporating features like dietary restrictions, personalized recommendations, and cooking timers." },
        { idea: "Augmented Reality (AR) Game", description: "Develop an app that utilizes AR technology to create an interactive gaming experience. This could involve virtual treasure hunts, puzzle-solving, or multiplayer experiences." },
        { idea: "Educational App for Children", description: "Design an app that provides educational content tailored for children. Include features like interactive lessons, quizzes, puzzles, and progress tracking. Consider incorporating gamification elements to make learning fun and engaging." },
        { idea: "Music Discovery and Streaming App", description: "Create an app that allows users to discover new music, create playlists, follow artists, and stream their favorite songs on-demand." },
        { idea: "Habit Tracker", description: "Build an app that helps users develop and track positive habits. Include features such as habit creation, reminders, streak tracking, and motivational prompts." },
        { idea: "Virtual Assistant App", description: "Design an app that serves as a digital assistant, offering voice-activated features such as setting reminders, providing weather updates, answering questions, and performing tasks like sending messages or making calls." },
        { idea: "Food Delivery App", description: "Develop a mobile app that allows users to order food from local restaurants for delivery or pickup. Include features like menus, reviews, payment integration, and real-time order tracking." },
      ],
    webDev: [
        { idea: "E-commerce Platform", description: "Create a fully functional online store with features like product listings, shopping cart, user registration, secure payment integration, and order management." },
        { idea: "Social Media Network", description: "Develop a social media platform that allows users to create profiles, connect with friends, share posts, comment, and like content." },
        { idea: "Task Management System", description: "Build a web application that enables users to create, assign, and track tasks, set deadlines, and collaborate with team members." },
        { idea: "Online Learning Platform", description: "Design a website for hosting educational courses with features like user registration, course enrollment, video lessons, quizzes, and progress tracking." },
        { idea: "Travel Planner", description: "Develop a platform that assists users in planning their trips, including itinerary creation, hotel and flight bookings, destination information, and user reviews." },
        { idea: "Recipe Sharing Community", description: "Create a web application where users can share and discover recipes, search by ingredients, rate and review recipes, and create personalized recipe collections." },
        { idea: "Job Board", description: "Build a platform where employers can post job openings, and job seekers can search and apply for positions, with features like resume uploading and email notifications." },
        { idea: "Event Management System", description: "Design a web application for organizing and managing events, including features like event registration, ticket sales, scheduling, and attendee management." },
        { idea: "Crowdfunding Platform", description: "Develop a website that allows individuals or organizations to raise funds for their projects or causes, with options for donations, reward-based funding, and social sharing." },
        { idea: "Fitness Tracker", description: "Create a web-based fitness application that enables users to track their workouts, set goals, monitor progress, and access exercise routines and nutritional information." },
        { idea: "Content Management System", description: "Create a customizable CMS that allows users to create, publish, and manage their website content easily." },
        { idea: "Personal Finance Tracker", description: "Build a web app that helps users track their expenses, set budgets, and visualize their financial goals through interactive charts and reports." },
        { idea: "Volunteer Network", description: "Develop a platform that connects volunteers with charitable organizations, allowing users to find volunteer opportunities and sign up for various causes." },
        { idea: "News Aggregator", description: "Develop a website that collects and displays news articles from various sources on different topics. Implement features like categorization, search, personalized recommendations, and social sharing." },
        { idea: "Portfolio Website", description: "Design a website template for professionals to showcase their work and skills. Include sections for projects, resume, testimonials, and contact information. Make it customizable and easy to use." },
      ],
    web3: [
        { idea: "Decentralized Marketplace", description: "Build a peer-to-peer marketplace where users can buy and sell goods or services directly, without intermediaries. Utilize smart contracts for secure transactions and decentralized storage for product listings and reviews." },
        { idea: "Blockchain-based Voting System", description: "Create a transparent and tamper-proof voting platform using blockchain technology. Allow users to cast their votes securely, ensuring transparency and immutability of the voting records." },
        { idea: "Decentralized Identity Management", description: "Develop an identity verification system that allows users to control their own digital identities using blockchain. Users can store their personal information securely and selectively share it with trusted parties." },
        { idea: "Distributed File Storage", description: "Build a decentralized file storage platform where users can store their files across a distributed network. Use blockchain to ensure data integrity and incentivize users to contribute their unused storage space." },
        { idea: "Tokenized Assets Platform", description: "Create a platform for tokenizing and trading real-world assets, such as real estate or artwork, using blockchain technology. Enable fractional ownership, liquidity, and transparent ownership records." },
        { idea: "Decentralized Social Media", description: "Design a social media platform that operates on a decentralized network, allowing users to control their data and engage in direct peer-to-peer interactions. Implement features like decentralized content moderation and incentivized content creation." },
        { idea: "Blockchain-based Supply Chain Management", description: "Develop a supply chain solution that utilizes blockchain to track and verify the origin, authenticity, and movement of products throughout the supply chain. Enhance transparency, traceability, and trust." },
        { idea: "Decentralized Finance (DeFi) Application", description: "Create a DeFi application that offers decentralized lending, borrowing, or trading services. Leverage smart contracts and decentralized exchanges to provide secure and transparent financial services." },
        { idea: "Blockchain-based Crowdfunding Platform", description: "Build a platform that enables decentralized crowdfunding campaigns using blockchain technology. Use smart contracts to ensure transparent distribution of funds and enforce project milestones." },
        { idea: "Decentralized Gaming Platform", description: "Develop a gaming platform that utilizes blockchain for in-game asset ownership, secure transactions, and provably fair gameplay. Allow players to trade and sell their virtual assets on the blockchain." },
        { idea: "DAO Governance Platform", description: "Develop a platform for decentralized autonomous organizations (DAOs) that allows participants to propose, vote on, and execute decisions using smart contracts, fostering transparent and community-driven governance." },
        { idea: "NFT Marketplace", description: "Build a platform for trading non-fungible tokens (NFTs) representing unique digital assets, such as artwork, collectibles, or virtual real estate. Enable creators to mint, list, and sell their NFTs directly to buyers." },
        { idea: "Decentralized Electronic Health Records (EHR) System", description: "Develop a decentralized electronic health records system that empowers patients to have ownership and control over their medical data while ensuring privacy, security, and interoperability." },
      ],
    aiMl: [
        { idea: "Predictive Analytics for Customer Churn", description: "Develop a model that predicts customer churn for a business based on historical customer data, helping to identify potential churners and take proactive measures to retain them." },
        { idea: "Fraud Detection System", description: "Build a machine learning model that detects fraudulent transactions or activities in financial data, helping businesses identify and prevent fraudulent behavior." },
        { idea: "Sentiment Analysis for Social Media", description: "Create a model that analyzes social media data to understand sentiment trends and public opinion on specific topics, brands, or events." },
        { idea: "Recommendation Engine", description: "Design a recommendation system that suggests relevant products, articles, movies, or music based on user behavior and preferences, using techniques like collaborative filtering or content-based filtering." },
        { idea: "Demand Forecasting", description: "Develop a model that forecasts product demand based on historical sales data, helping businesses optimize inventory management, production planning, and resource allocation." },
        { idea: "Image Recognition for Object Detection", description: "Build a deep learning model that can detect and classify objects within images, enabling applications like automated image tagging or object recognition in video feeds." },
        { idea: "Natural Language Processing (NLP) for Text Classification", description: "Create a model that analyzes and categorizes text data, such as customer reviews or support tickets, into predefined categories or sentiment levels." },
        { idea: "Time Series Analysis for Predictive Maintenance", description: "Apply time series analysis techniques to sensor data from machinery or equipment to predict maintenance needs, allowing businesses to schedule maintenance proactively and minimize downtime." },
        { idea: "Customer Segmentation", description: "Use clustering algorithms to segment customers based on demographic, behavioral, or transactional data, enabling targeted marketing campaigns and personalized customer experiences." },
        { idea: "Disease Outbreak Prediction", description: "Build a model that predicts the likelihood and spread of infectious diseases based on factors like climate data, population density, and historical outbreak patterns, aiding in early detection and response planning." },
      ],
    robotics: [
        { idea: "Autonomous Line Following Robot", description: "Design and build an autonomous robot capable of following a line on the ground without human intervention. The robot will be equipped with sensors and actuators that allow it to sense the line and adjust its movements accordingly to stay on the path." },
        { idea: "Firefighting Robot", description: "Design a robot capable of detecting and extinguishing fires. Use infrared sensors to locate fires and actuators like a water pump to extinguish them." },
        { idea: "Autonomous Navigation Robot", description: "Build a robot capable of autonomously navigating through a given environment, avoiding obstacles, and reaching a specific destination using sensors like ultrasonic, infrared, or lidar." },
        { idea: "Robotic Arm with Object Manipulation", description: "Develop a robotic arm capable of picking and placing objects with precision. Implement computer vision techniques to identify objects and use feedback control to perform accurate manipulations." },
        { idea: "Swarm Robotics", description: "Create a group of small robots that can communicate and cooperate with each other to accomplish a collective task, such as formation control, exploration, or object transportation." },
        { idea: "Humanoid Robot", description: "Design and build a humanoid robot that can mimic human movements and perform tasks like walking, grasping objects, or even dancing. Explore kinematics, dynamics, and control algorithms for human-like motion." },
        { idea: "Robot for Home Automation", description: "Construct a robot that can control various smart devices in a home environment, such as lights, thermostats, or security systems. Implement voice or gesture recognition for intuitive user interaction." },
        { idea: "Robotic Exoskeleton", description: "Develop a wearable robotic exoskeleton that assists individuals with limited mobility in performing daily activities or rehabilitation exercises. Explore the integration of sensors and actuators for motion support." },
        { idea: "Agricultural Robot", description: "Build a robot designed for agricultural applications, such as crop monitoring, planting, or harvesting. Incorporate sensors, computer vision, and autonomous navigation capabilities to optimize farming processes." },
        { idea: "Drone Swarm Project", description: "Create a coordinated swarm of drones capable of performing tasks like aerial mapping, search and rescue missions, or package delivery. Focus on communication, coordination, and path planning algorithms" },
        { idea: "Robot for Education", description: "Design an educational robot that can teach programming, robotics concepts, or other STEM subjects to students. Provide a user-friendly interface and interactive learning experiences" },
        { idea: "Robot for Healthcare Assistance", description: "Develop a robot that assists healthcare professionals in tasks like patient monitoring, medication delivery, or elder care. Ensure safety, privacy, and effective human-robot interaction in healthcare settings" },
      ],
      iot: [
        { idea: "Environmental Monitoring", description: "Create a sensor network to monitor environmental parameters like temperature, humidity, air quality, and soil moisture"},
        { idea: "Smart Energy Management", description: "Design a solution to monitor and optimize energy usage in homes or commercial buildings. Use IoT sensors to track energy consumption and control appliances to reduce wastage and save energy"},
        { idea: "Healthcare Monitoring Devices", description: "Build wearable IoT devices that track vital signs like heart rate, blood pressure, and body temperature. This data can be transmitted to healthcare professionals for remote monitoring of patients"},
        { idea: "Smart Pet Feeders", description: " Build an automated pet feeding system that dispenses food based on schedule or remotely controlled through a mobile app, ensuring pets are fed even when the owners are away"},
        { idea: "Smart Wearables", description: "Design IoT-enabled wearable devices like fitness trackers or smartwatches that integrate health monitoring, activity tracking, and smart notifications"}, 
      ],
      cloud: [
        { idea: "Cloud-Based File Sharing and Storage Platform", description: "Create a cloud storage and file-sharing platform similar to Dropbox or Google Drive. Allow users to upload, access, and share files securely over the internet"},
        { idea: "Cloud-Based Collaboration Tools", description: "Develop cloud-based collaboration tools like real-time document editing, task management, and video conferencing to enhance team productivity and remote work"},
        { idea: "Cloud-Based Machine Learning Platform", description: "Develop a cloud-based platform that allows users to train and deploy machine learning models without the need for extensive hardware resources"},
        { idea: "Cloud-Based Virtual Classroom", description: " Create a cloud-based virtual classroom platform that facilitates online learning with features like video conferencing, interactive whiteboards, and content sharing"},
        { idea: "Cloud-Based Sentiment Analysis", description: "Build a cloud-based sentiment analysis tool that analyzes text data from social media or customer reviews to gauge public opinion about products, services, or events"}, 
      ],
  };
  
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
    ideaList.classList.add("idea-list");
  
    selectedIdeas.forEach((ideaData) => {
      const { idea, description } = ideaData;
  
      const ideaElement = document.createElement("li");
      ideaElement.textContent = idea;
  
      const arrowDown = document.createElement("span");
      arrowDown.classList.add("arrow-down");
      arrowDown.addEventListener("click", () => {
        ideaElement.classList.toggle("show-description");
      });
      ideaElement.appendChild(arrowDown);
  
      const arrowUp = document.createElement("span");
      arrowUp.classList.add("arrow-up");
      arrowUp.addEventListener("click", () => {
        ideaElement.classList.toggle("show-description");
      });
      ideaElement.appendChild(arrowUp);
  
      const ideaDescription = document.createElement("p");
      ideaDescription.textContent = description;
      ideaDescription.classList.add("subheading");
      ideaElement.appendChild(ideaDescription);
  
      ideaList.appendChild(ideaElement);
    });
  
    ideaContainer.appendChild(ideaList);
  }
  
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  document.getElementById("generateBtn").addEventListener("click", generateIdeas);
    
  
