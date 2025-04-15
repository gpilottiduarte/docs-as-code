# Critical Patch 3.33-1

- **Version Patch:** v3.33-1
- **Patch release date:** 11-Nov-24

This document provides details about the fixes and improvements included in the latest update to [3.33](/v4/docs/changelog).

* * *

## Segura API

### BugFix

| Item  | Descrição |
|--- | ---|
| 4522 | Fixed an issue that caused the value of the `identifier` to update automatically when updating a credential with `username`, `hostname`, and `ip` values. Now, the `identifier` will only be updated if the user explicitly enters a new value. |