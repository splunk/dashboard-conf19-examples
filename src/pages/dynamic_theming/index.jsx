import React from 'react';
import layout from '@splunk/react-page';
import Dashboard from './Dashboard';

// use DashboardCore to render a simple dashboard
layout(<Dashboard />, {
    pageTitle: 'Simple Grid Dashboard',
    hideFooter: true,
    layout: 'fixed',
});
