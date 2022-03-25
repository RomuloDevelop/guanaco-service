import { IonButton, IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import Page from '../../layouts/Page';
import './Export.scss';

const Export: React.FC = () => {
  return (
    <Page name="Exportar archivo">
      <div className="container">
        <IonButton>
          <IonIcon slot="start" icon={downloadOutline} />
          Expotar
        </IonButton>
      </div>
    </Page>
  );
};

export default Export;
