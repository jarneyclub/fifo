const Emoji = ({ emoji, label }: any) => (
  <span
    style={{marginRight: "5px"}}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {emoji}
  </span>
);

export default Emoji;
