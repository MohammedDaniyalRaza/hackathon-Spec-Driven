# Tasks: Physical AI Book

**Input**: Design documents from `C:\Users\DANIYAL\Desktop\Hackathon-practice\specs\001-physical-ai-book-spec`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for the Docusaurus site.

- [X] T001 Initialize a new Docusaurus classic project with TypeScript support in a new `book` directory using `npx create-docusaurus@latest book classic --typescript`.
- [X] T002 [P] Configure `docusaurus.config.js` with the book title "Physical AI", project tagline, and repository URL.
- [X] T003 [P] Create a custom CSS file in `src/css/custom.css` for any future styling needs.
- [X] T004 [P] Clear out the default blog and docs content that comes with the classic template.
- [X] T005 Create a main `_category_.json` file in `book/docs/` to label the sidebar category for the book.
- [X] T006 Create the main introduction page for the book at `book/docs/01-introduction.md`.

---

## Phase 2: User Story 1 - Beginner Learner Accesses Content (Priority: P1) 🎯 MVP

**Goal**: Create the basic structure and first pieces of content so a beginner can start learning.
**Independent Test**: A user can navigate to and read the first lesson of the book.

### Implementation for User Story 1

- [X] T007 [US1] Create the directory structure for Chapter 1 at `book/docs/chapter-1/`.
- [X] T008 [P] [US1] Create the category file for Chapter 1 at `book/docs/chapter-1/_category_.json` to give the chapter a title in the sidebar.
- [X] T009 [P] [US1] Create the placeholder file for Lesson 1.1 `book/docs/chapter-1/01-what-is-physical-ai.md` with its title and description.
- [X] T010 [P] [US1] Create the placeholder file for Lesson 1.2 `book/docs/chapter-1/02-hello-world-arduino.md` with its title and description.
- [X] T011 [P] [US1] Create the placeholder file for Lesson 1.3 `book/docs/chapter-1/03-sense-think-act.md` with its title and description.
- [X] T012 [US1] Configure the `sidebars.js` file to ensure the chapter and lessons appear correctly in the navigation.

**Checkpoint**: At this point, the Docusaurus site should build successfully, and a user should be able to see the structure of Chapter 1 and click into the empty lessons.

---

## Phase 3: User Story 2 - Author Creates a New Lesson (Priority: P2)

**Goal**: Populate the lessons with content and establish the authoring workflow.
**Independent Test**: An author can follow the content guidelines to successfully add and view new content.

### Implementation for User Story 2

- [X] T013 [P] [US2] Populate the content for Lesson 1.1 in `book/docs/chapter-1/01-what-is-physical-ai.md` following the format in the spec.
- [X] T014 [P] [US2] Populate the content for Lesson 1.2 in `book/docs/chapter-1/02-hello-world-arduino.md`, including a code block for the Arduino example.
- [X] T015 [P] [US2] Populate the content for Lesson 1.3 in `book/docs/chapter-1/03-sense-think-act.md` following the format in the spec.
- [X] T016 [P] [US2] Add at least one image to the `book/static/img/` directory and reference it in one of the lessons to test the asset pipeline.

**Checkpoint**: The first chapter is now fully populated with content and can be reviewed for clarity and correctness.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final review and cleanup.

- [X] T017 Review all generated content for adherence to the Content Guidelines from the spec.
- [X] T018 Validate the local Docusaurus site by running `npm run build` to ensure there are no build errors.
- [X] T019 [P] Update the `quickstart.md` with the final, verified steps for setting up the project.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before any other phase.
- **Phase 2 (User Story 1)** depends on Phase 1. It creates the skeleton of the book.
- **Phase 3 (User Story 2)** depends on Phase 2. It fills in the content of the book.
- **Phase 4 (Polish)** is the final step and depends on all other phases being complete.

User stories can be worked on sequentially as this is a content project.

---

## Phase 5: Homepage UI Overhaul

**Purpose**: To create a more engaging and modern homepage.

- [X] T020 [P] Modify `src/pages/index.tsx` to include a new hero section and a features section.
- [X] T021 [P] Add new styles to `src/css/custom.css` for the new homepage layout.

---

## Phase 6: Content Expansion

**Purpose**: To create the structure for the next 9 chapters.

- [X] T022 Create directories for chapters 2 through 10 in `book/docs/`.
- [X] T023 [P] Create a `_category_.json` file for each new chapter.
- [X] T024 [P] Create 3 placeholder lesson files for each new chapter.

---

## Phase 7: Navigation and Footer

**Purpose**: To update the site's navigation and footer.

- [X] T025 Modify the `navbar` object in `docusaurus.config.ts`.
- [X] T026 Modify the `footer` object in `docusaurus.config.ts`.

---

## Phase 8: Final Polish

**Purpose**: To ensure all changes are correctly implemented.

- [X] T027 Run `npm run build` to ensure there are no build errors.
