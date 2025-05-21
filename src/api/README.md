# API

This directory contains components for the RESTful API that provides access to the system's data and functionality.

## Overview

The API modules implement a secure interface for querying blockchain data, pattern detection results, and analysis insights. They support both the dashboard application and third-party integrations.

## Features

- RESTful endpoint architecture
- Authentication and authorization
- Rate limiting and request validation
- Comprehensive endpoint documentation
- Versioning support

## Implementation

The API is built using a modern web framework and provides endpoints for:

- System status and statistics
- Blockchain data querying
- Pattern detection results
- Analysis insights
- Alert management
- Configuration updates

All endpoints require authentication using API keys, with role-based access control for sensitive operations.

## Endpoints

The API provides the following primary endpoints:

```
GET /api/v1/status              # System status and statistics
GET /api/v1/blocks              # Query indexed blocks
GET /api/v1/transactions        # Query transactions
GET /api/v1/patterns            # Query detected patterns
GET /api/v1/analyses            # Query analysis results
GET /api/v1/alerts              # Query security alerts
POST /api/v1/analyze            # Request analysis of specific transactions
```

Additional documentation is available through the API's Swagger interface.
