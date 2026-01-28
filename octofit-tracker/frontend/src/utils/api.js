/**
 * API configuration utility for OctoFit Tracker
 * Constructs the correct base URL based on environment (localhost or codespace)
 */

export const getApiBaseUrl = () => {
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  
  if (codespaceName) {
    // For codespace environment, use HTTPS
    const baseUrl = `https://${codespaceName}-8000.app.github.dev`;
    console.log('[API] Using Codespace URL:', baseUrl);
    return baseUrl;
  } else {
    // For local development, use HTTP on localhost
    const baseUrl = 'http://localhost:8000';
    console.log('[API] Using localhost URL:', baseUrl);
    return baseUrl;
  }
};

/**
 * Fetch data from API endpoint with error handling
 * Supports both paginated responses (.results) and plain arrays
 * @param {string} endpoint - API endpoint (e.g., '/api/users/')
 * @returns {Promise<Array>} Array of data
 */
export const fetchFromApi = async (endpoint) => {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    
    console.log(`[API] Fetching from: ${url}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Handle both paginated and plain array responses
    const results = data.results || (Array.isArray(data) ? data : []);
    
    console.log(`[API] Response from ${endpoint}:`, data);
    console.log(`[API] Extracted data (${results.length} items):`, results);
    
    return results;
  } catch (error) {
    console.error(`[API] Error fetching from ${endpoint}:`, error);
    throw error;
  }
};
