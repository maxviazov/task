import {FC} from "react";
import '../style/styles.css'

interface ICardText {
    weight?: string;
    color?: string;
}

export const CardText: FC<ICardText> = ({
                                              weight,
                                              color
                                          }) => {
    return(
        <div className="text">
            APU SURGE VALVE FILTER
            ELEMENT (ETOPS)
        </div>
    )
}