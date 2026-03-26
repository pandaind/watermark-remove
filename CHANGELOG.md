# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] - 2026-03-26

### Added
- Interactive ROI selector with 8-point Konva Transformer for precise watermark area selection
- Four removal engines: Smart Fill (inpaint/TELEA), Blur (Gaussian), Solid Color, Clone Stamp
- Frame-accurate preview mode (3-second clip) before full export
- Multi-core parallel frame processing via Python `multiprocessing.Pool`
- Real-time progress bar with percentage via IPC stdout protocol
- Cancel in-progress job (SIGTERM + pool.terminate) with immediate UI feedback
- Audio preservation — original audio track muxed back without re-encoding
- Automatic temp-file cleanup on completion, cancellation, or error
- Cross-platform desktop app: macOS (.dmg), Windows (.exe NSIS), Linux (.AppImage)
- Electron + React + TypeScript renderer with Vite build toolchain
- Python backend with OpenCV, ffmpeg-python, and pydantic validation
- Full unit test suite: 11 pytest tests (backend) + 15 vitest tests (renderer)
- Playwright E2E test suite: 18 automated tests covering IPC bridge, sidebar, and real pipeline
- Automated screenshot generation using real sample video

### Notes
- FFmpeg must be installed on the end-user machine (not bundled)
- Unsigned builds will show Gatekeeper / SmartScreen warnings — see RELEASING.md §7
