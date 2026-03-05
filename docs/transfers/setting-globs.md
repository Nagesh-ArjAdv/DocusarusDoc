---
id: setting-globs
title: Setting Globs
---

# Setting Globs

Globs let you precisely control which files are included or excluded when creating file-based transfers.

Use globs to limit delivery scope, reduce unnecessary processing, and target only the files needed by downstream consumers.

## Overview

When configuring globs in DeliveryHub, keep these rules in mind:

- Globs are evaluated **in order**.
- Positive patterns (for example `**/*.csv`) include matches.
- Negative patterns (for example `!**/*.tmp`) remove matches.
- A negation-only list won’t match anything unless something is included first.
- Matching is case-sensitive.

### Order matters

Example:

`["**/*.*", "!**/*.csv", "**/important.csv"]`

In this case, CSV files are excluded, then `important.csv` is explicitly re-included.

### Root/path behavior

Patterns should start from either:

- Full source root path (for example `gs://bucket-name/...`), or
- Glob stars (for example `**/...`)

If your selected source root is `gs://bucket-name/`, a pattern like `"user_data/*.*"` may not match as expected because it is not rooted correctly.

## Performance guidance

For large sources, prefer narrowing scope with selected path roots first, then apply globs within those paths. Broad root selection plus complex globs can increase scan cost and runtime.

## Setup instructions

### Option 1: In the application (path selector)

1. Open **Shares** and create/edit a transfer.
2. Select source paths.
3. Open glob configuration for a selected path.
4. Edit the default expression (commonly `**/*.*`).
5. Validate and save the transfer.

:::note
For some cloud destination workflows, multiple merged folders may need to share the same glob expression set.
:::

### Option 2: In the application (developer mode)

1. Open transfer setup and enable developer mode.
2. Edit the JSON transfer entity and set `globs` for each file entity.
3. Validate, review, and save.

Example shape:

```json
{
	"transferEntity": [
		{
			"entityType": "files",
			"pathNames": ["gs://bucket-name/user_data/ids/"],
			"globs": ["**/appID001/**/userClicks/*.csv"]
		}
	]
}
```

### Option 3: Via API

Use the same `transferEntity[].globs` structure in transfer create/update requests.

## Common glob use cases

- Include by extension: `"**/*.json"`
- Exclude by extension: `"!**/*.tmp"`
- Include a specific month: `"**/2023/01/**"`
- Include a date range partition: `"**/2022/03/{01..31}/**"`
- Include Hive partition key: `"**/stock=ibm/**"`
- Include a region path: `"**/US/**"`

## Troubleshooting tips

- Start with a broad include (for example `**/*.*`) and layer exclusions.
- Test one pattern at a time when debugging.
- Confirm case and folder naming exactly match source paths.
- Recheck ordering when expected files are missing.

## Related guides

- [File Storage to Cloud](/docs/transfers/file-storage-to-cloud)
- [File Storage to File Storage](/docs/transfers/file-storage-to-file-storage)
- [DeliveryHub Transfer Backfill](/docs/transfers/deliveryhub-transfer-backfill)
