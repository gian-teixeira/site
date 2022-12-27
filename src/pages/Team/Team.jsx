import './Team.css'

import MemberCard from '../../components/MemberCard/MemberCard'
import logo from '../../assets/logo.svg'

const members = [
    {
        name: "Giancarlo Oliveira Teixeira",
        age: 19,
        photoID: 'giancarlo',
        leader: true,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: "Giancarlo Oliveira Teixeira",
        age: 19,
        photoID: 'giancarlo',
        leader: false,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: "Giancarlo Oliveira Teixeira",
        age: 19,
        photoID: 'giancarlo',
        leader: false,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: "Giancarlo Oliveira Teixeira",
        age: 19,
        photoID: 'giancarlo',
        leader: false,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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