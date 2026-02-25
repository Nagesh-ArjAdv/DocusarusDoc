---
title: BigQuery Setup Guide
---

# Setup Guide

Grant DeliveryHub access to your BigQuery datasets in 3 steps.

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 1: Start Setup in DeliveryHub</span>

1. Log into DeliveryHub and go to **Data sources** → **Add Source**
2. Select **Google BigQuery** and your region
3. Click **Continue**
4. **Copy the DeliveryHub Service Account email** (you'll need this in Step 2)

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 2: Grant BigQuery Permissions in GCP</span>

1. Open Google Cloud Console and log in as a **Project Editor**
2. Go to **BigQuery** and find the dataset(s) you want to connect
3. For each dataset:
   - Click the **three-dot menu** → **Share**
   - Click **Add Principal**
   - Paste the **DeliveryHub Service Account** email
   - Assign the **BigQuery Data Viewer** role
   - Click **Save**

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Step 3: Complete Setup in DeliveryHub</span>

1. Return to the DeliveryHub source setup page
2. Enter your **BigQuery Project ID** (from GCP console)
3. Enter your **SQL query** to define which data to extract
4. Click **Test Connection** to verify access
5. Click **Save**

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Example Query</span>

```sql
SELECT 
  user_id,
  event_name,
  event_timestamp,
  properties
FROM `project.dataset.events`
WHERE event_timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
```

---

## <span style={{color: 'var(--ifm-color-primary)'}}>Troubleshooting</span>

**"Permission denied" error**
- Verify the service account has BigQuery Data Viewer role on the dataset
- Check that you used the correct service account email

**"Dataset not found"**
- Confirm the project ID matches your BigQuery project
- Ensure the dataset exists in that project

---

[BigQuery Overview](/docs/Sources/Bigquery) • [Hubhouse Tables](/docs/hubhouse/what-is-a-hubhouse-table)
