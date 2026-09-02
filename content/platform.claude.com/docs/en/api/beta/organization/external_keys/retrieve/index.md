---
title: Get External Key
url: https://platform.claude.com/docs/en/api/beta/organization/external_keys/retrieve
---

## Get External Key

**get** `/v1/organizations/external_keys/{external_key_id}`

Retrieve a single external key config in the caller's organization by ID.

### Path Parameters

- `external_key_id: string`

  ID of the External Key.

### Returns

- `BetaExternalKey object { id, attachment, created_at, 5 more }`

  CMEK external key config belonging to the caller's organization.

  Configs are organization-scoped. Workspaces attach to a config; once any
  workspace references it, the provider fields become effectively immutable
  (existing encrypted data needs the config for decrypt).

  - `id: string`

    Identifier of the external key config. A tagged ID prefixed `ekey_`, or — for organizations on the Claude Platform on AWS — the AWS KMS key ARN.

  - `attachment: BetaExternalKeyAttachedAttachment or BetaExternalKeyUnattachedAttachment`

    Whether any workspace uses this config to encrypt its data — counting live and archived workspaces (an archived workspace's data remains encrypted under the config), excluding deleted ones. Only an attached config is used by the encryption path; an `unattached` config is inert and can be deleted.

    - `BetaExternalKeyAttachedAttachment object { type }`

      - `type: "attached"`

        - `"attached"`

    - `BetaExternalKeyUnattachedAttachment object { type }`

      - `type: "unattached"`

        - `"unattached"`

  - `created_at: string`

  - `display_name: string or null`

    Human-friendly display name. Null if none was set.

  - `geo: string`

    Data residency geo. Selects which regional validator handles this key's encrypt/decrypt roundtrips.

  - `provider_config: BetaAWSExternalKeyConfig or BetaGCPExternalKeyConfig or BetaAzureExternalKeyConfig`

    KMS provider identity and auth coordinates.

    - `BetaAWSExternalKeyConfig object { kms_arn, type, region, role_arn }`

      - `kms_arn: string`

        Full ARN of the AWS KMS key. On Claude Platform on AWS the key must be a single-Region key in your organization's own AWS account; cross-account keys, multi-Region keys, and alias ARNs are rejected.

      - `type: "aws"`

        - `"aws"`

      - `region: optional string or null`

        AWS region. Derived from `kms_arn` if omitted.

      - `role_arn: optional string or null`

        IAM role ARN. Deprecated — Anthropic reaches the KMS key through its own intermediate role (or, on Claude Platform on AWS, with credentials AWS issues for the Workspace); this field is ignored.

    - `BetaGCPExternalKeyConfig object { key_name, type }`

      - `key_name: string`

        Full resource name of the Cloud KMS key.

      - `type: "gcp"`

        - `"gcp"`

    - `BetaAzureExternalKeyConfig object { key_name, tenant_id, type, 2 more }`

      - `key_name: string`

        Name of the key within the vault.

      - `tenant_id: string`

        Azure AD tenant ID.

      - `type: "azure"`

        - `"azure"`

      - `vault_uri: string`

        Key Vault data-plane URI — `https://{vault-name}.vault.azure.net` or `https://{hsm-name}.managedhsm.azure.net`.

      - `client_id: optional string or null`

        Azure AD application (client) ID. Omit to use Anthropic's multitenant app. Provide only if using a single-tenant app registration in the customer's directory.

  - `type: "external_key"`

    - `"external_key"`

  - `updated_at: string`

### Example

```http
curl https://api.anthropic.com/v1/organizations/external_keys/$EXTERNAL_KEY_ID \
    -H 'anthropic-version: 2023-06-01' \
    -H "X-Api-Key: $ANTHROPIC_API_KEY"
```

#### Response

```json
{
  "id": "ekey_01SDCCSbTxrXDpWc1phhtcfK",
  "attachment": {
    "type": "attached"
  },
  "created_at": "2024-10-30T23:58:27.427722Z",
  "display_name": "prod-us-key",
  "geo": "us",
  "provider_config": {
    "kms_arn": "arn:aws:kms:us-east-1:111122223333:key/abcd1234-5678-90ab-cdef-000011112222",
    "type": "aws",
    "region": "us-east-1",
    "role_arn": "arn:aws:iam::111122223333:role/anthropic-cmek"
  },
  "type": "external_key",
  "updated_at": "2024-10-30T23:58:27.427722Z"
}
```
