module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: [
        'welcome/what-is-deliveryhub',
        'welcome/how-deliveryhub-moves-your-data',
        'welcome/how-deliveryhub-maps-data-types',
      ],
    },

    {
      type: 'category',
      label: 'Hubhouse',
      items: [
        'hubhouse/what-is-hubhouse',
        'hubhouse/what-is-a-hubhouse-table',
        'hubhouse/what-are-data-products',
        'hubhouse/what-is-data-fulfillment',
        'hubhouse/backfilling-in-hubhouse',
      ],
    },

    {
      type: 'category',
      label: 'Transfers',
      items: [
        'transfers/what-is-deliveryhub-transfers',
        'transfers/deliveryhub-transfer-backfill',
        'transfers/retry-mechanism',
        'transfers/file-storage-to-cloud',
        'transfers/file-storage-to-file-storage',
        'transfers/cloud-to-file-storage',
        'transfers/cloud-to-cloud',
        'transfers/setting-globs',
        'transfers/view-schema-override-types',
        'transfers/setting-backfill-segmentation',
        'transfers/sync-preferences-schedule',
        'transfers/auto-revoking-access',
      ],
    },

    {
      type: 'category',
      label: 'Shares',
      items: [
        'shares/create-and-manage-share',
      ],
    },

    {
      type: 'category',
      label: 'Consumer Organizations',
      link: {
        type: 'doc',
        id: 'consumer-organizations/index',
      },
      items: [
        'consumer-organizations/create-and-manage-consumer-organizations',
      ],
    },

    {
      type: 'category',
      label: 'Using DeliveryHub',
      items: [
        'using/deliveryhub-application',
        'using/data-sources',
        'using/environment',
      ],
    },

    {
      type: 'category',
      label: 'Sources',
      link: {
        type: 'doc',
        id: 'Sources/index',
      },
      items: [
        {
          type: 'category',
          label: 'Amazon S3',
          link: { type: 'doc', id: 'Sources/Amazon-s3' },
          items: [
            { type: 'doc', id: 'Sources/Amazon-s3/setup-guide/index', label: 'Setup guide' },
          ],
        },
        {
          type: 'category',
          label: 'Azure Object Storage',
          link: { type: 'doc', id: 'Sources/Azure-object-storage' },
          items: [
            { type: 'doc', id: 'Sources/Azure-object-storage/setup-guide/index', label: 'Setup guide' },
          ],
        },
        {
          type: 'category',
          label: 'Google Cloud Storage',
          link: { type: 'doc', id: 'Sources/Google-cloud-storage' },
          items: [
            { type: 'doc', id: 'Sources/Google-cloud-storage/setup-guide/index', label: 'Setup guide' },
          ],
        },
        {
          type: 'category',
          label: 'SFTP',
          link: { type: 'doc', id: 'Sources/Sftp' },
          items: [
            { type: 'doc', id: 'Sources/Sftp/setup-guide/index', label: 'Setup guide' },
          ],
        },
        {
          type: 'category',
          label: 'BigQuery',
          link: { type: 'doc', id: 'Sources/Bigquery' },
          items: [
            { type: 'doc', id: 'Sources/Bigquery/setup-guide/index', label: 'Setup guide' },
          ],
        },
        {
          type: 'category',
          label: 'Snowflake',
          link: { type: 'doc', id: 'Sources/Snowflake' },
          items: [
            { type: 'doc', id: 'Sources/Snowflake/setup-guide/index', label: 'Setup guide' },
          ],
        },
      ],
    },

    {
  type: 'category',
  label: 'Destinations',
  link: {
    type: 'doc',
    id: 'Destinations/index',
  },
  items: [
    {
      type: 'category',
      label: 'Amazon S3',
      link: { type: 'doc', id: 'Destinations/Amazon-s3/index' },
      items: [
        { type: 'doc', id: 'Destinations/Amazon-s3/deliveryhub-managed-s3-bucket-setup-guide', label: 'Deliveryhub-managed S3 bucket setup guide' },
        { type: 'doc', id: 'Destinations/Amazon-s3/external-s3-bucket-setup-guide', label: 'External S3 bucket setup guide' },
        { type: 'doc', id: 'Destinations/Amazon-s3/accessing-data-in-amazon-s3', label: 'Accessing data in Amazon S3' },
      ],
    },

    {
      type: 'category',
      label: 'Azure Blob Storage',
      link: { type: 'doc', id: 'Destinations/Azure-blob-storage/index' },
      items: [
        { type: 'doc', id: 'Destinations/Azure-blob-storage/deliveryhub-managed-application-setup-guide', label: 'Deliveryhub-managed application setup guide' },
        { type: 'doc', id: 'Destinations/Azure-blob-storage/accessing-data-in-azure-blob-storage', label: 'Accessing data in Azure Blob Storage' },
        { type: 'doc', id: 'Destinations/Azure-blob-storage/consumer-managed-application-setup-guide', label: 'Consumer-managed application setup guide' },
      ],
    },

    {
      type: 'category',
      label: 'Google Cloud Storage',
      link: { type: 'doc', id: 'Destinations/Google-cloud-storage/index' },
      items: [
        { type: 'doc', id: 'Destinations/Google-cloud-storage/deliveryhub-managed-gcs-bucket-setup-guide', label: 'Deliveryhub-managed GCS bucket setup guide' },
        { type: 'doc', id: 'Destinations/Google-cloud-storage/accessing-data-in-google-cloud-storage', label: 'Accessing data in Google Cloud Storage' },
        { type: 'doc', id: 'Destinations/Google-cloud-storage/external-gcs-managed-bucket-setup-guide', label: 'External GCS managed bucket setup guide' },
      ],
    },

    {
      type: 'category',
      label: 'SFTP',
      link: { type: 'doc', id: 'Destinations/sftp/destinations-sftp-index' },
      items: [
        { type: 'doc', id: 'Destinations/sftp/deliveryhub-managed-sftp-setup-guide', label: 'DeliveryHub-managed SFTP setup guide' },
      ],
    },
    {
      type: 'category',
      label: 'Amazon Redshift',
      link: { type: 'doc', id: 'Destinations/Redshift/destinations-redshift-index' },
      items: [
        { type: 'doc', id: 'Destinations/Redshift/deliveryhub-managed-amazon-redshift-setup-guide', label: 'DeliveryHub-managed Amazon Redshift setup guide' },
        { type: 'doc', id: 'Destinations/Redshift/consuming-a-data-transfer-in-amazon-redshift', label: 'Consuming a data transfer in Amazon Redshift' },
      ],
    },
    {
      type: 'category',
      label: 'Databricks',
      link: { type: 'doc', id: 'Destinations/databricks/destinations-databricks-index' },
      items: [
        { type: 'doc', id: 'Destinations/databricks/deliveryhub-managed-databricks-setup-guide', label: 'DeliveryHub-managed Databricks setup guide' },
        { type: 'doc', id: 'Destinations/databricks/consuming-a-data-transfer-in-databricks', label: 'Consuming a data transfer in Databricks' },
        { type: 'doc', id: 'Destinations/databricks/consuming-a-data-transfer-in-databricks-open-sharing', label: 'Consuming a data transfer in Databricks (Open Sharing)' },
      ],
    },
    {
      type: 'category',
      label: 'Google BigQuery',
      link: { type: 'doc', id: 'Destinations/Bigquery/destinations-bigquery-index' },
      items: [
        { type: 'doc', id: 'Destinations/Bigquery/deliveryhub-managed-google-bigquery-setup-guide', label: 'DeliveryHub-managed Google BigQuery setup guide' },
        { type: 'doc', id: 'Destinations/Bigquery/consuming-a-data-transfer-in-google-bigquery', label: 'Consuming a data transfer in Google BigQuery' },
      ],
    },
    {
      type: 'category',
      label: 'Snowflake',
      link: { type: 'doc', id: 'Destinations/snowflake/destinations-snowflake-index' },
      items: [
        { type: 'doc', id: 'Destinations/snowflake/deliveryhub-managed-snowflake-setup-guide', label: 'DeliveryHub-managed Snowflake setup guide' },
        { type: 'doc', id: 'Destinations/snowflake/accessing-data-in-snowflake', label: 'Accessing data in Snowflake' },
      ],
    },
  ],
},

    {
      type: 'category',
      label: 'Quickstarts',
      items: [
        'quickstarts/hubhouse-quickstart',
        'quickstarts/transfers-quickstart',
      ],
    },

  ],
};