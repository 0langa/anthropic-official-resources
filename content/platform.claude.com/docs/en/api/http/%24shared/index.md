---
title: Shared
url: https://platform.claude.com/docs/en/api/http/$shared
---

# Shared

## Domain types

### API Error Object

- `APIErrorObject object`

  - `type: "api_error"`

    default: api_error

  - `message: string`

    default: Internal server error

### Authentication Error

- `AuthenticationError object`

  - `type: "authentication_error"`

    default: authentication_error

  - `message: string`

    default: Authentication error

### Billing Error

- `BillingError object`

  - `type: "billing_error"`

    default: billing_error

  - `message: string`

    default: Billing error

### Error Object

- `ErrorObject = InvalidRequestError or AuthenticationError or BillingError or 6 more`

  - `InvalidRequestError object`

    - `type: "invalid_request_error"`

      default: invalid_request_error

    - `message: string`

      default: Invalid request

  - `AuthenticationError object`

    - `type: "authentication_error"`

      default: authentication_error

    - `message: string`

      default: Authentication error

  - `BillingError object`

    - `type: "billing_error"`

      default: billing_error

    - `message: string`

      default: Billing error

  - `PermissionError object`

    - `type: "permission_error"`

      default: permission_error

    - `message: string`

      default: Permission denied

  - `NotFoundError object`

    - `type: "not_found_error"`

      default: not_found_error

    - `message: string`

      default: Not found

  - `RateLimitError object`

    - `type: "rate_limit_error"`

      default: rate_limit_error

    - `message: string`

      default: Rate limited

  - `GatewayTimeoutError object`

    - `type: "timeout_error"`

      default: timeout_error

    - `message: string`

      default: Request timeout

  - `APIErrorObject object`

    - `type: "api_error"`

      default: api_error

    - `message: string`

      default: Internal server error

  - `OverloadedError object`

    - `type: "overloaded_error"`

      default: overloaded_error

    - `message: string`

      default: Overloaded

### Error Response

- `ErrorResponse object`

  - `type: "error"`

    default: error

  - `error: ErrorObject`

    - `InvalidRequestError object`

      - `type: "invalid_request_error"`

        default: invalid_request_error

      - `message: string`

        default: Invalid request

    - `AuthenticationError object`

      - `type: "authentication_error"`

        default: authentication_error

      - `message: string`

        default: Authentication error

    - `BillingError object`

      - `type: "billing_error"`

        default: billing_error

      - `message: string`

        default: Billing error

    - `PermissionError object`

      - `type: "permission_error"`

        default: permission_error

      - `message: string`

        default: Permission denied

    - `NotFoundError object`

      - `type: "not_found_error"`

        default: not_found_error

      - `message: string`

        default: Not found

    - `RateLimitError object`

      - `type: "rate_limit_error"`

        default: rate_limit_error

      - `message: string`

        default: Rate limited

    - `GatewayTimeoutError object`

      - `type: "timeout_error"`

        default: timeout_error

      - `message: string`

        default: Request timeout

    - `APIErrorObject object`

      - `type: "api_error"`

        default: api_error

      - `message: string`

        default: Internal server error

    - `OverloadedError object`

      - `type: "overloaded_error"`

        default: overloaded_error

      - `message: string`

        default: Overloaded

  - `request_id: string or null`

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

  - `type: "timeout_error"`

    default: timeout_error

  - `message: string`

    default: Request timeout

### Invalid Request Error

- `InvalidRequestError object`

  - `type: "invalid_request_error"`

    default: invalid_request_error

  - `message: string`

    default: Invalid request

### Not Found Error

- `NotFoundError object`

  - `type: "not_found_error"`

    default: not_found_error

  - `message: string`

    default: Not found

### Overloaded Error

- `OverloadedError object`

  - `type: "overloaded_error"`

    default: overloaded_error

  - `message: string`

    default: Overloaded

### Permission Error

- `PermissionError object`

  - `type: "permission_error"`

    default: permission_error

  - `message: string`

    default: Permission denied

### Rate Limit Error

- `RateLimitError object`

  - `type: "rate_limit_error"`

    default: rate_limit_error

  - `message: string`

    default: Rate limited
