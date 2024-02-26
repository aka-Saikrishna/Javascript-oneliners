const esc = (str) => {
   return str.replace(/[&<>"']/g, (m) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[m] ));
}
const inputString = '<div class="medium"> Hi Medium.</div>';
const escapeString = esc(inputString);
console.log(escapeString);  //&lt;div class=&quot;medium&quot;&gt; Hi Medium.&lt;/div&gt;

// We use escape HTML special characters to ensure that the characters are displayed correctly in HTML and to prevent any unintended effects.

// In HTML, certain characters have special meanings and are used for formatting or other purposes. For example, the < character is used to start an HTML tag, and the > character is used to end an HTML tag. If these characters are used in a string without being escaped, they can be interpreted as HTML tags and cause rendering issues or security vulnerabilities.

// By escaping HTML special characters, we convert them into their corresponding HTML entities. For example, the < character is escaped as &lt;, the > character is escaped as &gt;, and the & character is escaped as &amp;. These escaped entities are not interpreted as HTML tags, but are displayed as the actual characters themselves.

// By escaping HTML special characters, we ensure that the content is displayed correctly and that any user-generated input is properly sanitized to prevent cross-site scripting (XSS) attacks.