import './globals.css'
import { ThemeProvider } from "../app/components/theme-provider"

export const metadata = {
  title: 'Presents',
  description: 'Responsive christmas website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
