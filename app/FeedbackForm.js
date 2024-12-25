"use client"

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [filePath, setFilePath] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('Environment Variables:', process.env);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Invalid file type. Please upload a jpeg, png, gif, pdf, doc, or docx file.');
      setMessageText('Load only (jpeg/png/pdf/word/gif files)');
      return;
    }

    const maxSize = 1 * 1024 * 1024; // 1 MB
    if (selectedFile.size > maxSize) {
      setError('File size exceeds 1 MB. Please upload a smaller file.');
      setMessageText('File size should be less than 1 MB');
      return;
    }

    console.log('Attempting file upload to:', 'https://test.insphile.in/upload.php');
    
    setFileLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('username', name); // Send username

    fetch('https://test.insphile.in/upload.php', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
  
      .then(data => {
        console.log('Upload response data:', data);
        setFilePath(data.path);
        setFileName(selectedFile.name);
        setFile(selectedFile);

        // Display file name in green text
        setMessageText(`File successfully attached: ${selectedFile.name}`);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setError('Error uploading file');
      })
      .finally(() => {
        setFileLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!file) {
      Swal.fire({
        title: 'No file attached',
        text: 'Would you like to send without attachment or attach a resume?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Send without attachment',
        cancelButtonText: 'Attach a resume'
      }).then((result) => {
        if (result.isConfirmed) {
          // Proceed to send without attachment
          sendForm();
        } else {
          // Just close the alert
          setLoading(false);
        }
      });
    } else {
      sendForm();
    }
  };

  const sendForm = async () => {
    try {
      console.log('Attempting to send form data to:', '/api/send-email');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          filePath,
          fileName
        }),
        redirect: 'follow' // Follow redirects
      });

      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);

      const text = await response.text();
      if (!text) {
        throw new Error('Empty response body');
      }
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error('Invalid JSON response');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFile(null);
      setFileName('');
      setFilePath('');
      setMessageText('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message');
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <div className={`feedback-form bg-gray-200 bg-opacity-50 p-8 rounded-lg shadow-md max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto ${loading ? 'opacity-5' : ''}`}>
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-5 z-50">
          <div className="loader"></div>
          <p className="text-white mt-4">Please wait, your message is being sent...</p>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32"
          ></textarea>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={fileLoading}
          />
          {fileLoading && <div className="loader mt-2"></div>}
          {fileName && <p className="text-green-500 mt-2">{messageText}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Sending your details...' : 'Submit'}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
