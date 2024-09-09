import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

export type FriendMessageType = {
    message:MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt='avatar-friend'
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <h2>{props.message.user.name}</h2>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                    <div><p>{props.message.message.text}</p></div>
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}>
                    <div>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default FriendMessage
