import { render } from 'solid-js/web';
import { TasksDashboard } from './components';
import './styles';

const root = document.getElementById('solidjs');

render(() => <TasksDashboard />, root);
