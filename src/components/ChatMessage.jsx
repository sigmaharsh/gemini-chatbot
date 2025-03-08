import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message }) {
  const { role, content } = message;

  // Function to format message content with code blocks and custom bold formatting
  const formatContent = (text) => {
    if (!text) return '';

    // Replace bold text with <strong>text</strong>
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Check if the response contains code blocks
    if (formattedText.includes('```')) {
      // Split by code blocks
      const segments = formattedText.split(/(```(?:[\w-]+)?\n[\s\S]*?\n```)/g);

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
            <div key={index} className="text-segment" dangerouslySetInnerHTML={{ __html: segment.replace(/\n/g, '<br />') }} />
          );
        }
      });
    }

    // If no code blocks, just handle text formatting with paragraphs
    return (
      <div className="text-segment" dangerouslySetInnerHTML={{ __html: formattedText.replace(/\n/g, '<br />') }} />
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