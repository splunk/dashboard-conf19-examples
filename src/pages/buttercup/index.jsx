import React from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import Radar from '../radar/Radar';
import Donut from '../donut/Donut';
import definition from './definition.json';

const themeKey = 'enterpriseDark';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};

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
    <ThemeProvider theme={theme}>
        <DashboardCore width="100%" height="calc(100vh - 78px)" definition={definition} preset={Preset} />
    </ThemeProvider>,
    {
        pageTitle: 'Buttercup Games Dashboard',
        hideFooter: true,
        layout: 'fixed',
    }
);
