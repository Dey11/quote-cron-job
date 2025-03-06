# Quote Generator API

A simple Express.js server that provides inspirational quotes. The server fetches a new random quote every hour from the [ZenQuotes API](https://zenquotes.io/) and provides it through an HTTP endpoint.

## Features

- Hourly quote updates using cron jobs
- RESTful API endpoint to fetch the current quote
- Fallback quote in case of API errors
- Environment variable configuration

## Prerequisites

- Node.js (v14 or higher recommended)
- pnpm or yarn package manager

## Installation

1. Clone this repository:

   ```
   git clone <repository-url>
   cd quote-generating-server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory (optional):
   ```
   PORT=3000
   ```

## Usage

Start the server:

```
pnpm start
```

The server will start on the port defined in your `.env` file or default to port 3000.

## API Endpoints

### GET /quote

Returns the current quote and its author.

**Response format:**

```json
{
  "quote": "The only way to do great work is to love what you do.",
  "quoteAuthor": "Steve Jobs"
}
```

## How It Works

- The server uses `node-cron` to schedule a task that fetches a new quote every hour.
- Quotes are fetched from the ZenQuotes API.
- If the external API fails, a fallback quote about the Feynman learning technique is used.

## Dependencies

- express - Web server framework
- node-cron - Task scheduler
- dotenv - Environment variable management

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
