---
id: view-schema-override-types
title: View Schema Override Types
---

# View Schema Override Types

DeliveryHub lets you inspect inferred schemas during transfer setup and override selected column types before loading to destination warehouses.

This helps ensure destination-compatible schemas and reduces downstream type mismatches.

## What this page covers

- How to view inferred schema
- How to override column data types during transfer setup
- How to update overrides on existing transfers safely

For type mapping fundamentals, see [How DeliveryHub Maps Data Types](/docs/welcome/how-deliveryhub-maps-data-types).

## Prerequisites

Before using schema override controls:

- A share is created
- Source and destination are configured
- You are creating or editing a transfer with warehouse-style schema mapping

Permissions and available actions depend on your role.

## View schema

You can view schema in two common places:

1. **During transfer setup** from the review/configuration step
2. **After transfer creation** from transfer details (view/schema actions)

For file-storage sources, schema may not be available immediately until inference is complete.

## Override data types during transfer setup

1. Open transfer configuration in a share.
2. Select source entities/paths and continue.
3. Open the schema modal (schema icon).
4. Find the column to modify.
5. Choose a new destination type from the type dropdown.
6. Save override and continue transfer setup.
7. Start the transfer.

For file-storage sources, use re-infer schema if columns are not yet available.

## Override data types on an existing transfer

You can edit an existing transfer and update overrides, but changes may be breaking depending on destination and loading pattern.

Recommended approach:

- Review impact before saving changes
- Consider running [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill) after type changes to re-align historical data
- Validate downstream consumer queries after the change

## System-managed metadata columns

DeliveryHub may add internal metadata columns required for load and lineage processing (for example load timestamps and source file metadata).

These system columns are managed by DeliveryHub and are not intended for type override.

## Best practices

- Prefer source-side schema fixes when possible; use overrides for destination compatibility.
- Keep overrides minimal and documented.
- Test critical overrides in non-production first.
- Use backfill when historical consistency is required after a type change.

## Related guides

- [How DeliveryHub Maps Data Types](/docs/welcome/how-deliveryhub-maps-data-types)
- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
- [Cloud to Cloud](/docs/transfers/cloud-to-cloud)
- [File Storage to Cloud](/docs/transfers/file-storage-to-cloud)
