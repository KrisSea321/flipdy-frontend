import "../globals.css"
import { Providers } from "@/redux/Provider";

export const metadata = {
    title: 'Flipdy',
    description: 'We'll connect you to the right kind of funding.',
}




export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body>
                <Providers>

                    {children}
                </Providers>
            </body>
        </html>
    )
}
