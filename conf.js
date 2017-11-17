const fs = require('fs');

const conf = {
  port : 3000,
  secureContext : { // tls.createSecureContext()
    key: fs.readFileSync('/path/to/privkey.pem'),
    cert: fs.readFileSync('/path/to/cert.pem')
  }
};

module.exports = conf;
