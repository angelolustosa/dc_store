import './ButtonDefault.css'

export const ButtonDefault = props => {
  return (
    <button style={{ width: `${props.width} rem`}} className='btn-entrar'>{props.nome}</button>
  )
}
