export const PARSE_SERVER_PROPERTY = {
  // Connection string for your MongoDB database
  databaseURI:
    process.env.DATABASE_URI ||
    "mongodb+srv://vinxenc:wings92@cluster0.qbqjd.mongodb.net/lime-dev?retryWrites=true&w=majority",
  appId: process.env.APP_ID || "myAppId",
  // Keep this key secret!
  masterKey: process.env.MASTER_KEY || "myMasterKey",
  // Don't forget to change to https if needed
  serverURL: process.env.SERVER_URL || "http://localhost:1337/api",
};

export const PARSE_DASHBOARD_PROPERTY = {
  apps: [
    {
      serverURL: process.env.SERVER_URL || "http://localhost:1337/api",
      appId: process.env.APP_ID || "myAppId",
      masterKey: process.env.MASTER_KEY || "myMasterKey",
      appName: process.env.APP_NAME || "Lime",
    },
  ],
  users: [
    {
      user: process.env.PARSE_DASHBOARD_USERNAME || "administrator", //   administrator
      pass:
        process.env.PARSE_DASHBOARD_PASSWORD ||
        "$2y$12$qJNCnZJbWwic65hfajh3UO7eKZyWw4gvjF6.O3TwxH7rzAbkroLA2", //  admin@lime2021
    },
  ],
  trustProxy: parseInt(process.env.PARSE_DASHBOARD_TRUST_PROXY || "1", 10),
  useEncryptedPasswords: process.env.PARSE_DASHBOARD_ENCRYPTED === "true",
};

export const PARSE_DASHBOARD_OPTIONS = {
  allowInsecureHTTP:
    process.env.PARSE_DASHBOARD_INSECURE_HTTP === "false" ? false : true,
  cookieSessionSecret:
    process.env.PARSE_DASHBOARD_COOKIE_SESSION_SECRET || "myCookieSessionSecret",
};
