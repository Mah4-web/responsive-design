# 🌿 Essence of Serenity

**Essence of Serenity** is a responsive image gallery developed using **HTML, CSS, and JavaScript**. The gallery offers a smooth and interactive viewing experience across various devices—including mobile phones, tablets, and desktops—while prioritizing accessibility, aesthetic simplicity, and performance.

This project demonstrates careful attention to responsive design principles, dynamic DOM manipulation, user experience considerations, visual styling and accessiblility, all aimed at providing users with an intuitive and tranquil browsing environment.

## ✨Features:

- 🔄**Dynamic Image Gallery**
  Thumbnails are generated dynamically from a JavaScript array, facilitating easy content updates and scalability.

- **⭐Active Thumbnail Highlighting**  
  The currently viewed image is visually distinguished among thumbnails to enhance user orientation.

- **Intuitive Navigation**  
  Users can navigate through images via:

  - Clicking directly on the images
  - Next and Previous buttons
  - Keyboard arrow keys (< / >)
  - Swipe gestures on touch-enabled devices

- **📱Responsive Design**  
  The layout adapts seamlessly to various screen sizes via CSS media queries, ensuring a consistent experience across devices.

- **🫶Accessibility**  
  The interface incorporates ARIA attributes, screen reader-friendly content, and keyboard navigation to ensure inclusivity.

## 🧠 What I Learned:

### 🛠 Technical Skills & Concepts

This project helped me apply and deepen my understanding of several development concepts:

#### 📚 Core JavaScript Concepts

* **Arrays**
  Used to store and manage image data objects for dynamic rendering.

* **JavaScript Objects**
  Each image is represented as an object with properties like `image`, `thumbnail`, `altText`, `titleText`, and `titleColor`.

* **Functions for Image Creation**
  Implemented reusable functions to build thumbnails and render large images dynamically.

* **The `updateLargeImage()` Function (Event Handler)**
  A core function responsible for updating image content, managing active states, applying titles, and scrolling the thumbnail container appropriately.

#### 🧩 DOM Manipulation & Events

* **HTML DOM Element Handling**
  Practiced dynamic DOM creation and updates using methods such as `appendChild()` and `setAttribute()` (referenced from MDN).

* **Event Handling**
  Used `addEventListener()` to respond to various user actions including clicks, key presses, and touch gestures for smooth interactivity.

#### 🎨 Responsive Design

* **CSS Media Queries**
  Implemented adaptive layouts for mobile, tablet, and desktop screens, ensuring optimal usability across devices.

### ♿ Accessibility & Performance Testing

To ensure a smooth and inclusive user experience, I conducted audits using:

#### ✅ Chrome Lighthouse Audit

* **Accessibility**: Ensured high contrast ratios, meaningful alt text for all images, and proper use of semantic HTML.
* **Performance**: Optimized DOM rendering and image loading with dynamic rendering strategies.
* **Best Practices**: Passed checks for responsiveness, button accessibility, and touch targets.

#### ✅ Safari Accessibility Report

* Verified:

  * **Keyboard Navigation Support** (Thumbnails and buttons are fully navigable via keyboard)
  * **ARIA Attributes** (Live region used for screen reader updates)
  * **Alt Text** for all images to support screen readers
  * Proper **landmark roles** and structure

> These tests helped validate that the gallery is **usable by assistive technologies** and delivers a **responsive experience** across devices and browsers.

### 🎨 Design & User Experience

* Structured a layout that balances clarity, responsiveness, and aesthetics
* Focused on a clean and image-focused interface with intuitive navigation
* Applied calming theme colors reflecting the project's title: **Essence of Serenity**


##  Challenges Faced:

- **Thumbnail Container Placement**  
  Initial attempts with header and sidebar layouts were unsuitable for smaller screens. Achieving a responsive and visually appealing placement required multiple iterations. Title was interepting with the thumbnails.

- **Alignment & Spacing**  
  Ensuring the thumbnail toggle button aligned correctly and responded properly when thumbnails were shown or hidden involved addressing layout shifts across different devices.

- **Consistency in Naming**  
  Debugging mismatched, class names, and typos reinforced the importance of maintaining consistent naming conventions.

- **Styling Uniformity**  
  Achieving consistent padding, spacing, and responsiveness across varied breakpoints was challenging but ultimately rewarding.

## ✅ Goals Achieved

- Responsive layout accommodating mobile and desktop displays
- Dynamic generation of image thumbnails via JavaScript
- Visual highlight for the active thumbnail
- Navigation functionality through click, keyboard arrows, and touch gestures
- Accessibility features including labels and screen reader support

##  Areas for Future Improvement

- Incorporate animations for thumbnail appearance and disappearance
- Implement smooth transitions for image title updates
- Enhance theme customization options to reflect different moods or themes
- Add lazy loading for images to improve performance with large image collections

## 🎯 Conclusion:

This project has been an excellent opportunity to combine technical skills with design considerations. Despite initial layout challenges, I developed a clean, functional, and responsive image gallery. I am particularly pleased with the display quality of large images and look forward to enhancing the project with animations and additional interactive features in the future.

### 📚 Resources & Concepts Used

- [MDN: JavaScript Arrays Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [W3Schools: HTML DOM `appendChild()`](https://www.w3schools.com/jsref/met_node_appendchild.asp)
- [W3Schools: HTML DOM `setAttribute()`](https://www.w3schools.com/jsref/met_element_setattribute.asp)
- [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN: if...else Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [CheatSheet](https://www.markdownguide.org/cheat-sheet/)
- [Emojis](https://emojipedia.org)
- [Colour Contrast](https://color.adobe.com/create/color-contrast-analyzer)
- [Paraphrasing](https://www.perfectessaywriter.ai/paraphrasing-tool)
- [Git Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)