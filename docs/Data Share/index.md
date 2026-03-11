---
id: index
title: Data Shares
---

import Admonition from '@theme/Admonition';

# Data Shares

Data Shares let you create and operate automated data delivery between your configured sources and destinations.

<div style={{textAlign: 'center', margin: '1.5rem 0 2rem 0'}}>
  <img
    src="/img/deliveryhub-flow-diagram-optimized.png"
    alt="DeliveryHub data share flow overview"
    style={{maxWidth: '100%', borderRadius: '12px'}}
  />
</div>

<Admonition type="info" title="What You Can Do with Data Shares">
  <ul>
    <li>Create repeatable delivery workflows between source and destination systems.</li>
    <li>Run shares on schedule or trigger them manually when needed.</li>
    <li>Monitor run outcomes, timing, and transferred volume.</li>
  </ul>
</Admonition>

## How data shares fit in DeliveryHub

```text
Source -> Data Share -> Transfer Run -> Destination
```

A data share defines the business and operational context for data delivery:

- Share identity (name, description, ownership context)
- Source and destination pairing
- Transfer configuration and execution behavior
- Run history, logs, and status

## Start here

- [Create and Manage Data Shares](/docs/shares/create-and-manage-share)

## Day-2 operations

In the Shares workspace, you can typically:

- Check state: `Active`, `Paused`, `Error`
- Run actions: `Pause/Resume`, `Edit`, `Run Now`, `Delete/Archive`
- Validate telemetry: `Schedule`, `Next Run`, `Last Run`, `Data Transferred`

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [Transfers Quickstart](/docs/quickstarts/transfers-quickstart)
