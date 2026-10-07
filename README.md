# 🎄 Christmas Countdown Timer

A simple festive countdown timer built with HTML, CSS, and vanilla JavaScript. It calculates the time remaining until Christmas Day and updates the display every second.

The countdown automatically uses December 25 of the current calendar year, so the app remains reusable from year to year without changing the source code.

## ✨ Features

- **Dynamic Christmas target:** Counts down to December 25 at midnight in the current year.
- **Live updates:** Refreshes the remaining time every second.
- **Four time units:** Displays days, hours, minutes, and seconds.
- **Completion message:** Shows “🎄 Merry Christmas! 🎄” when the countdown reaches zero.
- **Festive styling:** Uses a green-and-red gradient, a white countdown card, and Christmas-inspired colors.
- **Responsive layout:** Adjusts typography and spacing for smaller screens.
- **Automatic footer year:** Updates the copyright year dynamically.
- **No backend required:** All calculations run locally in the browser.

## 🛠️ Built with

- **HTML5** for the page structure and countdown elements
- **CSS3** for the festive theme, layout, responsive styles, and visual design
- **JavaScript (ES6+)** for date calculations, interval updates, and DOM manipulation
- **Font Awesome** for footer social media icons

## 🚀 Getting started

### Prerequisites

You only need a modern web browser. No build tools, package manager, or server-side runtime is required.

### Run locally

1. **Clone the repository**

   ```bash
   git clone <https://github.com/david-godspower/christmas-themed-countdown-timer.git>
   ```

2. **Open the project directory**

   ```bash
   cd christmas-themed-countdown-timer
   ```

3. **Launch the timer**

   Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code.

## ⏳ How it works

When the page loads, JavaScript creates a target timestamp for:

```text
December 25, <current year> at 00:00:00
```

Every second, the app calculates the difference between the target timestamp and the current time, then converts the result into:

- Days
- Hours
- Minutes
- Seconds

Once the target date has passed, all counters are set to zero and the completion message is displayed.

## 📁 Project structure

```text
christmas-themed-countdown-timer/
├── index.html    # Countdown markup and footer
├── styles.css    # Festive theme and responsive styles
├── script.js     # Countdown calculations and updates
├── LICENSE       # MIT license
└── README.md     # Project documentation
```

## 🌐 External resources

Font Awesome is loaded from cdnjs for the footer icons. An internet connection is required for those icons to appear; the countdown itself works without an external API.

## 👤 Author

**David Godspower Ajala**

- [Portfolio](https://david-godspower.github.io/david-portfolio/)
- [LinkedIn](https://www.linkedin.com/in/david-godspower-ajala/)
- [Facebook](https://facebook.com/DavidGodspowerAjalaDGA/)
- [Twitter/X](https://x.com/DavidGAjala)
- [Email](mailto:ajaladavid11@gmail.com)

## 📄 License

This project is available under the [MIT License](LICENSE).

---

**Merry Christmas!** 🎅
