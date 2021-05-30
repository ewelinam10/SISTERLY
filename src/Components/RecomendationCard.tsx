

interface RecomendationCardProps {
    userName: string;
    hashtags: string[];
    desc: string;
    img: string;
}

const RecomendationCard: React.FC<RecomendationCardProps> = (options: RecomendationCardProps) => {
    let hashtagsElements: JSX.Element[] = [];
    for (let i = 0; i < options.hashtags.length; i++) {
        hashtagsElements.push(<h4># {options.hashtags[i]} </h4>);
    }
    return (

        <div>
            <img src={options.img} width='50%' />
            <h4>{options.userName}</h4>
            należy do kręgów:
            {hashtagsElements}
            {options.desc}
        </div>

    )

}

export default RecomendationCard;