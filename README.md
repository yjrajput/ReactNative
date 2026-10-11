# React Native Professional Developer Roadmap

A practical, end-to-end checklist for learning React Native and building, testing, shipping, and maintaining production mobile apps.

**How to use this roadmap**
- Mark items with `[x]` only when you can explain the concept and use it in a project.
- Build small examples while learning; do not only watch tutorials.
- Learn the core path first, then choose specializations based on your target role.
- Prefer the official React Native documentation and current library documentation. APIs and tooling evolve.

---

## 0. Setup and Developer Workflow

- [ ] Understand the difference between React, React Native, Expo, and native Android/iOS.
- [ ] Install Node.js LTS and understand npm.
- [ ] Learn npm, npx, package scripts, dependency versions, and lockfiles.
- [ ] Choose a package manager: npm, pnpm, or Yarn.
- [ ] Install Git and a code editor (VS Code or equivalent).
- [ ] Learn terminal basics: `cd`, `ls`, `mkdir`, `rm`, environment variables, and paths.
- [ ] Create a Git repository; learn commit, branch, merge, pull, and resolving conflicts.
- [ ] Understand `.gitignore`, `.env` files, and why secrets must not be committed.
- [ ] Set up an Android emulator and/or iOS Simulator (iOS simulator requires macOS).
- [ ] Test on a physical device.
- [ ] Understand Expo Go, development builds, and bare/native project workflows.
- [ ] Learn how to read build logs, Metro errors, native logs, and stack traces.
- [ ] Learn to clear Metro cache and reinstall dependencies when appropriate.
- [ ] Understand semantic versioning and dependency updates.

## 1. JavaScript Fundamentals

- [ ] `let`, `const`, scope, hoisting, and temporal dead zone.
- [ ] Primitive types, reference types, truthy/falsy values, and type coercion.
- [ ] Strings, template literals, and common string methods.
- [ ] Arrays and methods: `map`, `filter`, `find`, `some`, `every`, `reduce`, `sort`.
- [ ] Objects, destructuring, spread/rest syntax, and optional chaining.
- [ ] Functions, arrow functions, callbacks, closures, and higher-order functions.
- [ ] Modules: `import`, `export`, default and named exports.
- [ ] Error handling with `try`, `catch`, `finally`, and custom errors.
- [ ] Promises and promise chaining.
- [ ] `async`/`await` and concurrent work with `Promise.all` / `Promise.allSettled`.
- [ ] Event loop, microtasks, and asynchronous execution basics.
- [ ] Immutability and copying nested arrays/objects safely.
- [ ] `Map`, `Set`, `Date`, `Intl`, and JSON serialization.
- [ ] Equality, reference identity, and common mutation bugs.
- [ ] Debouncing and throttling concepts.
- [ ] Write small functions and solve basic data-structure problems.

## 2. TypeScript

