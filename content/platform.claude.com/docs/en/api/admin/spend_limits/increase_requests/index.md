---
title: Increase Requests
url: https://platform.claude.com/docs/en/api/admin/spend_limits/increase_requests
---

# Increase Requests

## List Spend Limit Increase Requests

**get** `/v1/organizations/spend_limit_increase_requests`

List spend limit increase requests, most recent first.

Pending requests include a live `spend_summary` for the requester.
Requests whose requester is no longer a member are excluded.

### Query Parameters

- `actor_ids: optional array of string`

  Filter by requester, as `user_...` tagged IDs.

- `limit: optional number`

- `page: optional string`

  Opaque cursor from a previous response's `next_page`.

- `status: optional array of "approved" or "denied" or "pending"`

  Filter by status. Omit to return all.

  - `"approved"`

  - `"denied"`

  - `"pending"`

### Returns

- `data: array of SpendLimitIncreaseRequest`

  - `id: string`

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `created_at: string`

  - `period: "daily" or "monthly" or "weekly"`

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `resolved_at: string or null`

  - `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `UserActor object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

      A scoped Admin API key acting on behalf of the organization.

      - `scoped_api_key_id: string`

      - `type: "scoped_api_key_actor"`

        - `"scoped_api_key_actor"`

  - `spend_summary: SpendSummary or null`

    Per-member effective-limit report row (`GET /spend_limits/effective`).

    - `actor: object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `amount: string or null`

      Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

    - `period: "daily" or "monthly" or "weekly"`

      Period this row's effective limit and spend are reported for.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `period_to_date_spend: string`

      The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

    - `scope: object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      Scope selecting a single member of the organization.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `spend_limit_id: string`

  - `status: "approved" or "denied" or "pending"`

    - `"approved"`

    - `"denied"`

    - `"pending"`

  - `type: "spend_limit_increase_request"`

    - `"spend_limit_increase_request"`

- `next_page: string or null`

### Example

```http
curl https://api.anthropic.com/v1/organizations/spend_limit_increase_requests \
    -H 'anthropic-version: 2023-06-01' \
    -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN"
```

#### Response

```json
{
  "data": [
    {
      "id": "id",
      "actor": {
        "deleted": true,
        "email_address": "email_address",
        "name": "name",
        "type": "user_actor",
        "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
      },
      "created_at": "2019-12-27T18:11:19.117Z",
      "period": "monthly",
      "resolved_at": "2019-12-27T18:11:19.117Z",
      "resolved_by": {
        "deleted": true,
        "email_address": "email_address",
        "name": "name",
        "type": "user_actor",
        "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
      },
      "spend_summary": {
        "actor": {
          "deleted": true,
          "email_address": "email_address",
          "name": "name",
          "type": "user_actor",
          "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
        },
        "amount": "50000",
        "currency": "USD",
        "period": "monthly",
        "period_to_date_spend": "12050.5",
        "scope": {
          "type": "user",
          "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
        },
        "source": {
          "type": "user",
          "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
        },
        "spend_limit_id": "spend_limit_id"
      },
      "status": "approved",
      "type": "spend_limit_increase_request"
    }
  ],
  "next_page": "next_page"
}
```

## Get Spend Limit Increase Request

**get** `/v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}`

Retrieve a spend limit increase request.

While `pending`, the response includes a live `spend_summary` for the
requester at the request's period.

### Path Parameters

- `spend_limit_increase_request_id: string`

  ID of the spend limit increase request.

### Returns

