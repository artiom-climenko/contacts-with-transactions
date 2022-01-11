import React, { useCallback, useState } from 'react';
import { BlockWithTabs, TabItem, TabList } from './index.styles';

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

  return (
    <BlockWithTabs>
      <TabList>
        <TabItem isActive={activeTab === 'All'} onClick={handleTheAllTab}>
          All
        </TabItem>
        <TabItem isActive={activeTab === 'Paid'} onClick={handleThePaidTab}>
          Paid
        </TabItem>
        <TabItem isActive={activeTab === 'Unpaid'} onClick={handleTheUnpaidTab}>
          Unpaid
        </TabItem>
        <TabItem
          isActive={activeTab === 'Overdue'}
          onClick={handleTheOverdueTab}
        >
          Overdue
        </TabItem>
      </TabList>
    </BlockWithTabs>
  );
}
