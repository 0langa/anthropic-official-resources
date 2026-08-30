# Shared

## Domain types

### API Error Object

- `APIErrorObject object`

  - `message: string`

    default: Internal server error

  - `type: "api_error"`

    default: api_error

### Authentication Error

- `AuthenticationError object`

  - `message: string`

    default: Authentication error

  - `type: "authentication_error"`

    default: authentication_error

### Billing Error

- `BillingError object`

  - `message: string`

    default: Billing error

  - `type: "billing_error"`

    default: billing_error

### Error Object

- `ErrorObject = InvalidRequestError or AuthenticationError or BillingError or 6 more`

  - `InvalidRequestError object`

    - `message: string`

      default: Invalid request

    - `type: "invalid_request_error"`

      default: invalid_request_error

  - `AuthenticationError object`

    - `message: string`

      default: Authentication error

    - `type: "authentication_error"`

      default: authentication_error

  - `BillingError object`

    - `message: string`

      default: Billing error

    - `type: "billing_error"`

      default: billing_error

  - `PermissionError object`

    - `message: string`

      default: Permission denied

    - `type: "permission_error"`

      default: permission_error

  - `NotFoundError object`

    - `message: string`

      default: Not found

    - `type: "not_found_error"`

      default: not_found_error

  - `RateLimitError object`

    - `message: string`

      default: Rate limited

    - `type: "rate_limit_error"`

      default: rate_limit_error

  - `GatewayTimeoutError object`

    - `message: string`

      default: Request timeout

    - `type: "timeout_error"`

      default: timeout_error

  - `APIErrorObject object`

    - `message: string`

      default: Internal server error

    - `type: "api_error"`

      default: api_error

  - `OverloadedError object`

    - `message: string`

      default: Overloaded

    - `type: "overloaded_error"`

      default: overloaded_error

### Error Response

- `ErrorResponse object`

  - `error: ErrorObject`

    - `InvalidRequestError object`

      - `message: string`

        default: Invalid request

      - `type: "invalid_request_error"`

        default: invalid_request_error

    - `AuthenticationError object`

      - `message: string`

        default: Authentication error

      - `type: "authentication_error"`

        default: authentication_error

    - `BillingError object`

      - `message: string`

        default: Billing error

      - `type: "billing_error"`

        default: billing_error

    - `PermissionError object`

      - `message: string`

        default: Permission denied

      - `type: "permission_error"`

        default: permission_error

    - `NotFoundError object`

      - `message: string`

        default: Not found

      - `type: "not_found_error"`

        default: not_found_error

    - `RateLimitError object`

      - `message: string`

        default: Rate limited

      - `type: "rate_limit_error"`

        default: rate_limit_error

    - `GatewayTimeoutError object`

      - `message: string`

        default: Request timeout

      - `type: "timeout_error"`

        default: timeout_error

    - `APIErrorObject object`

      - `message: string`

        default: Internal server error

      - `type: "api_error"`

        default: api_error

    - `OverloadedError object`

      - `message: string`

        default: Overloaded

      - `type: "overloaded_error"`

        default: overloaded_error

  - `request_id: string or null`

  - `type: "error"`

    default: error

### Error Type

- `ErrorType = "invalid_request_error" or "authentication_error" or "permission_error" or 6 more`

  - `"invalid_request_error"`

  - `"authentication_error"`

  - `"permission_error"`

  - `"not_found_error"`

  - `"rate_limit_error"`

  - `"timeout_error"`

  - `"overloaded_error"`

  - `"api_error"`

  - `"billing_error"`

### Gateway Timeout Error

- `GatewayTimeoutError object`

  - `message: string`

    default: Request timeout

  - `type: "timeout_error"`

    default: timeout_error

### Invalid Request Error

- `InvalidRequestError object`

  - `message: string`

    default: Invalid request

  - `type: "invalid_request_error"`

    default: invalid_request_error

### Not Found Error

- `NotFoundError object`

  - `message: string`

    default: Not found

  - `type: "not_found_error"`

    default: not_found_error

### Overloaded Error

- `OverloadedError object`

  - `message: string`

    default: Overloaded

  - `type: "overloaded_error"`

    default: overloaded_error

### Permission Error

- `PermissionError object`

  - `message: string`

    default: Permission denied

  - `type: "permission_error"`

    default: permission_error

### Rate Limit Error

- `RateLimitError object`

  - `message: string`

    default: Rate limited

  - `type: "rate_limit_error"`

    default: rate_limit_error

### API Key

