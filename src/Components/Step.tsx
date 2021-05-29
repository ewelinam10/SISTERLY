

interface StepProps {
    img: string;
    title: string;
    desc: string;
}

const Step: React.FC<StepProps> = (options: StepProps) => {

    return (

        <div>
            <div>
                <img src={options.img} />
            </div>
            <div>
                <h2> {options.title} </h2>
                {options.desc}
            </div>
        </div>

    )

}

export default Step;