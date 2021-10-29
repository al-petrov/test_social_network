const SEND_MESSAGE = "SEND-MESSAGE";
const ADD_SIMBOL_NEW_MESSAGE = "ADD-SIMBOL-NEW-MESSAGE";


const dialogsReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMes = {
                id: state.messagesData.length + 1,
                senderId: state.myID,
                getterId: action.getterId,
                message: action.message,
                date: Date.now(),
            };
            debugger;
            state.messagesData.push(newMes);
            let myIndex = state.newMessages.findIndex(item => item.getterId == item.getter);
            state.newMessages.splice(myIndex, 1);
            return state;
        case ADD_SIMBOL_NEW_MESSAGE:
            for (let item of state.newMessages) {
                if (item.getterId == action.getter) {
                    item.message = action.newText;
                    return state;
                }
            }
            let newMessage = {
                id: state.messagesData.length + 1,
                senderId: state.myID,
                getterId: action.getter,
                message: action.newText,
                date: Date.now(),
            }
            state.newMessages.push(newMessage);
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
    return ({
        type: ADD_SIMBOL_NEW_MESSAGE,
        getter: getter,
        newText: text,
    }
    )
}

export default dialogsReduser;
