import { render } from 'solid-js/web';
import { Page } from './components';
import './styles';

const root = document.getElementById('solidjs');

render(() => <Page />, root);
