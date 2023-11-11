type ParagraphProps = {
    text: string;
}
// --------------------------------------------------------
const Paragraph= (props: ParagraphProps) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

export default Paragraph