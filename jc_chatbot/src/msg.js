import './lux.css';

export default function Msg(props) {

    // isUser = Object.hasOwn(props, 'author')

    if (props.author === 'bot') {
        return (
                <div className='alert bot-msg'>
                    <h4>Jack's Chatbot:</h4>
                    <p>{props.content}</p>
                </div>
        )
    }
    else {
        return (
            <div className='alert user-msg text-right'>
                <h4>Jack:</h4>
                <p>{props.content}</p>
            </div>
        )  
        }
}