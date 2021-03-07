import '../styles/about.css';
import { setHeaderListeners, teamPopup, denis } from './constants';
import { Popup } from './Popup';

const popupTeam = new Popup(teamPopup);

setHeaderListeners();

denis.addEventListener('click', () => popupTeam.open());
