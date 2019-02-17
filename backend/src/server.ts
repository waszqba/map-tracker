import environment from '../environment/environment';
import App from './app';

const app = new App();
app.listen(environment.DEFAULT_PORT);
