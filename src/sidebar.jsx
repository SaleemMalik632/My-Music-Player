import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Dashboard from './Dashboard';

const Sidebar = ({ marginfunction }) => {
  const { t } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ur' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div style={{ display: 'flex', height: '110vh' }}>
      <CDBSidebar textColor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={() => marginfunction()}></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            {t('appTitle')}
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" style={{ background: 'red' }}>
              <CDBSidebarMenuItem icon="columns" className="navlinkItem">
                {t('dashboard')}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="music" className="navlinkItem">
                {t('blogs')}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="video" className="navlinkItem">
                {t('profilePage')}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heart" className="navlinkItem">
                {t('analytics')}
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Now-Playing" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="play-circle" className="navlinkItem">
                {t('lastPage')}
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <button onClick={changeLanguage} style={{ marginBottom: '250px' }}>{t('language')}</button>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div>
        {/* <Dashboard />  */}
      </div>
    </div>
  );
};







export default Sidebar;
