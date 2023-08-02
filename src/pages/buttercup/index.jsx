import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardCore } from '@splunk/dashboard-core';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import Radar from '../radar/Radar';
import Donut from '../donut/Donut';
import definition from './definition.json';

const Preset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.radar': Radar,
        'viz.donut': Donut,
    },
};

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="enterprise" colorScheme="dark" density="comfortable">
        <DashboardContextProvider initialDefinition={definition} preset={Preset}>
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'Buttercup Games Dashboard',
        hideFooter: true,
        layout: 'fixed',
    }
);
