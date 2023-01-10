import {FC} from "react";
import '../style/styles.css'

interface ICardParameters {
    weight?: string;
    color?: string;
}

export const CardParameters: FC<ICardParameters> = ({
                                              weight,
                                              color
                                          }) => {
    return(
        <div className="cardParameters">
            <label>Completion</label>
            <label className="l1">Code</label>
            <label className="l2">AD</label>
        </div>
    )
}