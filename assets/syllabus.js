window.REA_SYLLABUS = [
  { title: "The tool", sub: "From an empty terminal to a feature traced with evidence", lessons: [
    { n: "01", t: "What REA actually is", d: "An MCP server and a CLI, the ask-inspect-answer loop, and why every claim comes back tagged." },
    { n: "02", t: "Install", d: "Node versions that work, one setup command, doctor, and the restart that trips everyone." },
    { n: "03", t: "Engines", d: "Ghidra, Hopper, IDA, JADX, and the two target types that need none of them." },
    { n: "04", t: "House rules", d: "The claude-md that keeps an agent citing addresses instead of guessing in paragraph four." }
  ]},
  { title: "The router", sub: "Twenty target types, one entry tool each", lessons: [
    { n: "05", t: "Electron and JavaScript", d: "Find app.asar, read modules and IPC boundaries, trace a click with no disassembler." },
    { n: "06", t: ".NET and Unity games", d: "Managed artifacts open with nothing installed, which is why a bought game is readable in half an hour." },
    { n: "07", t: "Native binaries", d: "Mach-O, ELF and PE: opening a database, segments, symbols and what stripping costs you." },
    { n: "08", t: "Phones, sites and chains", d: "APK permissions and tracking SDKs, HAR captures, EVM bytecode, firmware and WASM." }
  ]},
  { title: "Reading", sub: "Recon, decompile, annotate, trace", lessons: [
    { n: "09", t: "Recon", d: "Overview, strings and the cross-reference sort that tells you which function is the architecture." },
    { n: "10", t: "Decompile", d: "One function into pseudocode, by address or by name, saved as JSON you can reuse." },
    { n: "11", t: "Annotate", d: "Rename every value, name the pattern, flag the bugs, and pick the right effort level." },
    { n: "12", t: "Trace a feature", d: "Follow one feature across layers and keep an evidence ledger of observation, inference and unknown." }
  ]},
  { title: "Hard mode and scale", sub: "Obfuscation, swarms and the workflows nobody opens", lessons: [
    { n: "13", t: "Obfuscation", d: "Five techniques, what each looks like in code, and the budget rule that stops a wasted weekend." },
    { n: "14", t: "The swarm", d: "A controller and workers so five hundred functions keep one name per struct." },
    { n: "15", t: "Guided workflows", d: "investigate_feature, compare_application_versions, verify_reconstruction, trace_crash." },
    { n: "16", t: "Runtime", d: "Bounded process capture, and the line between what the file says and what the program does." }
  ]},
  { title: "Rebuild and ship", sub: "Clean room, parity, release", lessons: [
    { n: "17", t: "Clean room", d: "Four rules and the wall between the analyst context and the builder context." },
    { n: "18", t: "The spec", d: "Behavior only: interfaces, data model, file formats, test cases, zero addresses." },
    { n: "19", t: "Parity", d: "Fifty inputs through both builds, match rate and a severity for every divergence." },
    { n: "20", t: "Ship it", d: "Release the rebuild as an MCP server, and the legal line between learning and the thing that gets you sued." }
  ]}
];
