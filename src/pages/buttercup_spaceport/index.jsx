import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardCore } from '@splunk/dashboard-core';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import Preset from './presets';
import definition from './definition';

const flags = { enableShowHide: true, enableSmartSourceDS: true };

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="enterprise" colorScheme="light" density="comfortable">
        <DashboardContextProvider initialDefinition={definition} preset={Preset} featureFlags={flags}>
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'Buttercup Spaceport',
        hideFooter: true,
        layout: 'fixed',
    }
);
