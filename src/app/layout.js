import { Inter } from "next/font/google";
import "@/app/styles/globals.scss";
import { Poppins } from 'next/font/google'

const Poppins_font = Poppins({
  weight:['200','300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})
export const metadata = {
  title: "Sunsideup",
  description: "An solution to a problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="nav_wrapper">
        <div className="nav_container">
        <div className="logo">
          <h3>
          SunSideUp
          </h3>
        </div>
          
          <div className={`${Poppins_font.variable} nav_items`}>
            <a href="/">Home</a>
            <a href="/docs">Docs</a>
            <a href="/todo-list">Todo list</a>
          </div>
        </div>
        </div>
        {children}</body>
    </html>
  );
}
