# 🌟 Hackathon Day 4: Bandage Marketplace Template  
**Theme:** Building Dynamic Frontend Components  

---

## 🎯 Objective  
On Day 4, students will focus on designing and developing **dynamic frontend components** to display marketplace data fetched from **Sanity CMS** or APIs. This task emphasizes creating **modular, reusable components** while learning real-world practices for building scalable and responsive web applications.  

---

## 🏆 Key Learning Outcomes  
- ✅ Build **dynamic frontend components** that fetch and display data from Sanity CMS or APIs.  
- ✅ Implement **reusable and modular components** for easier maintenance and scalability.  
- ✅ Apply **state management techniques** to manage data flow across components.  
- ✅ Focus on **responsive design** and implement **UX/UI best practices**.  
- ✅ Prepare for **real-world client projects** by replicating professional workflows.  

---

## 🧩 Key Components to Build  

### 1. **Product Listing Component** 🛍️  
- Dynamically display a list of products fetched from the CMS or API.  
- Include features like **pagination** or **infinite scrolling** for large datasets.  

#### **TypeScript Interface**  
```typescript
interface Cards {
  image: string;
  heading: string;
  alt: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  detailsLink: string;
}
```

---

### 2. **Product Detail Component** 🛒  
- Display detailed product information, including:  
  - **Description** 📝  
  - **Available Sizes** 📏  
  - **Colors** 🎨  
  - **Ratings and Reviews** ⭐  
  - **Stock Availability** 📦  

#### **TypeScript Interface**  
```typescript
interface IProducts {
  id: string;
  heading: string;
  subheading: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: {
    originalPrice: string;
    discountedPrice: string;
  };
  description: string;
  size: string[];
  color: string[];
  rating: number;
  reviews: number;
  stock: number;
}
```

---

### 3. **Category Component** 📂  
- Showcase product categories dynamically.  
- Allow users to **filter** and **sort** products by category.  

---

### 4. **Cart Component** 🛒  
- Manage items added to the cart with:  
  - **Quantity Controls** ➕➖  
  - **Total Price Calculation** 💲  

---

### 5. **Wishlist Component** 💖  
- Enable users to save products for later.  
- Allow adding/removing items from the wishlist.  

---

### 6. **User Profile Component** 👤  
- Display user information such as:  
  - **Name**  
  - **Email** 📧  
  - **Profile Picture** 🖼️  
  - **Order History** 📦  

---

### 8. **Reviews and Ratings Component** ⭐  
- Allow users to leave reviews and ratings for products.  
- Display:  
  - **Average Ratings**  
  - **Review Count**  

---

### 9. **Related Products Component** 🔗  
- Suggest similar or complementary products dynamically.  

---

### 10. **Header Component** 🔝  
- Create a responsive navigation bar with:  
  - Links to key pages (Home, Shop, Profile, etc.).  
  - **User Account Dropdown** 👤  

---

### 11. **Footer Component** 📢  
- Add links to pages like:  
  - **About Us**  
  - **Privacy Policy**  
  - **Contact Us** 📞  
- Include:  
  - **Social Media Icons** 📱  
  - **Newsletter Subscription Form** ✉️  

---

## 🛠️ Tools and Technologies  
- **Frontend Framework:** ReactJS NEXTJS  
- **State Management:** Context API.  
- **CMS/Backend:** Sanity CMS or APIs.  
- **Styling:** CSS, Tailwind CSS.  
- **Responsive Design:** Flexbox, Grid, and Media Queries.  

---

## 📝 Task Notes  
1. Write clean, modular, and reusable code.  
2. Test components for scalability and responsiveness.  
3. Follow professional workflows and best practices.  

---


**Happy Coding! 🚀**



### 📘Day 4: Building Dynamic Frontend Components for Bandage Marketplace
[**View Detailed Day 3 Document (PDF)**](---)
