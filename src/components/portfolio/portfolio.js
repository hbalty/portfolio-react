import {Component} from 'react'
export class Portfolio extends Component {
    render(){
        const projetList = [
            {cle:1,
               nom: 'Projet1',
               description: 'Projet2',
               imageUrl: 'Projet3',
               lien: 'Projet4',
               nbCollaborateurs: '5'
            },
            {cle:2,
                nom: 'Projet5',
                description: 'Projet6',
                imageUrl: 'Projet7',
                lien: 'Projet8',
                nbCollaborateurs: '9'
             }
             
        ]
        const projets = projetList.map(projet => <div key={projet.cle}>
            nom du projet est {projet.nom} <br/>
            description du projet {projet.description}


        </div>)
        return <div>{projets}</div>


    }
}
