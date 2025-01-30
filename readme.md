
```markdown
# Counter App

A simple and interactive **Counter App** built with **React**, using **RxJS** for state management and **TailwindCSS** for styling. The app allows users to increment, decrement, and reset a counter, as well as toggle auto-increment functionality.

## Features

- **Increment/Decrement**: Increase or decrease the counter by 1.
- **Reset**: Resets the counter to 0.
- **Auto-Increment**: Automatically increments the counter every 1.1 seconds when enabled. The count will not exceed 98.
- **Toggle Auto-Increment**: Toggle the auto-increment feature using a switch.

## Tech Stack

- **Frontend**: React
- **State Management**: RxJS (Reactive Programming)
- **Styling**: TailwindCSS
- **Icons**: React Icons (`LuRefreshCw` for the refresh button)

## Installation

Follow these steps to set up the app locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/counter-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd counter-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## How It Works

1. **RxJS Observables**: We use `BehaviorSubject` to manage the state of the counter and auto-increment flag. The counter value is updated in real-time when the user interacts with the app.
   
2. **State Management**:
   - **Increment**: Adds 1 to the current count, ensuring it doesn't exceed 98.
   - **Decrement**: Subtracts 1 from the current count, ensuring it doesn't go below 0.
   - **Reset**: Resets the counter back to 0.
   - **Auto-Increment**: Enables auto-incrementing every 1.1 seconds when enabled, and stops when disabled.

3. **TailwindCSS**: The app uses TailwindCSS for styling, which makes it responsive and easy to customize.

## Folder Structure

```
src/
├── components/
│   └── Counter.js          # The Counter component
├── model/
│   └── counterModel.js     # The model managing the counter state and auto-increment logic
├── intent/
│   └── counterIntent.js    # The intent layer managing user actions (increment, decrement, reset, toggle)
├── styles/
│   └── index.css           # TailwindCSS setup
└── App.js                  # Main app entry point
```

## Usage

1. **Increment**: Click the "+" button to increase the counter by 1.
2. **Decrement**: Click the "-" button to decrease the counter by 1 (count will never go below 0).
3. **Reset**: Click the refresh button (🔄) to reset the counter to 0.
4. **Toggle Auto-Increment**: Toggle the switch to enable or disable the auto-increment feature. When enabled, the counter will automatically increment by 1 every 1.1 seconds until the count reaches 98.

## Demo

![Counter App Demo](https://via.placeholder.com/600x400?text=Counter+App+Demo)



