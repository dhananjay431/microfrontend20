import { initFederation } from '@angular-architects/native-federation';

initFederation({
  "micro1":"http://localhost:5200/remoteEntry.json"
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
