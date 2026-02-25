# JavaScript Bug Fix Demo

A documented collection of real JavaScript bugs 
commonly found in websites — each with the broken 
code, root cause analysis, and working fix.

---

## Bugs Fixed In This Repo

### Bug 1 — Button Click Not Working
**Error:** Cannot read properties of null  
**Cause:** Script executed before DOM finished 
loading, getElementById returned null  
**Fix:** Wrapped in DOMContentLoaded listener

---

### Bug 2 — Form Validation Not Blocking Submit
**Symptom:** Form submits even when fields are empty  
**Cause:** Function always returned true regardless 
of validation result  
**Fix:** Return false when validation fails to 
block form submission

---

### Bug 3 — Counter Not Updating on Screen
**Symptom:** Click counter never changes visually  
**Cause:** Used == (comparison) instead of = 
(assignment) on innerHTML  
**Fix:** Changed == to = for correct assignment

---

### Bug 4 — Dropdown Menu Not Toggling
**Symptom:** Menu only hides, never shows again  
**Cause:** if condition used = (assignment) instead 
of === (comparison), always evaluated as true  
**Fix:** Changed = to === in if condition

---

### Bug 5 — Price Calculator Returning NaN
**Symptom:** Total shows NaN instead of number  
**Cause:** .value returns strings, multiplying 
two strings produces NaN  
**Fix:** Wrapped values in parseFloat() and 
parseInt() before calculation

---

### Bug 6 — Scroll To Top Not Working on All Browsers
**Symptom:** Scroll button works in some browsers 
but not others  
**Cause:** Only reset scrollTop on body, not on 
documentElement (required for Chrome/Firefox)  
**Fix:** Reset both body and documentElement scrollTop

---

### Bug 7 — Image Slider Throwing ReferenceError
**Symptom:** Slider crashes immediately on load  
**Cause:** slides variable used before being 
defined or assigned  
**Fix:** Defined slides using 
getElementsByClassName before use

---

### Bug 8 — localStorage Not Saving Theme
**Symptom:** User theme preference not persisting  
**Cause:** Used localStorage.setItem = () treating 
it as property assignment instead of method call  
**Fix:** Corrected to localStorage.setItem() 
as proper function call

---

## Live Demo

Open demo.html in your browser to see the 
fixed versions working in real time.

---

## Skills Demonstrated
- JavaScript DOM debugging
- Event listener troubleshooting
- Type coercion and parsing errors
- Browser compatibility fixes
- localStorage API correct usage
- Form validation logic

---

## Contact
Available for JavaScript bug fixing on 
Fiverr and Upwork.
