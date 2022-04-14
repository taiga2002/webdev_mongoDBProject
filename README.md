# Week 6– Backend 1

[tapping of keyboard]

---

## Getting Started

Make a copy of this template on you or your partner's personal GitHub account.

```sh
git checkout -b development
```

Install packages:

```sh
yarn
```

Finally:

```sh
yarn start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you're using VSCode, edit your settings:

```json
"eslint.codeActionsOnSave.mode": "all"
```

and

```json
"editor.formatOnSave": true
```

---

## Project Phases

You will be building a todo list application in React using Storybook. The todo list will be connected to a MongoDB database to store user tasks and feature a functioning frontend for users to create, delete, or update their tasks. Finally, the app must use linked records; this will be implemented as subtasks.

Ignore subtasks for Phase 1 and 2 and this will be implemented in Phase 3.

**Phase 1 (recommended Thursday)** – Create and connect a basic frontend to a REST backend API + Setup MongoDB and connect API to MongoDB database

Part 1:
Frontend must have the following functionality:
- List of all current tasks and any subtasks
- Add a new task + add a new task as subtask of an existing task
- Delete a task or subtask
- Update a task or subtask

REST Backend Framework must have the following endpoints:
- /add
- /update
- /delete
- /get

Part 2:
1. Create and setup a [MongoDB database](https://www.mongodb.com/)
2. Connect your REST API to the MongoDB database for all the endpoints
  - Ex. called the /add endpoint of your API should create an object in the MongoDB database

By the end of phase 1, the following must be functional:
1. User can click a button or interact with the frontend in some way to perform an action (ex. add a new task)
2. The appropriate REST API endpoint (ex. /add) is called on the backend
3. The backend connects to MongoDB and performs the action (ex. adds an item/task)
4. Backend receives a success or failure message from MongoDb and sends it to the frontend
5. Frontend acknowledges the success or failure and notifies user of failures (and successes if you wish)

**Phase 2 (rec. Saturday)** – Implement Subtasks

Here are some considerations:
- How will you track which tasks are subtasks of which other tasks in a database?
- How will you display this hierarchy on the frontend?
- If a subtask is deleted, how do you ensure it's parent task knows? On the other hand, if the parent task is deleted, how do you know to also delete the subtask?

**Phase 3 (rec. Monday)** – Aggregation Pipelines + Secondary Indexes

Part 1: Setup an aggregation pipeline to add multiple tasks at once (1 main task + multiple sub tasks)
- You may find [this example](https://www.mongodb.com/docs/v5.0/core/aggregation-pipeline/#calculate-total-order-quantity) useful
- The frontend must also be changed to accomodate this (add a feature/button to add multiple tasks at once)

Part 2: Create a Secondary Index to allow search by Name of Task and Task ID
- Read this article if you are unfamiliar with secondary indexes: https://docs.oracle.com/cd/E17275_01/html/programmer_reference/am_second.html
- Based on how you implemented the previous phases (either identifying tasks by the name of assigning them an ID), you will now implement the other option such that the MongoDB database can be searched by either the name or by their unique ID
- Task: you will have 2 get methods in your API (/getByName and /geteByID). Both these methods will access the MongoDB database to look for the task/item using either the name index or the ID index


## Requirements

**Functional Requirements**

- The user should be able to view, add, update, and delete tasks and subtasks on the frontend
- The app can be closed and opened freely and the task list will always be updated to show the tasks in the database

**Technical Requirements**
- The app must support adding subtasks
- The app must have aggregation pipelines (in the form of adding multiple tasks at once)
- The app must have secondary indexes (access MongoDB by either ID or task Name)
- Frontend communicates with the backend through axios

## Submission

**Add** your team information to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dXsNPQxYvZUX6gAXzCfX8q1HVj6jUGKO1bn1RNyhZsI/edit?usp=sharing).

For each phase, **create** a PR from development to `main`.

**Send** the link to `#bootcamp-devs-checkoffs` on Slack for review.
