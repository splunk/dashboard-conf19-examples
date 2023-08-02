import React from 'react';
import layout from '@splunk/react-page';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import { DashboardCore } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';

// use DashboardCore to render a simple dashboard
layout(
    <DashboardContextProvider initialDefinition={definition} preset={EnterpriseViewOnlyPreset}>
        <DashboardCore width="100%" height="calc(100vh - 78px)" />
    </DashboardContextProvider>,
    {
        pageTitle: 'Absolute Layout Dashboard',
        hideFooter: true,
        layout: 'fixed',
    }
);
