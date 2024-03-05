const projects = [
  {
    id: 1,
    title: "Churn-Prediction-And-Prevention",
    description:
      "This repository contains Python code for predictive churn analysis in a telecom industry setting. The purpose of this project is to develop a predictive model to identify potential churn customers and analyze factors contributing to customer attrition. The analysis includes exploratory data visualization, statistical summaries, and the implementation of a machine learning model using the RandomForestClassifier.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Churn-Prediction-And-Prevention/blob/main/Model/model.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Churn-Prediction-And-Prevention/tree/main/Output",
  },
  {
    id: 5,
    title: "Costumer-Segmentation-using-ML",
    description:
      "Develop an AI-driven pricing optimization system that adjusts prices in real-time based on factors such as demand, competitor pricing, and customer behavior to maximize revenue and profit.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Costomer-Segmentation-using-ML/tree/main/Costomer-Segmentation-using-ML-main/Model",
    outputUrl:
      "https://github.com/proAIrokibul/Costomer-Segmentation-using-ML/tree/main/Costomer-Segmentation-using-ML-main/Output",
  },
  {
    id: 6,
    title: "Financial Security Enhancement through Credit Card Fraud Detection",
    description:
      "Credit Card Fraud Detection is a critical application of machine learning in the realm of financial security. This project aims to leverage AI and ML techniques to detect fraudulent transactions, ensuring the safety of credit card users and mitigating financial losses for both individuals and financial institutions.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Fraud-Detection-And-Prevention/blob/main/Model/Fraud%20Detection.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Fraud-Detection-And-Prevention/tree/main/Output",
  },
  {
    id: 7,
    title: "Predictive-Maintenance",
    description:
      "In today's industrial landscape, unplanned downtime due to machinery failures can result in significant financial losses and operational disruptions. To mitigate these challenges, predictive maintenance techniques leverage advanced analytics and machine learning algorithms to predict potential failures before they occur. This GitHub project offers a comprehensive solution for predictive maintenance tailored for industrial machinery.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Predictive-Maintenance/blob/main/Predictive%20Maintainace/Model/Predictive_Maintainance.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Predictive-Maintenance/tree/main/Predictive%20Maintainace/Output",
  },
  {
    id: 8,
    title: "Supply-Chain-Optimization",
    description:
      "This GitHub repository presents a comprehensive analysis of the supply chain for makeup products, focusing on optimizing efficiency, reducing costs, and enhancing customer satisfaction. The analysis utilizes a rich dataset collected from a Fashion and Beauty startup, encompassing various aspects of the supply chain process.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Supply-Chain-Optimization/blob/main/Supply%20Chain%20Optimization/Models/supply_chain_optimization.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Supply-Chain-Optimization/tree/main/Supply%20Chain%20Optimization/Output",
  },
  {
    id: 9,
    title: "Sentiment Analysis for Brand Monitoring",
    description:
      "This project focuses on utilizing natural language processing (NLP) techniques to perform sentiment analysis for brand monitoring. The sentiment analysis allows businesses to gain insights into public perception, customer opinions, and trends related to their brand. By analyzing text data from various sources such as social media, customer reviews, and news articles, businesses can better understand their brand's reputation and make informed decisions to enhance brand perception and customer satisfaction.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Sentiment-Analysis-/blob/main/Sentiment%20Analysis/Model/sentiment.ipynb",
    outputUrl:
      "https://github.com/proAIrokibul/Sentiment-Analysis-/tree/main/Sentiment%20Analysis/Output",
  },

  {
    id: 2,
    title: "Movie Recommendation",
    description:
      "Build a predictive model using AI algorithms to forecast sales trends accurately, helping businesses optimize inventory management and resource allocation.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Movie-recommendation/blob/main/Model/app.py",
    outputUrl:
      "https://github.com/proAIrokibul/Movie-recommendation/tree/main/Output",
  },
  {
    id: 3,
    title: "Healthcare-Predictive-Modeling",
    description:
      "Create an AI system to predict customer churn by analyzing historical data and identifying factors leading to customer attrition. Implement proactive measures to prevent churn.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Healthcare-Predictive-Modeling/tree/main/model",
    outputUrl: "https://github.com/proAIrokibul/Healthcare-Predictive-Modeling",
  },
  {
    id: 4,
    title: "Electrical-grid-stability",
    description:
      "Utilize natural language processing (NLP) techniques to analyze customer feedback from various sources (social media, reviews, etc.) and provide insights into brand perception and sentiment.",
    gitHubUrl:
      "https://github.com/proAIrokibul/Electrical-grid-stability/tree/main/Electrical-grid-stability-main/model",
    outputUrl:
      "https://github.com/proAIrokibul/Electrical-grid-stability/tree/main/Electrical-grid-stability-main/Output",
  },
];

export const getProjects = () => {
  return projects;
};

export const getSingleProject = (id) => {
  const model = projects.find((p) => p.id == id);
  if (model) return model;
  return "No project found";
};
