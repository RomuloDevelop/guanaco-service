import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { documentOutline, documentSharp, qrCodeOutline, qrCodeSharp } from 'ionicons/icons';
import './Menu.scss';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Exportar XLSX',
    url: '/export',
    iosIcon: documentOutline,
    mdIcon: documentSharp
  },
  {
    title: 'Lectura QR',
    url: '/QR',
    iosIcon: qrCodeOutline,
    mdIcon: qrCodeSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent color='dark'>
        <IonList id="inbox-list" color='dark'>
          <IonListHeader>
            <img src="/assets/img/brand.png" alt="brand" />
          </IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
