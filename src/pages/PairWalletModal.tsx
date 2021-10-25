import {
    IonButton, IonHeader, IonTitle, IonToolbar
} from '@ionic/react';

const PairWalletModal: React.FC<{
    onDismiss: () => void;
}> = ({ onDismiss }) => (
    <div>
        <h1>Pair Wallet</h1>
        <IonButton expand="block" onClick={() => onDismiss()}>
            Scan QR Code
        </IonButton>
        <IonButton expand="block" onClick={() => onDismiss()}>
            Cancel
        </IonButton>
    </div>
);

export default PairWalletModal;
