export const mockSkills = [
  {
    id: "sk-1",
    name: "Web Scraper Bot",
    description: "Extracts data from specified URLs and formats it into JSON. Features rate limiting and proxy rotation.",
    status: "active",
    author: "OpenClaw Team",
  },
  {
    id: "sk-2",
    name: "Data Analyzer",
    description: "Takes raw CSV data and generates statistical analysis and summary reports.",
    status: "active",
    author: "Community",
  },
  {
    id: "sk-3",
    name: "Auto Responder",
    description: "Automatically replies to support tickets based on semantic understanding of the query.",
    status: "inactive",
    author: "OpenClaw Team",
  }
];

export const mockWorkflows = [
  {
    id: "wf-1",
    name: "Daily Web Scraping Flow",
    markdown: `
# Initialize Run
Sets up the environment and loads configuration.

## Start Browser
Launches a headless browser instance.

### Navigate to Target
Goes to the specified URL.

#### Extract Content
Pulls the required text from the DOM.

##### Save Data
Saves the extracted content to the database.

###### Complete
Finishes the workflow and cleans up.
    `,
    currentStepIndex: 3 // E.g., currently at "Extract Content"
  },
  {
    id: "wf-2",
    name: "Customer Support Triage",
    markdown: `
# Receive Ticket
Webhook triggered by new Zendesk ticket.

## Analyze Sentiment
Runs sentiment analysis on the ticket text.

### Categorize Issue
Determines the department (Billing, Tech, Sales).

#### Assign Agent
Routes to the appropriate agent.
    `,
    currentStepIndex: 1
  }
];
