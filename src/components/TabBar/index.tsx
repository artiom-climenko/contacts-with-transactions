import React, { useCallback, useState } from 'react';
import { BlockWithTabs, TabItem, TabList } from './index.styles';
import { useTranslation } from 'react-i18next';

export function TabBar() {
  const [activeTab, setActiveTab] = useState('All');

  const handleTheAllTab = useCallback(() => {
    setActiveTab('All');
  }, []);
  const handleThePaidTab = useCallback(() => {
    setActiveTab('Paid');
  }, []);
  const handleTheUnpaidTab = useCallback(() => {
    setActiveTab('Unpaid');
  }, []);
  const handleTheOverdueTab = useCallback(() => {
    setActiveTab('Overdue');
  }, []);

  const { t } = useTranslation();

  return (
    <BlockWithTabs>
      <TabList>
        <TabItem isActive={activeTab === 'All'} onClick={handleTheAllTab}>
          {t('tabBar.all')}
        </TabItem>
        <TabItem isActive={activeTab === 'Paid'} onClick={handleThePaidTab}>
          {t('tabBar.paid')}
        </TabItem>
        <TabItem isActive={activeTab === 'Unpaid'} onClick={handleTheUnpaidTab}>
          {t('tabBar.unpaid')}
        </TabItem>
        <TabItem
          isActive={activeTab === 'Overdue'}
          onClick={handleTheOverdueTab}
        >
          {t('tabBar.overdue')}
        </TabItem>
      </TabList>
    </BlockWithTabs>
  );
}
