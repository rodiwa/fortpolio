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
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'Media Platform',
    client: 'Quinstreet',
    screen: `${qnstScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${qnst}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'Online Learning Portal',
    client: 'CK 12',
    screen: `${ck12Screen}`,
    tools: [`${firebase}`],
    clientLogo: `${ck12}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'NT Web App',
    client: 'NoodleTools',
    screen: `${ntScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${nt}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'NT Companion (Mobile)',
    client: 'NoodleTools',
    screen: `${ntCompScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${nt}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'HealthCare',
    client: 'Medsolis',
    screen: `${medScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${med}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'Remote Airplay App',
    client: 'Bang & Olufsen',
    screen: `${bnoScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${bno}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  },
  {
    title: 'SET Campaigns',
    client: 'Microsoft',
    screen: `${msftScreen}`,
    tools: [`${firebase}`],
    clientLogo: `${msft}`,
    desc: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipiscing elit.</p>'
  }
]

export default projectsMaster
