import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {albumsOutline, cogOutline, walletOutline} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PairWalletModal from "./pages/PairWalletModal";
import {useRef} from "react";

const App: React.FC = () => {
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet ref={routerRef}>
              <Route exact path="/wallets">
                <Tab1 router={routerRef.current}/>
              </Route>
              <Route exact path="/transactions">
                <Tab2/>
              </Route>
              <Route exact path="/settings">
                <Tab3/>
              </Route>
              <Route exact path="/">
                <Redirect to="/wallets"/>
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="wallets" href="/wallets">
                <IonIcon icon={walletOutline}/>
                <IonLabel>Wallets</IonLabel>
              </IonTabButton>
              <IonTabButton tab="transactions" href="/transactions">
                <IonIcon icon={albumsOutline}/>
                <IonBadge>3</IonBadge>
                <IonLabel>Transactions</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon icon={cogOutline}/>
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  )
};

export default App;
