class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		    // Check if the event is not in the listeners object, create an array for it
		 if (!this.listeners[event]) {
	      this.listeners[event] = [];
    }
    }
	// Check if the callback is not already in the event's listeners
    if (!this.listeners[event].includes(callback)) {
      this.listeners[event].push(callback);
    }
  }
  
    removeEventListener(event, callback) {
       // Check if the event exists and has listeners
    if (this.listeners[event]) {
      // Filter out the specified callback from the event's listeners
      this.listeners[event] = this.listeners[event].filter(fn => fn !== callback);
    }
  }

    }
  
    dispatchEvent(event) {
    // Check if the event has listeners
    if (this.listeners[event]) {
      // Invoke all callbacks for the event
      this.listeners[event].forEach(callback => callback());
    }
    }
    
  }
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
  
