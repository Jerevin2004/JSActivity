// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

const enabledList = Object.entries(settings)
  .filter(([_, value]) => value)
  .map(([key, value]) => `${key}: ${value}`);
console.log("Enabled settings:", enabledList);

const trueCount = enabledList.length;
console.log("Number of enabled settings:", trueCount);

const entries = Object.entries(settings);
console.log("Entries:", entries);

const filteredEntries = entries.filter(([_, value]) => value);
const filteredSettings = Object.fromEntries(filteredEntries);
console.log("Filtered settings object:", filteredSettings);


