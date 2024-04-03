interface PropsType {
  mode?: string;
  content?: string;
}

function LogItem(type: PropsType) {
  const props = Object.assign({
    mode: 'system'
  } as PropsType, type);
  return (
    <div>
      <span>{props.mode}</span>:&nbsp;
      {props.content}
    </div>
  );
}

export default LogItem;
