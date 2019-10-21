import React from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import GeoRegistry from '@splunk/dashboard-context/GeoRegistry';
import GeoJsonProvider from '@splunk/dashboard-context/GeoJsonProvider';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';

const themeKey = 'scp';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};
const gr = GeoRegistry.create();
gr.addDefaultProvider(new GeoJsonProvider());
// use DashboardCore to render a simple dashboard
layout(
    <ThemeProvider theme={theme}>
        <DashboardContextProvider geoRegistry={gr}>
            <DashboardCore
                width="100%"
                height="calc(100vh - 78px)"
                definition={definition}
                preset={EnterpriseViewOnlyPreset}
            />
        </DashboardContextProvider>
    </ThemeProvider>,
    {
        pageTitle: 'Visualizations',
        hideFooter: true,
        layout: 'fixed',
    }
);
