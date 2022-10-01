const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: 'donos0xbf', 
    api_key: '241996229693153', 
    api_secret: 'QW91KgkokDAttSe00TB8o0t_qCw' 
  });



module.exports = {cloudinary};