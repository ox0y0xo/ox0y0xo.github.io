document.body.innerHTML = `
  <div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">
    <h1>XSS POC Successful</h1>
    <p>This page was rendered via external JavaScript injection</p>
    <button onclick="alert('Button clicked!')" 
            style="padding: 10px 20px; 
                   background-color: #4CAF50; 
                   color: white; 
                   border: none; 
                   border-radius: 4px; 
                   cursor: pointer;">
      Click Me
    </button>
  </div>
`;
