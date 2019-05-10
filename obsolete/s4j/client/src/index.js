var jayson = require('jayson');
var net = require('net');
var colors = require('colors');


let command=process.argv[process.argv.length-1];

if(["update", "upgrade"].indexOf((command))<0){
    console.log("\nSintaxi: \n\t\tjust [update | upgrade]\n".red);
    process.exit(-1);

}

// Cree un socket per escoltar la informació del servidor
var SocketListener = net.createServer(function (sock) {
    
    // Quan rebem una cadena la mostrarem per pantalla
    sock.on('data', function(data){
        let str=data.toString('utf8');
        // Eliminem el \n del final
        str=str.substr(0,str.length-1);
        if (str.substr(0,5)=="[s4j]")  console.log(str.red);
        else console.log(str.green);
		
    });
    
    // En tancar-se el socket per part del servidor
    // tancarem el SocketListener.
    sock.on('close', function() {
        SocketListener.close();
    });
    
    //sock.end('Hello world\n');


});


SocketListener.listen(0, function () {
    // console.log('Listening on port ' + SocketListener.address().port);

    var client = jayson.client.http({
        port: 6996
    });

    client.request(command, [{ "port": SocketListener.address().port }], null, function (err) {
        //if (err) throw err;
        if (err) {
            if (err.code=="ECONNREFUSED")
                console.log("Error: El servei s4j no està en funcionament.".red);
            else console.log(err.toString().red); // request was received successfully
            SocketListener.close();

        }
    });
});

