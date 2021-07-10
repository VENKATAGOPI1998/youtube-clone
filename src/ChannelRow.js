import React from 'react';
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({
    image,
    channel,
    subs,
    noOfvideos,
    description,
    verified
}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}></Avatar>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleIcon></CheckCircleIcon>}</h4>
                <p>{subs} subscribers . {noOfvideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
