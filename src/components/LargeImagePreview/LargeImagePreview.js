import React from 'react';
import './LargeImagePreview.css';

// The LargeImagePreview component displays a selected movie's large image and title.
function LargeImagePreview({ image , title }) {
  // Split the title into words to be displayed on separate lines if a title is provided.
  const titleWords = title ? title.split(' ') : [];
  // Background image style to apply the blur effect.
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div style={backgroundImageStyle} className="full-page-background" /> {/* This div will serve as the blurred background */}
      <div className="large-image-preview">
        <img src={image} alt={title} />
        <div className="preview-title">
          {titleWords.map((word, index) => (
            // Render each word in a separate div for a new line
            <div key={index} className="title-word">{word}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LargeImagePreview;

