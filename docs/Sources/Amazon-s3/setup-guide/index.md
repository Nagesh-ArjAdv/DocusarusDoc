---
title: Setup Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Setup Guide

<div className="hero-banner">
  <h2>⚙️ Grant DeliveryHub Access to Your S3 Bucket</h2>
</div>

<Admonition type="info" icon="🔐" title="Configure AWS Permissions">
This guide walks you through granting DeliveryHub access to an Amazon S3 bucket as a data source. Choose the quick setup with CloudFormation or configure permissions manually.
</Admonition>

---

## Prerequisites

Before you begin, ensure you have the following:

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">👤</span>
    <div>
      <strong>AWS Account Access</strong>
      <p>Sufficient permissions to create IAM policies, roles, and manage trust relationships.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🔑</span>
    <div>
      <strong>IAM Admin Rights</strong>
      <p>Ability to navigate AWS IAM console and manage permissions.</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">💾</span>
    <div>
      <strong>S3 Bucket Ready</strong>
      <p>An Amazon S3 bucket that contains the data you want to ingest.</p>
    </div>
  </div>
</div>

---

## Setup Methods

Choose one of the following approaches:

<Tabs>
  <TabItem value="cloudformation" label="🚀 Quick Start (CloudFormation)" default>

### Option 1: Quick Start with AWS CloudFormation Template

**Fastest way to get started** - Deploy pre-configured permissions in minutes.

DeliveryHub provides a ready-to-use CloudFormation template that automatically creates the IAM role and S3 permissions for you.

#### Benefits:
- ⚡ No manual policy writing needed
- ✅ Guaranteed correct configuration
- ⏱️ Takes only 2-3 minutes

#### Path Parameter (Optional):
- **Restrict to specific path**: Provide the path without leading/trailing slashes
  - Example: `data/raw` restricts access to only that folder
- **Full bucket access**: Leave parameter empty

#### To Deploy:
1. Click **Quick create stack** in AWS Console
2. Review the template and parameters
3. Click **Create stack**
4. Wait for completion (1-2 minutes)

  </TabItem>
  
  <TabItem value="manual" label="🔧 Manual Setup">

### Option 2: Manual IAM Configuration

For those who prefer step-by-step control, create permissions manually.

**Steps to follow:**

- Create IAM Role in AWS console
- Add Trust Policy for DeliveryHub
- Attach S3 Permissions with inline policy
- Configure Bucket Access restrictions
- Copy Role ARN for DeliveryHub

**Required Permissions:** s3:ListBucket, s3:GetObject

  </TabItem>
</Tabs>

---

## Next Steps

After completing your setup:

<div className="feature-grid">
  <div className="feature-item">
    <span className="feature-icon">✓</span>
    <div>
      <strong>Verify Configuration</strong>
      <p>Double-check IAM role is properly configured</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🧪</span>
    <div>
      <strong>Test Connection</strong>
      <p>Test S3 access from DeliveryHub</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">📊</span>
    <div>
      <strong>Create Data Source</strong>
      <p>Set up your S3 data source integration</p>
    </div>
  </div>
  <div className="feature-item">
    <span className="feature-icon">🚀</span>
    <div>
      <strong>Start Ingesting</strong>
      <p>Begin your data pipeline with Hubhouse</p>
    </div>
  </div>
</div>

---

## Related Resources

- [Amazon S3 as a Source](/docs/Sources/Amazon-s3) - Overview and features
- [What is a Hubhouse Table](/docs/hubhouse/what-is-a-hubhouse-table) - Learn about Hubhouse Tables
- [Data Products Guide](/docs/hubhouse/what-are-data-products) - Create data products from your tables
