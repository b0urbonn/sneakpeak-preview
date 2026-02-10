# CTF Write-Up: Level 1 - Sneak Peak

## Challenge Information
- **Title**: Project Hades: Sneak Peak
- **Category**: Web Exploitation
- **Difficulty**: Easy

## Objective
Find the hidden flag to access the preview.

## Solution

### Step 1: Inspect the Page
The page says "Checking preview permissions..." but nothing happens. A common place for web applications to store permissions or tokens is in **Cookies** or **Local Storage**.

### Step 2: Open Developer Tools
1. Right-click anywhere on the page and select **Inspect**.
2. Go to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox).
   *(If you don't see it, click the `>>` icon in the top web inspector bar)*.

### Step 3: Check Cookies
1. In the left sidebar, expand **Cookies**.
2. Select the site domain.
3. You will see a cookie named `sneak_peak_preview`.
4. The value of this cookie is the flag:
   `cicsctf{hidden_in_plain_sight_preview}`

### Step 4: Win
Copy the flag!
