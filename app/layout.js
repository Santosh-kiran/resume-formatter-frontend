export const metadata = {
  title: "Resume Formatter",
  description: "Resume Formatting Application"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
