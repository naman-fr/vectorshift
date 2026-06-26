- `[x]` **Setup & Exploration**
  - `[x]` Clone repository
  - `[x]` Install frontend dependencies
  - `[x]` Review existing codebase

- `[x]` **Part 1 & 2: Abstraction & Styling**
  - `[x]` Create `BaseNode` abstraction component
  - `[x]` Refactor `InputNode`, `OutputNode`, `TextNode`, `LLMNode`
  - `[x]` Add 5 new nodes (`ApiNode`, `DelayNode`, `JsonNode`, `MergeNode`, `EmailNode`)
  - `[x]` Implement robust UI/UX (CSS modules / global CSS)

- `[x]` **Part 3: Text Node Logic**
  - `[x]` Change `input` to `textarea` in `TextNode`
  - `[x]` Implement auto-resize logic
  - `[x]` Implement variable parsing `{{var}}`
  - `[x]` Dynamically generate handles for variables

- `[x]` **Part 4: Backend Integration**
  - `[x]` Refactor `/pipelines/parse` from `GET` to `POST`
  - `[x]` Add Pydantic validation (nodes, edges)
  - `[x]` Implement Kahn's Algorithm / DFS for DAG validation
  - `[x]` Extract API layer in frontend (`services/api.js`)
  - `[x]` Wire `submit.js` to API and display alert

- `[x]` **Refinements**
  - `[x]` Fix `100wv` to `100vw` in `ui.js`
  - `[x]` Ensure code is clean, DRY, and adheres to the guidelines
  - `[x]` Write `walkthrough.md`
