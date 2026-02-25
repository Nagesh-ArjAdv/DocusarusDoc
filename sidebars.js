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
      label: 'Quickstarts',
      items: [
        'quickstarts/hubhouse-quickstart',
        'quickstarts/transfers-quickstart',
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
      label: 'Using DeliveryHub',
      items: [
        'using/deliveryhub-application',
        'using/data-sources',
        'using/environment',
      ],
    },

    'glossary',
    'release-phases',

   {
  type: 'category',
  label: 'Concepts',
  link: {
    type: 'doc',
    id: 'concepts/index',  // The index page
  },
  items: [
    // Don't list 'concepts/index' here - it's already the category link
    // Add other concept pages here if you have them
  ],
},
{
  type: 'category',
  label: 'Sources',
  link: {
    type: 'doc',
    id: 'Sources/index',  // The index page
  },
  items: [
    {
      type: 'category',
      label: 'Amazon S3',
      link: {
        type: 'doc',
        id: 'Sources/Amazon-s3',  // Main overview page
      },
      items: [
        {
          type: 'doc',
          id: 'Sources/Amazon-s3/setup-guide/index',
          label: 'Setup guide',
        },
      ],
    },
    'Sources/Azure-object-storage',
    'Sources/Google-cloud-storage',
    'Sources/Sftp',
    'Sources/Bigquery',
    'Sources/Snowflake',
  ],
},
{
  type: 'category',
  label: 'Destinations',
  link: {
    type: 'doc',
    id: 'Destinations/index',  // The index page
  },
  items: [
    'Destinations/Amazon-s3',
    'Destinations/Azure-blob-storage',
    'Destinations/Google-cloud-storage',
    'Destinations/Sftp',
    'Destinations/Redshift',
    'Destinations/Databricks',
    'Destinations/Bigquery',
    'Destinations/Snowflake',
  ],
},
    
  ],
};
