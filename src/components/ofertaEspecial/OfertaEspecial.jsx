import { ButtonDefault } from "../button/ButtonDefault.Jsx"
import tenisBanner2 from '../../assets/img/tenisBanner2.svg';
import './OfertaEspecial.css'

export const OfertaEspecial = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 tenis-oferta">
                    <div id="circle">
                        <img src={tenisBanner2} alt="" style={{ marginLeft: '-3em'}} />
                    </div>

                </div>
                <div className="col-md-6">
                    <div>
                        <span className="oferta-especial-titulo">Oferta especial</span>
                        <h2 className="oferta-subtitulo mb-4">Air Jordan edição de colecionador</h2>
                        <p className="text-wrap texto-oferta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum atque perferendis, blanditiis earum accusantium mollitia minus iste autem molestiae, fgfgfgvvvsfgrsrgrgrgrggrrgfefab pariatur minima eius ad quos beatae hic magnam nam.
                        </p>
                        <div className="styles_botao__wXFtQ">
                            <ButtonDefault nome='Ver Oferta' width='12' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
