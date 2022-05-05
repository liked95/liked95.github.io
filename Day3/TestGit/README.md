### For the GOd sake

#### Create a new file named **index.html**

Code like this

```javascript
const button = document.querySelector('button');
const table = document.querySelector('table');
button.addEventListener('click', () => {
    let para = document.querySelector('p');
    if (para.className !== 'active'){
        para.textContent = 'Sorry for clicking my parent!'
        para.classList.toggle('active');
        table.classList.toggle('show');

    } else {
        para.textContent = 'Click my parent(button) to make me green';
        para.classList.toggle('active');
        table.classList.toggle('show');
    }
});
```

A bit css for colorization
```css
body{
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    background-color: azure;
    width: 50%;
    margin: auto;
}

.active{
    background-color: green;
    color:white;
}

p
{
    background-color: brown;
    color: blue;
}

table
{
    visibility: hidden;
}

.show
{
    visibility: visible;
}

```

