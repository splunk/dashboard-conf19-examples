import React from 'react';
import layout from '@splunk/react-page';
import Dashboard from './Dashboard';

// use DashboardCore to render a simple dashboard
layout(<Dashboard />, {
    pageTitle: 'Dynamic Theming',
    hideFooter: true,
    layout: 'fixed',
});
