import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Received
                  </IonCardSubtitle>
                  <IonCardTitle>
                      67 NNC
                  </IonCardTitle>
                  <IonCardSubtitle>
                      From: ec9b2332-a929-4069-9a50-87554384ca25
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                      To: Example Server 1
                  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Sent
                  </IonCardSubtitle>
                  <IonCardTitle>
                      12 NNC
                  </IonCardTitle>
                  <IonCardSubtitle>
                      To: ec9b2332-a929-4069-9a50-87554384ca25
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                      From: Example Server 1
                  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Received
                  </IonCardSubtitle>
                  <IonCardTitle>
                      6 NNC
                  </IonCardTitle>
                  <IonCardSubtitle>
                      From: ec9b2332-a929-4069-9a50-87554384ca25
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                      To: Example Server 1
                  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Received
                  </IonCardSubtitle>
                  <IonCardTitle>
                      12 NNC
                  </IonCardTitle>
                  <IonCardSubtitle>
                      From: ec9b2332-a929-4069-9a50-87554384ca25
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                      To: Example Server 1
                  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>
          <IonCard button>
              <IonCardHeader>
                  <IonCardSubtitle>
                      Sent
                  </IonCardSubtitle>
                  <IonCardTitle>
                      654 NNC
                  </IonCardTitle>
                  <IonCardSubtitle>
                      To: 941b37c7-7cc7-40a6-9613-bb3ca43bf70e
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                      From: Example Server 2
                  </IonCardSubtitle>
              </IonCardHeader>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
