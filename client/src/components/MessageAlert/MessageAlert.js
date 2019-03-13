import React, { Component } from "react";
import { MessageAlertStyle } from "./MessageAlertStyle";
import { FaSurprise, FaWineGlassAlt, FaTimesCircle } from "react-icons/fa";

const MessageAlert = props => {
  return (
    <MessageAlertStyle>
      <span className="close" onClick={props.close}>
        <FaTimesCircle />
      </span>
      <span>
        <FaSurprise />
      </span>
      <h1>Wine unavailable today</h1>
      <span>
        <FaWineGlassAlt />
      </span>
    </MessageAlertStyle>
  );
};

export default MessageAlert;
