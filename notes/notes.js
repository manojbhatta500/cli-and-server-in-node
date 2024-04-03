const fs = require('fs');
const { rootCertificates } = require('tls');

 

const saveData = function(notes){

    const rootPath = __dirname;
    const trimmedPath = rootPath.slice(0,rootPath.length-5);
    const dataPathForCli = `${trimmedPath}/data/notesData.json`;
   

    const dataJson = JSON.stringify(notes);
    fs.writeFileSync(dataPathForCli,dataJson);
}



const loadNotes = function(){
    try{

    const rootPath = __dirname;
    const trimmedPath = rootPath.slice(0,rootPath.length-5);
    const dataPathForCli = `${trimmedPath}/data/notesData.json`;

       const dataBuffer =   fs.readFileSync(dataPathForCli);
       const dataJson = dataBuffer.toString();
       return JSON.parse(dataJson);
    }catch(e){
       return [];
   
    }
   }
   
   


//    add notes


const addNotes = function(title,body){
    const data = loadNotes();

    const duplicateData = data.filter((note)=>{
        return note.title === title;
    });

    if(duplicateData.length === 0){
        data.push({
            title: title,
            body: body
        });
        saveData(data);
        console.log('notes saved successfully');
    }else{
        console.log('tile already taken!')
    }

   


}



// remove notes

const removeNotes = function(title){

    const loadData = loadNotes();

    const data = loadNotes();
   

    const duplicateData = data.filter((note)=>{
       
        return note.title === title;

    });

    if(duplicateData.length > 0){
        data.pop(duplicateData);
        saveData(data);
        console.log('Notes removed successfully!');
    }else{
        console.log('Title  not found!')
    }
}


// list





const readNotes = function(){
    const data = loadNotes();

    if(data.length == 0){
        console.log('There are no data in data base');
    }else{
       console.log('Notes');
        for(i = 0;i < data.length;i ++){
            console.log(`${i+1}. ${data[i].title}`);
           
        }    
    }
}


// list notes


const listNotes = function(){
    const data = loadNotes();

    if(data.length == 0){
        console.log('There are no data in data base');
    }else{
       console.log('Notes');
        for(i = 0;i < data.length;i ++){
            console.log(`${i+1}. ${data[i].title}`);
            console.log(`Disc : ${data[i].body}`);
        }    
    }
}







module.exports = {
     addNotes,
     removeNotes,
     readNotes,
     listNotes
}
