// For a known dashboard, its even better to cull the preset down to only the things that you need
import DashboardPresets from '@splunk/dashboard-presets/EnterprisePreset';
// custom content
import { AgeInput, RadioBar, Rating } from '../inputs';
import { IFrame } from '../visualizations';

export default {
    ...DashboardPresets,
    visualizations: {
        ...DashboardPresets.visualizations,
        'viz.iframe': IFrame,
    },
    inputs: {
        ...DashboardPresets.inputs,
        'input.radiobar': RadioBar,
        'input.demographics': AgeInput,
        'input.rating': Rating,
    },
};
