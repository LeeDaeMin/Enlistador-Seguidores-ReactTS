import {Sub} from '../types'
/* las props es un objeto que tiene la propieda sub una array del objeto nick, avatar, ... */
interface Props{
    subs: Array<Sub>
}

export default function List({subs}: Props){
    return (
    <ul>
        {
          subs.map(sub =>{
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avata de ${sub.nick}`} />
                  <h4>{sub.nick} (<small>{`${sub.subMonths} Meses`}</small>)</h4>
                  <p>{sub.descripcion?.substring(0, 100)}</p>
              </li>
            )
          })
        }
    </ul>
    )
}