- `SpendLimitIncreaseRequest object { id, actor, created_at, 6 more }`

  - `id: string`

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `created_at: string`

  - `period: "daily" or "monthly" or "weekly"`

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `resolved_at: string or null`

  - `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `UserActor object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

      A scoped Admin API key acting on behalf of the organization.

      - `scoped_api_key_id: string`

      - `type: "scoped_api_key_actor"`

        - `"scoped_api_key_actor"`

  - `spend_summary: SpendSummary or null`

    Per-member effective-limit report row (`GET /spend_limits/effective`).

    - `actor: object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `amount: string or null`

      Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

    - `period: "daily" or "monthly" or "weekly"`

      Period this row's effective limit and spend are reported for.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `period_to_date_spend: string`

      The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

    - `scope: object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      Scope selecting a single member of the organization.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `spend_limit_id: string`

  - `status: "approved" or "denied" or "pending"`

    - `"approved"`

    - `"denied"`

    - `"pending"`

  - `type: "spend_limit_increase_request"`

    - `"spend_limit_increase_request"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/spend_limit_increase_requests/$SPEND_LIMIT_INCREASE_REQUEST_ID \
    -H 'anthropic-version: 2023-06-01' \
    -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN"
```

#### Response

```json
{
  "id": "id",
  "actor": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "created_at": "2019-12-27T18:11:19.117Z",
  "period": "monthly",
  "resolved_at": "2019-12-27T18:11:19.117Z",
  "resolved_by": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "spend_summary": {
    "actor": {
      "deleted": true,
      "email_address": "email_address",
      "name": "name",
      "type": "user_actor",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "amount": "50000",
    "currency": "USD",
    "period": "monthly",
    "period_to_date_spend": "12050.5",
    "scope": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "source": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "spend_limit_id": "spend_limit_id"
  },
  "status": "approved",
  "type": "spend_limit_increase_request"
}
```

## Approve Spend Limit Increase Request

**post** `/v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/approve`

Approve a pending spend limit increase request.

Writes a per-user spend limit at `amount` for the requester and
transitions the request to `approved`. `period` defaults to the period
the member was blocked on. Anthropic emails the requester unless
`suppress_notification` is set.

### Path Parameters

- `spend_limit_increase_request_id: string`

  ID of the spend limit increase request.

### Body Parameters

- `amount: string`

  New per-user spend limit as a non-negative integer decimal string (minor units).

- `period: optional "daily" or "monthly" or "weekly" or null`

  - `"daily"`

  - `"monthly"`

  - `"weekly"`

- `suppress_notification: optional boolean`

### Returns

- `id: string`

- `actor: object { deleted, email_address, name, 2 more }`

  A user within the organization. `name` and `email_address` are
  null when the underlying account is unavailable or has been deleted;
  `deleted` is true only for deleted accounts.

  - `deleted: boolean`

    True only when the underlying account has been deleted.

  - `email_address: string or null`

    The user's email address. Null when the account is unavailable or has been deleted.

  - `name: string or null`

    The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

  - `type: "user_actor"`

    Actor type. Always `user_actor`.

    - `"user_actor"`

  - `user_id: string`

    Tagged ID of the user.

- `created_at: string`

- `period: "daily" or "monthly" or "weekly"`

  - `"daily"`

  - `"monthly"`

  - `"weekly"`

- `resolved_at: string or null`

- `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

  A user within the organization. `name` and `email_address` are
  null when the underlying account is unavailable or has been deleted;
  `deleted` is true only for deleted accounts.

  - `UserActor object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

    A scoped Admin API key acting on behalf of the organization.

    - `scoped_api_key_id: string`

    - `type: "scoped_api_key_actor"`

      - `"scoped_api_key_actor"`

- `spend_limit: SpendLimit`

  A configured spend limit: a cap on metered spend for one scope and period.

  - `id: string`

    Unique tagged ID of the spend limit (`spl_...`).

  - `amount: string or null`

    Limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD): "50000" is $500.00. `null` means no numeric cap is configured at this scope — see the effective report for whether a limit applies.

  - `created_at: string`

    RFC 3339 datetime at which the spend limit was created.

  - `currency: string`

    ISO 4217 code of the organization's billing currency; the unit for `amount`.

  - `period: "daily" or "monthly" or "weekly"`

    Length of the window the limit resets over. `amount` caps spend within each period.

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `scope: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

    What the limit applies to. A tagged union on `type`; each variant carries the identifier for its scope.

    - `User object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `SeatTier object { seat_tier, type }`

      - `seat_tier: string`

      - `type: "seat_tier"`

        - `"seat_tier"`

    - `RbacGroup object { rbac_group_id, type }`

      - `rbac_group_id: string`

      - `type: "rbac_group"`

        - `"rbac_group"`

    - `OrganizationService object { service, type }`

      - `service: string`

      - `type: "organization_service"`

        - `"organization_service"`

    - `Organization object { type }`

      - `type: "organization"`

        - `"organization"`

  - `type: "spend_limit"`

    Object type. Always `spend_limit`.

    - `"spend_limit"`

  - `updated_at: string`

    RFC 3339 datetime at which the spend limit was last modified.

