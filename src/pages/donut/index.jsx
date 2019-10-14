import React from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition';
import Donut from './Donut';

const CustomPreset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.donut': Donut,
    },
};

const themeKey = 'enterpriseDark';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};
// use DashboardCore to render a simple dashboard
layout(
    <ThemeProvider theme={theme}>
        <DashboardCore
            width="100%"
            height="calc(100vh - 78px)"
            definition={definition}
            preset={CustomPreset}
        />
    </ThemeProvider>,
    {
        pageTitle: 'D3 Donut Chart',
        hideFooter: true,
        layout: 'fixed',
    }
);
