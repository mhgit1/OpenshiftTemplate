var express = require('express');

var app = express();

//You need to define theses two variables with these
//two environment variables to get your app working in openshift

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;           //process.env.PORT oletus portti 80 (yleensä varattu)  ||(tai) 
                                                                                        // process.env.OPENSHIFT_NODEJS_PORT, tai 8080, jos muut ei käy
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP   || '0.0.0.0';      //Onko prosessimuuttujassa, openshiftin ympäristön ip, 
                                                                                        //tai default oman koneen verkkokortin ip

//When this server is connected, return the index.html as response
app.get('/',function(req,res){
   
    res.sendfile('index.html');
});


//Listen to given port in given ip address
app.listen(port,ip);
