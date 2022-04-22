import Image from "../base/Image";
import TitlePerson from "../base/TitlePerson";
import TitleSub from "../base/TitleSub"
import PersonText from "../base/PersonText";


export default function Card({ person }) {
  
    return (
        <div className="card">
            <Image
                url={person.imgUrl}
            />
            <div className="titles">
                <TitlePerson>
                    {
                        person.name
                    }
                </TitlePerson>
                <TitleSub>
                    {
                        person.subname
                    }
                </TitleSub>
            </div>
            <PersonText>
                {
                    person.text
                }
            </PersonText>
        </div>
    )
}