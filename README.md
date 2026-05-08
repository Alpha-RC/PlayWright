# Learn PlayWright with AI

A comprehensive learning repository for understanding Playwright and JavaScript fundamentals through structured examples and documentation.

## Project Overview

This repository contains a collection of JavaScript examples and learning materials organized by chapters, focusing on:
- JavaScript basics and fundamentals
- JavaScript core concepts
- PlayWright automation testing framework
- Best practices and code optimization techniques

## Repository Structure

### Chapter 1: JavaScript Basics (`Chaptor01_JSBasics/`)

Introduction to JavaScript with fundamental concepts:

- **01_Basics.js** - Console logging, variables, mutability, and immutability
- **02_JSBasic.js** - Variable declarations, code optimization, and performance considerations
- **03_JSCommands.js** - Common JavaScript commands and syntax
- **04_HotCodeEg.js** - Hot code execution, JIT compilation, and performance optimization

### Chapter 2: JavaScript Concepts (`Day2_JSConcepts/`)

Deep dive into core JavaScript concepts:

- **01_createVariables.js** - How to create variables using var, let, and const
- **02_Identifiers.js** - Identifier rules with comprehensive examples for all declaration methods
- **03_Literals.js** - Understanding fixed values (string, number, boolean, null, undefined)
- **04_varKeyword.js** - Detailed explanation of the var keyword and variable behavior
- **05_JSReserveKeywords.js** - Complete list of JavaScript reserved keywords
- **06_Operators.js** - Arithmetic, comparison, logical, and assignment operators
- **07_Comments.js** - Code commenting best practices
- **Shortcuts.md** - Essential VS Code shortcuts for Windows (organized in tables)

## Key Topics Covered

### Variables & Data Types
- Variable declaration (var, let, const)
- Mutability vs Immutability
- Hoisting and scoping
- Undefined and null

### Identifiers
- Naming rules and conventions
- Valid identifier patterns
- Case sensitivity
- Reserved keywords

### Literals
- String literals
- Numeric literals
- Boolean literals
- Null and undefined literals

### Operators
- Arithmetic operators (+, -, *, /, %, ++, --)
- Comparison operators (==, !=, ===, !==, >, <, >=, <=)
- Logical operators (&&, ||, !)
- Assignment operators (=, +=, -=, *=, /=, %=)

### Reserved Keywords
- Control flow (if, else, for, while, etc.)
- Function & object (function, class, new, this, etc.)
- Variable declaration (var, let, const)
- Strict mode keywords
- Future reserved keywords

## VS Code Shortcuts

Quick reference for essential VS Code shortcuts on Windows:

| Category | Examples |
|---|---|
| **General** | `Ctrl+Shift+P` (Command Palette), `Ctrl+P` (Open File) |
| **Editing** | `Ctrl+/` (Comment), `Ctrl+D` (Select Next Occurrence) |
| **Navigation** | `Ctrl+G` (Go to Line), `F12` (Go to Definition) |
| **Terminal** | `Ctrl+\\` (Toggle Terminal), `Ctrl+Shift+\\` (New Terminal) |
| **Debugging** | `F5` (Start), `F9` (Breakpoint), `F10` (Step Over) |

For full details, see `Day2_JSConcepts/Shortcuts.md`

## Getting Started

### Prerequisites
- Node.js and npm installed
- VS Code or any code editor
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/Alpha-RC/PlayWright.git

# Navigate to project directory
cd LearnPlayWrightWithAI

# View files
ls
```

### Running Examples

To run JavaScript files using Node.js:

```bash
# Run a specific file
node Chaptor01_JSBasics/01_Basics.js

# Run with bytecode inspection (Node.js specific)
node --print-bytecode Chaptor01_JSBasics/02_JSBasic.js
```

## Learning Path

Follow these files in order for best learning experience:

1. Start with **Chaptor01_JSBasics/** for foundational concepts
2. Move to **Day2_JSConcepts/** for detailed concept exploration
3. Reference **Shortcuts.md** for IDE efficiency tips

## Key Concepts Explained

### Variables (var, let, const)

```javascript
var x = 10;           // Function-scoped, can be re-declared
let y = 20;           // Block-scoped, cannot be re-declared
const z = 30;         // Block-scoped, immutable
```

### Identifiers Rules

- Must start with letter (a-z, A-Z), underscore (_), or dollar sign ($)
- Can contain digits (0-9) after first character
- Cannot contain spaces
- Case-sensitive
- Cannot start with digits
- Cannot be reserved keywords

### Literals

Fixed values directly written in code:

```javascript
var string = "Hello";     // String literal
var number = 42;          // Numeric literal
var boolean = true;       // Boolean literal
var empty = null;         // Null literal
var notAssigned;          // Undefined literal
```

### Operators

```javascript
// Arithmetic
let sum = 10 + 5;         // 15

// Comparison
let isEqual = 10 == 10;   // true

// Logical
let result = true && false; // false

// Assignment
let x = 5;
x += 3;                   // x = 8
```

## Performance Optimization

The repository includes examples of:
- JIT (Just-In-Time) Compilation
- TurboFan compiler optimization techniques
- Bytecode inspection
- Performance best practices

## Tips for Learning

1. **Read comments**: Each file contains detailed comments explaining concepts
2. **Experiment**: Modify the examples and run them with Node.js
3. **Use shortcuts**: Reference `Shortcuts.md` for efficient coding
4. **Practice**: Create your own examples based on the patterns shown
5. **Understand before moving**: Ensure you understand each concept before proceeding

## File Naming Convention

- Files are numbered sequentially (01_, 02_, etc.) to indicate learning order
- Descriptive names explain the concept covered
- Follow the sequence for optimal learning

## Repository Information

- **Repository**: https://github.com/Alpha-RC/PlayWright.git
- **Branch**: main
- **Last Updated**: May 9, 2026

## Future Additions

Planned additions to the repository:
- PlayWright specific examples
- Browser automation patterns
- Test automation frameworks
- Advanced JavaScript concepts
- Real-world project examples

## License

This repository is for educational purposes.

## Author

Created as a learning resource for understanding JavaScript fundamentals and PlayWright automation.

---

## Quick Reference

### Essential Commands

```bash
# View file content
cat filename.js

# Run JavaScript file
node filename.js

# Check git status
git status

# Add changes to staging
git add .

# Commit changes
git commit -m "Your message"

# Push to repository
git push
```

### VS Code Preview

To view Markdown files in formatted view:
- `Ctrl + Shift + V` - Open Preview
- `Ctrl + K V` - Open Preview to the Side

---

Happy Learning! 🚀
