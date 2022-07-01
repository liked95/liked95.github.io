| Attributes | Pure JS | jQuery |
| --- | --- | --- |
| Access | | $(selector) |
|Get set content| innerHTML, innerText, textContent, value| html(), text(), val()|
|CSS| element.style.property| \$(selector).css(property, val) OR \$(selector).css({property1: value1, property2: value2})|
|Thêm phần tử| appendChild, prepend, insertBefore, insertAdjacent|append, prepend, after, before|
|Delete|removeChild()|remove(), empty()|
|Replace|replaceChild()|replaceWith()|
|Clone|cloneNode()|clone()|
|class|add, remove, toggle, contains|addClass, removeClass, toggleClass, hasClass|
|Loop|for, forEach, ...|each(index, value)|
|Get by idx|node[0]|\$(selector)[0], \$(selector).eq(0)|
||||