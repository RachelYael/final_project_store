import React from "react";
import styled from "@emotion/styled";
import StatusBadge from "./StatusBadge";

export default function TaskContent({ task }) {
  return (
    <TaskDescription>
      <TaskName>{task.name}</TaskName>
      <StatusBadge status={task.status} />
      <TaskID>{task._id}</TaskID>
    </TaskDescription>
  );
}

const TaskDescription = styled.div`
  display: flex;
  width: 100%;
`;
const TaskName = styled.span`
  flex-grow: 1;
`;
const TaskID =  styled.span`
color :grey;
margin-left: 80px;
float: right;
`;

