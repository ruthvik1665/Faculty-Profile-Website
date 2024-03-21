import React from 'react';

const YourComponent = () => {
  return (
    <div style={containerStyle}>
      <div style={iframeContainerStyle}>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1701941252252!6m8!1m7!1sSe_EILQZzK1l23Ln-7f5Yg!2m2!1d17.39060094273597!2d78.31891006274998!3f240!4f20!5f0.7820865974627469" style={{iframeContainerStyle}}></iframe>

        <div style={descriptionStyle}>
          <p>Location 1 Description</p>
        </div>
      </div>
      <div style={iframeContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1701941197988!6m8!1m7!1s-EHLEUlHnyaR2JwnERj4qQ!2m2!1d17.39247699375879!2d78.31966070665754!3f198.36292!4f-3.3127099999999956!5f0.7820865974627469"
          style={iframeStyle}
        ></iframe>
        <div style={descriptionStyle}>
          <p>Cbit Statue</p>
        </div>
      </div>
      <div style={iframeContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1701941220133!6m8!1m7!1sr3NLXd7sAfzZih7WCxzCHw!2m2!1d17.39260092891988!2d78.31997788080264!3f240!4f10!5f0.7820865974627469"
          style={iframeStyle}
        ></iframe>
        <div style={descriptionStyle}>
          <p>Parking Area</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const iframeContainerStyle = {
  width: '100%',
  maxWidth: '600px',
  margin: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
  borderRadius: '8px', // Add border-radius for a rounded look
};

const iframeStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
  borderRadius: '8px', 
  // Add border-radius for a rounded look
};

const descriptionStyle = {
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5', // Add a light background color
  borderBottomLeftRadius: '8px', // Match the container's border-radius
  borderBottomRightRadius: '8px', // Match the container's border-radius
};

export default YourComponent;
