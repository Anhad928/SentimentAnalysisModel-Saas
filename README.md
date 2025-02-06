## Frontend Repository `README.md`

# Friends Sentiment Analyzer Frontend

Friends Sentiment Analyzer Frontend is a modern, responsive web application that allows users to interact with an AI-driven sentiment analysis model. Built with React.js, Tailwind CSS, the T3 Stack, and TypeScript, the application provides a seamless experience for analyzing sentiment from scene cuts inspired by *Friends*. This frontend integrates with an AI model trained in a separate repository using AWS SageMaker and PyTorch.

For details about model training and the underlying AI pipeline, please refer to our [Friends Sentiment Analysis Model Training](https://github.com/Anhad928/SentimentAnalysisModel-AWS) repository.


## Features
- **User Authentication:**  
  Secure sign-up and login powered by bcrypt.js and NextAuth.js.
- **Sentiment Analysis:**  
  Submit scenes or text input for sentiment analysis and view results.
- **Modern UI:**  
  Built with React.js and Tailwind CSS for a responsive, engaging user interface.
- **Cloud-Enabled:**  
  Deployed on AWS Cloud for robust performance.
- **Future Payments:**  
  Upcoming integration with Stripe for premium subscriptions.

## Tech Stack
- **Frontend Framework:**  
  React.js, Next.js, T3 Stack, TypeScript
- **Styling:**  
  Tailwind CSS
- **Authentication:**  
  NextAuth.js, bcrypt.js
- **Cloud:**  
  AWS Cloud
- **API Integration:**  
  RESTful endpoints to interact with the AI model

## Architecture
The frontend is designed as the user interface layer of a full-stack sentiment analysis system:
- **User Interface:**  
  A single-page application offering intuitive interactions.
- **API Communication:**  
  Communicates with backend APIs to handle user authentication and retrieve sentiment analysis results.
- **Model Integration:**  
  Leverages the AI model trained on AWS SageMaker, detailed in the [Model Training Repository](https://github.com/Anhad928/SentimentAnalysisModel-AWS).
- **State Management & Routing:**  
  Managed using Next.js and the T3 Stack for robust client-side operations.

## Installation & Setup

### Prerequisites
- Node.js (v15)
- npm or yarn
- Git

### Steps

1. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage
- **Authentication:**  
  Users can sign up, log in, and securely manage their sessions.
- **Sentiment Analysis:**  
  Submit input (e.g., video scene or text) to receive sentiment analysis results.
- **Dashboard:**  
  Explore interactive dashboards displaying analysis insights.

## Model Training Integration
This frontend application relies on an AI model trained separately using AWS SageMaker and PyTorch. For more information on model training and the AI pipeline, visit the [Friends Sentiment Analysis Model Training](link) repository.

## Future Enhancements
- **Stripe Payment Integration:**  
  Implement Stripe Payment Gateway for premium features.
- **UI/UX Improvements:**  
  Enhance user experience with additional interactive elements.
- **Expanded Analytics:**  
  Integrate more detailed sentiment insights and data visualizations.

## Contributing
Contributions are highly encouraged! Fork the repository, create a branch for your feature or bug fix, and open a pull request for review.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or collaboration opportunities, please contact:  
- **Name:** Anhadpreet Singh 
- **Email:** anhadpre@ualberta.ca  
- **GitHub:** [@Anhad928](https://github.com/Anhad928)
