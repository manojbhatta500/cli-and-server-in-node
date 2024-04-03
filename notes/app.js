const yargs = require('yargs');
const  notesInstance = require('./notes');





yargs.version('0.0.1');



yargs.command(
    {
        command : 'add',
        decscribe: 'add  a note',
        builder:{
            title:{
                decscribe: 'note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                decscribe: 'body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv){
            notesInstance.addNotes(argv.title,argv.body);
        }
    }
);

yargs.command({
    command : 'remove',
    decscribe: 'remove the task',
    builder:{
        title:{
            decscribe:"note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notesInstance.removeNotes(argv.title);
    }
});


yargs.command({
    command: 'read',
    decscribe: 'read all the data',
    handler: function(){
        notesInstance.readNotes();
    }
});

yargs.command({
    command: 'list',
    decscribe: 'discribing all the command',
    handler:function(){
        notesInstance.listNotes();
    }
});





yargs.parse();