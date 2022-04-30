type TweetProps = {
    text: string; // ?: -> opcional : -> obrigatório
}

export function Tweet(props: TweetProps) {
    return (
        <p>{ props.text }</p>
    );
}
