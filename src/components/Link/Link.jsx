
const Link = ({route}) => {
    const {id, path, name} = route
    return (
        <>
            <li className="mr-7 hover:bg-yellow-950 px-6 text-white"><a href={path}>{name}</a></li>
        </>
    );
};

export default Link;