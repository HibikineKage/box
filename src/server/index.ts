/* eslint no-console: 0 */
import App from './app';

const serverApp = new App();
const server = serverApp.app.listen(serverApp.app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    serverApp.app.get('port'),
    serverApp.app.get('env'),
  );
  console.log('  Press CTRL_C to stop\n');
});

export default server;
