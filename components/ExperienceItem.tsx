import Image from 'next/image';

const ExperienceItem = ({
    img,
    dateStart,
    dateEnd,
    title,
    desc,
}: IExperience) => {
    return (
        <div>
            <Image
                src={img ? img : ''}
                alt="brand image"
                width={200}
                height={200}
                layout="fixed"
            />
            <p>
                {dateStart} - {dateEnd}
            </p>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default ExperienceItem;
