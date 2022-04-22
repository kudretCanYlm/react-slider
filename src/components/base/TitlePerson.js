
const TitlePerson = ({ children }) => {

    return (
        <h4 className="title-person">
            {
                children.toUpperCase()
            }
        </h4>
    )
}

export default TitlePerson; 
