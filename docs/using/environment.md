---
id: environment
title: Environment
---

# Environment

The Environment page centralizes account-level configuration and organization-wide defaults for DeliveryHub.

Use this page to review account identity, authentication controls, source/destination integration settings, and delivery preferences.

:::note
Available settings vary by role, permissions, and enabled features in your environment.
:::

## Overview

Depending on your account configuration, the Environment page can include:

- Account details
- Client ID for API integrations
- Authentication options
- Source/destination integration settings
- Privacy or data-deletion request controls
- Delivery default preferences
- Hubhouse fulfillment default preferences

## Account and API information

Environment includes core account metadata used for administration and support.

- **Account details**: organization and environment context
- **Client ID**: identifier used when integrating with DeliveryHub APIs

If you are building programmatic workflows, use this value with your API onboarding process.

## Authentication options

Authentication settings define how users and systems can access DeliveryHub.

Common areas include:

- SSO/auth provider configuration
- Allowed login methods
- Access/security policy controls

Changes here can affect all users in the environment.

## Source–destination integration settings

Some environments expose connector-specific setup details required by certain source and destination types (for example cloud role/ARN information).

Use these settings when completing connector onboarding across clouds.

## Privacy and compliance controls

Environment may provide controls for handling data lifecycle requests, including deletion-related workflows for transfer data.

Follow internal compliance procedures before executing these actions.

## Delivery preference defaults

Set organization-level defaults that pre-populate new transfer configurations, such as preferred output formats or destination delivery options.

These defaults help standardize setup and reduce repetitive configuration.

## Hubhouse delivery defaults

If Hubhouse is enabled, similar default controls may exist for Data Fulfillment behavior so teams can apply consistent delivery policies across products and consumers.

## Best practices

- Restrict environment-level edits to platform administrators.
- Document all default-setting changes and rollout timing.
- Review authentication settings after identity provider changes.
- Validate delivery defaults in a non-production workflow before broad use.

## Related guides

- [DeliveryHub Application](/docs/using/deliveryhub-application)
- [Data Sources](/docs/using/data-sources)
- [Create and Manage Share](/docs/shares/create-and-manage-share)
- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
