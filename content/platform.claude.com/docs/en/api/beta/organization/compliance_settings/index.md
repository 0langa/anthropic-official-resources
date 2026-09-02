---
title: Compliance Settings
url: https://platform.claude.com/docs/en/api/beta/organization/compliance_settings
---

# Compliance Settings

## Get Compliance Settings

**get** `/v1/organizations/compliance_settings`

Retrieve your organization's Compliance Settings.

Compliance Settings is a singleton resource: there is exactly one per
organization, addressed without an identifier. The `state` field reflects
whether the Compliance API is enabled. An organization with a parent
organization reads the state inherited from the parent's configuration.

### Returns

- `BetaComplianceSettings object { state, type }`

  - `state: BetaComplianceSettingsStateEnabled or BetaComplianceSettingsStateDisabled`

    Whether the Compliance API is enabled for this organization.

    - `BetaComplianceSettingsStateEnabled object { type }`

      - `type: "enabled"`

        - `"enabled"`

    - `BetaComplianceSettingsStateDisabled object { type }`

      - `type: "disabled"`

        - `"disabled"`

  - `type: "compliance_settings"`

    - `"compliance_settings"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/compliance_settings \
    -H 'anthropic-version: 2023-06-01' \
    -H "X-Api-Key: $ANTHROPIC_API_KEY"
```

#### Response

```json
{
  "state": {
    "type": "enabled"
  },
  "type": "compliance_settings"
}
```

## Update Compliance Settings

**post** `/v1/organizations/compliance_settings`

Update your organization's Compliance Settings.

Setting `state` to `enabled` turns on the Compliance API and begins
capturing organization activity events. Setting it to `disabled` turns
both off. `state` reflects whether the Compliance API is enabled.

A request that sets `state` to its current value succeeds and leaves the
resource unchanged. A `disabled` request stays in effect until a later
`enabled` request or the organization's next provisioning action that
enables Access Transparency: enabling Access Transparency also enables
the Compliance API, which serves its activity events, so such
provisioning (including re-runs) re-enables the Compliance API even
after a `disabled` request. Automated provisioning never disables
compliance settings.

### Body Parameters

- `state: BetaComplianceSettingsStateEnabledParam or BetaComplianceSettingsStateDisabledParam`

  Desired state. Accepts the string shorthand "enabled" or "disabled" in place of the object form; the response always returns the canonical object form.

  - `BetaComplianceSettingsStateEnabledParam object { type }`

    - `type: "enabled"`

      - `"enabled"`

  - `BetaComplianceSettingsStateDisabledParam object { type }`

    - `type: "disabled"`

      - `"disabled"`

### Returns

- `BetaComplianceSettings object { state, type }`

  - `state: BetaComplianceSettingsStateEnabled or BetaComplianceSettingsStateDisabled`

    Whether the Compliance API is enabled for this organization.

    - `BetaComplianceSettingsStateEnabled object { type }`

      - `type: "enabled"`

        - `"enabled"`

    - `BetaComplianceSettingsStateDisabled object { type }`

      - `type: "disabled"`

        - `"disabled"`

  - `type: "compliance_settings"`

    - `"compliance_settings"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/compliance_settings \
    -H 'Content-Type: application/json' \
    -H 'anthropic-version: 2023-06-01' \
    -H "X-Api-Key: $ANTHROPIC_API_KEY" \
    -d '{
          "state": {
            "type": "enabled"
          }
        }'
```

#### Response

```json
{
  "state": {
    "type": "enabled"
  },
  "type": "compliance_settings"
}
```

## Domain Types

### Beta Compliance Settings

- `BetaComplianceSettings object { state, type }`

  - `state: BetaComplianceSettingsStateEnabled or BetaComplianceSettingsStateDisabled`

    Whether the Compliance API is enabled for this organization.

    - `BetaComplianceSettingsStateEnabled object { type }`

      - `type: "enabled"`

        - `"enabled"`

    - `BetaComplianceSettingsStateDisabled object { type }`

      - `type: "disabled"`

        - `"disabled"`

  - `type: "compliance_settings"`

    - `"compliance_settings"`

### Beta Compliance Settings State Disabled

- `BetaComplianceSettingsStateDisabled object { type }`

  - `type: "disabled"`

    - `"disabled"`

### Beta Compliance Settings State Disabled Param

- `BetaComplianceSettingsStateDisabledParam object { type }`

  - `type: "disabled"`

    - `"disabled"`

### Beta Compliance Settings State Enabled

- `BetaComplianceSettingsStateEnabled object { type }`

  - `type: "enabled"`

    - `"enabled"`

### Beta Compliance Settings State Enabled Param

- `BetaComplianceSettingsStateEnabledParam object { type }`

  - `type: "enabled"`

    - `"enabled"`
