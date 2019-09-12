import '@babel/polyfill';
import React from 'react';
import layout from '@splunk/react-page';
import DashboardCore from '@splunk/dashboard-core';
import definition from './definition';
import preset from './preset';

// use DashboardCore to render a simple dashboard
layout(<DashboardCore width="100%" height="calc(100vh - 78px)" definition={definition} preset={preset} />, {
    pageTitle: 'Simple Grid Dashboard',
    hideFooter: true,
    layout: 'fixed',
});
