import React from 'react';
import layout from '@splunk/react-page';
import DashboardCore from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition';

// use DashboardCore to render a simple dashboard
layout(
    <DashboardCore
        width="100%"
        height="calc(100vh - 78px)"
        definition={definition}
        preset={EnterpriseViewOnlyPreset}
    />,
    {
        pageTitle: 'Grid Dashboard',
        hideFooter: true,
        layout: 'fixed',
    }
);
