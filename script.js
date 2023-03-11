const phraseGenerator =()=>{
    const rand = Math.floor(Math.random() * 9 + 1);

    switch(rand){
        case 1:
            return 'dont tell me what they said about me,tell me why they were confortable saying around you';
            break;

        case 2:
            return 'No one has the right to treat you like shit,remember that';
            break;
        
        case 3:
            return 'Learn how to be confortable with people not knowing your own side of the story';
            break;

        case 4:
            return 'dont explain yourself to people who are commited to misunderstanding you';
            break;
    
        case 5:
            return 'theres no sin so greate as that of always been right';
            break;

        case 6:
             return 'i have seen angels in the faces of people who were considered evil';
             break;

        case 7:
            return 'Let who ever say whatever, just keep getting better';
            break;

        case 8:
             return 'i am a good person but things can change very quikly if you cross the line too many times';
             break;
    
        case 9:
            return 'there is a message in the way people treat you,just listen';
            break;
    
         case 10:
            return 'they only come around when they need you';
            break;
    
    
    }
    
}

console.log(phraseGenerator());
