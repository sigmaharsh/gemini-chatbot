

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
  <p>This will start the development server and you can view the application in your browser at <a href="http://localhost:5173">http://localhost:5173</a>.</p>

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
    <li><code>.env.local</code>: Environment variables file (not included in the repository) please obtain the gemini api key <a href="https://aistudio.google.com/apikey">Google AI studio</a> and paste this inside .env.local folder <pre><code> VITE_GEMINI_API_KEY= your-api-key</code></pre></li>

  </ul>

  <h2>Available Scripts</h2>
  <p>In the project directory, you can run:</p>

  <h3><code>npm run dev</code> or <code>yarn dev</code></h3>
  <p>Runs the app in development mode. Open <a href="http://localhost:5173">http://localhost:5173</a> to view it in the browser.</p>

</body>
