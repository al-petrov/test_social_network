const SEND_MESSAGE = "SEND-MESSAGE";
const ADD_SIMBOL_NEW_MESSAGE = "ADD-SIMBOL-NEW-MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alena' },
        { id: 2, name: 'Mom' },
        { id: 3, name: 'Vasya' },
        { id: 4, name: 'Timur' },
        { id: 5, name: 'Dima' },
        { id: 6, name: 'Denis' },
    ],
    messagesData: [
        { id: 1, senderId: "1", getterId: "999", message: 'hi', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 2, senderId: "1", getterId: "999", message: 'how are you xfgdfg ds gsdfgdf sdfdfs dsfds fdsf sg sstegdfg sdfs ddgfd ', date: new Date(2021, 1, 1, 12, 25, 0) },

        { id: 7, senderId: "999", getterId: "1", message: 'hi', date: new Date(2021, 1, 1, 12, 24, 20) },
        { id: 8, senderId: "999", getterId: "1", message: 'i\'m fine', date: new Date(2021, 1, 1, 12, 25, 43) },

        { id: 3, senderId: "5", getterId: "999", message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 4, senderId: "3", getterId: "999", message: 'fuck', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 5, senderId: "3", getterId: "999", message: 'you', date: new Date(2021, 1, 1, 12, 24, 4) },
        { id: 6, senderId: "3", getterId: "999", message: 'YO', date: new Date(2021, 1, 1, 12, 24, 4) },
    ],
    newMessages: [],
    myID: "999",
}


const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case SEND_MESSAGE: 
            let newMes = {
                id: state.messagesData.length + 1,
                senderId: state.myID,
                getterId: action.getterId,
                message: action.message,
                date: Date.now(),
            };
            stateCopy.messagesData = [...state.messagesData, newMes];
            stateCopy.newMessages = [...state.newMessages];
            let myIndex = stateCopy.newMessages.findIndex(item => item.getterId == item.getter);
            stateCopy.newMessages.splice(myIndex, 1);
            return stateCopy;
        case ADD_SIMBOL_NEW_MESSAGE: 
            debugger;
            stateCopy.newMessages = [...state.newMessages];
            for (let item of stateCopy.newMessages) {
                if (item.getterId == action.getter) {
                    item.message = action.newText;
                    return stateCopy;
                }
            }
            let newMessage = {
                id: state.messagesData.length + 1,
                senderId: state.myID,
                getterId: action.getter,
                message: action.newText,
                date: Date.now(),
            }
            stateCopy.newMessages.push(newMessage);
            return stateCopy;
        default:
            return state;
    }
}

export const SendMessageActionCreator = (text, getter) => {
    return ({
        type: SEND_MESSAGE,
        getterId: getter,
        message: text,
    }
    )
}
export const AddSymbolNewMesssageActionCreator = (text, getter) => {
    debugger;
    return ({
        type: ADD_SIMBOL_NEW_MESSAGE,
        getter: getter,
        newText: text,
    }
    )
}

export default dialogsReducer;
