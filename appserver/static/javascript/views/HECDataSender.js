import React, { useState } from 'react';
import { render } from 'react-dom';
import { Container, Text, TextInput, Button, Message } from '@splunk/react-ui';

const HECDataSender = () => {
    const [hecUrl, setHecUrl] = useState('');
    const [hecToken, setHecToken] = useState('');
    const [eventData, setEventData] = useState('');
    const [result, setResult] = useState(null);

    const sendData = async () => {
        try {
            const response = await fetch(hecUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Splunk ${hecToken}`,
                    'Content-Type': 'application/json'
                },
                body: eventData
            });

            if (response.ok) {
                setResult({ type: 'success', message: 'Data sent successfully!' });
            } else {
                setResult({ type: 'error', message: `Error sending data: ${response.statusText}` });
            }
        } catch (error) {
            setResult({ type: 'error', message: `Error sending data: ${error.message}` });
        }
    };

    return (
        <Container>
            <Text>HEC URL:</Text>
            <TextInput value={hecUrl} onChange={(e, { value }) => setHecUrl(value)} />

            <Text>HEC Token:</Text>
            <TextInput value={hecToken} onChange={(e, { value }) => setHecToken(value)} />

            <Text>Event Data (JSON):</Text>
            <TextInput multiline value={eventData} onChange={(e, { value }) => setEventData(value)} />

            <Button label="Send Data" onClick={sendData} />

            {result && (
                <Message type={result.type}>
                    {result.message}
                </Message>
            )}
        </Container>
    );
};

render(<HECDataSender />, document.getElementById('hec-data-sender-container'));
