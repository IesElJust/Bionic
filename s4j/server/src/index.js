"use strict"

const jayson = require('jayson');
const { spawn } = require('child_process');
const net = require('net');


function exec(method, args, callback){

        // Per tal de mantenir informat el client, ens ha oferit
        // un socket pel que escoltarà el que li enviem, pel que
        // ara crearem un client TCP
        let client = new net.Socket();

        // I el connectem al port que ens ofereix el nostre client
        // (que farà de servidor)
        client.connect(args[0].port, "127.0.0.1", function () {
            // Quan tnguem preparada la connexió per escriure al client
            // Ja podem llançar l'ordre en qüestió

            // Per a això creem un nou procés fill que realitze
            // l'ordre corresponent, i codifique l'eixida en UTF-8
            //const child = spawn('ls', ['-lh', '/usr']);
            //const child = spawn('apt-get', ['update']);
            const child = spawn('apt-get', method);
            child.stdout.setEncoding('utf8'); //if you want text chunks

            // Quan l'eixida del procés fill tinga dades...
            child.stdout.on('data', (chunk) => {
                // Les enviem pel socket
                client.write(chunk);
                //console.log("Sending info to sock:"+(args[0].port));
    //            client.write(chunk);
            });

            // since these are streams, you can pipe them elsewhere
            //child.stderr.pipe(dest);

            child.on('close', (code) => {
                // Quan acabe el procés fill, 
                // tancarem el socket pel que enviàvem l'eixida.
                if (code!=0) 
                    if (code==100)
                        client.write(`[s4j] No disposeu de privilegis suficients`);
                    else
                        client.write(`[s4j] Error del servidor s4j: ${code}`);
                client.destroy();
                callback(null, code);

            });

        });

}


// Creem un servidor JSON-RPC
var server = jayson.server({
    update: function (args, callback) {
        exec (["update"], args, callback);
    },

    upgrade: function (args, callback) {
        exec (["-y", "dist-upgrade"], args, callback);
    }


});

server.http().listen(6996);