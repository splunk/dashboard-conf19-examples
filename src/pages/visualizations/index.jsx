import React from 'react';
import layout from '@splunk/react-page';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardContextProvider, GeoRegistry, GeoJsonProvider } from '@splunk/dashboard-context';

import { DashboardCore } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';

const gr = GeoRegistry.create();
gr.addDefaultProvider(new GeoJsonProvider());

// use DashboardCore to render a simple dashboard
layout(
    <SplunkThemeProvider family="prisma" colorScheme="dark" density="comfortable">
        <DashboardContextProvider
            geoRegistry={gr}
            initialDefinition={definition}
            preset={EnterpriseViewOnlyPreset}
        >
            <DashboardCore width="100%" height="calc(100vh - 78px)" />
        </DashboardContextProvider>
    </SplunkThemeProvider>,
    {
        pageTitle: 'Visualizations',
        hideFooter: true,
        layout: 'fixed',
    }
);
