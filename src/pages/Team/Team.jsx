import './Team.css'

import MemberCard from '../../components/MemberCard/MemberCard'
import logo from '../../assets/logo.svg'

const members = [
    {
        name: "Guilherme Fonseca do Nascimento",
        age: 20,
        photoID: 'guilherme',
        leader: true,
        desc: `Graduando em Ciência da Computação pela Universidade Federal de São João del-Rei, 
        atualmente cursando o 5º período. Jogos, RPGs e livros são seus principais interesses 
        além da maratona.`
    },
    {
        name: "Yan Ribeiro Andrade",
        age: 20,
        photoID: 'yan',
        leader: false,
        desc: `Aluno do 5° período de graduação do curso de Ciência da Computação da UFSJ. Além da 
        maratona, seus principais interesses são: esportes, inovações tecnológicas e viajar.`
    },
    {
        name: "Giancarlo Oliveira Teixeira",
        age: 19,
        photoID: 'giancarlo',
        leader: false,
        desc: `Aluno do 3º período de graduação de Ciência da Computação. 
        Gosta de design, jogos, desenvolvimento de software, matemática e 
        desafios em geral.`
    }
]

function Members(){
    return (
        <div id="members">
            <p>A atual equipe de maratona do DCOMP/UFSJ é a que segue.</p>

            <div className="coord">
                <p className="info"><b className="coord-info-name">COORDENADOR:</b> prof. Elverton Carvalho Fazzion</p>
                <p className="info"><b className="coord-info-name">ORIENTADORES:</b> profs. Alexandre Pigozzo e Leonardo Rocha</p>
            </div>
            
            <div className="team">
                <div data-aus="animate__bounce" className="char">Time fundador</div>
                <div className="team-logo">
                    <img src={logo} alt="" />
                </div>
            </div>

            { members.map((element, index) => {
                return (
                    <MemberCard 
                        key={element.name} 
                        name={element.name} 
                        age={element.age} 
                        photoID={element.photoID}
                        desc={element.desc}
                        leader={element.leader}
                        side={index % 2 != 0 ? "left" : "right"}
                    />
                );
            })}
        </div>
    );
}

export default Members;