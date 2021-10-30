
import { AddSymbolNewMesssageActionCreator, SendMessageActionCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return ({ state: state.messages })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendMessage: (text, getter) => {
            dispatch(SendMessageActionCreator(text, getter));
        },
        messageChanged: (text, getter) => {
            dispatch(AddSymbolNewMesssageActionCreator(text, getter));
        },
    })
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;