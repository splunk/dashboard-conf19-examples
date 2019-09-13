import DefaultPreset from '@splunk/dashboard-presets/DefaultPreset';
import SplunkSearch from '@splunk/datasources/SplunkSearch';

export default {
    ...DefaultPreset,
    dataSources: {
        ...DefaultPreset.dataSources,
        'ds.search': SplunkSearch,
    },
};
