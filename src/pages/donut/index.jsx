import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import { DashboardCore } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';
import Donut from './Donut';

const CustomPreset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.donut': Donut,
    },
};

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="enterprise" colorScheme="dark" density="comfortable">
        <DashboardContextProvider initialDefinition={definition} preset={CustomPreset}>
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'D3 Donut Chart',
        hideFooter: true,
        layout: 'fixed',
    }
);
