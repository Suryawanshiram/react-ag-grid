# FactWise Employee Dashboard



t, AG Grid, and Tailwind CSS.
A modern, responsive employee management dashboard built with React

<img width="1843" height="931" alt="Screenshot 2026-01-28 183805" src="https://github.com/user-attachments/assets/1e5dcfe5-8039-4091-834a-3a97c08ec9fc" />

![Dashboard Preview](https://react-ag-grid-nu.vercel.app/dashboard)

<img width="1879" height="913" alt="Screenshot 2026-01-28 183726" src="https://github.com/user-attachments/assets/e4f5c330-f7b2-488d-b394-15b42e21f8b2" />


## 🚀 Live Demo

**Deployed Application:** [https://react-ag-grid-nu.vercel.app/dashboard](https://react-ag-grid-nu.vercel.app/dashboard)

**GitHub Repository:** [https://github.com/Suryawanshiram/react-ag-grid](https://github.com/Suryawanshiram/react-ag-grid)

## ✨ Features

- 📊 **Advanced Data Grid** - Powered by AG Grid with sorting, filtering, and pagination
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS
- 📈 **Dashboard Statistics** - Real-time employee metrics and KPIs
- 🔍 **Search & Filter** - Easy data discovery across all columns
- 💾 **Optimized Performance** - Handles large datasets efficiently
- 🎯 **Type-Safe** - Built with React JSX for reliability

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Grid Library:** AG Grid Community & React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite / Create React App
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suryawanshiram/react-ag-grid.git
   cd react-ag-grid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173 (or your configured port)
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.jsx    # Main layout wrapper
│   │   └── Header.jsx              # Application header
│   ├── grid/
│   │   ├── DataGrid.jsx            # Reusable AG Grid component
│   │   ├── columnDefs.js           # Grid column definitions
│   │   └── gridTheme.css           # Custom grid styling
│   └── ui/
│       ├── Card.jsx                # Base card component
│       └── StatCard.jsx            # Statistics card component
├── data/
│   └── sampleData.js               # Employee sample data (20 records)
├── pages/
│   └── Dashboard.jsx               # Main dashboard page
└── App.jsx                         # Application entry point
```

## 📊 Sample Data Structure

Each employee record contains:

```javascript
{
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  department: String,
  position: String,
  salary: Number,
  hireDate: String (ISO date),
  age: Number,
  location: String,
  performanceRating: Number (1-5),
  projectsCompleted: Number,
  isActive: Boolean,
  skills: Array<String>,
  manager: String
}
```

## 🎯 Key Features Breakdown

### Dashboard Statistics
- **Total Employees** - Complete headcount
- **Active Employees** - Currently active staff members
- **Average Rating** - Performance rating across all employees
- **Departments** - Total number of departments

### AG Grid Features
- ✅ Sortable columns
- ✅ Filterable data
- ✅ Resizable columns
- ✅ Pagination (10 records per page)
- ✅ Pinned columns
- ✅ Custom cell renderers
- ✅ Row animations
- ✅ Responsive layout

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (auto-detected for React)
   - Deploy!

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Customization

### Modify Grid Columns
Edit `src/components/grid/columnDefs.js` to customize column behavior:

```javascript
export const columnDefs = [
  {
    field: "firstName",
    headerName: "First Name",
    sortable: true,
    filter: true,
    // Add more AG Grid column properties
  },
  // ... more columns
];
```

### Update Theme Colors
Modify Tailwind configuration in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

### Add New Statistics
Edit `src/pages/Dashboard.jsx` to add more StatCards:

```jsx
<StatCard 
  label="Your Metric" 
  value={calculatedValue} 
/>
```

## 🔧 Configuration

### AG Grid Options
Default configuration in `DataGrid.jsx`:

- **Pagination:** Enabled (10 rows per page)
- **Animation:** Row animations enabled
- **Default Column Def:** Sortable, filterable, resizable

### Styling
- Base theme: `ag-theme-alpine`
- Custom overrides: `gridTheme.css`
- Tailwind utilities: Used throughout components

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Suryawanshi Ram**

- GitHub: [@Suryawanshiram](https://github.com/Suryawanshiram)
- Project: [react-ag-grid](https://github.com/Suryawanshiram/react-ag-grid)

## 🙏 Acknowledgments

- [AG Grid](https://www.ag-grid.com/) - Amazing data grid library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - JavaScript library for building UIs
- [Vercel](https://vercel.com/) - Hosting and deployment platform

## 📞 Support

If you have any questions or need help, please:

1. Check the [AG Grid Documentation](https://www.ag-grid.com/react-data-grid/)
2. Open an issue on [GitHub](https://github.com/Suryawanshiram/react-ag-grid/issues)
3. Review the sample code and comments

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

Made with ❤️ using React and AG Grid
