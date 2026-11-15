import { useState } from 'react';

function Hello() {

  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState(''); 
  const handleShowText = () => {setDisplayedText(inputText);
  };
function Hi(){
    alert('hello good morning')
}
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    
         
        <button>onsubmit</button>
      
      <input
        type="text"
        placeholder="Halkan ku qor..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', fontSize: '16px' }}
      />
      
      <button 
        onClick={handleShowText} 
        style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
      >
        Soo saar Qoraalka
      </button>

      {/* Meesha qoraalku ka soo muuqanayo */}
      {displayedText && (
        <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          Qoraalkaagu waa: {displayedText}
        </p>
      )}
      
    </div>
  );
}

export default Hello;