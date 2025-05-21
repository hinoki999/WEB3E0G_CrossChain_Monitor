# Storage

This directory contains components for storing and retrieving blockchain data and analysis results.

## Overview

The storage modules provide a unified interface for persisting indexed blockchain data, pattern detection results, and analysis findings. They abstract database operations and provide efficient query capabilities.

## Features

- MongoDB integration for scalable data storage
- Time-series optimized collections for blockchain data
- Efficient querying and aggregation capabilities
- Support for pattern and analysis storage
- Data retention policy management

## Implementation

The storage system is built around MongoDB collections organized to support the different data types stored by the system:

- `blocks`: Indexed block data
- `transactions`: Transaction details
- `patterns`: Detected patterns
- `analyses`: LLM analysis results
- `alerts`: Generated security alerts

The modules handle connection management, schema enforcement, and query optimization.
