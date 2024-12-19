#### **Package Name**

`react-success-modal`

---

#### **Description**

A customizable and lightweight React component to display success messages. Perfect for modern React applications with support for custom styling.

---

#### **Installation**

To install the package, run:

```bash
npm install react-success-modal
```

Or using Yarn:

```bash
yarn add react-success-modal
```

---

#### **Usage Example**

Here’s a quick example to get started:

```jsx
import React, { useState } from 'react'
import SuccessModal from 'react-success-modal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <SuccessModal
        message='Operation completed successfully!'
        isOpen={isModalOpen}
        onClose={closeModal}
        className='custom-modal'
      />
    </div>
  )
}

export default App
```

---

#### **Props**

| Prop Name   | Type       | Required | Default | Description                                   |
| ----------- | ---------- | -------- | ------- | --------------------------------------------- |
| `message`   | `string`   | ✅       | -       | The text to display inside the modal.         |
| `isOpen`    | `boolean`  | ✅       | -       | Determines if the modal is visible or not.    |
| `onClose`   | `function` | ✅       | -       | Function to execute when the modal is closed. |
| `className` | `string`   | ❌       | -       | Optional class for adding custom styles.      |

---

#### **Styling**

The component uses default styles, but you can customize it using the `className` prop.

Here’s an example CSS snippet for custom styling:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  position: relative;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.custom-modal .modal-content {
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```

---

#### **License**

This package is released under the [MIT License](https://opensource.org/licenses/MIT).