- [ ] Primitive, array, tuple, object, and function types.
- [ ] Type inference and explicit annotations.
- [ ] Union and intersection types.
- [ ] Literal types and discriminated unions.
- [ ] `type` vs `interface`.
- [ ] Optional properties, `readonly`, and index signatures.
- [ ] Generics and generic constraints.
- [ ] Utility types: `Partial`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`.
- [ ] Narrowing with `typeof`, `in`, equality checks, and custom type guards.
- [ ] `unknown` vs `any`; avoid unsafe `any`.
- [ ] Type assertions and non-null assertions—understand their risks.
- [ ] Typing promises, API responses, callbacks, and reusable components.
- [ ] Type React props, state, refs, and events.
- [ ] Type navigation routes and route parameters.
- [ ] Type environment/config values and validate them at runtime.
- [ ] Use strict TypeScript settings and fix type errors rather than suppressing them.

## 3. React Fundamentals

- [ ] JSX and how JSX maps to React elements.
- [ ] Functional components and component composition.
- [ ] Props, default values, and prop destructuring.
- [ ] State with `useState`.
- [ ] Event handlers and controlled inputs.
- [ ] Conditional rendering and rendering lists with stable keys.
- [ ] One-way data flow and lifting state up.
- [ ] State derived from props/state instead of duplicated state.
- [ ] Component lifecycle concepts in function components.
- [ ] `useEffect`: dependencies, cleanup, and avoiding unnecessary effects.
- [ ] `useRef` for mutable values and native element references.
- [ ] `useMemo` and `useCallback`; know when they are useful and when they are not.
- [ ] Custom hooks and rules of hooks.
- [ ] Context API and avoiding oversized global contexts.
- [ ] Error boundaries and their limitations.
- [ ] Suspense and lazy-loading concepts where supported by the stack.
- [ ] Understand reconciliation, rendering, and why components re-render.
- [ ] Avoid state mutation and stale closures.
- [ ] Forms, validation, loading, success, and error states.
- [ ] React DevTools and component profiling basics.

## 4. React Native Core

- [ ] Understand React Native's rendering model and JavaScript/native boundaries at a high level.
- [ ] Core components: `View`, `Text`, `Image`, `ScrollView`, `TextInput`, `Pressable`.
- [ ] `SafeAreaView`/safe-area library and edge-to-edge layout considerations.
- [ ] `FlatList`, `SectionList`, and when to use `ScrollView`.
- [ ] `ActivityIndicator`, `Modal`, `StatusBar`, and `RefreshControl`.
- [ ] Touch handling, press feedback, and keyboard interactions.
- [ ] Platform-specific behavior and component differences between Android and iOS.
- [ ] Platform API with `Platform.OS` and `Platform.select`.
- [ ] Platform-specific files such as `.ios.tsx` and `.android.tsx`.
- [ ] Native alerts, linking, and opening external URLs.
- [ ] App lifecycle and foreground/background behavior.
- [ ] Keyboard avoiding and keyboard dismissal.
- [ ] Dimensions, window size, orientation, and responsive layouts.
- [ ] Understand permissions and platform restrictions.
- [ ] Learn what requires a native module or development build.
- [ ] Understand Expo SDK compatibility and React Native version compatibility.

## 5. Styling, Layout, and Design Systems

- [ ] `StyleSheet.create` and inline styles.
- [ ] Flexbox: `flex`, `flexDirection`, `justifyContent`, `alignItems`, `alignSelf`, `flexWrap`.
- [ ] Dimensions, padding, margin, borders, radius, and spacing.
- [ ] Positioning: `relative`, `absolute`, and `zIndex`.
- [ ] Text styles, font weights, line height, and font scaling.
- [ ] Colors, typography, spacing, and design tokens.
- [ ] Responsive design across phone and tablet sizes.
- [ ] Safe areas, notches, status bars, and navigation bars.
- [ ] Light/dark themes and system appearance.
- [ ] Reusable buttons, inputs, cards, headers, and dialogs.
- [ ] Component variants and consistent component APIs.
- [ ] Custom fonts and image assets.
- [ ] Gradients, shadows/elevation, borders, and platform differences.
- [ ] RTL and localization-aware layouts.
- [ ] Understand limitations of CSS: React Native styling is not browser CSS.
- [ ] Evaluate styling systems (StyleSheet, NativeWind, or a UI library) and use one consistently.
- [ ] Create a small design system with accessible component defaults.

## 6. Navigation and App Architecture

- [ ] Understand stack, tab, drawer, modal, and nested navigation patterns.
- [ ] Set up React Navigation or Expo Router; understand file-based routing if using Expo Router.
- [ ] Type routes and route parameters with TypeScript.
- [ ] Navigate, go back, reset, replace, and pass route params.
- [ ] Handle deep links and universal/app links.
- [ ] Handle authentication-based routing and protected screens.
- [ ] Configure navigation headers and custom transitions.
- [ ] Handle Android hardware back behavior.
- [ ] Manage navigation state and restoration where appropriate.
- [ ] Avoid putting large or sensitive objects in route parameters.
- [ ] Organize by feature/domain rather than one huge screen folder.
- [ ] Separate UI, business logic, data access, and platform-specific code.
- [ ] Define consistent loading, empty, error, and retry states.
- [ ] Use reusable hooks and services without overengineering.
- [ ] Understand when a monolith is enough and when modularization is useful.

## 7. Forms and Validation

- [ ] Controlled and uncontrolled inputs.
- [ ] Text, email, password, numeric, multiline, and secure inputs.
- [ ] Form submission and keyboard submit behavior.
- [ ] Client-side required, format, range, and cross-field validation.
- [ ] Show useful field-level errors and accessible error messages.
- [ ] Prevent duplicate submissions.
- [ ] Handle loading, server validation errors, success, and retry.
- [ ] Learn a form library such as React Hook Form when complexity warrants it.
- [ ] Learn a schema validator such as Zod or Yup if needed.
- [ ] Password visibility toggle and secure handling.
- [ ] Focus management and moving to the first invalid field.
- [ ] Test forms with keyboard, screen reader, and small screens.

## 8. Networking and APIs

- [ ] HTTP basics: methods, status codes, headers, JSON, and content types.
- [ ] Use `fetch` or an HTTP client such as Axios.
- [ ] Build a typed API client and centralize base URL/configuration.
- [ ] Handle loading, success, empty, and error states.
- [ ] Handle network failures, timeouts, retries, and cancellation with `AbortController` where supported.
- [ ] Understand REST and basic GraphQL concepts.
- [ ] Authentication headers and bearer tokens.
- [ ] Pagination: page-based, cursor-based, and infinite scrolling.
- [ ] Search, filtering, sorting, and debouncing.
- [ ] File uploads, multipart form data, and downloads.
- [ ] Handle non-2xx responses and parse server errors safely.
- [ ] Validate untrusted API data at runtime where appropriate.
- [ ] Avoid logging tokens, passwords, and personal data.
- [ ] Configure development/staging/production API endpoints.
- [ ] Understand CORS is primarily a browser concern, not the same issue in native apps.
- [ ] Learn WebSockets or server-sent events if the product needs real-time updates.

## 9. State Management and Server State

- [ ] Decide what belongs in local component state, shared UI state, and server state.
- [ ] Lift state only as far as needed.
- [ ] Context API for suitable low-frequency shared state.
- [ ] Learn one state library: Zustand, Redux Toolkit, or another appropriate option.
- [ ] Redux concepts if using Redux: store, slices, actions, reducers, selectors, middleware.
- [ ] Keep state normalized and avoid duplicated sources of truth.
- [ ] Learn server-state tools such as TanStack Query if appropriate.
- [ ] Query keys, caching, invalidation, refetching, mutations, and optimistic updates.
- [ ] Handle stale data, background refresh, retries, and offline states.
- [ ] Persist only the state that should survive restarts.
- [ ] Avoid adding a state library before the app needs it.

## 10. Local Storage, Offline Support, and Data

- [ ] Understand in-memory state vs persistent storage.
- [ ] AsyncStorage for suitable non-sensitive key-value data.
- [ ] SecureStore/Keychain/Keystore-backed storage for secrets when appropriate.
- [ ] Never store passwords or long-lived secrets in plain-text storage.
- [ ] SQLite or another local database for structured/offline data.
- [ ] Data migrations and schema versioning.
- [ ] Offline-first basics and local/remote synchronization.
- [ ] Conflict resolution and retry queues where required.
- [ ] Cache expiration, invalidation, and storage limits.
- [ ] Handle corrupted, missing, or outdated stored data.
- [ ] Understand backup behavior and platform-specific storage rules.

## 11. Authentication and Authorization

- [ ] Understand sessions, access tokens, refresh tokens, and expiration.
- [ ] Sign-up, sign-in, sign-out, and password reset flows.
- [ ] Secure token storage.
- [ ] Refresh-token rotation and expiry handling where supported by the backend.
- [ ] Avoid refresh loops and concurrent refresh races.
- [ ] Authenticated navigation and restoring a session at launch.
- [ ] Handle revoked credentials and unauthorized responses.
- [ ] OAuth/OIDC concepts and redirect URI configuration.
- [ ] Biometric authentication only as an appropriate local gate, not a replacement for server authorization.
- [ ] Authorization must be enforced by the server, not only hidden in the UI.
- [ ] Never embed private backend secrets in the app bundle.
- [ ] Use a trusted auth provider or well-reviewed implementation where appropriate.

## 12. Expo and Native Development

- [ ] Understand Expo managed workflows and prebuild/native projects.
- [ ] Know when Expo Go is sufficient and when a development build is required.
- [ ] Configure `app.json`/`app.config.*`, app name, slug, identifiers, icons, and splash screen.
- [ ] Understand config plugins and native configuration changes.
- [ ] Use Expo SDK-compatible packages and check native compatibility.
- [ ] Learn EAS Build, EAS Submit, and EAS Update concepts if using Expo Application Services.
- [ ] Understand Android Gradle, Android manifest, permissions, and build variants at a basic level.
- [ ] Understand Xcode, signing, provisioning profiles, entitlements, and Info.plist at a basic level.
- [ ] Know when native code is needed and how to read native build errors.
- [ ] Understand TurboModules, Fabric, and the New Architecture at a high level.
- [ ] Learn native modules only when product requirements justify them.
- [ ] Understand package linking and native dependency compatibility.
- [ ] Keep development, preview, and production build profiles separate.

## 13. Device APIs and Common Features

- [ ] Camera and photo library permissions.
- [ ] Image picker, resizing, compression, and upload.
- [ ] File system access and document picking.
- [ ] Location permissions and foreground/background location constraints.
- [ ] Maps and geocoding using a suitable provider.
- [ ] Push notification permissions, tokens, and notification handling.
- [ ] Local notifications and scheduled reminders.
- [ ] Deep links and share sheets.
- [ ] Clipboard and haptics.
- [ ] Biometrics where appropriate.
- [ ] Contacts, calendar, Bluetooth, NFC, sensors, or background tasks only if needed.
- [ ] Understand platform permission prompts and denial/recovery flows.
- [ ] Test device APIs on physical devices when simulators cannot reproduce behavior.

## 14. Lists, Images, and Media

- [ ] Stable keys and correct list item rendering.
- [ ] `FlatList` props: `data`, `renderItem`, `keyExtractor`, `ListEmptyComponent`, `onEndReached`.
- [ ] Pull-to-refresh and pagination.
- [ ] Avoid nesting virtualized lists incorrectly.
- [ ] Optimize expensive rows and avoid unnecessary renders.
- [ ] Understand `getItemLayout`, windowing, and list tuning when justified.
- [ ] Image sizing, aspect ratios, placeholders, and error states.
- [ ] Remote image caching and image CDN transformations.
- [ ] Image upload progress and failure handling.
- [ ] Video/audio playback and lifecycle management if needed.
- [ ] Handle large media files and memory constraints.

## 15. Animations and Gestures

- [ ] Basic `Animated` API concepts.
- [ ] Timing, spring, interpolation, and transform animations.
- [ ] Layout and entrance/exit animation concepts.
- [ ] Gesture Handler basics.
- [ ] Reanimated shared values, animated styles, and worklets if using Reanimated.
- [ ] Gesture conflicts and nested scrolling.
- [ ] Keep animations smooth and avoid unnecessary JS-thread work.
- [ ] Respect reduced-motion accessibility preferences.
- [ ] Test animations on lower-end devices and both platforms.

## 16. Accessibility and Internationalization

- [ ] Accessible labels, roles, hints, and states.
- [ ] VoiceOver on iOS and TalkBack on Android.
- [ ] Touch target sizes and focus order.
- [ ] Text scaling and Dynamic Type/font scaling.
- [ ] Color contrast and not using color as the only signal.
- [ ] Keyboard and switch-access support where relevant.
- [ ] Reduced motion and accessible animations.
- [ ] Localization using a suitable i18n library.
- [ ] Date, number, currency, and plural formatting.
- [ ] RTL support and translated text expansion.
- [ ] Test accessibility manually, not only with automated checks.

## 17. App Lifecycle, Background Work, and Notifications

- [ ] AppState and foreground/background transitions.
- [ ] Pause/resume timers, media, and polling correctly.
- [ ] Handle network reconnection and stale screens.
- [ ] Understand OS limits on background execution.
- [ ] Background fetch/task APIs and their platform restrictions.
- [ ] Push notification registration and token refresh.
- [ ] Notification received while foregrounded, backgrounded, and terminated.
- [ ] Notification tap navigation and deep-link routing.
- [ ] Notification permission denial and settings recovery.
- [ ] Avoid relying on background tasks for guaranteed real-time execution.

## 18. Testing and Quality

- [ ] Unit tests for pure functions and business logic.
- [ ] Component tests with React Native Testing Library.
- [ ] Jest or a compatible test runner and useful test scripts.
- [ ] Test user-visible behavior rather than implementation details.
- [ ] Mock API calls, navigation, timers, and native modules appropriately.
- [ ] Test loading, empty, success, error, and offline states.
- [ ] Test form validation and duplicate submission.
- [ ] Integration tests for critical user journeys.
- [ ] End-to-end tests with a suitable tool such as Maestro or Detox.
- [ ] Test on both Android and iOS.
- [ ] Test physical devices, small screens, and slow networks.
- [ ] Accessibility testing.
- [ ] Regression tests for bugs.
- [ ] Understand coverage limits; coverage percentage alone does not guarantee quality.

## 19. Debugging and Developer Tools

- [ ] React Native DevTools and React DevTools.
- [ ] Breakpoints, stepping, watches, and source maps.
- [ ] Inspect component props/state and render performance.
- [ ] Network inspection and API debugging.
- [ ] Android Logcat and Xcode device logs.
- [ ] Read JavaScript stack traces and native crash reports.
- [ ] Reproduce bugs with clear steps and minimal examples.
- [ ] Use linting and formatting tools.
- [ ] Configure ESLint and Prettier consistently.
- [ ] Add TypeScript checks to CI.
- [ ] Learn to isolate dependency, cache, Metro, and native build problems.

## 20. Performance and Reliability

- [ ] Establish a baseline before optimizing.
- [ ] Understand JS thread, UI thread, and dropped frames.
- [ ] Avoid unnecessary state updates and expensive renders.
- [ ] Use memoization only when profiling shows value.
- [ ] Optimize lists, images, and large data transformations.
- [ ] Avoid blocking synchronous work on critical paths.
- [ ] Reduce unnecessary network requests and duplicate fetches.
- [ ] Use caching and pagination appropriately.
- [ ] Monitor memory use, image memory, and resource cleanup.
- [ ] Clean up subscriptions, listeners, timers, and animations.
- [ ] Test release builds; development mode can distort performance.
- [ ] Measure startup time, screen transitions, and interaction latency.
- [ ] Track crash-free sessions and production errors.
- [ ] Use profiling tools appropriate to the React Native version and platform.

## 21. Security and Privacy

- [ ] Never hardcode private keys, backend secrets, or credentials in the app.
- [ ] Treat all client-side checks as bypassable.
- [ ] Enforce authorization and validation on the server.
- [ ] Use HTTPS and validate backend configuration.
- [ ] Store sensitive tokens using platform-backed secure storage.
- [ ] Avoid logging tokens, passwords, payment data, or personal information.
- [ ] Validate deep-link inputs and external data.
- [ ] Understand WebView risks before loading untrusted content.
- [ ] Minimize permissions and request them only when needed.
- [ ] Use safe dependency practices and review package maintenance/security.
- [ ] Handle account deletion, consent, retention, and privacy disclosures as required.
- [ ] Understand platform privacy requirements and applicable laws.
- [ ] Consider certificate pinning only with a clear threat model and a safe rotation strategy.
- [ ] Avoid claiming client-side obfuscation makes secrets secure.

## 22. Backend and Data Concepts

- [ ] Understand client-server architecture.
- [ ] REST endpoint design and API contracts.
- [ ] Authentication vs authorization.
- [ ] Database basics: tables, relationships, indexes, and transactions.
- [ ] Pagination and filtering at the API level.
- [ ] Input validation, rate limiting, and error responses.
- [ ] Upload storage and signed upload URLs when appropriate.
- [ ] Push notification backend flow.
- [ ] Environment configuration and secret management on the server.
- [ ] Understand SQL/NoSQL trade-offs.
- [ ] Learn enough backend development to debug integration issues.
- [ ] Know that the mobile app must not connect directly to a database using privileged credentials.

## 23. Analytics, Monitoring, and Product Quality

- [ ] Define meaningful product events with privacy in mind.
- [ ] Avoid sending unnecessary personal or sensitive data to analytics.
- [ ] Crash reporting and non-fatal error reporting.
- [ ] Track API failures and app startup/performance metrics.
- [ ] Add release/environment tags to reports.
- [ ] Understand consent and opt-out requirements.
- [ ] Use feature flags or remote configuration when justified.
- [ ] Establish a process for triaging and fixing production issues.

## 24. Git, CI/CD, and Release Engineering

- [ ] Use clear commits and pull requests.
- [ ] Review code and keep changes focused.
- [ ] Configure CI for lint, type checking, and tests.
- [ ] Automate builds where useful.
- [ ] Manage development, staging, and production environments.
- [ ] Configure app identifiers, version, and build numbers.
- [ ] Android signing keys and secure credential storage.
- [ ] iOS certificates, provisioning, and App Store Connect basics.
- [ ] Create release and preview builds.
- [ ] Understand internal testing tracks and TestFlight.
- [ ] Prepare store icons, screenshots, descriptions, privacy disclosures, and age ratings.
- [ ] Handle permissions and platform policy requirements.
- [ ] Understand staged rollouts, rollback strategy, and hot updates where permitted.
- [ ] Keep source maps and release symbols available for crash diagnosis.
- [ ] Maintain release notes and a repeatable release checklist.

## 25. Professional Code Quality

- [ ] Use consistent naming and file organization.
- [ ] Keep components focused and reasonably small.
- [ ] Separate business logic from presentation when it improves clarity.
- [ ] Reuse code when reuse is real, not merely theoretical.
- [ ] Avoid giant components and deeply nested conditional JSX.
- [ ] Handle all async states and failure paths.
- [ ] Use clear types and avoid unsafe casts.
- [ ] Document non-obvious decisions, not every line.
- [ ] Refactor duplication when patterns stabilize.
- [ ] Review dependencies before adding them.
- [ ] Keep a changelog or meaningful release notes for shipped products.
- [ ] Understand trade-offs and explain architectural decisions.

## 26. Suggested Projects (Build in Order)

### Project 1 — Profile and Form App
- [ ] Controlled inputs and validation.
- [ ] Reusable input/button components.
- [ ] TypeScript props and state.
- [ ] Keyboard handling and accessibility.

### Project 2 — To-do / Notes App
- [ ] CRUD operations.
- [ ] Persistent local storage.
- [ ] Search, filtering, and empty states.
- [ ] Unit tests.

### Project 3 — Weather or Catalog App
- [ ] API client and typed responses.
- [ ] Loading, error, retry, and pull-to-refresh.
- [ ] Search and pagination.
- [ ] Image handling and caching.

### Project 4 — Authentication App
- [ ] Sign-in, sign-up, and password reset.
- [ ] Secure session storage.
- [ ] Protected navigation.
- [ ] Server error handling and tests.

### Project 5 — Offline-Ready App
- [ ] Local database.
- [ ] Offline read/write behavior.
- [ ] Sync queue and conflict strategy appropriate to the app.
- [ ] Network recovery handling.

### Project 6 — Production-Style Capstone
- [ ] Typed navigation and feature-based architecture.
- [ ] Authentication and role-aware server authorization.
- [ ] API caching, pagination, and mutations.
- [ ] Push notifications and deep links.
- [ ] Accessibility and localization.
- [ ] Unit, component, and end-to-end tests.
- [ ] Crash reporting and analytics with privacy controls.
- [ ] CI, preview builds, store-ready release, and documentation.

## 27. Interview and Problem-Solving Topics

- [ ] Explain React Native vs React for web.
- [ ] Explain props vs state and controlled vs uncontrolled inputs.
- [ ] Explain `useEffect` dependencies and cleanup.
- [ ] Explain keys and list rendering.
- [ ] Explain `useMemo` / `useCallback` and common misuse.
- [ ] Explain Context vs a state library vs server-state caching.
- [ ] Explain navigation and deep links.
- [ ] Explain token storage and refresh flows.
- [ ] Explain FlatList optimization.
- [ ] Explain JS thread vs UI thread.
- [ ] Explain Expo Go vs development builds and native projects.
- [ ] Explain unit vs component vs end-to-end testing.
- [ ] Explain debugging a production crash.
- [ ] Explain offline-first trade-offs and conflict resolution.
- [ ] Practice arrays, strings, hash maps, sets, stacks, queues, sorting, and complexity analysis.
- [ ] Be able to describe a project architecture, trade-offs, bugs, and performance improvements.

## 28. Final Production Readiness Checklist

Before calling an app production-ready, verify:

- [ ] No known critical crashes or blocking bugs.
- [ ] Release build tested on real Android and iOS devices as applicable.
- [ ] Main flows work on slow and unreliable networks.
- [ ] Loading, empty, error, retry, and offline states are handled.
- [ ] Authentication and server authorization are tested.
- [ ] Sensitive values are not logged or stored insecurely.
- [ ] Permissions are requested in context and denial is handled.
- [ ] Accessibility and text scaling have been checked.
- [ ] Deep links and notification taps behave correctly.
- [ ] Critical flows have automated tests.
- [ ] Analytics and crash reporting respect privacy.
- [ ] App icons, splash screen, versioning, and store metadata are ready.
- [ ] Signing credentials and secrets are protected.
- [ ] CI checks pass and the release can be reproduced.
- [ ] Rollback and incident-response plans are understood.
- [ ] README explains setup, scripts, architecture, environment variables, and release process.

---

## Recommended Learning Order

1. JavaScript fundamentals
2. TypeScript
3. React fundamentals
4. React Native core components and styling
5. Navigation and forms
6. Networking and API integration
7. State management and local persistence
8. Authentication and device APIs
9. Testing and debugging
10. Performance, accessibility, and security
11. CI/CD and store deployment
12. Capstone project and interview preparation

## Official References

- React Native: https://reactnative.dev/docs/getting-started
- React: https://react.dev/learn
- TypeScript: https://www.typescriptlang.org/docs/
- Expo: https://docs.expo.dev/
- React Navigation: https://reactnavigation.org/docs/getting-started
- React Native Testing Library: https://callstack.github.io/react-native-testing-library/
- TanStack Query: https://tanstack.com/query/latest/docs/framework/react/overview
- Redux Toolkit: https://redux-toolkit.js.org/
- Zustand: https://zustand.docs.pmnd.rs/
- Android Developers: https://developer.android.com/
- Apple Developer: https://developer.apple.com/documentation/

