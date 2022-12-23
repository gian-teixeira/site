import './MemberCard.css'

function Info(props){
    return(
        <p><b>{props.info}:</b> {props.text}</p>
    );
}

function MemberCard(props){
    /*const images = require.context('./photo', true);
    image = ID => (assets(`./${ID}`).default);*/


    return (
            <div 
                data-aos="fade-up" 
                className={ "member-card " + props.side } 
            >
                <div 
                    className="member-img"
                    style = {{
                        background: `url("./src/assets/photo/${props.photoID}")`,
                        backgroundSize: 'cover'
                    }} 
                ></div>
                <div className="member-info-container">
                    <div className="member-info">
                        <p className="info"><b className="info-name">NOME:</b> {props.name}</p>
                        <p className="info"><b className="info-name">IDADE:</b> {props.age}</p>
                        <p className="desc">{props.desc}</p>
                    </div>  
                </div>
            </div>
    );
}

export default MemberCard;