---
title: Consumer Organizations
---

# Consumer Organizations

A Consumer Organization represents the receiving organization for data delivered through a share.

Adding a Consumer Organization is optional, but strongly recommended for governance, reporting, and billing clarity.

## Overview

Using Consumer Organizations in shares helps you:

- **Manage shares more easily** by filtering and grouping by consumer context
- **Improve governance** by making the intended recipient explicit on each share
- **Support multi-tenant workflows** where consumer metadata is used for tenant-level filtering (if enabled)
- **Improve billing attribution** by consolidating activity under known consumer entities

## Billing behavior note

Shares without a Consumer Organization may be treated as distinct consumer activity in billing views.

Using one Consumer Organization across multiple related shares helps keep attribution consistent.

## Important limitation

Consumer Organization metadata is not the same as destination access credentials/configuration. Access methods (for example account IDs, ARNs, or warehouse-specific grants) are configured separately at destination/share setup time.

## Typical flow

1. Create or select a Consumer Organization.
2. Assign it to a share.
3. Configure source, destination, and transfer settings.
4. Monitor operations and reporting by consumer context.

## Next step

- [Create and Manage Consumer Organizations](/docs/consumer-organizations/create-and-manage-consumer-organizations)
- [Create and Manage Share](/docs/shares/create-and-manage-share)
