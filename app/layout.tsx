import '@/styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta verificación de Google */}
        <meta
          name="google-site-verification"
          content="9MP38v9PfS8057hhaC2JYkJFuQSkuvO5_Re4nG3UQ_g"
        />      
      </head>
      <body>{children}</body>
    </html>
  )
}
