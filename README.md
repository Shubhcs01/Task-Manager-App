## Task Manager App

Build a Task Management App (within 4 hrs.) with the following core functionalities:
1. Add, Edit, Delete, and Mark Tasks as Completed
2. Sort tasks dynamically by priority (high, medium, low).
3. Server-side rendering (SSR) using Next.js for initial task loading.
4. Implemented basic responsive design using CSS.
   
App Features:
1. **React & Next.js**:
- Built a simple Next.js app that displays a list of tasks.
- Used Next.js server-side rendering (getServerSideProps) to load the initial list of tasks from
an array in the code.
2. **Task Features**:
- **Add a new task**: Each task should have a title, description, and priority (high, medium, low).
- **Edit a task**: Allow editing of the task title, description, and priority.
- **Mark task as completed**: Toggle between completed and pending states.
- **Delete task**: Remove tasks from the list.
- **Sort tasks**: Dynamically sort tasks by priority with high priority tasks at the top. Use any
simple data structure
3. **User Interface**:
- Used basic HTML/CSS to style the task list. Ensured it is responsive and tasks are clearly
distinguished based on their priority (e.g., color-coding tasks: red for high, yellow for medium,
green for low).
- Display completed tasks at the bottom of the list.
4. **TODO**:
- Implement local storage to persist tasks between page reloads.
- Add a simple search bar to filter tasks by title or description.

## How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
