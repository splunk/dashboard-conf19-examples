import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import DashboardCore from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="enterprise" colorScheme="dark" density="comfortable">
        <DashboardContextProvider initialDefinition={definition} preset={EnterpriseViewOnlyPreset}>
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'San Francisco Airport Dashboard',
        hideFooter: true,
        layout: 'fixed',
    }
);
