# HEC Data Sender for Splunk

## Overview

HEC Data Sender is a Splunk app that facilitates sending data to a HTTP Event Collector (HEC) endpoint. This app provides a user-friendly interface to configure HEC endpoints, manage data sources, and monitor the data sending process.

## Features

- Configure multiple HEC endpoints
- Send data to HEC endpoints from various sources
- Monitor data sending status and performance
- Dashboard for visualizing sent data and HEC endpoint health

## Installation

1. Download the HEC Data Sender app from Splunkbase or the provided ZIP file.
2. In your Splunk web interface, go to "Apps" > "Manage Apps".
3. Click on "Install app from file".
4. Choose the downloaded ZIP file and click "Upload".
5. Restart your Splunk instance to complete the installation.

## Setup

After installation, follow these steps to set up the HEC Data Sender app:

1. Navigate to the HEC Data Sender app in your Splunk instance.
2. Go to the "Configuration" page within the app.
3. Add at least one HEC endpoint by providing the following information:
   - Endpoint Name
   - HEC URL (e.g., https://splunk.example.com:8088)
   - HEC Token
   - Index (optional)
   - Source Type (optional)
4. Save your configuration.

## Usage

### Sending Data

1. Go to the "Send Data" page within the app.
2. Select the HEC endpoint you want to send data to.
3. Choose your data source:
   - Upload a file
   - Paste JSON data
   - Configure a data input (if applicable)
4. Click "Send Data" to initiate the data transfer.

### Monitoring

1. Visit the "Dashboard" page to view:
   - Amount of data sent over time
   - HEC endpoint health status
   - Recent sending activities

### Troubleshooting

If you encounter any issues:

1. Check the app's logs in `$SPLUNK_HOME/var/log/splunk/hec_data_sender.log`
2. Verify your HEC endpoint configuration
3. Ensure your Splunk instance has network access to the HEC endpoint

## Support

For support, please visit our support portal at https://support.example.com or contact us at support@example.com.

## License

This app is licensed under the Apache License 2.0. See the LICENSE file for details.
