// src/components/ChatMessage.jsx - Improved with code formatting
import React from 'react';

function ChatMessage({ message }) {
  const { role, content } = message;
  
  // Function to format message content with code blocks
  const formatContent = (text) => {
    if (!text) return '';
    
    // Check if the response contains code blocks
    if (text.includes('```')) {
      // Split by code blocks
      const segments = text.split(/(```(?:[\w-]+)?\n[\s\S]*?\n```)/g);
      
      return segments.map((segment, index) => {
        // Check if this segment is a code block
        if (segment.startsWith('```') && segment.endsWith('```')) {
          // Extract language if specified
          let language = 'text';
          const languageMatch = segment.match(/```([\w-]+)\n/);
          if (languageMatch && languageMatch[1]) {
            language = languageMatch[1];
          }
          
          // Extract code content
          const codeContent = segment
            .replace(/```(?:[\w-]+)?\n/, '') // Remove opening ```language\n
            .replace(/\n```$/, ''); // Remove closing ```
          
          return (
            <div key={index} className="code-block">
              {language !== 'text' && (
                <div className="code-language">{language}</div>
              )}
              <pre>
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        } else {
          // Regular text - handle paragraphs
          return (
            <div key={index} className="text-segment">
              {segment.split('\n\n').map((paragraph, pIndex) => (
                // Convert double newlines to paragraphs
                <p key={pIndex}>
                  {/* Convert single newlines to line breaks */}
                  {paragraph.split('\n').map((line, lIndex, array) => (
                    <React.Fragment key={lIndex}>
                      {line}
                      {lIndex < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          );
        }
      });
    }
    
    // If no code blocks, just handle text formatting with paragraphs
    return (
      <div className="text-segment">
        {text.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph.split('\n').map((line, lIndex, array) => (
              <React.Fragment key={lIndex}>
                {line}
                {lIndex < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    );
  };
  
  return (
    <div className={`message ${role === 'user' ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        {formatContent(content)}
      </div>
    </div>
  );
}

export default ChatMessage;