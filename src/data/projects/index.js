// screenshots
import firebase from '../../images/tools/backend/firebase.png'
import elmScreen from '../../images/screens/elm-screen.png'
import qnstScreen from '../../images/screens/qnst-screen.png'
import ck12Screen from '../../images/screens/ck12-screen.png'
import ntScreen from '../../images/screens/nt-screen.png'
import ntCompScreen from '../../images/screens/nt-comp-screen.png'
import medScreen from '../../images/screens/meds-screen.png'
import bnoScreen from '../../images/screens/bno-screen.png'
import msftScreen from '../../images/screens/msft-screen.png'

// logos
import bno from '../../images/clients/bno.png'
import ck12 from '../../images/clients/ck12.png'
import elm from '../../images/clients/elm.png'
import med from '../../images/clients/med.png'
import msft from '../../images/clients/msft.svg'
import nt from '../../images/clients/nt.png'
import qnst from '../../images/clients/qnst.png'

const projectsMaster = [
  {
    title: 'Consumer Connect',
    client: 'EllieMae',
    screen: `${elmScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${elm}`,
    desc: 'The loan app is to help loan officers to be able to collect and store data of potential customers who are applying for a new, or refinancing an existing loan.',
    desc2: 'The loan app is to help loan officers to be able to collect and store data of potential customers who are applying for a new, or refinancing an existing loan.'
  },
  {
    title: 'Media Platform',
    client: 'Quinstreet',
    screen: `${qnstScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${qnst}`,
    desc: 'QMP, is an internal management tool that consolidates, visualizes, and manages digital marketing data from various verticals such as Insurance, Education, Health, Finance, Auto, etc.'    
  },
  {
    title: 'Online Learning Portal',
    client: 'CK 12',
    screen: `${ck12Screen}`,
    tools: [`${firebase}`],
    clientLogo: `${ck12}`,
    desc: 'CK-12 Foundation provides a library of free online textbooks, videos, exercises, flashcards, and real-world applications for over 5000 concepts from arithmetic to students.'    
  },
  {
    title: 'NT Web App',
    client: 'NoodleTools',
    screen: `${ntScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${nt}`,
    desc: 'NoodleTools is a web-based student research service that helps you correctly cite sources in MLA, APA, and Chicago/Turabian citation styles.'    
  },
  {
    title: 'NT Companion (Mobile)',
    client: 'NoodleTools',
    screen: `${ntCompScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${nt}`,
    desc: 'NoodleTools Companion is the mobile app version of the NoodleTools website.'    
  },
  {
    title: 'HealthCare',
    client: 'Medsolis',
    screen: `${medScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${med}`,
    desc: 'Medsolis is a healthcare application that allows doctors, nurses and patients to interact with each other, share and report critical health statistics via a system.'    
  },
  {
    title: 'Remote Airplay App',
    client: 'Bang & Olufsen',
    screen: `${bnoScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${bno}`,
    desc: 'B&O is a high-end Danish consumer electronics company that designs and manufactures audio products, television sets, and telephones.'    
  },
  {
    title: 'SET Campaigns',
    client: 'Microsoft',
    screen: `${msftScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${msft}`,
    desc: 'Microsoft promotional campaigns were involved in online advertisements and event sponsorship for major brands.'    
  }
]

export default projectsMaster
