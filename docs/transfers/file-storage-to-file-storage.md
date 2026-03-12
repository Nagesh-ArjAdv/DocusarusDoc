---
id: file-storage-to-file-storage
title: File Storage to File Storage
---

# File Storage to File Storage

DeliveryHub supports replicating data directly from one file storage system to another while preserving folder/object structure.
<div className="hero-image">
  <img src="\img\4-filestorage-to-filestorage.svg" alt="DeliveryHub Platform" />
</div>
This transfer type is commonly used for cross-cloud distribution, regional replication, and partner delivery workflows that expect file-based access.

## Replication behavior

DeliveryHub file-to-file transfers typically run in one of these modes:

### Mirror mode

Mirror mode keeps destination contents aligned with the source scope on each sync.

- New source files are copied to destination
- Removed source files can be removed from destination
- Folder hierarchy and object organization are preserved

### Append mode

Append mode only copies newly discovered files.

- Existing destination files remain unchanged
- Source-side deletes are not propagated
- Useful for immutable drop-zone style workflows

Destination support for mirror vs append behavior can vary. Check destination-specific documentation in [Destinations](/docs/Destinations/).

## Typical setup flow

1. Configure a file storage [Source](/docs/Sources/).
2. Configure a file storage [Destination](/docs/Destinations/).
3. Create a transfer and select source path scope.
4. Choose replication behavior (mirror or append, when available).
5. Set schedule and run the first sync.

## Operational considerations

- **Path design:** keep stable folder conventions to avoid accidental re-copy or omission.
- **Large backfills:** first sync can be substantial for large historical buckets.
- **Deletes in mirror mode:** validate downstream expectations before enabling delete propagation.
- **Permissions:** ensure destination write permissions and source read permissions are continuously valid.

## Monitoring and troubleshooting

- Use transfer logs to verify copied, skipped, or removed objects.
- Use retry and backfill options when runs fail or need historical re-alignment.

See:

## Related guides

- [What are DeliveryHub Transfers?](/docs/transfers/what-is-deliveryhub-transfers)
- [File Storage to Cloud](/docs/transfers/file-storage-to-cloud)
