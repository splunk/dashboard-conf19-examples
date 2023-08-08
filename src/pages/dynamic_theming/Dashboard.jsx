import React, { useCallback, useState } from 'react';
import Select from '@splunk/react-ui/Select';
import styled from 'styled-components';
import DashboardCore from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import { SplunkThemeProvider } from '@splunk/themes';
import { DashboardContextProvider } from '@splunk/dashboard-context';
import definition from './definition.json';

const Container = styled.div`
    position: relative;
`;

const ThemeSwitcher = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
`;

function Dashboard() {
    const [color, setColor] = useState('dark');

    const handleColorChange = useCallback((_e, { value }) => {
        setColor(value);
    }, []);

    return (
        <SplunkThemeProvider family="enterprise" colorScheme={color} density="comfortable">
            <Container>
                <ThemeSwitcher>
                    <Select value={color} onChange={handleColorChange}>
                        <Select.Option label="Enterprise" value="light" />
                        <Select.Option label="Enterprise Dark" value="dark" />
                    </Select>
                </ThemeSwitcher>
                <DashboardContextProvider initialDefinition={definition} preset={EnterpriseViewOnlyPreset}>
                    <DashboardCore width="100%" height="calc(100vh - 78px)" />
                </DashboardContextProvider>
            </Container>
        </SplunkThemeProvider>
    );
}

export default Dashboard;
