# Lesson 5.3: Loops

- **Purpose**: The forEach loops iterates over each item in an array, executing a callback function for each element.
- **Syntax**:
  ```javascript
  array.forEach(function(currentValue, index, arr), thisValue)
  ```
- **Parameters**:
  - `currentValue`: The current element being processed in the array.

  - `index` (Optional): The index of the current element being processed.
  - `arr` (Optional): The array the `forEach` loop is being applied to.
  - `thisValue` (Optional): A value to use as `this` when executing the callback.

## Code Snippets

### Basic Iteration
```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(item) {
  console.log(item);
});
```

### Using Index
```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(item, index) {
  console.log(index, item);
});
```

### Refactoring with forEach
Before:
```javascript
const images = document.querySelectorAll('img');
images[0].src = 'image1.jpg';
images[1].src = 'image2.jpg';
images[2].src = 'image3.jpg';
```

After:
```javascript
const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
document.querySelectorAll('img').forEach((img, index) => {
  img.src = imageSources[index];
});
```

## Best Practices

- Use `forEach` for side effects within a function.
- Remember that `forEach` doesn't stop or break - it loops through the entire selected array.

---

Happy coding! 😊