import './MemberCard.css'

import giancarlo from '../../assets/photo/giancarlo.jpg'
import guilherme from '../../assets/photo/guilherme.jpg'
import yan from '../../assets/photo/yan.jpg'

const images = {
    'giancarlo': giancarlo,
    'guilherme': guilherme,
    'yan': yan
}

function MemberCard(props){
    return (
            <div 
                data-aos="fade-up" 
                className={ "member-card " + props.side } 
            >
                <div 
                    className="member-img"
                    style = {{
                        background: `url(${images[props.photoID]})`,
                        backgroundSize: 'cover'
                    }} 
                ></div>


                <div className="member-info-container">
                    <div className="member-info">
                        <div className="leader">
                            {props.leader ? "Leader" : ""}
                        </div>
                        <p className="info"><b className="info-name">NOME:</b> {props.name}</p>
                        <p className="info"><b className="info-name">IDADE:</b> {props.age}</p>
                        <p className="desc">{props.desc}</p>
                    </div>  
                </div>
            </div>
    );
}

export default MemberCard;