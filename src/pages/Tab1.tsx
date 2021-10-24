import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {add, arrowForwardOutline, ellipsisHorizontal, ellipsisVertical, personCircle, search} from "ionicons/icons";

const centerAmountStyle = {
    marginTop: '10px'
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Wallets</IonTitle>
            </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
          <IonHeader collapse="condense">
              <IonToolbar>
                  <IonTitle size="large">Wallets</IonTitle>
              </IonToolbar>
          </IonHeader>

          <div className="ion-text-center">
              <h5>Total Balance</h5>
              <h1 style={centerAmountStyle}>999 NNC</h1>
          </div>

          <hr />

          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Example Server 1
                  </IonCardSubtitle>
                  <IonCardTitle>
                      432 NNC
                  </IonCardTitle>
              </IonCardHeader>
          </IonCard>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Example Server 2
                  </IonCardSubtitle>
                  <IonCardTitle>
                      567 COC
                  </IonCardTitle>
              </IonCardHeader>
          </IonCard>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton>
                  <IonIcon icon={add} />
              </IonFabButton>
          </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