- `APIKey object`

  - `id: string`

    ID of the API key.

  - `created_at: string`

    RFC 3339 datetime string indicating when the API Key was created.

    format: date-time

  - `created_by: object or null`

    The ID and type of the actor that created the API key, or `null` when the
    creator is not recorded (legacy, workload-identity-federated, or
    system-created keys).

    - `id: string`

      ID of the actor that created the object.

    - `type: "service_account" or "user"`

      Type of the actor that created the object.

      - `"service_account"`

      - `"user"`

  - `expires_at: string or null`

    RFC 3339 datetime string indicating when the API Key expires, or `null` if it never expires.

    format: date-time

  - `name: string`

    Name of the API key.

  - `partial_key_hint: string or null`

    Partially redacted hint for the API key.

  - `principal: object or object or null`

    The principal the API key acts as (a User or a Service Account), or `null` if the API key is not bound to a principal.

    - `UserActor object`

      - `type: "user_actor"`

        Principal type. Always `"user_actor"` for a User.

        default: user_actor

      - `user_id: string`

        ID of the User the API key acts as.

    - `ServiceAccountActor object`

      - `service_account_id: string`

        ID of the Service Account the API key acts as.

      - `type: "service_account_actor"`

        Principal type. Always `"service_account_actor"` for a Service Account.

        default: service_account_actor

  - `scope: object or object`

    Where the API key belongs: its Workspace (`{"type": "workspace", "workspace_id": "wrkspc_..."}`, with the Workspace's real ID even when it is the organization's default Workspace), or the organization (`{"type": "organization"}`) for a principal-bound API key that has no Workspace.

    - `Organization object`

      - `type: "organization"`

        Scope type. Always `"organization"`: the API key has no Workspace. Only a principal-bound API key can have this scope.

        default: organization

    - `Workspace object`

      - `type: "workspace"`

        Scope type. Always `"workspace"`: the API key belongs to one Workspace.

        default: workspace

      - `workspace_id: string`

        ID of the Workspace the API key belongs to. Unlike the deprecated top-level `workspace_id`, this is the Workspace's real ID even for the organization's default Workspace.

  - `status: "active" or "archived" or "expired" or "inactive"`

    Status of the API key.

    - `"active"`

    - `"archived"`

    - `"expired"`

    - `"inactive"`

  - `type: "api_key"`

    Object type.

    For API Keys, this is always `"api_key"`.

    default: api_key

  - `workspace_id: string or null`

    **Deprecated**: Use `scope` instead. `workspace_id` is `null` both for an API key in the default Workspace and for a principal-bound API key that has no Workspace.

    Deprecated: use `scope` instead. ID of the Workspace associated with the API key, or `null` if the API key belongs to the default Workspace. Also `null` for a principal-bound API key that has no Workspace; `scope` tells the two apart.

### Workspace

- `Workspace object`

  - `id: string`

    ID of the Workspace.

  - `archived_at: string or null`

    RFC 3339 datetime string indicating when the Workspace was archived, or `null` if the Workspace is not archived.

    format: date-time

  - `compartment_id: string`

    Identifier for this Workspace's encryption compartment. When you configure a
    customer-managed encryption key (CMEK) on AWS, reference this value in your
    KMS key-policy condition so the key is scoped to this compartment. On GCP and
    Azure, Anthropic enforces the compartment binding automatically; you do not
    need to reference this value in your key configuration. See the CMEK integration guide for the
    required key configuration, including the value used during key validation.

  - `created_at: string`

    RFC 3339 datetime string indicating when the Workspace was created.

    format: date-time

  - `data_residency: object`

    Data residency configuration.

    - `allowed_inference_geos: array of string or "unrestricted"`

      Permitted inference geo values. 'unrestricted' means all geos are allowed.

      - `array of string`

      - `"unrestricted"`

    - `default_inference_geo: string`

      Default inference geo applied when requests omit the parameter.

    - `workspace_geo: string`

      Geographic region for workspace data storage. Immutable after creation.

  - `display_color: string`

    Hex color code representing the Workspace in the Anthropic Console.

  - `external_key_id: string or null`

    ID of the customer-managed encryption key (CMEK) configuration to use for this
    Workspace. Setting this field requires CMEK to be enabled for your
    organization. When set, data stored for this Workspace is encrypted with the
    referenced key. Create key configurations with the External Keys API. This
    field is write-once: once a key is attached to a Workspace it cannot be
    detached or replaced. To rotate key material, rotate the underlying key on
    your cloud KMS; the `external_key_id` stays the same.

  - `name: string`

    Name of the Workspace.

  - `tags: map[string]`

    User-defined tags as string key-value pairs. Keys may not begin with `anthropic`.

  - `type: "workspace"`

    Object type.

    For Workspaces, this is always `"workspace"`.

    default: workspace
