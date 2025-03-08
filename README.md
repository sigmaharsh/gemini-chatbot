<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gemini Chatbot</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    h1, h2, h3 {
      color: #333;
    }
    pre {
      background: #333;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <h1>Gemini Chatbot</h1>
  <p>This is a Vite-based project for a chatbot application using the Gemini API.</p>

  <h2>Prerequisites</h2>
  <p>Make sure you have the following installed on your machine:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (version 14 or higher)</li>
    <li><a href="https://www.npmjs.com/">npm</a> (version 6 or higher) or <a href="https://yarnpkg.com/">Yarn</a></li>
  </ul>

  <h2>Getting Started</h2>
  <p>Follow these steps to set up and run the project locally.</p>

  <h3>1. Clone the repository</h3>
  <pre><code>git clone https://github.com/sigmaharsh/gemini-chatbot.git
cd gemini-chatbot</code></pre>

  <h3>2. Install dependencies</h3>
  <p>Using npm:</p>
  <pre><code>npm install</code></pre>
  <p>Or using Yarn:</p>
  <pre><code>yarn install</code></pre>

  <h3>3. Set up the environment variables</h3>
  <p>Create a <code>.env.local</code> file in the root of the project and add your Gemini API key:</p>
  <pre><code>VITE_GEMINI_API_KEY=your_gemini_api_key_here</code></pre>
  <p>Replace <code>your_gemini_api_key_here</code> with your actual Gemini API key.</p>

  <h3>4. Run the development server</h3>
  <p>Using npm:</p>
  <pre><code>npm run dev</code></pre>
  <p>Or using Yarn:</p>
  <pre><code>yarn dev</code></pre>
  <p>This will start the development server and you can view the application in your browser at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>Project Structure</h2>
  <ul>
    <li><code>src/</code>: Contains the source code for the project
      <ul>
        <li><code>components/</code>: Contains React components
          <ul>
            <li><code>ChatMessage.jsx</code>: Component for displaying chat messages</li>
          </ul>
        </li>
        <li><code>App.jsx</code>: Main application component</li>
        <li><code>App.css</code>: Main stylesheet for the application</li>
      </ul>
    </li>
    <li><code>.env.local</code>: Environment variables file (not included in the repository)</li>
  </ul>

  <h2>Available Scripts</h2>
  <p>In the project directory, you can run:</p>

  <h3><code>npm run dev</code> or <code>yarn dev</code></h3>
  <p>Runs the app in development mode. Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>

  <h3><code>npm run build</code> or <code>yarn build</code></h3>
  <p>Builds the app for production to the <code>dist</code> folder.</p>

  <h3><code>npm run serve</code> or <code>yarn serve</code></h3>
  <p>Serves the production build from the <code>dist</code> folder.</p>

  <h2>Dependencies</h2>
  <ul>
    <li><code>react</code>: JavaScript library for building user interfaces</li>
    <li><code>react-dom</code>: Entry point to the DOM and server renderers for React</li>
    <li><code>vite</code>: Next generation frontend tooling</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>