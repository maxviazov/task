import {FC} from "react";
import {CardTitle} from "./CardTitle";
import {CardText} from "./CardText";
import '../style/styles.css'
import {CardParameters} from "./Parameters";
interface CardPromise{
    weight?: string;
    height?: string;
    textLabel: string;

}
export const Card: FC<CardPromise> = ({
    weight,
    height,
    textLabel
                                      }) => {
    return (
        <div className="mainCard">
            <CardTitle textLabel={textLabel}/>
            <CardText />
            <CardParameters />
        </div>
    )

}