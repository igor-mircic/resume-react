interface IFooter {
    name: string;
}

const Footer = ({ name }: IFooter) => {
    return (
        <footer>
            <p>
                Created by{' '}
                <strong>
                    <span className="bold">{name}</span>
                </strong>
            </p>
            <p>
                Design by <span className="bold">Thu Nghiem</span> from Figma -
                devChallenges.io
            </p>
        </footer>
    );
};

export default Footer;
