# Cloudflare Tunnel Configuration

> **Status:** Archived
> Historical tunnel configuration for exposing backend APIs from the `web-oldies` archive.

This folder contains a Cloudflare Tunnel configuration that maps public hostnames to internal backend service names. It is infrastructure documentation and configuration only; no Docker Compose file was found in the repository to run these services together.

## Hostname Mapping

The current `config.yml` maps:

| Hostname | Internal service |
| --- | --- |
| `electoral-api.erickbarcelos.com` | `http://electoral-system-api:5000` |
| `joystick-api.erickbarcelos.com` | `http://joystick-api:3000` |
| `rgbwallet-api.erickbarcelos.com` | `http://rgbwallet-api:3000` |
| `secret-santa-api.erickbarcelos.com` | `http://secret-santa-api:3000` |

The final ingress rule returns `404` for unmatched hostnames.

## Requirements For Reuse

- A Cloudflare account and domain zone.
- A named Cloudflare Tunnel.
- Fresh tunnel credentials.
- A service runtime that resolves the internal service names used in `config.yml`.

## Security Notes

- The config includes a concrete tunnel id and credential path. Treat it as historical deployment information.
- Do not reuse old tunnel credentials.
- Keep credentials out of Git.
- Add Cloudflare Access or another authentication layer before exposing private APIs.
- Databases should remain private and should not be mapped through this tunnel.

## Limitations

- No root `docker-compose.yml` was found.
- The documented service names imply a container network, but the repository does not currently provide the full orchestration file.
- Public hostnames may no longer be active.