- `spend_summary: SpendSummary or null`

  Per-member effective-limit report row (`GET /spend_limits/effective`).

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `amount: string or null`

    Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

  - `currency: string`

    ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

  - `period: "daily" or "monthly" or "weekly"`

    Period this row's effective limit and spend are reported for.

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `period_to_date_spend: string`

    The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

  - `scope: object { type, user_id }`

    Scope selecting a single member of the organization.

    - `type: "user"`

      Scope type. Always `user` for this scope.

      - `"user"`

    - `user_id: string`

      Tagged ID of the member the spend limit applies to.

  - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

    Scope selecting a single member of the organization.

    - `User object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `SeatTier object { seat_tier, type }`

      - `seat_tier: string`

      - `type: "seat_tier"`

        - `"seat_tier"`

    - `RbacGroup object { rbac_group_id, type }`

      - `rbac_group_id: string`

      - `type: "rbac_group"`

        - `"rbac_group"`

    - `OrganizationService object { service, type }`

      - `service: string`

      - `type: "organization_service"`

        - `"organization_service"`

    - `Organization object { type }`

      - `type: "organization"`

        - `"organization"`

  - `spend_limit_id: string`

- `status: "approved" or "denied" or "pending"`

  - `"approved"`

  - `"denied"`

  - `"pending"`

- `type: "spend_limit_increase_request"`

  - `"spend_limit_increase_request"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/spend_limit_increase_requests/$SPEND_LIMIT_INCREASE_REQUEST_ID/approve \
    -H 'Content-Type: application/json' \
    -H 'anthropic-version: 2023-06-01' \
    -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN" \
    -d '{
          "amount": "50000",
          "period": "monthly"
        }'
