---
id: what-is-a-hubhouse-table
title: What is a Hubhouse Table?
---

# What is a [Hubhouse Table](#)?
A Hubhouse Table is DeliveryHub's managed, analytic-ready replica of your source data. Think of it as a golden copy—we keep it up to date, store it in our infrastructure, and make it available for you to filter, transform, and share without touching your source again.

![hubhose table](\img\hubhousetable.png)

---
## [Why](#) Hubhouse Tables exist
Moving data directly from source to destination works fine—but every transfer means 
reconnecting, re-extracting, and re-processing from scratch. That can:

* Increase egress costs

* Slow down delivery times

* Limit the ability to reuse or repurpose data

A Hubhouse Table solves this by creating a single, central copy in Deliveryhub. From there, you can distribute it to any number of destinations via [Data Products](#) without 
re-pulling from the source each time.

---
## [How](#how-deliveryhub-works) DeliveryHub Works
DeliveryHub transforms your source data into targeted, filtered datasets for different destinations—without moving or copying your original data.

The Flow:

1️⃣ Source: Sales Prospects Upload Table
Your complete, raw dataset stored in DeliveryHub's Hubhouse.

2️⃣ Filter & Transform
Create smart views using DeliveryHub's filtering engine:

"Free Customers Table (US)" - Filter by customer tier and region
"Customers from Year 2025" - Filter by date range

3️⃣ Deliver to Multiple Destinations
Share these filtered views to:

🔵 AWS/Cloud Storage (top left)

🔴 Redis/Cache Layer (top right)

🧩 Databricks/Analytics (bottom left)

❄️ Snowflake/Data Warehouse (bottom right)