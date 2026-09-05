---
title: Delete RBAC Group
url: https://platform.claude.com/docs/en/api/admin/rbac_groups/delete
---

## Delete RBAC Group

**delete** `/v1/organizations/rbac_groups/{group_id}`

Delete an RBAC Group. Groups provisioned by an identity provider (source type `"scim"`) cannot be deleted via the API while an organization in the tenant uses SCIM provisioning.

The RBAC Groups API is available to Claude Enterprise organizations only.

### Path Parameters

- `group_id: string`

  ID of the RBAC Group.

### Returns

- `RbacGroupDeleted object { id, type }`

  - `id: string`

    ID of the RBAC Group.

  - `type: "rbac_group_deleted"`

    Deleted object type.

    For RBAC Groups, this is always `"rbac_group_deleted"`.

    - `"rbac_group_deleted"`

### Example

```http
curl https://api.anthropic.com/v1/organizations/rbac_groups/$GROUP_ID \
    -X DELETE \
    -H 'anthropic-version: 2023-06-01' \
    -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN"
```

#### Response

```json
{
  "id": "rbac_group_012rppKaSVsmTo6NqRDXQXNF",
  "type": "rbac_group_deleted"
}
```
