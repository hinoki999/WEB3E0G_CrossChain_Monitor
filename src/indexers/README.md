# Indexers

This directory contains components that connect to blockchain nodes and index block and transaction data.

## Overview

The indexer modules are responsible for retrieving block data from various blockchain networks and storing it in a structured format for further analysis. Each supported blockchain has its own specialized indexer implementation.

## Features

- High-performance block data retrieval
- Efficient transaction parsing and storage
- Support for multiple blockchain networks
- Handling of chain reorganizations
- Resume capability after service interruptions

## Implementation

The indexers use blockchain node JSON-RPC APIs to fetch block data. They process this data to extract:

- Transaction details (hash, from, to, value, etc.)
- Contract interactions (method calls, parameters)
- Event logs
- Gas usage statistics

This data is then stored in the database for pattern detection and analysis.
