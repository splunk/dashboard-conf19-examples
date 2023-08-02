import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import DashboardCore from '@splunk/dashboard-core';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import definition from './definition';

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="enterprise" colorScheme="dark" density="comfortable">
        <DashboardContextProvider initialDefinition={definition} preset={EnterprisePreset}>
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'Emergency Department Ops',
        hideFooter: true,
        layout: 'fixed',
    }
);
