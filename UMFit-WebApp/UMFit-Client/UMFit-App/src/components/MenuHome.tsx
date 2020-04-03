import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { logInOutline, helpCircleOutline, callOutline, logOutOutline, personOutline } from 'ionicons/icons';

import './css/MenuHome.css';

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
  menus: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPagesHome: AppPage[] = [
  {
    title: 'Iniciar Sessão',
    url: '/home',
    iosIcon: logInOutline,
    mdIcon: logInOutline
  }, 
  {
    title: 'Sobre',
    url: '/about',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleOutline
  },
  {
    title: 'Contacto',
    url: '/contact',
    iosIcon: callOutline,
    mdIcon: callOutline
  }
];

const appPagesCliente: AppPage[] = [
  {
    title: 'O meu perfil',
    url: '/profile',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'Evolução',
    url: '/profile/evolucao',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'Log-Out',
    url: '/profile/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const appPagesFuncionario: AppPage[] = [
  {
    title: 'O meu perfil',
    url: '/profile',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'Criar Utilizador',
    url: '/profile/novoutilizador',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'Log-Out',
    url: '/profile/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const appPagesTreinador: AppPage[] = [
  {
    title: 'O meu perfil',
    url: '/profile',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'As minhas aulas',
    url: '/profile/aulas',
    iosIcon: personOutline,
    mdIcon: personOutline
  },  {
    title: 'Log-Out',
    url: '/profile/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage, menus }) => {

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>UMFit</IonListHeader>
          <br></br>
          <IonNote>Ginásio da Universidade do Minho</IonNote>
          {( () => {

              var menuElements: JSX.Element[] = [];

              switch(menus) {

                case 'home': 
                  
                menuElements = appPagesHome.map((appPage, index) => {
                  
                  return(
                    <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                      <IonIcon slot="start" icon={appPage.iosIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                    </IonMenuToggle>
                  )});
                  break;
                  case 'Cliente': 
                  menuElements = appPagesCliente.map((appPage, index) => {
                      return (
                        <IonMenuToggle key={index} autoHide={false}>
                          <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                            <IonIcon slot="start" icon={appPage.iosIcon} />
                            <IonLabel>{appPage.title}</IonLabel>
                          </IonItem>
                        </IonMenuToggle>
                      )});  
                      break;
                    case 'Instrutor': 
                    menuElements = appPagesTreinador.map((appPage, index) => {
                        return (
                          <IonMenuToggle key={index} autoHide={false}>
                            <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                              <IonIcon slot="start" icon={appPage.iosIcon} />
                              <IonLabel>{appPage.title}</IonLabel>
                            </IonItem>
                          </IonMenuToggle>
                        )});
                        break;
                      case 'Rececionista': 
                      menuElements = appPagesFuncionario.map((appPage, index) => {
                          return (
                            <IonMenuToggle key={index} autoHide={false}>
                              <IonItem className={selectedPage === appPage.title ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                <IonIcon slot="start" icon={appPage.iosIcon} />
                                <IonLabel>{appPage.title}</IonLabel>
                              </IonItem>
                            </IonMenuToggle>
                          )});  
                          break;
                  }

                  return menuElements;
            }
          ) ()}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
