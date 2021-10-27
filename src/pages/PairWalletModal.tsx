import {
    IonButton, IonHeader, IonInput, IonItem, IonTitle, IonToolbar
} from '@ionic/react';
import {useState} from "react";

const PairWalletModal: React.FC<{
    onDismiss: () => void;
}> = ({ onDismiss }) => {
    const [text, setText] = useState<string>();

    return(
        <div>
            <h1>Pair Wallet</h1>
            <IonItem>
                <IonInput value={text} placeholder="Enter Pairing Key" onIonChange={e => setText(e.detail.value!)} clearInput />
            </IonItem>
            <IonButton expand="block" onClick={() => onDismiss()}>
                Add Wallet
            </IonButton>
            <IonButton expand="block" onClick={() => onDismiss()}>
                Cancel
            </IonButton>
        </div>
    );
}

export default PairWalletModal;
