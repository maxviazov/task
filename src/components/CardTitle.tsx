import {FC} from "react";
import '../style/styles.css'

interface ICardTitle {
    weight?: string;
    color?: string;
    textLabel?: string;
}

export const CardTitle: FC<ICardTitle> = ({
    weight,
    color,
    textLabel
                                          }) => {
  return(
      <div className="cardTitle">
          <div className="label">{textLabel}</div>
          <p className="pTitle">767 N149</p>
          <p className="pTitle">A-28-WO-</p>
      </div>
  )
}