```

#### Response

```json
{
  "id": "id",
  "actor": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "created_at": "2019-12-27T18:11:19.117Z",
  "period": "monthly",
  "resolved_at": "2019-12-27T18:11:19.117Z",
  "resolved_by": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "spend_limit": {
    "id": "id",
    "amount": "50000",
    "created_at": "2019-12-27T18:11:19.117Z",
    "currency": "USD",
    "period": "monthly",
    "scope": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "type": "spend_limit",
    "updated_at": "2019-12-27T18:11:19.117Z"
  },
  "spend_summary": {
    "actor": {
      "deleted": true,
      "email_address": "email_address",
      "name": "name",
      "type": "user_actor",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "amount": "50000",
    "currency": "USD",
    "period": "monthly",
    "period_to_date_spend": "12050.5",
    "scope": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "source": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "spend_limit_id": "spend_limit_id"
  },
  "status": "approved",
  "type": "spend_limit_increase_request"
}
```

## Deny Spend Limit Increase Request

**post** `/v1/organizations/spend_limit_increase_requests/{spend_limit_increase_request_id}/deny`

Deny a pending spend limit increase request.

Idempotent on `denied`; denying an already-`approved` request returns
400. Anthropic emails the requester unless `suppress_notification` is set.

### Path Parameters

- `spend_limit_increase_request_id: string`

  ID of the spend limit increase request.

### Body Parameters

- `suppress_notification: optional boolean`

### Returns

- `SpendLimitIncreaseRequest object { id, actor, created_at, 6 more }`

  - `id: string`

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `created_at: string`

  - `period: "daily" or "monthly" or "weekly"`

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `resolved_at: string or null`

  - `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `UserActor object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

      A scoped Admin API key acting on behalf of the organization.

      - `scoped_api_key_id: string`

      - `type: "scoped_api_key_actor"`

        - `"scoped_api_key_actor"`

  - `spend_summary: SpendSummary or null`

    Per-member effective-limit report row (`GET /spend_limits/effective`).

    - `actor: object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `amount: string or null`

      Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

    - `period: "daily" or "monthly" or "weekly"`

      Period this row's effective limit and spend are reported for.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `period_to_date_spend: string`

      The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

    - `scope: object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      Scope selecting a single member of the organization.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `spend_limit_id: string`

  - `status: "approved" or "denied" or "pending"`

    - `"approved"`

    - `"denied"`

    - `"pending"`

  - `type: "spend_limit_increase_request"`

    - `"spend_limit_increase_request"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/spend_limit_increase_requests/$SPEND_LIMIT_INCREASE_REQUEST_ID/deny \
    -H 'Content-Type: application/json' \
    -H 'anthropic-version: 2023-06-01' \
    -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN" \
    -d '{}'
```

#### Response

```json
{
  "id": "id",
  "actor": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "created_at": "2019-12-27T18:11:19.117Z",
  "period": "monthly",
  "resolved_at": "2019-12-27T18:11:19.117Z",
  "resolved_by": {
    "deleted": true,
    "email_address": "email_address",
    "name": "name",
    "type": "user_actor",
    "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
  },
  "spend_summary": {
    "actor": {
      "deleted": true,
      "email_address": "email_address",
      "name": "name",
      "type": "user_actor",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "amount": "50000",
    "currency": "USD",
    "period": "monthly",
    "period_to_date_spend": "12050.5",
    "scope": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "source": {
      "type": "user",
      "user_id": "user_01WCz1FkmYMm4gnmykNKUu3Q"
    },
    "spend_limit_id": "spend_limit_id"
  },
  "status": "approved",
  "type": "spend_limit_increase_request"
}
```

## Domain Types

### Spend Limit Increase Request

- `SpendLimitIncreaseRequest object { id, actor, created_at, 6 more }`

  - `id: string`

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `created_at: string`

  - `period: "daily" or "monthly" or "weekly"`

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `resolved_at: string or null`

  - `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `UserActor object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

      A scoped Admin API key acting on behalf of the organization.

      - `scoped_api_key_id: string`

      - `type: "scoped_api_key_actor"`

        - `"scoped_api_key_actor"`

  - `spend_summary: SpendSummary or null`

    Per-member effective-limit report row (`GET /spend_limits/effective`).

    - `actor: object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `amount: string or null`

      Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

    - `period: "daily" or "monthly" or "weekly"`

      Period this row's effective limit and spend are reported for.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `period_to_date_spend: string`

      The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

    - `scope: object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      Scope selecting a single member of the organization.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `spend_limit_id: string`

  - `status: "approved" or "denied" or "pending"`

    - `"approved"`

    - `"denied"`

    - `"pending"`

  - `type: "spend_limit_increase_request"`

    - `"spend_limit_increase_request"`

### Increase Request Approve Response

- `IncreaseRequestApproveResponse object { id, actor, created_at, 7 more }`

  - `id: string`

  - `actor: object { deleted, email_address, name, 2 more }`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `deleted: boolean`

      True only when the underlying account has been deleted.

    - `email_address: string or null`

      The user's email address. Null when the account is unavailable or has been deleted.

    - `name: string or null`

      The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

    - `type: "user_actor"`

      Actor type. Always `user_actor`.

      - `"user_actor"`

    - `user_id: string`

      Tagged ID of the user.

  - `created_at: string`

  - `period: "daily" or "monthly" or "weekly"`

    - `"daily"`

    - `"monthly"`

    - `"weekly"`

  - `resolved_at: string or null`

  - `resolved_by: object { deleted, email_address, name, 2 more }  or object { scoped_api_key_id, type }  or null`

    A user within the organization. `name` and `email_address` are
    null when the underlying account is unavailable or has been deleted;
    `deleted` is true only for deleted accounts.

    - `UserActor object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `ScopedAPIKeyActor object { scoped_api_key_id, type }`

      A scoped Admin API key acting on behalf of the organization.

      - `scoped_api_key_id: string`

      - `type: "scoped_api_key_actor"`

        - `"scoped_api_key_actor"`

  - `spend_limit: SpendLimit`

    A configured spend limit: a cap on metered spend for one scope and period.

    - `id: string`

      Unique tagged ID of the spend limit (`spl_...`).

    - `amount: string or null`

      Limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD): "50000" is $500.00. `null` means no numeric cap is configured at this scope — see the effective report for whether a limit applies.

    - `created_at: string`

      RFC 3339 datetime at which the spend limit was created.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount`.

    - `period: "daily" or "monthly" or "weekly"`

      Length of the window the limit resets over. `amount` caps spend within each period.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `scope: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      What the limit applies to. A tagged union on `type`; each variant carries the identifier for its scope.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `type: "spend_limit"`

      Object type. Always `spend_limit`.

      - `"spend_limit"`

    - `updated_at: string`

      RFC 3339 datetime at which the spend limit was last modified.

  - `spend_summary: SpendSummary or null`

    Per-member effective-limit report row (`GET /spend_limits/effective`).

    - `actor: object { deleted, email_address, name, 2 more }`

      A user within the organization. `name` and `email_address` are
      null when the underlying account is unavailable or has been deleted;
      `deleted` is true only for deleted accounts.

      - `deleted: boolean`

        True only when the underlying account has been deleted.

      - `email_address: string or null`

        The user's email address. Null when the account is unavailable or has been deleted.

      - `name: string or null`

        The user's current display name. Null when the account is unavailable, has been deleted, or has no name set.

      - `type: "user_actor"`

        Actor type. Always `user_actor`.

        - `"user_actor"`

      - `user_id: string`

        Tagged ID of the user.

    - `amount: string or null`

      Effective limit amount as a non-negative integer decimal string in the minor unit of `currency` (cents for USD). `null` means no limit applies for this row's `period` — each period resolves independently, so another period may still cap this member.

    - `currency: string`

      ISO 4217 code of the organization's billing currency; the unit for `amount` and `period_to_date_spend`.

    - `period: "daily" or "monthly" or "weekly"`

      Period this row's effective limit and spend are reported for.

      - `"daily"`

      - `"monthly"`

      - `"weekly"`

    - `period_to_date_spend: string`

      The member's spend so far in the current period, as a non-negative decimal string in the minor unit of `currency` (cents for USD). May carry fractional minor units up to three decimal places (e.g. `"12050.5"`) — metered usage is not rounded to whole cents. Reads as `"0"` when the spend reading is temporarily unavailable.

    - `scope: object { type, user_id }`

      Scope selecting a single member of the organization.

      - `type: "user"`

        Scope type. Always `user` for this scope.

        - `"user"`

      - `user_id: string`

        Tagged ID of the member the spend limit applies to.

    - `source: object { type, user_id }  or object { seat_tier, type }  or object { rbac_group_id, type }  or 2 more`

      Scope selecting a single member of the organization.

      - `User object { type, user_id }`

        Scope selecting a single member of the organization.

        - `type: "user"`

          Scope type. Always `user` for this scope.

          - `"user"`

        - `user_id: string`

          Tagged ID of the member the spend limit applies to.

      - `SeatTier object { seat_tier, type }`

        - `seat_tier: string`

        - `type: "seat_tier"`

          - `"seat_tier"`

      - `RbacGroup object { rbac_group_id, type }`

        - `rbac_group_id: string`

        - `type: "rbac_group"`

          - `"rbac_group"`

      - `OrganizationService object { service, type }`

        - `service: string`

        - `type: "organization_service"`

          - `"organization_service"`

      - `Organization object { type }`

        - `type: "organization"`

          - `"organization"`

    - `spend_limit_id: string`

  - `status: "approved" or "denied" or "pending"`

    - `"approved"`

    - `"denied"`

    - `"pending"`

  - `type: "spend_limit_increase_request"`

    - `"spend_limit_increase_request"`
