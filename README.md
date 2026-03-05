# 💍 Premium Wedding Invitation Card

An elegant, interactive wedding invitation webpage built with Next.js, React, Tailwind CSS, and Framer Motion. Features a beautiful envelope opening animation that reveals the wedding details.

## ✨ Features

- **Envelope Opening Animation**: Four triangular corners that smoothly animate outward like an opening envelope
- **Wax Seal Button**: Interactive circular button with glow effects and pulse animation
- **Smooth Transitions**: Luxury animations powered by Framer Motion
- **Elegant Typography**: Beautiful serif fonts (Playfair Display) for a premium feel
- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Modern Tech Stack**: Built with Next.js 15 App Router, TypeScript, and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

You can easily customize the wedding details by editing `/view/WeddingInvitation.tsx`:

- **Couple Names**: Line 208 - Change "Emma & James"
- **Wedding Date**: Lines 223-228 - Update the date
- **Wedding Time**: Line 230 - Change the time
- **Location Details**: Lines 235-242 - Update venue information
- **Message**: Line 253 - Customize the invitation message
- **Colors**: Edit `tailwind.config.ts` to change color scheme

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── view/
│   └── WeddingInvitation.tsx  # Main invitation component
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## 🎯 Key Animations

1. **Envelope Corners**: Animate outward with rotation on click
2. **Wax Seal**: Scales down and fades out
3. **Content Reveal**: Fades in and slides up with staggered delays
4. **Decorative Elements**: Scale and rotate animations for ornaments

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 11** - Animation library
- **Google Fonts** - Playfair Display & Montserrat

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

This project is open source and available for personal and commercial use.

## 🎉 Demo

Click the golden wax seal in the center to open the invitation and reveal the wedding details!

