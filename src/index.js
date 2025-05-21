/**
 * Web3EOG Cross-Chain Security Monitor
 * Main entry point
 */

require('dotenv').config();
const { startIndexers } = require('./indexers');
const { startAnalysisService } = require('./analysis');
const { startAPIServer } = require('./api');
const { startDashboard } = require('./dashboard');
const logger = require('./utils/logger');

// Configuration
const config = {
  environment: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
  mongodb: {
    uri: process.env.MONGODB_URI,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS
  }
};

// Initialize and start all services
async function startServices() {
  try {
    logger.info('Starting Web3EOG Cross-Chain Security Monitor...');
    logger.info(`Environment: ${config.environment}`);
    
    // Start the indexers for all configured chains
    await startIndexers();
    
    // Start the analysis service
    await startAnalysisService();
    
    // Start the API server
    await startAPIServer();
    
    // Start the dashboard (if enabled)
    if (process.env.ENABLE_DASHBOARD === 'true') {
      await startDashboard();
    }
    
    logger.info('All services started successfully');
  } catch (error) {
    logger.error('Failed to start services', { error: error.message });
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGINT', () => {
  logger.info('Received SIGINT signal, shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('Received SIGTERM signal, shutting down...');
  process.exit(0);
});

// Start services
startServices();
