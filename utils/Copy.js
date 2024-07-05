export const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
    } else {
      // Fallback method for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Could not copy text: ', err);
      }
      document.body.removeChild(textarea);
    }
  };
  